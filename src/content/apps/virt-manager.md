---
name: Virt Manager for Android
packageName: dev.eno2.virtmanager
tagline: virt-manager für die Hosentasche
description: Native Android-Version von virt-manager. Verwalte KVM/QEMU- und andere libvirt-Hosts per SSH – mit Live-Graphen, Snapshots, VNC- und serieller Konsole.
downloadUrl: https://github.com/2eno/virt-manager-android/releases
repo: https://github.com/2eno/virt-manager-android
status: beta
accent: '#3b6fe0'
icon: ../../assets/apps/virt-manager/icon.png
minAndroid: Android 8.0
tags: [Kotlin, Jetpack Compose, libvirt, SSH]
order: 1
featured: true

features:
  - title: Alle Hosts im Griff
    description: Mehrere Verbindungen, qemu:///system und session, LXC, Xen oder eigene libvirt-URIs. Login per Passwort oder SSH-Schlüssel – Ed25519-Schlüssel lassen sich direkt in der App erzeugen.
  - title: Live-Leistungsdaten
    description: CPU, Arbeitsspeicher, Disk-I/O und Netzwerk aller VMs, alle zwei Sekunden aktualisiert und gebündelt in einem einzigen SSH-Roundtrip.
  - title: Konsolen eingebaut
    description: Grafische Konsole mit eigenem VNC-Client über SSH-Port-Forwarding und serielle Konsole über virsh console.
  - title: Wie das Original
    description: Hardware-Detailseiten, „Hardware hinzufügen“, XML-Editor, Snapshots, Netzwerke, Speicherpools und ein Assistent für neue VMs.
  - title: Jump-Hosts
    description: Wie ProxyJump bei OpenSSH – auch über mehrere Stationen, mit eigenem Login und Host-Key je Hop.
  - title: Sicher von Haus aus
    description: Host-Keys nach Trust-on-first-use mit Fingerprint-Bestätigung, gespeicherte Zugangsdaten AES-GCM-verschlüsselt im Android Keystore, keine App-Backups.

screenshots:
  - src: ../../assets/apps/virt-manager/01-connections.png
    alt: Verbindungsliste mit zwei gespeicherten Hosts, „homelab“ und „office-server“
  - src: ../../assets/apps/virt-manager/03-machines.png
    alt: Liste der virtuellen Maschinen mit Status, Filter und CPU- und Speicher-Verlaufsgraphen
  - src: ../../assets/apps/virt-manager/07-vm-overview.png
    alt: Statusseite der VM „postgres-db“ mit Kacheln für CPU, Speicher, Disk-I/O und Netzwerk
  - src: ../../assets/apps/virt-manager/04-host-overview.png
    alt: Host-Übersicht mit CPU- und Speicherauslastung sowie Angaben zu Gästen und Hardware
  - src: ../../assets/apps/virt-manager/09-new-vm-media.png
    alt: Assistent für eine neue VM, Schritt 1 von 4 mit Name, Betriebssystem und Installationsmedium
  - src: ../../assets/apps/virt-manager/03-machines-dark.png
    alt: VM-Liste im dunklen Design

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: true
  developerReceivesData: false
  dataCollected:
    - type: Verbindungsprofile (Hostname, Port, Benutzername, libvirt-URI)
      purpose: Verbindung zu deinen libvirt-Hosts
      storage: Lokal auf dem Gerät
    - type: Passwörter und private SSH-Schlüssel
      purpose: Anmeldung an deinen Hosts
      storage: Lokal, AES-GCM-verschlüsselt mit Schlüssel im Android Keystore
      optional: true
    - type: Bekannte Host-Keys (Fingerprints)
      purpose: Schutz vor Man-in-the-Middle-Angriffen
      storage: Lokal auf dem Gerät
  permissions:
    - name: INTERNET
      reason: SSH-Verbindungen zu den von dir eingetragenen Hosts.
    - name: ACCESS_NETWORK_STATE
      reason: Erkennen, ob eine Netzwerkverbindung besteht, um Verbindungen sauber wiederaufzubauen.
  thirdPartyServices: []
  containsAds: false
  encryptedInTransit: true
  transportNote: Die App verbindet sich ausschließlich mit den Hosts, die du selbst einträgst, und zwar immer über SSH (verschlüsselt). Grafische und serielle Konsolen laufen durch denselben SSH-Tunnel. Es gibt keine Server des Entwicklers, über die Daten laufen.
  dataDeletion: Lösche Verbindungen in der App oder deinstalliere sie bzw. lösche in den Android-Einstellungen die App-Daten. Die App-Daten sind vom Android-Backup ausgenommen, es bleiben also keine Kopien in einer Cloud.
---

Virt Manager for Android bringt [virt-manager](https://virt-manager.org/) als native App mit Material 3 und Jetpack Compose aufs Handy und Tablet: Gäste starten und stoppen, Leistungsdaten live verfolgen, neue VMs anlegen, Snapshots machen und die grafische oder serielle Konsole öffnen.

**So funktioniert es:** Wie das Desktop-Original mit `qemu+ssh://` tunnelt die App libvirt über SSH – nur ohne libvirt auf Android mitzuliefern. Sie öffnet eine SSH-Sitzung zum Host, steuert dort das vorhandene `virsh` und wandelt Ausgaben und Domain-XML in typisierte Modelle um. Auf dem Host muss also nichts zusätzlich installiert werden.

Die Screenshots stammen aus automatisierten Tests, die die echte App über echtes SSH gegen den Test-Treiber von libvirt steuern.
