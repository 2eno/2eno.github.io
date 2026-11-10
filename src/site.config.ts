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
  description: {
    en: 'Android apps, root modules and open-source tools by 2eno – for homelabs, smart homes and the command line. No trackers.',
    de: 'Android-Apps, Root-Module und Open-Source-Werkzeuge von 2eno – für Homelab, Smart Home und Kommandozeile. Ohne Tracker.',
  },
  intro: {
    en: 'I build Android apps, root modules and tools for homelabs, smart homes and the command line – open source and without trackers.',
    de: 'Ich baue Android-Apps, Root-Module und Werkzeuge für Homelab, Smart Home und Kommandozeile – quelloffen und ohne Tracker.',
  },
  /** Links auf der Startseite und im Footer. `rel="me"` wird automatisch gesetzt. */
  links: [
    { label: 'GitHub', href: 'https://github.com/2eno' },
    // { label: 'Mastodon', href: 'https://[INSTANZ]/@[NAME]' },
  ],
  /**
   * Läuft 2eno.dev über den Cloudflare-Proxy (orange Wolke)?
   * Nötig für die Sprachweiche nach Land (siehe README). Steuert den Text der
   * Datenschutzerklärung – muss zur tatsächlichen DNS-Einstellung passen!
   */
  cloudflareProxy: true,
  /** Kontakt für Impressum, Datenschutz und App-Privacy-Seiten. */
  contact: {
    name: '[VORNAME NACHNAME]',
    street: '[STRASSE HAUSNUMMER]',
    city: '[PLZ ORT]',
    country: { en: 'Germany', de: 'Deutschland' },
    email: '[E-MAIL-ADRESSE]',
    /** Optional; eine schnelle Kontaktaufnahme muss aber möglich sein (§ 5 DDG). */
    phone: '[TELEFON – optional]',
  },
} as const;

export type SiteConfig = typeof site;
