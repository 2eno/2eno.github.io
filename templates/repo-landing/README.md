# Vorlage: Repo-Landingpage unter `2eno.dev/<reponame>/`

Statische Landingpage (reines HTML/CSS, kein Build nötig) für ein einzelnes
Repository, optisch passend zur Hauptseite 2eno.dev.

## Wie funktioniert die URL?

Die User-Site `2eno/2eno.github.io` hat die Custom Domain `2eno.dev`.
GitHub-**Projektseiten** aller anderen Repos des Accounts erscheinen dann
automatisch unter `https://2eno.dev/<reponame>/`, solange das Projekt-Repo
**keine eigene** Custom Domain (`CNAME`-Datei) hat.

Weil die Projektseite auf derselben Domain liegt, kann sie Favicon
(`/favicon.svg`), Impressum (`/impressum/`) und Datenschutz (`/datenschutz/`)
der Hauptseite direkt verlinken.

> **Achtung, Namenskollision:** Eine Projektseite überdeckt gleichnamige Pfade der
> Hauptseite. Kein Repo `apps`, `impressum`, `datenschutz` o. Ä. mit Pages betreiben.

## Verwendung

1. Inhalt von `docs/` in das Ziel-Repo nach `docs/` kopieren
   (inkl. `.nojekyll`, damit Jekyll nichts umbaut).
2. In `docs/index.html` alle `[PLATZHALTER]` ersetzen, vor allem `[REPONAME]`
   (canonical, og:url, GitHub-Links).
3. Veröffentlichen – **eine** der beiden Varianten:
   - **Variante A (einfach):** Repo → Settings → Pages → Source
     „Deploy from a branch“ → Branch `main`, Ordner `/docs`.
   - **Variante B (Actions):** `.github/workflows/pages.yml` ins Repo kopieren,
     Settings → Pages → Source „GitHub Actions“.
4. Optional: Projekt als Karte auf der Startseite verlinken – in der Hauptseite
   `src/content/projects/<reponame>.md` anlegen mit `url: /<reponame>/`.
   Das Prüfskript `npm run check:dist` ignoriert solche Pfade, weil die Seite
   aus einem anderen Repo kommt und nicht in `dist/` liegt.

## Design aktualisieren

`docs/style.css` ist eine Kopie von `src/styles/global.css` der Hauptseite plus
Header/Footer-Styles. Ändert sich das Design der Hauptseite, die Datei neu
übernehmen.
