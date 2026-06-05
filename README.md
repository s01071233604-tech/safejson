# SafeJSON — The JSON tool that never sees your data

A privacy-first JSON formatter. Format, validate, and debug JSON entirely in your browser. No server. No ads. No tracking.

## Why SafeJSON?

In November 2025, popular online JSON tools were caught leaking over 80,000 credentials — AWS keys, GitHub tokens, and banking details. Around the same time, the most popular JSON Formatter browser extension (2M+ users) was sold, closed-sourced, and injected with adware.

SafeJSON is different: **all processing happens in your browser. Zero network requests.**

## Features

### Web Tool ([safejson.vercel.app](https://safejson.vercel.app))
- Instant JSON formatting with syntax highlighting
- Collapsible tree view for exploring nested structures
- Error detection with line and column numbers
- Copy / Download formatted JSON
- Dark theme by default
- Cmd+Enter to format

### Browser Extension
- Auto-detects JSON responses on any URL
- Syntax highlighting: strings (green), numbers (gold), booleans (cyan), null (gray)
- One-click Copy / Raw toggle
- "Open in SafeJSON" button for full tree view inspection
- Available on Edge Add-ons

## How to verify the privacy claim

1. Open [safejson.vercel.app](https://safejson.vercel.app)
2. Open DevTools → Network tab
3. Paste any JSON
4. Observe: **zero network requests**

All formatting runs client-side. Your data never leaves your browser.

## Install the extension

### From Edge Add-ons Store
Search "SafeJSON" in the Edge Add-ons store.

### Manual install (Chrome / Edge / Brave)
1. Download or clone this repository
2. Open `chrome://extensions` (or `edge://extensions`)
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the `extension/` folder

## Tech stack

- [Next.js 16](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Phosphor Icons](https://phosphoricons.com)
- Deployed on [Vercel](https://vercel.com)

## License

MIT
