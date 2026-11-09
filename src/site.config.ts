/**
 * Zentrale Website-Konfiguration.
 *
 * Alles in [ECKIGEN KLAMMERN] ist ein Platzhalter und muss vor dem
 * Livegang durch echte Angaben ersetzt werden. Es werden bewusst keine
 * persönlichen Daten erfunden.
 */
export const site = {
  /** Kanonische Basis-URL (ohne Slash am Ende). Muss zu `site` in astro.config.mjs passen. */
  url: 'https://2eno.dev',
  name: '2eno.dev',
  lang: 'de',
  locale: 'de_DE',
  /** Standard-Beschreibung, falls eine Seite keine eigene setzt. */
  description: 'Persönliche Website von 2eno – Projekte, Android-Apps und Open Source.',
  author: '[DEIN NAME]',
  intro:
    'Hi! Ich entwickle Android-Apps und kleine Open-Source-Projekte. Hier findest du eine Übersicht meiner Arbeit.',
  /** Links auf der Startseite und im Footer. `rel="me"` wird automatisch gesetzt. */
  links: [
    { label: 'GitHub', href: 'https://github.com/2eno' },
    // { label: 'Mastodon', href: 'https://[INSTANZ]/@[NAME]' },
    // { label: 'Google Play', href: 'https://play.google.com/store/apps/dev?id=[DEVELOPER-ID]' },
  ],
  /** Kontakt für Impressum, Datenschutz und App-Privacy-Seiten. */
  contact: {
    name: '[VORNAME NACHNAME]',
    street: '[STRASSE HAUSNUMMER]',
    city: '[PLZ ORT]',
    country: 'Deutschland',
    email: '[E-MAIL-ADRESSE]',
    /** Optional, laut DDG nicht zwingend, aber „schnelle Kontaktaufnahme“ muss möglich sein. */
    phone: '[TELEFON – optional]',
  },
} as const;

export type SiteConfig = typeof site;
