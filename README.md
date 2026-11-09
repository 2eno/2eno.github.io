# 2eno.dev

Persönliche Website und App-Landingpages – statisch gebaut mit [Astro](https://astro.build),
gehostet auf GitHub Pages. Keine Tracker, keine Cookies, keine externen Fonts/CDNs
(die Schrift Inter wird über `@fontsource-variable/inter` mitgebaut und selbst gehostet).

## Lokale Entwicklung

Voraussetzung: Node.js ≥ 22.23.4 (siehe `.nvmrc`).

```bash
npm install
npm run dev          # Dev-Server auf http://localhost:4321
npm run build        # astro check + statischer Build nach dist/
npm run check:dist   # prüft dist/: Pflichtdateien, interne Links, Sitemap, keine externen Ressourcen
npm run preview      # gebauten Stand lokal ansehen
```

`npm run images` erzeugt Favicon-PNGs und das Standard-Open-Graph-Bild neu
(nur nötig, wenn du `public/favicon.svg` oder das Design änderst).

## Struktur

```
├── .github/workflows/deploy.yml   Build + Deployment auf GitHub Pages
├── public/                        wird 1:1 kopiert (CNAME, .nojekyll, app-ads.txt, Favicons, OG-Bild)
├── scripts/                       Prüfskript für dist/, Bildgenerator
├── src/
│   ├── site.config.ts             Name, Intro, Links, Kontaktdaten (Platzhalter!)
│   ├── content.config.ts          Schema für Apps und Projekte
│   ├── content/
│   │   ├── apps/<appname>.md      ← eine Datei pro App
│   │   └── projects/<name>.md     ← eine Datei pro Projekt-Karte
│   ├── assets/apps/<appname>/     Icon + Screenshots (werden beim Build optimiert)
│   ├── components/ layouts/ lib/ styles/
│   └── pages/
│       ├── index.astro            Startseite
│       ├── apps/index.astro       App-Übersicht
│       ├── apps/[slug]/…          App-Seite + /privacy/
│       ├── impressum.astro, datenschutz.astro, 404.astro
│       ├── .well-known/assetlinks.json.ts   generiert aus den Apps
│       └── sitemap.xml.ts, robots.txt.ts
└── templates/repo-landing/        Vorlage für 2eno.dev/<reponame>/ (siehe dortige README)
```

## Neue App hinzufügen

1. Bilder ablegen unter `src/assets/apps/<appname>/`:
   - `icon.png` – quadratisch, 512×512
   - Screenshots im Hochformat (werden automatisch zu WebP verkleinert und im Handy-Rahmen gezeigt)
2. `src/content/apps/_vorlage.md` nach `src/content/apps/<appname>.md` kopieren und ausfüllen
   (Dateien mit `_` am Anfang werden ignoriert). Der Dateiname wird zur URL:
   `https://2eno.dev/apps/<appname>/`.
   - `packageName` muss `dev.eno2.<appname>` sein (wird beim Build geprüft).
   - `playStoreUrl` für Google Play und/oder `downloadUrl` für GitHub Releases.
   - `accent`: Akzentfarbe der App-Seite, am besten aus dem Icon.
   - `featured: true` zeigt die App als große Karte mit dem ersten Screenshot.
   - Jeder Screenshot braucht einen `alt`-Text.
   - Den `privacy`-Block wahrheitsgemäß ausfüllen; bei Play-Apps muss er zum
     **Datensicherheit-Formular** der Play Console passen.
   - Für Android App Links `appLinks.enabled: true` und den SHA-256-Fingerprint eintragen
     (Play Console → *Testen und veröffentlichen → App-Integrität → App-Signatur*).
3. `npm run build && npm run check:dist`
4. Committen und pushen – fertig. Startseiten-Karte, App-Seite, `/apps/<appname>/privacy/`,
   Sitemap-Eintrag und `assetlinks.json` entstehen automatisch.
5. Bei Play-Apps in der Play Console als Datenschutzerklärung
   `https://2eno.dev/apps/<appname>/privacy/` eintragen.

**Projekte** (z. B. Repos) funktionieren genauso über `src/content/projects/<name>.md`
mit `name`, `description`, `url`, `category`, optional `repo`, `language`, `license`, `image`,
`tags`, `featured`, `order`.

### Google-Play-Badge

Statt des offiziellen Badge-Bildes wird ein eigener Button verwendet. Wer das offizielle Badge
möchte: unter <https://play.google.com/intl/de/badges/> herunterladen, **lokal** ablegen
(nicht von Google-Servern einbinden) und in `src/components/AppActions.astro` einsetzen.
Dabei die Markenrichtlinien von Google beachten.

## Vor dem Livegang

- [ ] Alle `[PLATZHALTER]` in `src/site.config.ts` ersetzen (Name, Anschrift, E-Mail).
      Auf der Website sind verbliebene Platzhalter gelb markiert.
- [ ] Impressum, Datenschutzerklärung und App-Datenschutzerklärungen sind **Vorlagen** –
      ergänzen, **rechtlich prüfen lassen** und anschließend die gelbe Hinweisbox
      (`<LegalNotice />`) entfernen.
- [ ] App-Texte und Datenschutzangaben unter `src/content/apps/` gegenlesen – sie sind aus den
      READMEs und Manifesten der Repos abgeleitet.
- [ ] `assetlinks.json` ist leer (`[]`), bis eine App `appLinks.enabled: true` setzt.
- [ ] `public/app-ads.txt` nur befüllen, wenn eine App Werbung zeigt.

## Manuelle Schritte (GitHub & Cloudflare)

Diese Schritte lassen sich nicht aus dem Repo heraus erledigen:

### 1. GitHub Pages aktivieren
- [ ] Repo → **Settings → Pages → Build and deployment → Source: „GitHub Actions“**.
- [ ] Auf `main` pushen (oder den Workflow „Deploy to GitHub Pages“ manuell starten) und
      warten, bis er grün ist.

### 2. Domain bei GitHub verifizieren (schützt vor Domain-Übernahme)
- [ ] GitHub → **Profilbild → Settings → Pages → Add a domain** → `2eno.dev`.
- [ ] GitHub zeigt einen TXT-Record an, etwa
      `_github-pages-challenge-2eno.2eno.dev` → `<Code>`.
- [ ] Diesen TXT-Record bei Cloudflare anlegen (siehe unten), dann bei GitHub **Verify** klicken.

### 3. DNS bei Cloudflare (Zone `2eno.dev`)
Alle Einträge auf **„DNS only“ (graue Wolke)**, damit GitHub das TLS-Zertifikat ausstellen kann
und keine Daten über Cloudflare-Proxys laufen.

| Typ   | Name                               | Inhalt                  |
|-------|------------------------------------|-------------------------|
| A     | `@`                                | `185.199.108.153`       |
| A     | `@`                                | `185.199.109.153`       |
| A     | `@`                                | `185.199.110.153`       |
| A     | `@`                                | `185.199.111.153`       |
| AAAA  | `@`                                | `2606:50c0:8000::153`   |
| AAAA  | `@`                                | `2606:50c0:8001::153`   |
| AAAA  | `@`                                | `2606:50c0:8002::153`   |
| AAAA  | `@`                                | `2606:50c0:8003::153`   |
| CNAME | `www` (optional)                   | `2eno.github.io`        |
| TXT   | `_github-pages-challenge-2eno`     | Code aus Schritt 2      |

Die IP-Adressen vor dem Eintragen mit der
[GitHub-Doku](https://docs.github.com/de/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
abgleichen. `.dev` ist HSTS-preloaded – die Seite ist nur per HTTPS erreichbar.

### 4. Custom Domain im Repo eintragen
- [ ] Repo → **Settings → Pages → Custom domain**: `2eno.dev` → Save
      (die Datei `public/CNAME` ist bereits vorhanden).
- [ ] Warten, bis der DNS-Check grün ist und das Zertifikat ausgestellt wurde (Minuten bis ~24 h).
- [ ] **„Enforce HTTPS“** aktivieren.

### 5. Kontrolle
- [ ] `https://2eno.dev/` lädt, `https://eno2.dev/irgendwas` leitet auf `https://2eno.dev/irgendwas` weiter.
- [ ] `https://2eno.dev/.well-known/assetlinks.json` liefert JSON (nicht 404).
- [ ] `https://2eno.dev/sitemap.xml` ggf. in der Google Search Console einreichen.
- [ ] Nach dem Eintragen echter Fingerprints: App-Links mit
      `adb shell pm get-app-links dev.eno2.<appname>` bzw. dem
      [Statement List Tester](https://developers.google.com/digital-asset-links/tools/generator) prüfen.

## Hinweise zu `.well-known/`

GitHub Pages liefert Ordner mit Punkt nur aus, wenn sie im Deployment-Artefakt enthalten sind.
Dafür sorgen zwei Dinge:
- `include-hidden-files: true` bei `actions/upload-pages-artifact` (Standard ist `false`!),
- `.nojekyll` in `public/` (zusätzliche Absicherung, falls jemals Jekyll im Spiel ist).

Der Workflow bricht ab, wenn `dist/.well-known/assetlinks.json` fehlt.

## Repo-Landingpages

Siehe [`templates/repo-landing/README.md`](templates/repo-landing/README.md): Vorlage für
Projektseiten anderer Repos, die automatisch unter `https://2eno.dev/<reponame>/` erscheinen.
