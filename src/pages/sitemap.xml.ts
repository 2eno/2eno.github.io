/**
 * Schlanke sitemap.xml ohne zusätzliche Abhängigkeit, mit hreflang-Alternativen.
 * Neue statische Seiten bitte in `staticPages` ergänzen; App-Seiten kommen automatisch.
 */
import type { APIRoute } from 'astro';
import { appPrivacyUrl, appUrl, getApps, legalPaths } from '../lib/content';
import { languages, localePath, type Lang } from '../i18n';
import { site } from '../site.config';

type Entry = { paths: Record<Lang, string>; lastmod?: Date };

const both = (path: string): Record<Lang, string> => ({ en: localePath('en', path), de: localePath('de', path) });

const staticPages: Entry[] = [
  { paths: both('/') },
  { paths: both('/apps/') },
  { paths: { ...legalPaths.imprint } },
  { paths: { ...legalPaths.privacy } },
];

const escapeXml = (s: string) =>
  s.replace(/[<>&'"]/g, (ch) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[ch]!);
const abs = (p: string) => escapeXml(new URL(p, site.url).href);

export const GET: APIRoute = async () => {
  const apps = await getApps();
  const entries: Entry[] = [
    ...staticPages,
    ...apps.flatMap((app) => [
      { paths: { en: appUrl(app, 'en'), de: appUrl(app, 'de') } },
      { paths: { en: appPrivacyUrl(app, 'en'), de: appPrivacyUrl(app, 'de') }, lastmod: app.data.privacy.lastUpdated },
    ]),
  ];

  const urls = entries
    .flatMap(({ paths, lastmod }) =>
      languages.map((lang) => {
        const alts = languages
          .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(paths[l])}"/>`)
          .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(paths.en)}"/>`)
          .join('\n');
        const mod = lastmod ? `\n    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
        return `  <url>\n    <loc>${abs(paths[lang])}</loc>${mod}\n${alts}\n  </url>`;
      }),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
