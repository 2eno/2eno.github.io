/**
 * Schlanke sitemap.xml ohne zusätzliche Abhängigkeit.
 * Neue statische Seiten bitte in `staticPaths` ergänzen; App-Seiten kommen automatisch.
 */
import type { APIRoute } from 'astro';
import { appPrivacyUrl, appUrl, getApps } from '../lib/content';
import { site } from '../site.config';

const staticPaths = ['/', '/apps/', '/impressum/', '/datenschutz/'];

const escapeXml = (s: string) =>
  s.replace(/[<>&'"]/g, (ch) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[ch]!);

export const GET: APIRoute = async () => {
  const apps = await getApps();
  const entries: { path: string; lastmod?: Date }[] = [
    ...staticPaths.map((path) => ({ path })),
    ...apps.flatMap((app) => [
      { path: appUrl(app) },
      { path: appPrivacyUrl(app), lastmod: app.data.privacy.lastUpdated },
    ]),
  ];

  const urls = entries
    .map(({ path, lastmod }) => {
      const loc = escapeXml(new URL(path, site.url).href);
      const mod = lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
      return `  <url><loc>${loc}</loc>${mod}</url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
