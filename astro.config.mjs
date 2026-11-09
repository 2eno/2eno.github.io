// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://2eno.dev',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Keine Telemetrie-Skripte o. Ä. im Output; Prefetch bleibt aus (keine Requests „auf Verdacht“).
  prefetch: false,
});
