---
name: Virt Manager for Android
packageName: dev.eno2.virtmanager
tagline:
  en: virt-manager for your pocket
  de: virt-manager für die Hosentasche
description:
  en: A native Android port of virt-manager. Manage KVM/QEMU and other libvirt hosts over SSH – with live graphs, snapshots, VNC and serial console.
  de: Native Android-Version von virt-manager. Verwalte KVM/QEMU- und andere libvirt-Hosts per SSH – mit Live-Graphen, Snapshots, VNC- und serieller Konsole.
downloadUrl: https://github.com/2eno/virt-manager-android/releases
repo: https://github.com/2eno/virt-manager-android
status: beta
accent: '#3b6fe0'
icon: ../../assets/apps/virt-manager/icon.png
minAndroid: Android 8.0
tags: [Kotlin, Jetpack Compose, libvirt, SSH]
order: 1
featured: true

about:
  en:
    - Virt Manager for Android brings [virt-manager](https://virt-manager.org/) to phones and tablets as a native app with Material 3 and Jetpack Compose – start and stop guests, follow performance data live, create VMs, take snapshots and open the graphical or serial console.
    - "**How it works:** Like the desktop original with `qemu+ssh://`, the app tunnels libvirt over SSH – just without shipping libvirt for Android. It opens an SSH session to the host, drives the host’s own `virsh` and parses its output and domain XML into typed models. Nothing extra needs to be installed on the host."
    - The screenshots come from automated tests that drive the real app over real SSH against libvirt’s built-in test driver.
  de:
    - Virt Manager for Android bringt [virt-manager](https://virt-manager.org/) als native App mit Material 3 und Jetpack Compose aufs Handy und Tablet – Gäste starten und stoppen, Leistungsdaten live verfolgen, neue VMs anlegen, Snapshots machen und die grafische oder serielle Konsole öffnen.
    - "**So funktioniert es:** Wie das Desktop-Original mit `qemu+ssh://` tunnelt die App libvirt über SSH – nur ohne libvirt auf Android mitzuliefern. Sie öffnet eine SSH-Sitzung zum Host, steuert dort das vorhandene `virsh` und wandelt Ausgaben und Domain-XML in typisierte Modelle um. Auf dem Host muss nichts zusätzlich installiert werden."
    - Die Screenshots stammen aus automatisierten Tests, die die echte App über echtes SSH gegen den Test-Treiber von libvirt steuern.

features:
  - title: { en: All your hosts, de: Alle Hosts im Griff }
    description:
      en: Multiple connections, qemu:///system and session, LXC, Xen or custom libvirt URIs. Password or SSH key login – Ed25519 keys can be generated right in the app.
      de: Mehrere Verbindungen, qemu:///system und session, LXC, Xen oder eigene libvirt-URIs. Login per Passwort oder SSH-Schlüssel – Ed25519-Schlüssel lassen sich direkt in der App erzeugen.
  - title: { en: Live performance data, de: Live-Leistungsdaten }
    description:
      en: CPU, memory, disk I/O and network of every VM, refreshed every two seconds and batched into a single SSH round trip.
      de: CPU, Arbeitsspeicher, Disk-I/O und Netzwerk aller VMs, alle zwei Sekunden aktualisiert und gebündelt in einem einzigen SSH-Roundtrip.
  - title: { en: Built-in consoles, de: Konsolen eingebaut }
    description:
      en: Graphical console with its own VNC client over SSH port forwarding, and a serial console via virsh console.
      de: Grafische Konsole mit eigenem VNC-Client über SSH-Port-Forwarding und serielle Konsole über virsh console.
  - title: { en: Just like the original, de: Wie das Original }
    description:
      en: Hardware details pages, “Add Hardware”, XML editor, snapshots, networks, storage pools and a new-VM wizard.
      de: Hardware-Detailseiten, „Hardware hinzufügen“, XML-Editor, Snapshots, Netzwerke, Speicherpools und ein Assistent für neue VMs.
  - title: { en: Jump hosts, de: Jump-Hosts }
    description:
      en: Like OpenSSH’s ProxyJump – across several hops, each with its own login and host key.
      de: Wie ProxyJump bei OpenSSH – auch über mehrere Stationen, mit eigenem Login und Host-Key je Hop.
  - title: { en: Secure by default, de: Sicher von Haus aus }
    description:
      en: Trust-on-first-use host keys with fingerprint confirmation, stored credentials encrypted with AES-GCM in the Android Keystore, no app backups.
      de: Host-Keys nach Trust-on-first-use mit Fingerprint-Bestätigung, gespeicherte Zugangsdaten AES-GCM-verschlüsselt im Android Keystore, keine App-Backups.

screenshots:
  - src: ../../assets/apps/virt-manager/01-connections.png
    alt: { en: Connection list with two saved hosts, “homelab” and “office-server”, de: Verbindungsliste mit zwei gespeicherten Hosts, „homelab“ und „office-server“ }
  - src: ../../assets/apps/virt-manager/03-machines.png
    alt: { en: List of virtual machines with status, filters and CPU and memory sparklines, de: Liste der virtuellen Maschinen mit Status, Filter und CPU- und Speicher-Verlaufsgraphen }
  - src: ../../assets/apps/virt-manager/07-vm-overview.png
    alt: { en: Status page of the VM “postgres-db” with tiles for CPU, memory, disk I/O and network, de: Statusseite der VM „postgres-db“ mit Kacheln für CPU, Speicher, Disk-I/O und Netzwerk }
  - src: ../../assets/apps/virt-manager/04-host-overview.png
    alt: { en: Host overview with CPU and memory usage plus guest and hardware details, de: Host-Übersicht mit CPU- und Speicherauslastung sowie Angaben zu Gästen und Hardware }
  - src: ../../assets/apps/virt-manager/09-new-vm-media.png
    alt: { en: New VM wizard, step 1 of 4, with name, operating system and install media, de: Assistent für eine neue VM, Schritt 1 von 4 mit Name, Betriebssystem und Installationsmedium }
  - src: ../../assets/apps/virt-manager/03-machines-dark.png
    alt: { en: VM list in the dark theme, de: VM-Liste im dunklen Design }

privacy:
  lastUpdated: 2026-11-09
  collectsPersonalData: true
  developerReceivesData: false
  dataCollected:
    - type: { en: Connection profiles (host name, port, user name, libvirt URI), de: Verbindungsprofile (Hostname, Port, Benutzername, libvirt-URI) }
      purpose: { en: Connecting to your libvirt hosts, de: Verbindung zu deinen libvirt-Hosts }
      storage: { en: Locally on the device, de: Lokal auf dem Gerät }
    - type: { en: Passwords and private SSH keys, de: Passwörter und private SSH-Schlüssel }
      purpose: { en: Signing in to your hosts, de: Anmeldung an deinen Hosts }
      storage: { en: Locally, AES-GCM encrypted with a key in the Android Keystore, de: Lokal, AES-GCM-verschlüsselt mit Schlüssel im Android Keystore }
      optional: true
    - type: { en: Known host keys (fingerprints), de: Bekannte Host-Keys (Fingerprints) }
      purpose: { en: Protection against man-in-the-middle attacks, de: Schutz vor Man-in-the-Middle-Angriffen }
      storage: { en: Locally on the device, de: Lokal auf dem Gerät }
  permissions:
    - name: INTERNET
      reason: { en: SSH connections to the hosts you add., de: SSH-Verbindungen zu den von dir eingetragenen Hosts. }
    - name: ACCESS_NETWORK_STATE
      reason: { en: Detecting whether a network connection is available to re-establish connections cleanly., de: Erkennen, ob eine Netzwerkverbindung besteht, um Verbindungen sauber wiederaufzubauen. }
  thirdPartyServices: []
  containsAds: false
  encryptedInTransit: true
  transportNote:
    en: The app only connects to the hosts you add yourself, always over SSH (encrypted). Graphical and serial consoles run through the same SSH tunnel. There are no developer servers that data passes through.
    de: Die App verbindet sich ausschließlich mit den Hosts, die du selbst einträgst, und zwar immer über SSH (verschlüsselt). Grafische und serielle Konsolen laufen durch denselben SSH-Tunnel. Es gibt keine Server des Entwicklers, über die Daten laufen.
  dataDeletion:
    en: Delete connections in the app, or uninstall it / clear its data in Android settings. App data is excluded from Android backups, so no copies remain in a cloud.
    de: Lösche Verbindungen in der App oder deinstalliere sie bzw. lösche in den Android-Einstellungen die App-Daten. Die App-Daten sind vom Android-Backup ausgenommen, es bleiben also keine Kopien in einer Cloud.
---
