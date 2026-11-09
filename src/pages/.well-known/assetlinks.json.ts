/**
 * /.well-known/assetlinks.json für Android App Links.
 * Generiert aus allen Apps mit `appLinks.enabled: true`.
 * Doku: https://developer.android.com/training/app-links/verify-android-applinks
 */
import type { APIRoute } from 'astro';
import { getApps } from '../../lib/content';

export const GET: APIRoute = async () => {
  const apps = await getApps();
  const statements = apps
    .filter((app) => app.data.appLinks.enabled)
    .map((app) => ({
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: app.data.packageName,
        sha256_cert_fingerprints: app.data.appLinks.sha256CertFingerprints,
      },
    }));

  return new Response(JSON.stringify(statements, null, 2) + '\n', {
    headers: { 'Content-Type': 'application/json' },
  });
};
