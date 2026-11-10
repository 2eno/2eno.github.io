---
name: KeyStoreGen
packageName: dev.eno2.keystoregen
tagline:
  en: Signing keys, right on your phone
  de: Signaturschlüssel direkt auf dem Handy
description:
  en: Creates Android app signing keys on your phone and gets them safely where they belong – into GitHub secrets, Bitwarden or onto your computer.
  de: Erzeugt Android-Signaturschlüssel direkt auf dem Handy und bringt sie sicher dorthin, wo sie hingehören – in GitHub-Secrets, Bitwarden oder auf deinen Rechner.
downloadUrl: https://github.com/2eno/KeyStoreGen/releases
repo: https://github.com/2eno/KeyStoreGen
status: beta
accent: '#8ab4f8'
icon: ../../assets/apps/keystoregen/icon.png
minAndroid: Android 10
tags: [Kotlin, Material 3, { en: Cryptography, de: Kryptografie }, GitHub Actions]
order: 3
featured: true

about:
  en:
    - Every Android app needs a signing key – and if you lose it, you can never again publish an update that installs over the old app. KeyStoreGen creates the key just like `keytool -genkeypair`, right on your phone, and makes sure it ends up safely where it is needed – in your CI secrets, in your password manager and, if you like, on your computer.
    - "**Nothing leaves the phone unless you save, copy or upload it yourself.** Copied values are marked as sensitive so they don’t show up in clipboard previews."
  de:
    - Jede Android-App braucht einen Signaturschlüssel – und wer ihn verliert, kann nie wieder ein Update veröffentlichen, das sich über die alte App installieren lässt. KeyStoreGen erzeugt den Schlüssel genau wie `keytool -genkeypair` direkt auf dem Handy und sorgt dafür, dass er sicher dort landet, wo er gebraucht wird – in den Secrets deiner CI, in deinem Passwortmanager und, wenn du willst, auf deinem Rechner.
    - "**Nichts verlässt das Handy, solange du es nicht selbst speicherst, kopierst oder hochlädst.** Kopierte Werte werden als „sensibel“ markiert, damit sie nicht in Zwischenablage-Vorschauen auftauchen."

features:
  - title: { en: Create or import keys, de: Schlüssel erzeugen oder importieren }
    description:
      en: RSA 4096/3072/2048 or EC P-256 as a PKCS#12 keystore – or take over an existing .jks/.p12 or a Bitwarden export byte for byte.
      de: RSA 4096/3072/2048 oder EC P-256 als PKCS#12-Keystore – oder einen vorhandenen .jks/.p12 bzw. einen Bitwarden-Export byte-genau übernehmen.
  - title: { en: GitHub secrets in one tap, de: GitHub-Secrets mit einem Tipp }
    description:
      en: Sign in with GitHub’s device flow, pick a repository, set all four secrets. Values are encrypted on the phone with the repository’s public key (libsodium sealed box).
      de: Anmeldung per GitHub Device Flow, Repository wählen, alle vier Secrets setzen. Die Werte werden schon auf dem Handy mit dem Public Key des Repos verschlüsselt (libsodium Sealed Box).
  - title: { en: Straight into Bitwarden, de: Direkt in Bitwarden }
    description:
      en: As a secure note in your vault (bitwarden.com, bitwarden.eu or self-hosted) or as a password-protected export file.
      de: Als sichere Notiz in deinen Tresor (bitwarden.com, bitwarden.eu oder selbst gehostet) oder als passwortgeschützte Exportdatei.
  - title: { en: Fingerprints at hand, de: Fingerprints parat }
    description:
      en: SHA-256 and SHA-1 for Firebase, Google Sign-In and the Play Console.
      de: SHA-256 und SHA-1 für Firebase, Google Sign-In und die Play Console.
  - title: { en: Confirmed biometrically, de: Biometrisch bestätigt }
    description:
      en: Every upload is confirmed with fingerprint, face or screen lock. Screenshots are blocked while secrets are on screen.
      de: Jeder Upload wird per Fingerabdruck, Gesicht oder Displaysperre bestätigt. Screenshots sind gesperrt, solange Secrets sichtbar sind.
  - title: { en: Setup guide included, de: Setup-Anleitung inklusive }
    description:
      en: Built-in guide with ready-to-copy keytool, workflow and Gradle snippets.
      de: Eingebaute Anleitung mit fertigen keytool-, Workflow- und Gradle-Snippets zum Kopieren.

screenshots: []

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: true
  developerReceivesData: false
  dataCollected:
    - type: { en: "Keystore, passwords and certificate details (CN, O, OU, L, ST, C)", de: "Keystore, Passwörter und Zertifikatsangaben (CN, O, OU, L, ST, C)" }
      purpose: { en: Creating and exporting your signing key, de: Erzeugen und Exportieren deines Signaturschlüssels }
      storage: { en: Locally on the device; shared only on your action, de: Lokal auf dem Gerät; Weitergabe nur auf deine Aktion hin }
      sharedWithThirdParties: true
    - type: { en: GitHub access token, de: GitHub-Zugangstoken }
      purpose: { en: Setting repository secrets on your behalf, de: Setzen von Repository-Secrets in deinem Auftrag }
      storage: { en: Locally, encrypted with a key in the Android Keystore, de: Lokal, verschlüsselt mit Schlüssel im Android Keystore }
      optional: true
    - type: { en: Bitwarden login or session, de: Bitwarden-Anmeldedaten bzw. Sitzung }
      purpose: { en: Saving the key to your Bitwarden vault, de: Speichern des Schlüssels in deinem Bitwarden-Tresor }
      storage: { en: Locally on the device, de: Lokal auf dem Gerät }
      optional: true
  permissions:
    - name: INTERNET
      reason: { en: Only for the optional features “upload secrets to GitHub” and “save to Bitwarden”., de: Nur für die optionalen Funktionen „Secrets zu GitHub hochladen“ und „In Bitwarden speichern“. }
  thirdPartyServices:
    - name: GitHub API
      provider: GitHub, Inc. (USA)
      purpose:
        en: Device-flow sign-in and writing Actions secrets to repositories you choose – only when you use this feature. Secret values are encrypted on the device first
        de: Anmeldung per Device Flow und Schreiben von Actions-Secrets in von dir gewählte Repositories – nur wenn du diese Funktion nutzt. Die Secret-Werte werden vorher auf dem Gerät verschlüsselt
      privacyPolicyUrl: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
    - name: Bitwarden
      provider: { en: "Bitwarden, Inc. (USA) or your self-hosted server", de: "Bitwarden, Inc. (USA) bzw. dein selbst gehosteter Server" }
      purpose:
        en: Saving the key as a secure note in your vault – only when you use this feature
        de: Speichern des Schlüssels als sichere Notiz in deinem Tresor – nur wenn du diese Funktion nutzt
      privacyPolicyUrl: https://bitwarden.com/privacy/
  containsAds: false
  encryptedInTransit: true
  transportNote:
    en: Network connections only happen when you actively upload to GitHub or save to Bitwarden, and only over HTTPS. Without these features nothing leaves the device unless you save or copy it yourself.
    de: Netzwerkverbindungen entstehen nur, wenn du aktiv zu GitHub hochlädst oder in Bitwarden speicherst, und laufen ausschließlich per HTTPS. Ohne diese Funktionen verlässt nichts das Gerät, außer du speicherst oder kopierst es selbst.
  dataDeletion:
    en: Signing out in the app removes the GitHub token; revoke it at github.com → Settings → Applications. Everything else disappears when you uninstall the app or clear its data. Secrets and vault entries you already created are managed directly at GitHub or Bitwarden.
    de: In der App abmelden entfernt das GitHub-Token; widerrufen kannst du es unter github.com → Settings → Applications. Alle übrigen Daten verschwinden mit dem Deinstallieren der App bzw. dem Löschen der App-Daten. Bereits angelegte Secrets und Tresor-Einträge verwaltest du direkt bei GitHub bzw. Bitwarden.
---
