# 🚂 Railroad Demo - Full Ecosystem Proof

> **The undeniable demo.** All three Railroad packages working together across all loading modes.

**Live proof that Railroad works as:**
- ✅ Direct CDN usage (`<script>` tags)
- ✅ npm installation (`npm install`)
- ✅ Webpack bundled builds

---

## The Railroad Ecosystem

This demo proves three packages work together seamlessly:

1. **[railroad-runtime](https://github.com/faroncoder/railroad-runtime)** v1.0.0  
   Governed execution substrate - behaviors survive DOM swaps

2. **[railroad-toasts](https://github.com/faroncoder/railroad-toasts)** v1.0.1  
   Toast notifications and confirm dialogs

3. **[railroad-loader](https://github.com/faroncoder/railroad-loader)** v1.0.1  
   DNA helix loader with progress messages

---

## 🎯 The Killer Demo Flow

1. **Click a toast button** → Toast appears ✅
2. **Click "Load Panel A"** → Content swaps ✅
3. **Click toast button IN swapped content** → Still works ✅  
   *(This is where most libraries fail)*
4. **Click "Load Panel B"** → Different content ✅
5. **Click toast button** → Still works ✅
6. **Click "Manual DOM Update"** → Manual `innerHTML` ✅
7. **Click toast button** → Still works ✅
8. **Look at debug panel** → See `rebind()` sources tracked ✅

**Result:** Behaviors persist through HTMX swaps, manual DOM updates, and dynamic content loads.

---

## 🚀 Quick Start

### Option 1: CDN (Fastest)

```bash
# Just open index.html in a browser
open index.html
```

The CDN version loads packages from unpkg:
- `https://unpkg.com/railroad-runtime@1.0.0/dist/railroad-runtime.min.js`
- `https://unpkg.com/railroad-toasts@1.0.1/dist/toasts.min.js`
- `https://unpkg.com/railroad-loader@1.0.1/dist/loader.min.js`

### Option 2: npm (Local Server)

```bash
npm install
npm start
```

Opens at `http://localhost:3000` with packages from `node_modules/`.

### Option 3: Webpack Build

```bash
npm install
npm run build
```

Creates production bundle in `dist/` with all packages bundled.

**Dev mode with hot reload:**
```bash
npm run dev
```

---

## 📦 What This Proves

### ✅ Works Across Loading Modes

| Mode | Loads From | Badge Color | Verified |
|------|------------|-------------|----------|
| CDN | unpkg.com | Green | ✅ |
| npm | node_modules/ | Blue | ✅ |
| Webpack | bundled JS | Purple | ✅ |

### ✅ Behaviors Survive DOM Changes

- **HTMX swaps** → ✅ Auto-rebind via `htmx:afterSwap`
- **Manual `innerHTML`** → ✅ Explicit `RAILROAD.rebind()` call
- **Dynamic content** → ✅ Buttons work in swapped content
- **Nested updates** → ✅ Deep content still functional

### ✅ Zero Framework Lock-In

- No React, Vue, or Angular required
- No build step required (CDN mode)
- No configuration required
- Works with HTMX, Stimulus, Alpine, or vanilla JS

---

## 🔍 Debug Panel Features

The demo includes a live debug panel showing:

- **Packages Loaded:** runtime, toasts, loader
- **Last Rebind Source:** htmx:afterSwap, manual-demo-update, etc.
- **Total Rebinds:** Count of rebind operations
- **Runtime Ready:** Initialization status

This makes the invisible **visible and traceable**.

---

## 🧪 What Makes This "Undeniable"

1. **Visible proof** — You can SEE behaviors working after swaps
2. **Random IDs** — Proves content is fresh (not cached)
3. **Debug panel** — Shows exact rebind sources
4. **Three modes** — CDN, npm, webpack all work identically
5. **Public packages** — Anyone can verify on npm/unpkg
6. **30 seconds** — Complete understanding in under a minute

---

## 📊 Package Sizes

| Package | Size (minified) | Dependencies |
|---------|-----------------|--------------|
| railroad-runtime | 2 KB | 0 |
| railroad-toasts | 4.5 KB | 0 |
| railroad-loader | 2.8 KB | 0 |
| **Total** | **9.3 KB** | **0** |

Entire ecosystem is under 10KB with zero dependencies.

---

## 🎨 Use Cases Demonstrated

### Toast Notifications
- Success, error, warning, info types
- Auto-dismiss or click-to-dismiss
- Smooth slide-in animations

### Loader Management
- Show/hide programmatically
- Custom progress messages
- Minimum display duration (no flash)

### Runtime Governance
- Explicit rebind after DOM mutations
- Traceable execution sources
- Idempotent behavior attachment

---

## 🔗 Links

- **Railroad Runtime:** https://github.com/faroncoder/railroad-runtime
- **Railroad Toasts:** https://github.com/faroncoder/railroad-toasts
- **Railroad Loader:** https://github.com/faroncoder/railroad-loader

---

## 📝 License

MIT © Faron Wheeler

---

## 🚂 Philosophy

> **Governed execution of intent.**
>
> Other libraries detect DOM changes automatically.  
> Railroad enforces explicit governance — every mutation must declare itself.

This demo proves the philosophy works in practice.
