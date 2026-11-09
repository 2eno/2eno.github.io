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
  'coming-soon': 'Demnächst',
};

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('de-DE', { dateStyle: 'long', timeZone: 'Europe/Berlin' }).format(d);
