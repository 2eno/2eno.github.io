---
# ────────────────────────────────────────────────────────────────
# VORLAGE für eine neue App (Dateien mit _ am Anfang werden ignoriert).
# Kopieren nach src/content/apps/<appname>.md
#   → https://2eno.dev/apps/<appname>/ (EN) und /de/apps/<appname>/ (DE)
# Bilder nach src/assets/apps/<appname>/. Alle Felder: src/content.config.ts
# Texte: entweder ein String (gilt für beide Sprachen) oder { en: …, de: … }
# ────────────────────────────────────────────────────────────────
name: My App
packageName: dev.eno2.myapp
tagline:
  en: One sentence that makes people curious
  de: Ein Satz, der neugierig macht
description:
  en: One or two sentences about what the app does and who it is for. Also used as meta description.
  de: Ein bis zwei Sätze, was die App macht und für wen. Wird auch als Meta-Description verwendet.
about:
  en:
    - First paragraph. Supports **bold**, *italic*, `code` and [links](https://example.com).
  de:
    - Erster Absatz. Unterstützt **fett**, *kursiv*, `code` und [Links](https://example.com).
# playStoreUrl: https://play.google.com/store/apps/details?id=dev.eno2.myapp
# downloadUrl: https://github.com/2eno/myapp/releases
# repo: https://github.com/2eno/myapp
status: in-development # released | beta | in-development | coming-soon
accent: '#6366f1'
icon: ../../assets/apps/myapp/icon.png
minAndroid: Android 8.0
# license: MIT
requirements: []
tags: [Kotlin]
order: 10
featured: false
draft: false

features:
  - title: { en: Feature, de: Funktion }
    description: { en: Description., de: Beschreibung. }

screenshots: []
#  - src: ../../assets/apps/myapp/screenshot-1.png
#    alt: { en: What the screenshot shows, de: Was auf dem Screenshot zu sehen ist }

# Android App Links → /.well-known/assetlinks.json
appLinks:
  enabled: false
  sha256CertFingerprints: []
  # - 'AB:CD:…'  (Play Console → App integrity → App signing)

# Must match the Play Console “Data safety” form!
privacy:
  lastUpdated: 2026-01-01
  collectsPersonalData: false
  developerReceivesData: false
  dataCollected: []
  permissions: []
  thirdPartyServices: []
  containsAds: false
  encryptedInTransit: true
  # transportNote: { en: …, de: … }
  # dataDeletion: { en: …, de: … }
---
