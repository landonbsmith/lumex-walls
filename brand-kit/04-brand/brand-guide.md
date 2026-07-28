# Lumex Walls — Brand Guide

**Bigger Screens. Bolder Experiences.**

---

## Logo

| Lockup | File | Use it for |
|---|---|---|
| Primary | `lumex-logo-primary.svg` | Homepage hero, presentation covers, anywhere the tagline should be read |
| Horizontal | `lumex-logo-horizontal.svg` | Site headers, email signatures, documents — the everyday workhorse |
| Stacked | `lumex-logo-stacked.svg` | Square or narrow spaces: sponsor walls, merch, tall banners |
| Mark only | `lumex-mark.svg` | Favicons, app icons, social avatars, small badges |
| Wordmark only | `lumex-wordmark.svg` | Wide, short spaces where the mark won't clear the height |

Each comes in three finishes: full color (default), `-white` for photos and dark
backgrounds, and `-black` for light or single-color print.

**Clear space.** Keep empty space around the logo equal to the height of the "L"
in LUMEX on all four sides. Nothing crosses that boundary.

**Minimum size.** Horizontal lockup: 120px wide on screen, 1.25in in print.
Below that, switch to the mark alone.

**Don't:** recolor the wordmark, stretch or skew it, add drop shadows or outlines,
rotate it, place the full-color version on a light background, or rebuild the
lockup by moving the mark and wordmark apart.

---

## Color

| Name | Hex | Where it goes |
|---|---|---|
| Electric Cyan | `#00E5FF` | Accents, links, active states, glow edges |
| Ultra Blue | `#0066FF` | Primary buttons, gradient core |
| Vivid Purple | `#9B00FF` | Gradient endpoint, secondary accent |
| Hot Magenta | `#FF00BB` | Energy highlights — use sparingly |
| Signal Orange | `#FF7A00` | Warm accent — the rarest color in the system |
| Pure White | `#FFFFFF` | Headlines and primary text |
| Void Black | `#05060F` | Page background |
| Panel | `#0B0E1C` | Cards and elevated surfaces |
| Border | `#1E2438` | Dividers and card edges |
| Muted | `#8FA0BC` | Body copy and captions |

**Signature gradients**

- Primary — `135deg, #00E5FF → #0066FF → #9B00FF`. Buttons, gradient text, key accents.
- Energy — `120deg, #FF7A00 → #FF00BB → #9B00FF`. Ambient glows and background sweeps only.

This is a dark-first identity. Build on Void Black and let the neon do the work.
When one section needs to go light, use white with black type and the `-black` logo —
don't invert the whole palette.

**Contrast.** Cyan on Void Black passes AA comfortably. Ultra Blue on Void Black does
not pass for body text — use it for buttons, borders, and large display type, and keep
paragraph copy in Muted or White.

---

## Typography

**Exo 2** carries the whole system.
`https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800&display=swap`

| Role | Weight | Treatment |
|---|---|---|
| H1 | 800 | Uppercase, tight leading (1.0–1.1), letter-spacing −0.02em |
| H2 | 700 | Uppercase, letter-spacing −0.01em |
| H3 | 600 | Sentence case, letter-spacing +0.02em |
| Eyebrow | 600 | Uppercase, letter-spacing +0.28em, in Electric Cyan |
| Body | 400 | Sentence case, line-height 1.65, in Muted |
| Tagline | 500 | Uppercase, letter-spacing +0.34em |

Fallback stack: `"Exo 2", "Segoe UI", system-ui, -apple-system, sans-serif`.

---

## Voice

Short declaratives. Two or three words, then a period. The tagline sets the pattern
and the headlines follow it: *Bigger screens. Bolder experiences.* / *Brighter. Bolder. Better.*

Lead with what the audience gets, not with specs. Specs earn their place further down
the page, where a buyer is comparing options and wants pixel pitch and nit ratings.

---

## Backgrounds and texture

Five textures ship in `05-textures/`. One per view, at low opacity, behind content —
never two at once, never at full strength.

- **LED dot grid** — the closest thing to a signature. It echoes the actual pixel
  matrix of a wall. Best behind heroes.
- **Hexagon tile** — seamless; good for wide, quiet section backgrounds.
- **Blue arc sweep / Energy wave** — directional light. Use to lead the eye toward a CTA.
- **Particle wave** — busiest of the five. Reserve it for full-bleed section breaks.
