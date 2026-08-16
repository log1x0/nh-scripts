## nh-scripts

Scripts for the NH shoutbox with Pepe emoji integration and customization features.

Available in two versions:

- **Tampermonkey UserScript** (recommended for cross-browser support)
- **Chrome MV3 Extension** (native Chrome extension, future-proof)

---

## Installation

### Option 1: Tampermonkey UserScript (Recommended)

**Works with:** Chrome, Firefox, Safari, Edge, and other browsers supporting Tampermonkey.

1. Install the **Tampermonkey** extension:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
   - [Safari](https://apps.apple.com/app/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/)

2. Click on the `Raw` button to install the script:
   - [javascript/nh-script.js](https://github.com/log1x0/nh-scripts/blob/master/javascript/nh-script.js)

3. Tampermonkey will recognize the script and prompt you to install it.

4. The script is automatically updated by Tampermonkey when new versions are released.

---

### Option 2: Chrome MV3 Extension (Native)

**Works with:** Chrome, Edge, Chromium-based browsers (MV3 support required).

**Advantages:** Native integration, better performance, no third-party script manager needed.

1. Clone or download this repository

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in top-right corner)

4. Click "Load unpacked"

5. Select the `nh-scripts` folder from your download

6. The extension is now installed! 🎉

**Manual updates:** Check the GitHub repository for new versions and reload the extension (`Ctrl+R` on the extension page).

---

## Version Comparison

| Feature             | UserScript                          | MV3 Extension               |
| ------------------- | ----------------------------------- | --------------------------- |
| **Browser Support** | Chrome, Firefox, Safari, Edge, etc. | Chrome, Edge, Chromium only |
| **Installation**    | One-click from GitHub               | Manual unpacking            |
| **Auto-updates**    | ✅ Automatic via Tampermonkey       | ❌ Manual check required    |
| **Performance**     | Good                                | Excellent (native)          |
| **Storage**         | localStorage                        | chrome.storage.local        |
| **Dependencies**    | Tampermonkey                        | None                        |
| **Maintenance**     | Long-term support                   | Future-proof (MV3 standard) |

---

## Features

- 🎨 Pepe emoji collection in the shoutbox
- 🔍 Search/filter functionality for emojis
- 🚫 Exclude messages by regex pattern
- 🔀 Split shoutbox by user
- 🎭 Custom theme support
- 4️⃣ 4K image replacement

---

## License

MIT
