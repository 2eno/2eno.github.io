---
name: NexAlloyNext
packageName: dev.eno2.nexalloynext
tagline: Patches als Plug-ins – für gerootete Geräte
description: LSPosed-Modul, das Patch-Bundles aus beliebigen Patch-Quellen anwendet. Werbung blocken, Tracking-Parameter entfernen und Apps erweitern – ohne APKs neu zu bauen.
downloadUrl: https://github.com/2eno/NexAlloyNext/releases
repo: https://github.com/2eno/NexAlloyNext
status: released
accent: '#a67db0'
icon: ../../assets/apps/nexalloynext/icon.png
minAndroid: Android 8.1
license: GPL-3.0
requirements:
  - Root-Zugriff
  - LSPosed (oder ein Framework mit libxposed API 101)
tags: [Kotlin, LSPosed, Root, Modding]
order: 4

features:
  - title: Patch-Quellen statt fest eingebauter Patches
    description: Patches kommen als .nxb-Bundles aus GitHub-Repositories oder JSON-URLs. Jede:r kann eigene Patches veröffentlichen.
  - title: Vorinstallierte Quelle
    description: „NexAlloy Patches“ ist voreingestellt – mit Patches für YouTube, YouTube Music, Spotify, Reddit, Instagram, X und mehr.
  - title: Updates im Blick
    description: Prüft im Hintergrund auf neue Versionen des Moduls und der Patch-Quellen und benachrichtigt dich (abschaltbar).
  - title: Play-Store-Updates sperren
    description: Verhindert, dass der Play Store eine gepatchte App ungefragt aktualisiert – und gibt sie automatisch frei, sobald ein Patch eine neuere Version empfiehlt.
  - title: Eigene Bundles bauen
    description: Mit Vorlage und Entwicklerdoku; die Patcher-API orientiert sich an Morphe.

screenshots: []

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: false
  developerReceivesData: false
  dataCollected:
    - type: Installierte Patch-Quellen, Bundles und gewählte Patches
      purpose: Anwenden der Patches
      storage: Lokal auf dem Gerät
    - type: Liste der installierten Apps
      purpose: Anzeige, für welche installierten Apps Patches verfügbar sind
      storage: Wird nur lokal ausgewertet, nicht übertragen
  permissions:
    - name: QUERY_ALL_PACKAGES
      reason: Erkennen, welche installierten Apps gepatcht werden können, und Anzeige ihrer Versionen.
    - name: INTERNET
      reason: Herunterladen von Patch-Bundles und Prüfen auf Updates.
    - name: ACCESS_NETWORK_STATE
      reason: Update-Prüfungen nur bei bestehender Verbindung.
    - name: POST_NOTIFICATIONS
      reason: Hinweise auf Updates des Moduls und der Patch-Quellen (in den Einstellungen abschaltbar).
  thirdPartyServices:
    - name: GitHub
      provider: GitHub, Inc. (USA)
      purpose: Abruf von Release-Informationen und Patch-Bundles von GitHub-Repositories (api.github.com, github.com). Dabei wird deine IP-Adresse an GitHub übertragen
      privacyPolicyUrl: https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement
  containsAds: false
  encryptedInTransit: true
  transportNote: Netzwerkzugriffe gehen an GitHub sowie an die Patch-Quellen, die du selbst hinzufügst, und laufen per HTTPS. Für selbst hinzugefügte Quellen gelten die Datenschutzbestimmungen ihrer Betreiber.
  notes: Patch-Bundles laufen als Code innerhalb der Apps, die sie verändern. Füge nur Patch-Quellen hinzu, denen du vertraust.
  dataDeletion: Entferne Patch-Quellen in der App oder deinstalliere das Modul bzw. lösche in den Android-Einstellungen die App-Daten.
---

NexAlloyNext ist ein Neubau von [NexAlloy](https://github.com/NexAlloy/NexAlloy) rund um Plug-ins, ähnlich wie [Morphe](https://morphe.software): Das Modul selbst enthält keine Patches mehr. Stattdessen installierst du Patch-Bundles aus Patch-Quellen – so kann jede:r aus dem eigenen Repository Patches für NexAlloy veröffentlichen.

**So geht's:** APK aus dem neuesten Release installieren und das Modul in LSPosed aktivieren. Im Tab *Patches* die voreingestellte Quelle installieren, den Scope-Dialog von LSPosed bestätigen, eine App auswählen, Patches wählen und die App einmal beenden – fertig.

Die Patches liegen im Schwesterprojekt [NexAlloyNext Patches](https://github.com/2eno/NexAlloyNext-Patches).
