---
# ────────────────────────────────────────────────────────────────
# VORLAGE für eine neue App (Dateien mit _ am Anfang werden ignoriert).
# Kopieren nach src/content/apps/<appname>.md → https://2eno.dev/apps/<appname>/
# Bilder nach src/assets/apps/<appname>/. Alle Felder: src/content.config.ts
# ────────────────────────────────────────────────────────────────
name: Meine App
packageName: dev.eno2.meineapp
tagline: Ein Satz, der neugierig macht
description: Ein bis zwei Sätze, was die App macht und für wen. Wird auch als Meta-Description verwendet.
# playStoreUrl: https://play.google.com/store/apps/details?id=dev.eno2.meineapp
# downloadUrl: https://github.com/2eno/meineapp/releases
# repo: https://github.com/2eno/meineapp
status: in-development # released | beta | in-development | coming-soon
accent: '#6366f1'
icon: ../../assets/apps/meineapp/icon.png
minAndroid: Android 8.0
# license: MIT
requirements: []
tags: [Kotlin]
order: 10
featured: false
draft: false

features:
  - title: Funktion
    description: Beschreibung.

screenshots: []
#  - src: ../../assets/apps/meineapp/screenshot-1.png
#    alt: Was auf dem Screenshot zu sehen ist

# Android App Links → /.well-known/assetlinks.json
appLinks:
  enabled: false
  sha256CertFingerprints: []
  # - 'AB:CD:…'  (Play Console → App-Integrität → App-Signatur)

# Muss zum „Datensicherheit“-Formular der Play Console passen!
privacy:
  lastUpdated: 2026-01-01
  collectsPersonalData: false
  developerReceivesData: false
  dataCollected: []
  permissions: []
  thirdPartyServices: []
  containsAds: false
  encryptedInTransit: true
  # transportNote: Erläuterung zur Netzwerkkommunikation
  # dataDeletion: Wie Nutzer:innen ihre Daten löschen
---

Ausführliche Beschreibung in Markdown.
