/**
 * Content-Schema für Apps und Projekte.
 *
 * Neue App = neue Datei `src/content/apps/<appname>.md` (Vorlage: `_vorlage.md`).
 * Der Dateiname (ohne .md) wird zum URL-Slug: /apps/<appname>/ bzw. /de/apps/<appname>/
 *
 * Übersetzbare Felder (Typ `text` unten) sind entweder ein einfacher String
 * (gilt für beide Sprachen, z. B. „Kotlin“) oder ein Objekt `{ en: …, de: … }`.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Sprachneutraler String oder { en, de } */
const text = z.union([z.string(), z.object({ en: z.string(), de: z.string() })]);
/** Absätze für längere Texte (Inline-Markdown: **fett**, `code`, [Link](url)) */
const paragraphs = z.object({ en: z.array(z.string()), de: z.array(z.string()) });

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
      /** Ein knackiger Satz fürs Hero */
      tagline: text,
      /** Kurzbeschreibung (Hero, Karte, Meta-Description), ideal max. ~160 Zeichen */
      description: text,
      /** Ausführliche Beschreibung als Absätze */
      about: paragraphs,
      /** Link zum Play-Store-Eintrag. Weglassen, solange die App nicht im Play Store ist. */
      playStoreUrl: z.url().optional(),
      /** Download außerhalb von Google Play, z. B. GitHub Releases */
      downloadUrl: z.url().optional(),
      status: z.enum(['released', 'beta', 'in-development', 'coming-soon']).default('released'),
      /** Akzentfarbe der App-Seite (Hex), z. B. aus dem App-Icon */
      accent: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .default('#6366f1'),
      /** App-Icon, relativ zur Markdown-Datei (z. B. ../../assets/apps/<appname>/icon.png) */
      icon: image(),
      /** Mindestversion, z. B. „Android 8.0“ */
      minAndroid: z.string().optional(),
      license: z.string().optional(),
      /** Voraussetzungen, z. B. Root-Zugriff */
      requirements: z.array(text).default([]),
      /** Optionaler Link zum Quellcode */
      repo: z.url().optional(),
      tags: z.array(text).default([]),
      /** Auf der Startseite groß hervorheben */
      featured: z.boolean().default(false),
      /** Sortierung (kleiner = weiter vorne) */
      order: z.number().default(100),
      /** Ausblenden, ohne die Datei zu löschen */
      draft: z.boolean().default(false),
      features: z.array(z.object({ title: text, description: text })).default([]),
      screenshots: z
        .array(
          z.object({
            src: image(),
            /** Pflicht: beschreibender Alt-Text (Barrierefreiheit) */
            alt: text,
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
        dataCollected: z
          .array(
            z.object({
              type: text,
              purpose: text,
              /** Wo werden die Daten verarbeitet/gespeichert */
              storage: text,
              sharedWithThirdParties: z.boolean().default(false),
              optional: z.boolean().default(false),
            }),
          )
          .default([]),
        permissions: z.array(z.object({ name: z.string(), reason: text })).default([]),
        thirdPartyServices: z
          .array(
            z.object({
              name: z.string(),
              provider: text,
              purpose: text,
              privacyPolicyUrl: z.url(),
            }),
          )
          .default([]),
        containsAds: z.boolean().default(false),
        encryptedInTransit: z.boolean().default(true),
        /** Erläuterung zur Übertragung (überschreibt den Standardtext) */
        transportNote: text.optional(),
        /** Wie können Nutzer:innen ihre Daten löschen? */
        dataDeletion: text.optional(),
        /** Freitext für Besonderheiten */
        notes: text.optional(),
      }),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: text,
      description: text,
      /** Ziel der Karte: Landingpage (z. B. /<reponame>/) oder Repo-URL */
      url: z.string(),
      repo: z.url().optional(),
      /** Hauptsprache, z. B. „Kotlin“ (farbiger Punkt wie auf GitHub) */
      language: z.string().optional(),
      license: z.string().optional(),
      category: z.enum(['Android', 'Modding', 'Hardware', 'Smart Home', 'CLI', 'Web']),
      /** Optionales Vorschaubild */
      image: image().optional(),
      imageAlt: text.optional(),
      tags: z.array(text).default([]),
      /** Größere Karte auf der Startseite */
      featured: z.boolean().default(false),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { apps, projects };
