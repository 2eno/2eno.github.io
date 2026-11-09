// Prüft den Build-Output in dist/:
//  - Pflichtdateien vorhanden (CNAME, .well-known/assetlinks.json, sitemap.xml, robots.txt, 404.html)
//  - CNAME-Inhalt korrekt, assetlinks.json ist gültiges JSON
//  - alle internen Links/Bilder (href/src/srcset) zeigen auf existierende Dateien
//  - alle URLs in der sitemap.xml existieren
//  - keine externen Ressourcen (Skripte, Styles, Fonts, Bilder) eingebunden
// Aufruf: npm run check:dist   (nach npm run build)
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://2eno.dev';
const errors = [];

// Projekt-Landingpages aus anderen Repos (z. B. url: /<reponame>/) liegen nicht in dist/,
// existieren aber live unter 2eno.dev/<reponame>/ → nicht als tote Links melden.
const externalProjectPaths = new Set();
const projectsDir = new URL('../src/content/projects/', import.meta.url).pathname;
for (const f of await readdir(projectsDir).catch(() => [])) {
  const m = (await readFile(join(projectsDir, f), 'utf8')).match(/^url:\s*['"]?(\/[^'"\s]*)/m);
  if (m) externalProjectPaths.add(m[1]);
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

/** Löst einen site-internen Pfad auf eine Datei in dist/ auf (Verzeichnis → index.html). */
async function resolvesToFile(pathname) {
  const clean = decodeURIComponent(pathname.split('#')[0].split('?')[0]);
  const target = join(DIST, clean);
  if (clean.endsWith('/')) return exists(join(target, 'index.html'));
  if (await exists(target)) return (await stat(target)).isFile() || exists(join(target, 'index.html'));
  return false;
}

// 1. Pflichtdateien
for (const f of ['CNAME', '.nojekyll', '.well-known/assetlinks.json', 'sitemap.xml', 'robots.txt', '404.html', 'app-ads.txt']) {
  if (!(await exists(join(DIST, f)))) errors.push(`Fehlt: dist/${f}`);
}
if ((await readFile(join(DIST, 'CNAME'), 'utf8').catch(() => '')).trim() !== '2eno.dev') {
  errors.push('CNAME enthält nicht „2eno.dev“');
}
try {
  const al = JSON.parse(await readFile(join(DIST, '.well-known/assetlinks.json'), 'utf8'));
  if (!Array.isArray(al)) errors.push('assetlinks.json ist kein Array');
  for (const s of al) {
    for (const fp of s.target?.sha256_cert_fingerprints ?? []) {
      if (fp.startsWith('[')) console.warn(`Hinweis: Platzhalter-Fingerprint für ${s.target.package_name} – vor App-Links-Nutzung ersetzen.`);
    }
  }
} catch (e) {
  errors.push(`assetlinks.json ungültig: ${e.message}`);
}

// 2. Interne Links in allen HTML-Dateien
const htmlFiles = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const attrRe = /\s(href|src|srcset|content)="([^"]+)"/g;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const [, attr, raw] of html.matchAll(attrRe)) {
    const values = attr === 'srcset' ? raw.split(',').map((s) => s.trim().split(/\s+/)[0]) : [raw];
    for (const v of values) {
      if (attr === 'content' && !v.startsWith(SITE)) continue; // nur og:image/og:url etc.
      let pathname;
      if (v.startsWith(SITE)) pathname = new URL(v).pathname;
      else if (v.startsWith('/') && !v.startsWith('//')) pathname = v;
      else {
        // externe Ressourcen (nicht Links) sind verboten
        if (/^(https?:)?\/\//.test(v) && attr !== 'href') {
          errors.push(`${relative(DIST, file)}: externe Ressource ${v}`);
        }
        continue;
      }
      if (externalProjectPaths.has(pathname)) continue;
      if (!(await resolvesToFile(pathname))) errors.push(`${relative(DIST, file)}: toter Link ${v}`);
    }
  }
  // Externe Stylesheets/Skripte/Fonts über <link href>
  for (const [, tag] of html.matchAll(/<link\b([^>]*)>/g)) {
    if (/rel="(stylesheet|preload|modulepreload|preconnect)"/.test(tag) && /href="(https?:)?\/\//.test(tag)) {
      errors.push(`${relative(DIST, file)}: externe <link>-Ressource: ${tag.trim()}`);
    }
  }
}

// 3. Sitemap-URLs existieren
const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8').catch(() => '');
for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!loc.startsWith(SITE + '/')) errors.push(`sitemap: fremde URL ${loc}`);
  else if (!(await resolvesToFile(new URL(loc).pathname))) errors.push(`sitemap: Seite fehlt ${loc}`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} Problem(e) gefunden:\n` + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`✓ dist/ geprüft: ${htmlFiles.length} HTML-Seiten, Pflichtdateien vorhanden, keine toten internen Links.`);
