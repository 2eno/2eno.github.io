---
name: OpenRGB Remote
packageName: io.github.openrgbremote
tagline: Deine RGB-Beleuchtung auf dem Handy
description: Inoffizieller, moderner Android-Client für den OpenRGB SDK Server. Steuert Tastaturen, Lüfter und LED-Streifen an deinen PCs im Netzwerk.
repo: https://github.com/2eno/OpenRGB-Android
status: in-development
accent: '#ff4d6d'
icon: ../../assets/apps/openrgb-remote/icon.png
minAndroid: Android 8.0
tags: [Kotlin, Jetpack Compose, OpenRGB, LAN]
order: 2
featured: true

features:
  - title: PCs automatisch finden
    description: Durchsucht dein Netz nach OpenRGB-Servern auf Port 6742 – oder du gibst die Adresse selbst ein.
  - title: Alle Geräte auf einen Blick
    description: Tastaturen, Mainboards, Grafikkarten, Mäuse und ARGB-Controller mit Zonen, LED-Anzahl und aktueller Farbe.
  - title: Robuste Verbindung
    description: Eigenes Protokoll-Modul für OpenRGB-Protokoll v0–6 mit automatischem Reconnect, Backpressure und klaren Fehlermeldungen.
  - title: Geführtes Onboarding
    description: Erklärt in drei Schritten, wie du den SDK-Server startest und deinen PC verbindest – inklusive Sicherheitshinweis.
  - title: Zweisprachig
    description: Komplett auf Deutsch und Englisch, mit hellem und dunklem Design und Tablet-Layout.
  - title: In Arbeit
    description: Farbsteuerung, Profile, eine Effekt-Engine sowie Widgets und Schnellkacheln sind als Nächstes dran.

screenshots:
  - src: ../../assets/apps/openrgb-remote/onboarding-1-welcome-de.png
    alt: 'Willkommensbildschirm: „Deine RGB-Beleuchtung auf dem Handy“ mit Farbkreis und Sicherheitshinweis'
  - src: ../../assets/apps/openrgb-remote/devices-phone-de.png
    alt: Geräteliste des verbundenen Gaming-PCs mit Tastatur, Mainboard, ARGB-Controller und Grafikkarte samt Farbleisten
  - src: ../../assets/apps/openrgb-remote/onboarding-3-connect-de.png
    alt: Netzwerksuche nach PCs mit gefundenen OpenRGB-Servern und ihren Adressen
  - src: ../../assets/apps/openrgb-remote/onboarding-2-server-de.png
    alt: Anleitung zum Starten des OpenRGB-SDK-Servers auf dem PC in vier Schritten
  - src: ../../assets/apps/openrgb-remote/devices-phone-en-dark.png
    alt: Geräteliste im dunklen Design auf Englisch mit Fehlermeldung „OpenRGB server is not running“

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: true
  developerReceivesData: false
  dataCollected:
    - type: Gespeicherte PCs (IP-Adresse oder Hostname, Port, Name)
      purpose: Verbindung zu deinen OpenRGB-Servern
      storage: Lokal auf dem Gerät
    - type: Adressen im lokalen Netz (bei der Netzwerksuche)
      purpose: Finden von OpenRGB-Servern in deinem WLAN
      storage: Nur während der Suche im Arbeitsspeicher
      optional: true
  permissions:
    - name: INTERNET
      reason: Verbindung zu OpenRGB-Servern in deinem lokalen Netz.
    - name: ACCESS_NETWORK_STATE
      reason: Erkennen des aktuellen Netzwerks für Suche und automatischen Reconnect.
  thirdPartyServices: []
  containsAds: false
  encryptedInTransit: false
  transportNote: Die App spricht ausschließlich mit den OpenRGB-Servern in deinem eigenen Netz. Das OpenRGB-SDK-Protokoll sieht weder Verschlüsselung noch Passwort vor – nutze es daher nur in vertrauenswürdigen Netzen oder über ein VPN und gib Port 6742 nie ins Internet frei. Es werden keine Daten an Server des Entwicklers oder an Dritte gesendet.
  dataDeletion: Lösche gespeicherte PCs in der App oder deinstalliere sie bzw. lösche in den Android-Einstellungen die App-Daten.
---

OpenRGB Remote ist ein inoffizieller Android-Client für [OpenRGB](https://openrgb.org). OpenRGB verwaltet auf deinem PC die RGB-Beleuchtung von Tastatur, Lüftern, Mainboard und LED-Streifen – diese App verbindet sich über dein Netzwerk damit, sodass du alles vom Sofa aus siehst und steuerst.

Das Protokoll ist anhand der öffentlichen SDK-Dokumentation neu implementiert und mit Mitschnitten eines echten OpenRGB-1.0-Servers getestet. Es wird kein OpenRGB-Code verwendet; die App ist kein offizielles OpenRGB-Projekt.

**Stand:** Verbindungen, Netzwerksuche, Geräteliste, Detailansicht und Onboarding sind fertig. Farbsteuerung, Profile und Effekte folgen.
