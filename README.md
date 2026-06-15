# LuxeWash Estate Care — Website

Production-ready website converted from Google Stitch design. Pure HTML/CSS/Vanilla JS — no frameworks, no build step required.

---

## File Structure

```
/
├── index.html          ← Main page (all sections)
├── styles.css          ← All styles (mobile-first, CSS custom properties)
├── script.js           ← All interactions (no dependencies)
├── assets/
│   ├── images/         ← Drop client photos here
│   └── icons/          ← Optional SVG icon overrides
└── .claude/
    └── launch.json     ← Dev server config
```

---

## How to Customize for a Client

All placeholder content is clearly marked. Search for these strings to replace them:

### Business Identity
| Placeholder | Location | Replace with |
|---|---|---|
| `LuxeWash` | index.html (header, footer, schema) | Client's business name |
| `Estate Care Specialists` | index.html hero badge | Client's tagline |
| `concierge@luxewash.com` | index.html contact section | Real email |
| `(555) 123-4567` | index.html (contact, mobile CTA) | Real phone |
| `https://luxewash.com` | index.html (canonical, OG, schema) | Real domain |
| `© 2024 LuxeWash Estate Care` | index.html footer | Update year + name |

### Colors (styles.css — top of file, `:root` block)
The entire color system is defined in CSS custom properties. Key ones to update:
- `--c-primary: #173417` — main dark green (used for text, buttons, accents)
- `--c-primary-fixed: #c8ecc2` — light green (hero CTA, stats numbers)
- `--c-primary-container: #2d4b2c` — dark panel background (Why Us, Stats, Contact left)
- `--c-background: #fcf9f8` — warm off-white page background

### Service Areas (index.html `#areas` section)
Replace the 8 city chips with the client's actual service area cities.

### Reviews (index.html `#reviews` section)
Replace the 3 review cards with real client testimonials. Each card uses:
- `review-stars` — always 5 stars (add/remove SVG stars as needed)
- `blockquote.review-text` — the quote
- `review-avatar img` — photo (48×48px, round crop)
- `review-name` / `review-role` — name and location

### Hero Image
Replace the `src` on `#hero-img` with a hosted image URL or local path:
```html
<img src="assets/images/hero.jpg" id="hero-img" ...>
```
Recommended: 1920×1080px minimum, landscape, high contrast subject.

### Services
Each `.service-card` in the `#services` section can be edited independently.
Currently 6 services — remove or duplicate cards as needed.

### Schema Markup
Update the JSON-LD block in `<head>` with:
- Real `telephone`, `email`, `url`
- Actual `areaServed` cities
- Real `reviewCount` when available

---

## Running Locally

Open `index.html` directly in a browser, or use the dev server:

```bash
npx serve -p 3000 .
```

No build process, no npm install needed.

---

## Sections Included

| Section | ID |
|---|---|
| Fixed navigation header | — |
| Hero (full-screen image + CTA) | `#hero` |
| Services grid (6 cards) | `#services` |
| Why Choose Us (4 trust pillars) | — |
| Before/After interactive slider | `#gallery` |
| Process (4 steps) | — |
| Stats counter (3 numbers) | — |
| Reviews carousel (3 cards) | `#reviews` |
| About / Philosophy | `#about` |
| Service Areas grid | `#areas` |
| Contact form | `#contact` |
| Footer with newsletter | — |
| Sticky mobile CTA bar | — |

---

## Improvements Beyond the Original Stitch Design

1. **Mobile-first responsive CSS** — Stitch exported desktop-only; site now works on all screen sizes
2. **Semantic HTML5** — `<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<blockquote>`, `<dl>`, `<ol>` etc.
3. **Full accessibility** — ARIA labels, keyboard navigation, skip link, focus styles, `aria-live` regions
4. **SEO** — meta description, canonical, Open Graph tags, Twitter card, Local Business JSON-LD schema
5. **Scroll animations** — IntersectionObserver fade-up with staggered delays, reduced-motion respected
6. **Counter animation** — stats count up when scrolled into view with eased timing
7. **Fixed before/after slider** — original had clip-path bug; rebuilt with proper keyboard support
8. **Signature animation** — CSS water-ripple on hero (brand-specific, not a generic effect)
9. **Hero image parallax** — subtle scale-down on load for cinematic feel
10. **Added: Why Choose Us section** — 4 trust pillars missing from original
11. **Added: Service Areas section** — local SEO benefit + conversion signal
12. **Added: Sticky mobile CTA bar** — appears after scrolling past hero, drives calls/quotes on mobile
13. **Added: Missing driveway service card** — original had a commented-out empty card
14. **Performance** — `loading="lazy"` on below-fold images, `fetchpriority="high"` on hero, no render-blocking JS
15. **Form validation** — client-side required field checks with visual feedback
16. **No Tailwind CDN** — removed 300KB+ runtime; pure CSS loads in <5KB
