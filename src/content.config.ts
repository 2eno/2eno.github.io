/**
 * Content-Schema für Apps und Projekte.
 *
 * Neue App = neue Datei `src/content/apps/<appname>.md`.
 * Der Dateiname (ohne .md) wird zum URL-Slug: /apps/<appname>/
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** SHA-256-Zertifikats-Fingerprint im Format „AB:CD:…“ (32 Byte) oder ein Platzhalter in [eckigen Klammern]. */
const fingerprint = z
  .string()
  .regex(
    /^(([0-9A-F]{2}:){31}[0-9A-F]{2}|\[.+\])$/,
    'Erwartet SHA-256-Fingerprint wie „AB:CD:…“ (32 Hex-Paare, Großbuchstaben) oder einen [Platzhalter].',
  );

const apps = defineCollection({
  // Dateien mit _ am Anfang (z. B. _vorlage.md) werden ignoriert.
  loader: glob({ pattern: '[^_]*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      /** Anzeigename der App */
      name: z.string(),
      /** Android-Paketname (applicationId), Schema dev.eno2.<appname> */
      packageName: z
        .string()
        .regex(/^dev\.eno2\.[a-z][a-z0-9_]*$/, 'Paketname muss dem Schema dev.eno2.<appname> folgen.'),
      /** Ein Satz fürs Hero, knackig (z. B. „virt-manager für die Hosentasche“) */
      tagline: z.string().max(80),
      /** Kurzbeschreibung (Hero, Karte, Meta-Description). Ideal: max. ~160 Zeichen. */
      description: z.string().max(200),
      /** Link zum Play-Store-Eintrag. Weglassen, solange die App noch nicht veröffentlicht ist. */
      playStoreUrl: z.url().optional(),
      /** Download außerhalb von Google Play, z. B. GitHub Releases */
      downloadUrl: z.url().optional(),
      status: z.enum(['released', 'beta', 'in-development', 'coming-soon']).default('released'),
      /** Akzentfarbe der App-Seite (Hex), z. B. aus dem App-Icon */
      accent: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .default('#6366f1'),
      /** Mindestversion, z. B. „Android 8.0“ */
      minAndroid: z.string().optional(),
      license: z.string().optional(),
      /** Voraussetzungen, z. B. „Root-Zugriff“ */
      requirements: z.array(z.string()).default([]),
      /** Auf der Startseite groß hervorheben */
      featured: z.boolean().default(false),
      /** App-Icon, relativ zur Markdown-Datei (z. B. ../../assets/apps/<appname>/icon.png) */
      icon: image(),
      /** Optionaler Link zum Quellcode */
      repo: z.url().optional(),
      tags: z.array(z.string()).default([]),
      /** Sortierung auf Start- und Übersichtsseite (kleiner = weiter vorne) */
      order: z.number().default(100),
      /** Ausblenden, ohne die Datei zu löschen */
      draft: z.boolean().default(false),
      features: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        )
        .default([]),
      screenshots: z
        .array(
          z.object({
            src: image(),
            /** Pflicht: beschreibender Alt-Text (Barrierefreiheit) */
            alt: z.string().min(1),
          }),
        )
        .default([]),
      /** Android App Links → erzeugt Eintrag in /.well-known/assetlinks.json */
      appLinks: z
        .object({
          enabled: z.boolean().default(false),
          sha256CertFingerprints: z.array(fingerprint).default([]),
        })
        .default({ enabled: false, sha256CertFingerprints: [] }),
      /** Datenschutzrelevante Angaben → /apps/<appname>/privacy/ */
      privacy: z.object({
        /** Stand der Datenschutzerklärung */
        lastUpdated: z.coerce.date(),
        /** Werden personenbezogene Daten verarbeitet (durch die App selbst oder eingebundene Dienste)? */
        collectsPersonalData: z.boolean(),
        /** Erhält der Entwickler (also du) irgendwelche Daten? */
        developerReceivesData: z.boolean().default(false),
        /** Welche Daten werden verarbeitet, wozu, wo, und werden sie geteilt? */
        dataCollected: z
          .array(
            z.object({
              type: z.string(),
              purpose: z.string(),
              /** Wo werden die Daten verarbeitet/gespeichert, z. B. „nur lokal auf dem Gerät“ */
              storage: z.string(),
              sharedWithThirdParties: z.boolean().default(false),
              optional: z.boolean().default(false),
            }),
          )
          .default([]),
        /** Android-Berechtigungen und Begründung */
        permissions: z
          .array(
            z.object({
              name: z.string(),
              reason: z.string(),
            }),
          )
          .default([]),
        /** Eingebundene Drittanbieter (SDKs, APIs, Werbenetzwerke, Crash-Reporting …) */
        thirdPartyServices: z
          .array(
            z.object({
              name: z.string(),
              provider: z.string(),
              purpose: z.string(),
              privacyPolicyUrl: z.url(),
            }),
          )
          .default([]),
        containsAds: z.boolean().default(false),
        /** Ist die Netzwerk-Kommunikation verschlüsselt (Data-Safety-Formular)? */
        encryptedInTransit: z.boolean().default(true),
        /** Erläuterung zur Übertragung (überschreibt den Standardtext) */
        transportNote: z.string().optional(),
        /** Wie können Nutzer:innen ihre Daten löschen? */
        dataDeletion: z.string().optional(),
        /** Freitext für Besonderheiten */
        notes: z.string().optional(),
      }),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    description: z.string().max(260),
    /** Ziel der Karte: Landingpage (z. B. /<reponame>/) oder Repo-URL */
    url: z.string(),
    repo: z.url().optional(),
    /** Hauptsprache, z. B. „Kotlin“ (farbiger Punkt wie auf GitHub) */
    language: z.string().optional(),
    license: z.string().optional(),
    category: z.enum(['Android', 'Modding', 'Hardware', 'Smart Home', 'CLI', 'Web']),
    /** Optionales Vorschaubild */
    image: image().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Größere Karte auf der Startseite */
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { apps, projects };
