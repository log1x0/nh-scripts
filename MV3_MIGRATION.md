# NH Scripts - MV3 Erweiterung

Diese Version wurde auf Manifest Version 3 (MV3) aktualisiert, die der neue Standard für Chrome-Erweiterungen ist.

## Was ist neu in der MV3-Version?

### Hauptänderungen:

1. **manifest.json** - Neues Format für MV3
   - Manifest Version 3
   - Vereinfachte Permissions
   - Service Worker statt Background Page
   - Content Script für die Website-Injektionen

2. **chrome.storage statt localStorage**
   - MV3-kompatible Speicherverwaltung
   - `StorageHelper` Klasse für einfacheren Zugriff
   - Asynchrone Operationen

3. **Content Script** (`nh-scripts-mv3.js`)
   - Optimiert für MV3
   - Keine direkten DOM-Manipulationen via eval
   - Alle localStorage-Calls → chrome.storage.local
   - Alle Funktionen sind async wo nötig

4. **Service Worker** (`background.js`)
   - Minimal, da Funktionalität im Content Script enthalten ist
   - Kann für zukünftige Erweiterungen genutzt werden

## Installation

### Entwickler-Installation (Unpacked):

1. Öffne Chrome → `chrome://extensions/`
2. Aktiviere "Entwicklermodus" (oben rechts)
3. Klick auf "Entpackte Erweiterung laden"
4. Wähle das Projektverzeichnis aus

### Features nach der Installation:

- ✅ Pepe-Emoji-Sammlung im NH-Shoutbox
- ✅ Such-/Filter-Funktionalität
- ✅ Ausschlussregeln (Regex)
- ✅ Split-Shoutbox-Funktion
- ✅ Custom Theme Support
- ✅ 4K-Image-Replacement

## MV3-Kompatibilität

Diese Erweiterung ist vollständig MV3-konform:

- ✅ Keine eval() oder inline scripts
- ✅ Sichere Speicherverwaltung
- ✅ Keine Sicherheitswarnungen
- ✅ Zukunftssicher für Chrome/Chromium

## Unterschiede zum Original-UserScript

| Feature        | UserScript             | MV3-Erweiterung      |
| -------------- | ---------------------- | -------------------- |
| Installation   | @match in Tampermonkey | manifest.json        |
| Speicher       | localStorage           | chrome.storage.local |
| Berechtigungen | @grant none            | "storage" permission |
| Hintergrund    | Keiner                 | Service Worker       |
| Async Ops      | Synchron               | Promise-basiert      |

## Troubleshooting

**"Erweiterung konnte nicht geladen werden"**

- Stelle sicher, dass alle Dateien vorhanden sind
- Überprüfe die Browser-Konsole auf Fehler
- Lade die Erweiterung neu

**Settings werden nicht gespeichert**

- Überprüfe die Storage-Berechtigung
- Lösche Cache/Cookies und versuche es erneut

**Emojis erscheinen nicht**

- Stelle sicher, dass du auf https://newheaven.nl/* bist
- Überprüfe, dass du in einem Iframe (Shoutbox) bist
- Lade die Seite neu

## Version

- Version: 1.0.11
- MV3 Release: 2024
- Original Autor: log1x0
- Repository: https://github.com/log1x0/nh-scripts
