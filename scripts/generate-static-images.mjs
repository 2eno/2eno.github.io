// Erzeugt PNG-Varianten von Favicon und Standard-OG-Bild aus SVG.
// Einmalig bzw. nach Design-Änderungen ausführen: `node scripts/generate-static-images.mjs`
// (nutzt sharp, das ohnehin als Abhängigkeit von Astro installiert ist).
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const favicon = await readFile(new URL('../public/favicon.svg', import.meta.url));
await sharp(favicon, { density: 300 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(favicon, { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1e1b4b"/>
      <stop offset="1" stop-color="#4338ca"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="96" y="215" width="200" height="200" rx="44" fill="#fff" fill-opacity="0.12"/>
  <text x="196" y="352" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="96" font-weight="800" fill="#fff">2e</text>
  <text x="350" y="320" font-family="DejaVu Sans, Arial, sans-serif" font-size="88" font-weight="800" fill="#fff">2eno.dev</text>
  <text x="352" y="390" font-family="DejaVu Sans, Arial, sans-serif" font-size="36" fill="#c7d2fe">Projekte · Android-Apps · Open Source</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og-default.png');
console.log('PNG-Bilder erzeugt.');
