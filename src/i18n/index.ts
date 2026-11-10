/**
 * Mehrsprachigkeit: Englisch ist Standard (ohne Präfix), Deutsch liegt unter /de/.
 * Die Weiterleitung von Besucher:innen aus DE/AT/CH auf /de/ übernimmt Cloudflare
 * (siehe README, „Sprache nach Land“) – GitHub Pages selbst kann keine IP auswerten.
 */
export const languages = ['en', 'de'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const htmlLang: Record<Lang, string> = { en: 'en', de: 'de' };
export const ogLocale: Record<Lang, string> = { en: 'en_US', de: 'de_DE' };
export const langName: Record<Lang, string> = { en: 'English', de: 'Deutsch' };

/** Text, der entweder sprachneutral (string) oder pro Sprache angegeben ist. */
export type Localized = string | { en: string; de: string };

/** Wählt die passende Sprachvariante. */
export function l(value: Localized, lang: Lang): string;
export function l(value: Localized | undefined, lang: Lang): string | undefined;
export function l(value: Localized | undefined, lang: Lang) {
  if (value === undefined) return undefined;
  return typeof value === 'string' ? value : value[lang];
}

/** Präfixt einen site-internen Pfad mit der Sprache (Englisch ohne Präfix). */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/**
 * Link auf die englische Startseite mit ?lang=en, damit die Cloudflare-Länderregel
 * (die nur „/“ umleitet) Besucher:innen aus DACH nicht zurück auf /de/ schickt.
 */
export function switchHref(target: Lang, path: string): string {
  return target === 'en' && path === '/' ? '/?lang=en' : path;
}

/**
 * Sehr kleines Inline-Markdown für Fließtexte aus dem Frontmatter:
 * **fett**, *kursiv*, `code` und [Link](https://…). Alles andere wird escaped.
 */
export function inlineMd(text: string): string {
  const esc = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return esc
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\s][^*]*)\*/g, '<em>$1</em>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g,
      (_, label, href) =>
        `<a href="${href}"${href.startsWith('http') ? ' rel="noopener"' : ''}>${label}</a>`,
    );
}

/** Datumsformat je Sprache */
export const formatDate = (d: Date, lang: Lang) =>
  new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', {
    dateStyle: 'long',
    timeZone: 'Europe/Berlin',
  }).format(d);

export { ui, type UiKey } from './ui';
import { ui, type UiKey } from './ui';

/** UI-Text nachschlagen */
export const t = (lang: Lang, key: UiKey): string => ui[lang][key];
