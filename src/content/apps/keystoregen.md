---
name: KeyStoreGen
packageName: dev.eno2.keystoregen
tagline: Signaturschlüssel direkt auf dem Handy
description: Erzeugt Android-Signaturschlüssel direkt auf dem Handy und bringt sie sicher dorthin, wo sie hingehören – in GitHub-Secrets, Bitwarden oder auf deinen Rechner.
downloadUrl: https://github.com/2eno/KeyStoreGen/releases
repo: https://github.com/2eno/KeyStoreGen
status: beta
accent: '#8ab4f8'
icon: ../../assets/apps/keystoregen/icon.png
minAndroid: Android 10
tags: [Kotlin, Material 3, Kryptografie, GitHub Actions]
order: 3
featured: true

features:
  - title: Schlüssel erzeugen oder importieren
    description: RSA 4096/3072/2048 oder EC P-256 als PKCS#12-Keystore – oder einen vorhandenen .jks/.p12 bzw. einen Bitwarden-Export byte-genau übernehmen.
  - title: GitHub-Secrets mit einem Tipp
    description: Anmeldung per GitHub Device Flow, Repository wählen, alle vier Secrets setzen. Die Werte werden schon auf dem Handy mit dem Public Key des Repos verschlüsselt (libsodium Sealed Box).
  - title: Direkt in Bitwarden
    description: Als sichere Notiz in deinen Tresor (bitwarden.com, bitwarden.eu oder selbst gehostet) oder als passwortgeschützte Exportdatei.
  - title: Fingerprints parat
    description: SHA-256 und SHA-1 für Firebase, Google Sign-In und die Play Console.
  - title: Biometrisch bestätigt
    description: Jeder Upload wird per Fingerabdruck, Gesicht oder Displaysperre bestätigt. Screenshots sind gesperrt, solange Secrets sichtbar sind.
  - title: Setup-Anleitung inklusive
    description: Eingebaute Anleitung mit fertigen keytool-, Workflow- und Gradle-Snippets zum Kopieren.

screenshots: []

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: true
  developerReceivesData: false
  dataCollected:
    - type: Keystore, Passwörter und Zertifikatsangaben (CN, O, OU, L, ST, C)
      purpose: Erzeugen und Exportieren deines Signaturschlüssels
      storage: Lokal auf dem Gerät; Weitergabe nur auf deine Aktion hin
      sharedWithThirdParties: true
    - type: GitHub-Zugangstoken
      purpose: Setzen von Repository-Secrets in deinem Auftrag
      storage: Lokal, verschlüsselt mit Schlüssel im Android Keystore
      optional: true
    - type: Bitwarden-Anmeldedaten bzw. Sitzung
      purpose: Speichern des Schlüssels in deinem Bitwarden-Tresor
      storage: Lokal auf dem Gerät
      optional: true
  permissions:
    - name: INTERNET
      reason: Nur für die optionalen Funktionen „Secrets zu GitHub hochladen“ und „In Bitwarden speichern“.
  thirdPartyServices:
    - name: GitHub API
      provider: GitHub, Inc. (USA)
      purpose: Anmeldung per Device Flow und Schreiben von Actions-Secrets in von dir gewählte Repositories – nur wenn du diese Funktion nutzt. Die Secret-Werte werden vorher auf dem Gerät verschlüsselt
      privacyPolicyUrl: https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement
    - name: Bitwarden
      provider: Bitwarden, Inc. (USA) bzw. dein selbst gehosteter Server
      purpose: Speichern des Schlüssels als sichere Notiz in deinem Tresor – nur wenn du diese Funktion nutzt
      privacyPolicyUrl: https://bitwarden.com/privacy/
  containsAds: false
  encryptedInTransit: true
  transportNote: Netzwerkverbindungen entstehen nur, wenn du aktiv zu GitHub hochlädst oder in Bitwarden speicherst, und laufen ausschließlich per HTTPS. Ohne diese Funktionen verlässt nichts das Gerät, außer du speicherst oder kopierst es selbst.
  dataDeletion: In der App abmelden entfernt das GitHub-Token; widerrufen kannst du es unter github.com → Settings → Applications. Alle übrigen Daten verschwinden mit dem Deinstallieren der App bzw. dem Löschen der App-Daten. Bereits angelegte Secrets und Tresor-Einträge verwaltest du direkt bei GitHub bzw. Bitwarden.
---

Jede Android-App braucht einen Signaturschlüssel – und wer ihn verliert, kann nie wieder ein Update veröffentlichen, das sich über die alte App installieren lässt. KeyStoreGen erzeugt den Schlüssel genau wie `keytool -genkeypair` direkt auf dem Handy und sorgt dafür, dass er sicher dort landet, wo er gebraucht wird: in den Secrets deiner CI, in deinem Passwortmanager und – wenn du willst – auf deinem Rechner.

**Nichts verlässt das Handy, solange du es nicht selbst speicherst, kopierst oder hochlädst.** Kopierte Werte werden als „sensibel“ markiert, damit sie nicht in Zwischenablage-Vorschauen auftauchen.
