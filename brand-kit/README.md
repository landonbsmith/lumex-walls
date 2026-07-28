# Lumex Walls — Brand Asset Kit

Everything from the single brand board image, split into individual, usable files.

**Two kinds of files are in here, and the difference matters:**

- **Rebuilt as vectors (SVG).** The logo, icons, app icon, textures, business card,
  social post, and hero banner were redrawn from scratch as true vector art. These are
  infinitely scalable, editable, and production-ready. Use these on the website.
- **Cropped from the original image (PNG).** The flyer, vehicle wrap, email signature
  design, and the LED-wall photography were cut directly out of the board. The board is
  1536×1024 total, so each of those pieces is only 200–400px wide at native size.
  They're upscaled 4× here, but they are **reference and mockup material, not
  production art**. Don't put them on a live page as-is.

---

## Folders

### `01-logo/`
15 SVG lockups — primary, horizontal, stacked, mark, wordmark — each in color, white,
and black. Plus `png/` with transparent exports at web sizes (600w–2400w).

The wordmark is set in Exo 2 Bold and **converted to outlines**, so the SVGs render
identically everywhere without needing the font installed.

### `02-icons/`
All six feature icons as SVG (gradient and white versions) plus 128px and 256px PNGs.
Stroke-based, 64×64 viewBox, so they stay crisp at any size and can be recolored by
editing one gradient.

### `03-app-icon/`
`favicon.svg`, multi-resolution `favicon.ico`, `app-icon-180.png` (Apple touch),
192/512 (Android + PWA), and 1024 for the app stores. Square and circle variants.

### `04-brand/`
`colors.css` (custom properties), `colors.scss`, `colors.json`, a Tailwind config
snippet, `typography.css`, the palette as SVG/PNG, and `brand-guide.md` — usage rules,
clear space, contrast notes, and voice.

### `05-textures/`
Five backgrounds rebuilt as SVG (scalable, tiny file size) with 1920px PNG exports.
`from-original-board/` holds the upscaled crops of the originals for reference.

### `06-marketing/`
Business card front and back as print-ready SVG (3.5×2in trim with 0.125in bleed,
300dpi), the social post at 1080×1080, and the hero banner at 1920×900 — all editable
vectors with real, replaceable text. `reference-from-original-board/` has the flyer,
vehicle wrap, and email signature crops.

### `07-web/`
A working starter site: `index.html`, `lumex.css`, `email-signature.html`,
`head-snippet.html`, `site.webmanifest`, and an `assets/` folder already wired up.
Open `index.html` in a browser to see it.

### `08-source-crops/`
Every region of the original board, cropped and upscaled, so nothing is lost.

---

## Getting started

1. Open `07-web/index.html` in a modern browser — that's the brand assembled and running.
2. Copy `07-web/assets/` into your own project and paste `07-web/head-snippet.html`
   into your `<head>`.
3. Pull color tokens from `04-brand/colors.css` rather than hardcoding hex values.

## Before you launch

- **Placeholder contact details.** "Jordan Smith / 801.555.1234 / jordan@lumexwalls.com"
  appears on the business card and email signature. Swap in the real ones.
- **The email signature needs a hosted logo.** Mail clients can't read local files or
  SVG. Upload `07-web/assets/logo-signature.png` somewhere public and replace the
  placeholder URL in `email-signature.html`.
- **Replace the LED-wall photography.** The concert imagery in the hero and social
  templates is AI-generated at low resolution. The starter site uses a CSS-rendered
  LED panel instead of that photo for exactly this reason — swap in photos of real
  installs as soon as you have them. Nothing sells a video wall like a video wall.
- **The flyer and vehicle wrap need rebuilding** if you plan to print them. At their
  source resolution they'll look soft on anything larger than a phone screen. The SVG
  business card shows the pattern to follow.
