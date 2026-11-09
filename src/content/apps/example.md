---
# ────────────────────────────────────────────────────────────────
# Beispiel-App. Kopiere diese Datei als Vorlage für eine neue App:
#   src/content/apps/<appname>.md  →  https://2eno.dev/apps/<appname>/
# Bilder liegen unter src/assets/apps/<appname>/ (werden beim Build optimiert).
# Alle Felder sind in src/content.config.ts beschrieben.
# ────────────────────────────────────────────────────────────────
name: Example
packageName: dev.eno2.example
description: Eine Beispiel-App, die zeigt, wie App-Seiten auf 2eno.dev aus einer einzigen Markdown-Datei entstehen.
# Weglassen, solange die App nicht im Play Store ist:
playStoreUrl: https://play.google.com/store/apps/details?id=dev.eno2.example
status: coming-soon # released | beta | coming-soon
icon: ../../assets/apps/example/icon.png
# repo: https://github.com/2eno/example
tags: [Android, Kotlin]
order: 1
draft: false

features:
  - title: Offline zuerst
    description: Alle Daten bleiben auf deinem Gerät – kein Konto, keine Cloud.
  - title: Material You
    description: Passt sich an deine Systemfarben und den Dark Mode an.
  - title: Ohne Werbung
    description: Keine Werbung, keine Tracker, keine Analyse-SDKs.

screenshots:
  - src: ../../assets/apps/example/screenshot-1.png
    alt: Startbildschirm mit einer Liste von Einträgen
  - src: ../../assets/apps/example/screenshot-2.png
    alt: Einstellungsbildschirm mit mehreren Optionen
  - src: ../../assets/apps/example/screenshot-3.png
    alt: Statistikansicht mit Übersichtskarten

# Android App Links: erzeugt einen Eintrag in /.well-known/assetlinks.json.
# Fingerprint: Play Console → Testen und veröffentlichen → App-Integrität → App-Signatur
# („SHA-256-Zertifikat-Fingerabdruck“). Für Debug-/Upload-Keys ggf. weitere Einträge.
appLinks:
  enabled: true
  sha256CertFingerprints:
    - '[SHA256-FINGERPRINT-DES-APP-SIGNATURSCHLÜSSELS]'

# Datenschutzrelevante Angaben → /apps/example/privacy/
# Diese Angaben müssen mit dem „Datensicherheit“-Formular in der Play Console übereinstimmen!
privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: false
  dataCollected:
    - type: In der App angelegte Einträge
      purpose: Kernfunktion der App
      storage: Ausschließlich lokal auf dem Gerät
      sharedWithThirdParties: false
      optional: false
  permissions:
    - name: POST_NOTIFICATIONS
      reason: Optionale Erinnerungen. Kann jederzeit in den Android-Einstellungen widerrufen werden.
  thirdPartyServices: []
  # Beispiel für einen Drittanbieter:
  #  - name: Firebase Crashlytics
  #    provider: Google Ireland Limited
  #    purpose: Absturzberichte zur Fehlerbehebung
  #    privacyPolicyUrl: https://firebase.google.com/support/privacy
  containsAds: false
  encryptedInTransit: true
  dataDeletion: Deinstalliere die App oder lösche in den Android-Einstellungen die App-Daten. Da keine Daten an uns übertragen werden, liegen bei uns keine Daten vor.
---

Hier steht der **ausführliche Beschreibungstext** der App. Er wird auf der App-Seite unter dem Hero angezeigt und darf normales Markdown enthalten – Absätze, Listen, Links.

Example ist eine Demo-App und existiert nicht wirklich. Ersetze diesen Text durch eine echte Beschreibung oder setze `draft: true`, um die App auszublenden.
