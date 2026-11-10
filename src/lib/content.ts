import { getCollection, type CollectionEntry } from 'astro:content';
import { l, localePath, type Lang } from '../i18n';

export type App = CollectionEntry<'apps'>;
export type Project = CollectionEntry<'projects'>;

const byOrderThenName = (
  a: { data: { order: number; name: string | { en: string } } },
  b: { data: { order: number; name: string | { en: string } } },
) =>
  a.data.order - b.data.order ||
  (typeof a.data.name === 'string' ? a.data.name : a.data.name.en).localeCompare(
    typeof b.data.name === 'string' ? b.data.name : b.data.name.en,
  );

/** Alle veröffentlichten Apps (ohne Drafts), sortiert. */
export async function getApps(): Promise<App[]> {
  const apps = await getCollection('apps', ({ data }) => !data.draft);
  return apps.sort(byOrderThenName);
}

/** Alle veröffentlichten Projekte (ohne Drafts), sortiert. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort(byOrderThenName);
}

export const appUrl = (app: App, lang: Lang) => localePath(lang, `/apps/${app.id}/`);
export const appPrivacyUrl = (app: App, lang: Lang) => localePath(lang, `/apps/${app.id}/privacy/`);

/** Rechtsseiten je Sprache (Impressum/Datenschutz der Website) */
export const legalPaths = {
  imprint: { en: '/imprint/', de: '/de/impressum/' },
  privacy: { en: '/privacy/', de: '/de/datenschutz/' },
} as const;

export const categoryLabel: Record<Project['data']['category'], { en: string; de: string }> = {
  Android: { en: 'Android', de: 'Android' },
  Modding: { en: 'Modding', de: 'Modding' },
  Hardware: { en: 'Hardware', de: 'Hardware' },
  'Smart Home': { en: 'Smart home', de: 'Smart Home' },
  CLI: { en: 'CLI', de: 'CLI' },
  Web: { en: 'Web', de: 'Web' },
};

/** Farben wie bei GitHub Linguist */
export const languageColor: Record<string, string> = {
  Kotlin: '#A97BFF',
  Java: '#b07219',
  Python: '#3572A5',
  Shell: '#89e051',
  Groovy: '#4298b8',
  Astro: '#ff5a03',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
};

export { l };
