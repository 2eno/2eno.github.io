import { getCollection, type CollectionEntry } from 'astro:content';

export type App = CollectionEntry<'apps'>;
export type Project = CollectionEntry<'projects'>;

const byOrderThenName = (
  a: { data: { order: number; name: string } },
  b: { data: { order: number; name: string } },
) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name, 'de');

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

export const appUrl = (app: App) => `/apps/${app.id}/`;
export const appPrivacyUrl = (app: App) => `/apps/${app.id}/privacy/`;

export const statusLabel: Record<App['data']['status'], string> = {
  released: 'Verfügbar',
  beta: 'Beta',
  'in-development': 'In Entwicklung',
  'coming-soon': 'Demnächst',
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

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('de-DE', { dateStyle: 'long', timeZone: 'Europe/Berlin' }).format(d);
