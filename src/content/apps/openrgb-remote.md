---
name: OpenRGB Remote
packageName: dev.eno2.openrgbremote
tagline:
  en: Your RGB lighting on your phone
  de: Deine RGB-Beleuchtung auf dem Handy
description:
  en: An unofficial, modern Android client for the OpenRGB SDK server. Controls keyboards, fans and LED strips on the PCs in your network.
  de: Inoffizieller, moderner Android-Client für den OpenRGB SDK Server. Steuert Tastaturen, Lüfter und LED-Streifen an deinen PCs im Netzwerk.
repo: https://github.com/2eno/OpenRGB-Android
status: in-development
accent: '#ff4d6d'
icon: ../../assets/apps/openrgb-remote/icon.png
minAndroid: Android 8.0
tags: [Kotlin, Jetpack Compose, OpenRGB, LAN]
order: 2
featured: true

about:
  en:
    - OpenRGB Remote is an unofficial Android client for [OpenRGB](https://openrgb.org). OpenRGB manages the RGB lighting of keyboards, fans, mainboards and LED strips on your PC – this app connects to it over your network, so you can see and control everything from the couch.
    - The protocol is implemented from scratch based on the public SDK documentation and tested against captures from a real OpenRGB 1.0 server. No OpenRGB code is used, and the app is not an official OpenRGB project.
    - "**Status:** connections, network scan, device list, detail view and onboarding are done. Color control, profiles and effects are next."
  de:
    - OpenRGB Remote ist ein inoffizieller Android-Client für [OpenRGB](https://openrgb.org). OpenRGB verwaltet auf deinem PC die RGB-Beleuchtung von Tastatur, Lüftern, Mainboard und LED-Streifen – diese App verbindet sich über dein Netzwerk damit, sodass du alles vom Sofa aus siehst und steuerst.
    - Das Protokoll ist anhand der öffentlichen SDK-Dokumentation neu implementiert und mit Mitschnitten eines echten OpenRGB-1.0-Servers getestet. Es wird kein OpenRGB-Code verwendet; die App ist kein offizielles OpenRGB-Projekt.
    - "**Stand:** Verbindungen, Netzwerksuche, Geräteliste, Detailansicht und Onboarding sind fertig. Farbsteuerung, Profile und Effekte folgen."

features:
  - title: { en: Finds your PCs, de: PCs automatisch finden }
    description:
      en: Scans your network for OpenRGB servers on port 6742 – or enter the address yourself.
      de: Durchsucht dein Netz nach OpenRGB-Servern auf Port 6742 – oder du gibst die Adresse selbst ein.
  - title: { en: All devices at a glance, de: Alle Geräte auf einen Blick }
    description:
      en: Keyboards, mainboards, graphics cards, mice and ARGB controllers with zones, LED count and current color.
      de: Tastaturen, Mainboards, Grafikkarten, Mäuse und ARGB-Controller mit Zonen, LED-Anzahl und aktueller Farbe.
  - title: { en: Robust connection, de: Robuste Verbindung }
    description:
      en: Its own protocol module for OpenRGB protocol v0–6 with automatic reconnect, backpressure and clear error messages.
      de: Eigenes Protokoll-Modul für OpenRGB-Protokoll v0–6 mit automatischem Reconnect, Backpressure und klaren Fehlermeldungen.
  - title: { en: Guided onboarding, de: Geführtes Onboarding }
    description:
      en: Explains in three steps how to start the SDK server and connect your PC – including a security notice.
      de: Erklärt in drei Schritten, wie du den SDK-Server startest und deinen PC verbindest – inklusive Sicherheitshinweis.
  - title: { en: Bilingual, de: Zweisprachig }
    description:
      en: Fully in English and German, with light and dark theme and a tablet layout.
      de: Komplett auf Deutsch und Englisch, mit hellem und dunklem Design und Tablet-Layout.
  - title: { en: Work in progress, de: In Arbeit }
    description:
      en: Color control, profiles, an effects engine as well as widgets and quick settings tiles are next.
      de: Farbsteuerung, Profile, eine Effekt-Engine sowie Widgets und Schnellkacheln sind als Nächstes dran.

screenshots:
  - src: ../../assets/apps/openrgb-remote/onboarding-1-welcome-de.png
    alt: { en: "Welcome screen (German UI): “Your RGB lighting on your phone” with a color wheel and a security notice", de: "Willkommensbildschirm: „Deine RGB-Beleuchtung auf dem Handy“ mit Farbkreis und Sicherheitshinweis" }
  - src: ../../assets/apps/openrgb-remote/devices-phone-de.png
    alt: { en: Device list of the connected gaming PC with keyboard, mainboard, ARGB controller and graphics card plus color bars, de: Geräteliste des verbundenen Gaming-PCs mit Tastatur, Mainboard, ARGB-Controller und Grafikkarte samt Farbleisten }
  - src: ../../assets/apps/openrgb-remote/onboarding-3-connect-de.png
    alt: { en: Network scan with discovered OpenRGB servers and their addresses, de: Netzwerksuche nach PCs mit gefundenen OpenRGB-Servern und ihren Adressen }
  - src: ../../assets/apps/openrgb-remote/onboarding-2-server-de.png
    alt: { en: Four-step guide to starting the OpenRGB SDK server on the PC, de: Anleitung zum Starten des OpenRGB-SDK-Servers auf dem PC in vier Schritten }
  - src: ../../assets/apps/openrgb-remote/devices-phone-en-dark.png
    alt: { en: Device list in the dark theme with the error “OpenRGB server is not running”, de: Geräteliste im dunklen Design auf Englisch mit Fehlermeldung „OpenRGB server is not running“ }

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: true
  developerReceivesData: false
  dataCollected:
    - type: { en: "Saved PCs (IP address or host name, port, name)", de: "Gespeicherte PCs (IP-Adresse oder Hostname, Port, Name)" }
      purpose: { en: Connecting to your OpenRGB servers, de: Verbindung zu deinen OpenRGB-Servern }
      storage: { en: Locally on the device, de: Lokal auf dem Gerät }
    - type: { en: Addresses in the local network (during a scan), de: Adressen im lokalen Netz (bei der Netzwerksuche) }
      purpose: { en: Finding OpenRGB servers in your Wi-Fi, de: Finden von OpenRGB-Servern in deinem WLAN }
      storage: { en: Only in memory during the scan, de: Nur während der Suche im Arbeitsspeicher }
      optional: true
  permissions:
    - name: INTERNET
      reason: { en: Connecting to OpenRGB servers in your local network., de: Verbindung zu OpenRGB-Servern in deinem lokalen Netz. }
    - name: ACCESS_NETWORK_STATE
      reason: { en: Detecting the current network for scanning and automatic reconnect., de: Erkennen des aktuellen Netzwerks für Suche und automatischen Reconnect. }
  thirdPartyServices: []
  containsAds: false
  encryptedInTransit: false
  transportNote:
    en: The app only talks to the OpenRGB servers in your own network. The OpenRGB SDK protocol has neither encryption nor a password – so only use it in trusted networks or over a VPN and never expose port 6742 to the internet. No data is sent to developer servers or third parties.
    de: Die App spricht ausschließlich mit den OpenRGB-Servern in deinem eigenen Netz. Das OpenRGB-SDK-Protokoll sieht weder Verschlüsselung noch Passwort vor – nutze es daher nur in vertrauenswürdigen Netzen oder über ein VPN und gib Port 6742 nie ins Internet frei. Es werden keine Daten an Server des Entwicklers oder an Dritte gesendet.
  dataDeletion:
    en: Delete saved PCs in the app, or uninstall it / clear its data in Android settings.
    de: Lösche gespeicherte PCs in der App oder deinstalliere sie bzw. lösche in den Android-Einstellungen die App-Daten.
---
