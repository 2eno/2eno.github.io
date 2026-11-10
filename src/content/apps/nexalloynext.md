---
name: NexAlloyNext
packageName: dev.eno2.nexalloynext
tagline:
  en: Patches as plug-ins – for rooted devices
  de: Patches als Plug-ins – für gerootete Geräte
description:
  en: An LSPosed module that applies patch bundles from any patch source. Block ads, strip tracking parameters and extend apps – without rebuilding APKs.
  de: LSPosed-Modul, das Patch-Bundles aus beliebigen Patch-Quellen anwendet. Werbung blocken, Tracking-Parameter entfernen und Apps erweitern – ohne APKs neu zu bauen.
downloadUrl: https://github.com/2eno/NexAlloyNext/releases
repo: https://github.com/2eno/NexAlloyNext
status: released
accent: '#a67db0'
icon: ../../assets/apps/nexalloynext/icon.png
minAndroid: Android 8.1
license: GPL-3.0
requirements:
  - { en: Root access, de: Root-Zugriff }
  - { en: LSPosed (or another framework implementing libxposed API 101), de: LSPosed (oder ein Framework mit libxposed API 101) }
tags: [Kotlin, LSPosed, Root, Modding]
order: 4

about:
  en:
    - NexAlloyNext is [NexAlloy](https://github.com/NexAlloy/NexAlloy) rebuilt around plug-ins, much like [Morphe](https://morphe.software) – the module itself no longer contains any patches. Instead you install patch bundles from patch sources, so anyone can publish patches for NexAlloy from their own repository.
    - "**Getting started:** install the APK from the latest release and enable the module in LSPosed. On the *Patches* tab, install the preset source, approve LSPosed’s scope request, pick an app, choose its patches and force-stop the app once – done."
    - The patches live in the sister project [NexAlloyNext Patches](https://github.com/2eno/NexAlloyNext-Patches).
  de:
    - NexAlloyNext ist ein Neubau von [NexAlloy](https://github.com/NexAlloy/NexAlloy) rund um Plug-ins, ähnlich wie [Morphe](https://morphe.software) – das Modul selbst enthält keine Patches mehr. Stattdessen installierst du Patch-Bundles aus Patch-Quellen; so kann jede:r aus dem eigenen Repository Patches für NexAlloy veröffentlichen.
    - "**So geht's:** APK aus dem neuesten Release installieren und das Modul in LSPosed aktivieren. Im Tab *Patches* die voreingestellte Quelle installieren, den Scope-Dialog von LSPosed bestätigen, eine App auswählen, Patches wählen und die App einmal beenden – fertig."
    - Die Patches liegen im Schwesterprojekt [NexAlloyNext Patches](https://github.com/2eno/NexAlloyNext-Patches).

features:
  - title: { en: Patch sources instead of built-in patches, de: Patch-Quellen statt fest eingebauter Patches }
    description:
      en: Patches come as .nxb bundles from GitHub repositories or JSON URLs. Anyone can publish their own patches.
      de: Patches kommen als .nxb-Bundles aus GitHub-Repositories oder JSON-URLs. Jede:r kann eigene Patches veröffentlichen.
  - title: { en: Preset source, de: Vorinstallierte Quelle }
    description:
      en: “NexAlloy Patches” is preset – with patches for YouTube, YouTube Music, Spotify, Reddit, Instagram, X and more.
      de: „NexAlloy Patches“ ist voreingestellt – mit Patches für YouTube, YouTube Music, Spotify, Reddit, Instagram, X und mehr.
  - title: { en: Stay up to date, de: Updates im Blick }
    description:
      en: Checks in the background for new versions of the module and of your patch sources and notifies you (can be turned off).
      de: Prüft im Hintergrund auf neue Versionen des Moduls und der Patch-Quellen und benachrichtigt dich (abschaltbar).
  - title: { en: Block Play Store updates, de: Play-Store-Updates sperren }
    description:
      en: Keeps the Play Store from silently updating a patched app – and releases it automatically once a patch recommends a newer version.
      de: Verhindert, dass der Play Store eine gepatchte App ungefragt aktualisiert – und gibt sie automatisch frei, sobald ein Patch eine neuere Version empfiehlt.
  - title: { en: Build your own bundles, de: Eigene Bundles bauen }
    description:
      en: With a template and developer docs; the patcher API is modeled after Morphe.
      de: Mit Vorlage und Entwicklerdoku; die Patcher-API orientiert sich an Morphe.

screenshots: []

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: false
  developerReceivesData: false
  dataCollected:
    - type: { en: "Installed patch sources, bundles and selected patches", de: "Installierte Patch-Quellen, Bundles und gewählte Patches" }
      purpose: { en: Applying the patches, de: Anwenden der Patches }
      storage: { en: Locally on the device, de: Lokal auf dem Gerät }
    - type: { en: List of installed apps, de: Liste der installierten Apps }
      purpose: { en: Showing which installed apps have patches available, de: Anzeige, für welche installierten Apps Patches verfügbar sind }
      storage: { en: Evaluated locally only, never transmitted, de: Wird nur lokal ausgewertet, nicht übertragen }
  permissions:
    - name: QUERY_ALL_PACKAGES
      reason: { en: Detecting which installed apps can be patched and showing their versions., de: Erkennen, welche installierten Apps gepatcht werden können, und Anzeige ihrer Versionen. }
    - name: INTERNET
      reason: { en: Downloading patch bundles and checking for updates., de: Herunterladen von Patch-Bundles und Prüfen auf Updates. }
    - name: ACCESS_NETWORK_STATE
      reason: { en: Only checking for updates when a connection is available., de: Update-Prüfungen nur bei bestehender Verbindung. }
    - name: POST_NOTIFICATIONS
      reason: { en: Notices about updates of the module and the patch sources (can be turned off in settings)., de: Hinweise auf Updates des Moduls und der Patch-Quellen (in den Einstellungen abschaltbar). }
  thirdPartyServices:
    - name: GitHub
      provider: GitHub, Inc. (USA)
      purpose:
        en: Fetching release information and patch bundles from GitHub repositories (api.github.com, github.com). This transmits your IP address to GitHub
        de: Abruf von Release-Informationen und Patch-Bundles von GitHub-Repositories (api.github.com, github.com). Dabei wird deine IP-Adresse an GitHub übertragen
      privacyPolicyUrl: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
  containsAds: false
  encryptedInTransit: true
  transportNote:
    en: Network requests go to GitHub and to the patch sources you add yourself, over HTTPS. Patch sources you add are subject to their operators’ privacy policies.
    de: Netzwerkzugriffe gehen an GitHub sowie an die Patch-Quellen, die du selbst hinzufügst, und laufen per HTTPS. Für selbst hinzugefügte Quellen gelten die Datenschutzbestimmungen ihrer Betreiber.
  notes:
    en: Patch bundles run as code inside the apps they modify. Only add patch sources you trust.
    de: Patch-Bundles laufen als Code innerhalb der Apps, die sie verändern. Füge nur Patch-Quellen hinzu, denen du vertraust.
  dataDeletion:
    en: Remove patch sources in the app, or uninstall the module / clear its data in Android settings.
    de: Entferne Patch-Quellen in der App oder deinstalliere das Modul bzw. lösche in den Android-Einstellungen die App-Daten.
---
