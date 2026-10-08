# Seaguntech — Design System (`design.md`)

> **Seaguntech** is an international technology consulting partner that helps ambitious teams turn complex ideas into dependable software.

Version 1.1 · Owner: Brand & Web · Applies to: marketing website, case studies, blog, decks, product UI

---

## 1. Brand Essence

### 1.1 Positioning
Seaguntech sits between *ambition* and *reliability*. Clients arrive with complex, uncertain ideas; we return clear, dependable software. The design must feel like a **calm, expert navigator**: precise, confident, and technically distinctive. Early-stage energy should come from typography, contrast, and editorial composition—not decorative noise.

### 1.2 Brand Metaphor — "Navigation"
The "Sea" in Seaguntech guides the visual language:
- **Depth** → deep navy surfaces signal seriousness and trust.
- **Horizon / Waypoints** → thin lines, grids and numbered steps show clear progress through complexity.
- **Signal** → one bright accent (teal) marks what matters, like a beacon.

### 1.3 Brand Pillars
| Pillar | Meaning | Design expression |
|---|---|---|
| **Dependable** | Software that works, ships, scales | Strong contrast, stable grids, restrained motion |
| **Clear** | Turning complex into simple | Generous whitespace, short copy, one idea per block |
| **Ambitious** | Built for teams that aim high | Large confident headlines, bold type scale, forward-leaning layouts |
| **Global** | International partner | Neutral typography, inclusive imagery, English-first with i18n readiness |

### 1.4 Voice & Tone
- **Confident, not arrogant.** "We build what you can rely on."
- **Plain language.** Prefer verbs and outcomes over jargon.
- **Human.** Speak as a partner ("we", "your team"), not as a vendor.
- **Specific.** Numbers, timelines, and named outcomes beat adjectives.

| Do | Don't |
|---|---|
| "Turn complex ideas into dependable software." | "Leveraging synergistic next-gen solutions." |
| "Ship your MVP in 12 weeks." | "Blazing-fast world-class delivery!!!" |
| "Tell us what you're building." | "Submit inquiry." |

Sentence case for headings and buttons. No exclamation marks in headlines. Avoid emoji in UI.

---

## 2. Design Principles

1. **Clarity first.** If a section can't be understood in 5 seconds, simplify it.
2. **One accent, used with intent.** Teal means "action" or "key insight". Never decorative everywhere.
3. **Structure shows reliability.** Consistent grid, spacing, and alignment *are* the brand.
4. **Quiet confidence.** Motion and effects support comprehension, never distract.
5. **Accessible by default.** WCAG 2.2 AA minimum; design for keyboard, screen reader, and reduced motion.
6. **Performance is a feature.** A consulting firm that ships slow pages loses credibility. Target LCP < 2.5s.

---

## 3. Color

### 3.1 Core Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--sgt-navy-950` | Abyss | `#06121F` | Dark page background, footer |
| `--sgt-navy-900` | Deep Sea | `#0B1F33` | Primary text (light mode), dark surfaces, hero |
| `--sgt-navy-700` | Current | `#16385A` | Secondary dark surface, borders on dark |
| `--sgt-navy-500` | Tide | `#3B6A94` | Icons, links on dark (secondary) |
| `--sgt-teal-700` | Signal Dark | `#0A7C78` | Primary buttons (light mode), links |
| `--sgt-teal-500` | **Signal** | `#14B8A6` | **Brand accent**, highlights, focus on dark |
| `--sgt-teal-300` | Foam | `#5EEAD4` | Accent on dark backgrounds, gradients |
| `--sgt-coral-500` | Coral | `#F97360` | Secondary accent for waypoints, selected states, and restrained startup energy |
| `--sgt-sand-50` | Shore | `#F6F8FA` | Page background (light), section alt |
| `--sgt-sand-100` | Mist | `#EAF0F5` | Cards, subtle fills |
| `--sgt-sand-300` | Fog | `#CBD5E1` | Borders, dividers |
| `--sgt-slate-600` | Slate | `#475569` | Secondary text |
| `--sgt-slate-400` | Ash | `#94A3B8` | Placeholder, disabled |
| `--sgt-white` | White | `#FFFFFF` | Surfaces, text on dark |

### 3.2 Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--sgt-success` | `#16A34A` | Success states |
| `--sgt-warning` | `#D97706` | Warnings |
| `--sgt-danger` | `#DC2626` | Errors, destructive |
| `--sgt-info` | `#2563EB` | Informational |
| `--sgt-highlight` | `#F59E0B` | Rare "spark" accent (badges, stat highlights) — max 1 per view |

### 3.3 Semantic Aliases (use these in components, not raw hex)

| Alias | Light mode | Dark mode |
|---|---|---|
| `--bg` | `sand-50` | `navy-950` |
| `--bg-elevated` | `white` | `navy-900` |
| `--bg-subtle` | `sand-100` | `navy-700` @ 40% |
| `--text` | `navy-900` | `white` |
| `--text-muted` | `slate-600` | `#A9B8C9` |
| `--border` | `sand-300` | `navy-700` |
| `--accent` | `teal-700` | `teal-300` |
| `--accent-solid` | `teal-500` | `teal-500` |
| `--focus-ring` | `teal-500` | `teal-300` |

### 3.4 Color Rules
- **Ratio guide:** ~70% neutrals · 20% navy · 8% teal · 2–4% coral/highlight combined.
- Hero and key CTA sections may use the dark navy theme; body content defaults to light.
- **Never** place teal-500 text on white (insufficient contrast). Use `teal-700` for text on light surfaces.
- Coral is a secondary accent only. Do not use it for body text, primary CTAs, or multiple competing focal points.
- Use coral for a small visual marker, selected state, hover detail, or one restrained highlight per section at most.
- Text on `teal-500` buttons is `navy-950`; text on `teal-700` buttons is `white`.
- Verify every new pairing for ≥ 4.5:1 (body) and ≥ 3:1 (large text, UI components).

### 3.5 Gradients
- **Horizon:** `linear-gradient(135deg, #0B1F33 0%, #16385A 60%, #0A7C78 100%)` — hero backgrounds.
- **Signal glow:** `radial-gradient(60% 60% at 80% 0%, rgba(20,184,166,.25), transparent)` — soft accent behind dark sections.
- Use gradients sparingly: max one per viewport.

---

## 4. Typography

### 4.1 Typefaces
| Role | Font | Fallback | Why |
|---|---|---|---|
| **Display / Headings** | **Manrope** (600–800) | `system-ui, sans-serif` | Geometric, modern, confident; great at large sizes |
| **Body / UI** | **Inter** (400–600) | `system-ui, sans-serif` | Highly legible, neutral, international |
| **Code / Data / Labels** | **JetBrains Mono** (400–500) | `ui-monospace, monospace` | Technical credibility for eyebrows, code, metrics |

These fonts may be sourced from Google Fonts or self-hosted, but V1 should avoid render-blocking remote font requests. Use `font-display: swap`, preload only self-hosted critical weights when available, and preserve the system fallbacks. Vietnamese and extended Latin glyphs are supported by all three.

### 4.2 Type Scale (fluid)

| Token | Desktop | Mobile | Weight | Line height | Letter spacing | Use |
|---|---|---|---|---|---|---|
| `display` | 72 / 4.5rem | 44 | 800 | 1.05 | -0.03em | Hero headline |
| `h1` | 56 / 3.5rem | 36 | 700 | 1.1 | -0.025em | Page titles |
| `h2` | 40 / 2.5rem | 30 | 700 | 1.15 | -0.02em | Section titles |
| `h3` | 28 / 1.75rem | 24 | 600 | 1.25 | -0.01em | Card titles |
| `h4` | 20 / 1.25rem | 18 | 600 | 1.35 | 0 | Sub-headings |
| `body-lg` | 20 / 1.25rem | 18 | 400 | 1.6 | 0 | Lead paragraphs |
| `body` | 16 / 1rem | 16 | 400 | 1.65 | 0 | Default text |
| `body-sm` | 14 / 0.875rem | 14 | 400 | 1.55 | 0 | Captions, meta |
| `eyebrow` | 13 / 0.8125rem | 12 | 500 (mono) | 1.2 | +0.12em, UPPERCASE | Section labels |
| `code` | 14 | 13 | 400 (mono) | 1.6 | 0 | Code, metrics |

Fluid example: `font-size: clamp(2.75rem, 1.5rem + 5vw, 4.5rem);`

### 4.3 Typography Rules
- Max line length: **65–75 characters** for body text.
- Headings: sentence case, left-aligned (center only for short hero statements and CTAs).
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.
- One `h1` per page. Never skip heading levels.
- Emphasis in headlines: highlight 1–3 key words using `--accent` color, not underline or italic.
- Numbers/metrics use tabular figures: `font-variant-numeric: tabular-nums`.

---

## 5. Layout & Spacing

### 5.1 Spacing Scale (4px base)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Icon gaps |
| `--space-2` | 8px | Inline gaps |
| `--space-3` | 12px | Tight stacks |
| `--space-4` | 16px | Default gap |
| `--space-6` | 24px | Card padding (mobile), grid gap |
| `--space-8` | 32px | Card padding (desktop) |
| `--space-12` | 48px | Block spacing |
| `--space-16` | 64px | Section padding (mobile) |
| `--space-24` | 96px | Section padding (desktop) |
| `--space-32` | 128px | Hero / major breaks |

### 5.2 Grid
| Breakpoint | Width | Columns | Gutter | Margin |
|---|---|---|---|---|
| `sm` | ≥ 0 | 4 | 16 | 20 |
| `md` | ≥ 768 | 8 | 24 | 32 |
| `lg` | ≥ 1024 | 12 | 24 | 40 |
| `xl` | ≥ 1280 | 12 | 32 | 48 |
| `2xl` | ≥ 1536 | 12 | 32 | auto (centered) |

- **Container max-width:** 1200px (content), 1440px (full-bleed visuals), 720px (long-form reading).
- Mobile-first. Design at 375, 768, 1280, 1536.

### 5.3 Radius
| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Inputs, tags |
| `--radius-md` | 10px | Buttons |
| `--radius-lg` | 16px | Cards |
| `--radius-xl` | 24px | Feature panels, hero media |
| `--radius-full` | 999px | Pills, avatars |

### 5.4 Elevation
Prefer **borders over shadows**. Use shadow only for interactive lift and overlays.

| Level | Shadow | Use |
|---|---|---|
| `0` | none, `1px solid var(--border)` | Default cards |
| `1` | `0 1px 2px rgba(11,31,51,.06), 0 4px 12px rgba(11,31,51,.06)` | Hovered cards |
| `2` | `0 8px 24px rgba(11,31,51,.12)` | Dropdowns, popovers |
| `3` | `0 24px 64px rgba(6,18,31,.28)` | Modals |

### 5.5 Signature Pattern — "Waypoint Grid"
A subtle background of thin 1px lines (opacity 4–8%) on a 64px grid with small teal "waypoint" dots at selected intersections. Use on hero and dark CTA sections. Must never reduce text contrast.

---

## 6. Iconography & Imagery

### 6.1 Icons
- Library: **Lucide** (or Phosphor Regular) — consistent 1.5px stroke, rounded caps.
- Sizes: 16, 20, 24, 32. Color inherits `currentColor`; accent icons use `--accent`.
- Feature icons sit inside a 48×48 rounded-lg container with `--bg-subtle` fill.

### 6.2 Imagery
- **Preferred:** real people (team, workshops), real product screenshots, architecture diagrams.
- **Treatment:** natural color with a subtle navy overlay on hero images (multiply, 10–20%). Rounded `--radius-xl`.
- **Avoid:** generic stock handshakes, glowing brains, random 3D robots, clichéd binary code.
- Diagrams use brand palette only, 1.5px lines, mono labels.

### 6.3 Illustration Style
Geometric, line-based, built from circles, grids, and waves. Max two colors + navy. Always pair with a clear label.

### 6.4 Logo Usage
- Clear space = height of the "S" on all sides. Minimum width 96px (digital).
- Versions: full-color on light, white on dark, single-color navy.
- Never recolor outside the palette, stretch, add effects, or place over busy imagery.

---

## 7. Components

### 7.1 Buttons
| Variant | Light mode | Dark mode | Use |
|---|---|---|---|
| **Primary** | bg `teal-700`, text white | bg `teal-500`, text `navy-950` | One per section: main CTA |
| **Secondary** | bg transparent, 1px `navy-900` border, text `navy-900` | border `white/30`, text white | Supporting actions |
| **Ghost** | text `--accent`, no border | same | Tertiary / inline |
| **Link** | text `--accent`, underline on hover, with → arrow | same | "Read case study →" |

- Height: `sm` 36 · `md` 44 · `lg` 52. Padding-x 20/24/28. Radius `--radius-md`. Weight 600.
- States: hover (lighten 6%, translateY -1px), active (darken 6%), focus (2px ring + 2px offset), disabled (40% opacity, no pointer events), loading (spinner replaces icon, width locked).
- Touch target ≥ 44×44px.
- Copy: verb-led, ≤ 4 words ("Book a consultation", "See our work").

### 7.2 Navigation
- **V1 landing page:** lightweight top bar with logo, Services, Work, Contact, and the primary CTA **"Book a consultation"**.
- Sticky behavior, mobile sheet navigation, language switching, and full-site navigation are future patterns; do not add them to V1 unless required by the page content.
- Active item: 2px teal underline or equivalent visible state.
- Include a skip-to-content link and keep all navigation keyboard accessible.

### 7.3 Cards
- **Service card:** icon container → h3 → 2-line description → link with arrow. Border 1px, radius-lg, padding 32. Hover: border `teal-500`, elevation 1, arrow slides 4px.
- **Case study card:** 16:10 image, client label (eyebrow), outcome headline, 2–3 metric chips, "Read case →".
- **Insight/blog card:** image, category tag, title (h4), meta (date · read time).
- **Metric card:** big number (display or h1, mono/tabular) + short label. Accent the unit/symbol only.
- **Testimonial:** quote (body-lg), name, role, company, optional logo. No star ratings.

### 7.4 Forms
- Label above field (body-sm, weight 500). Helper text below (body-sm, muted).
- Input: height 48, radius-sm, 1px `--border`, bg `--bg-elevated`; focus: 2px `--focus-ring`; error: border `danger` + message with icon (never color alone).
- Required fields marked with text "(required)", not just an asterisk.
- **V1 contact:** use a consultation anchor and `mailto:admin@seaguntech.com`; do not add a form, CRM, or response-time promise without an approved backend and confirmed operational commitment.
- **Future contact form:** Name · Work email · Company · "What are you building?" (textarea) · Budget range (select, optional) · Timeline (select, optional) · Consent checkbox. Submit: "Send message".

### 7.5 Tags / Badges / Chips
Pill, 28px high, body-sm, mono optional. Neutral (`bg-subtle`), Accent (teal 12% bg + `teal-700` text), Status (semantic colors with icon).

### 7.6 Tabs, Accordions, Tooltips, Modals
- Tabs: underline style, 2px teal indicator, keyboard arrow navigation.
- Accordion (FAQ): chevron right-aligned, one open at a time optional, animated height 200ms.
- Tooltip: navy-900 bg, white text, 12–13px, 8px radius, 300ms delay.
- Modal: max-width 560/720, elevation 3, overlay `navy-950 / 60%`, focus trap, ESC to close.

### 7.7 Footer
- **V1 footer:** dark (`navy-950`), concise brand blurb, email, portfolio link, available professional/social links, and copyright.
- Future full-site footer may add Services, Company, Resources, legal links, cookie settings, and offices/time zones after those destinations exist.

---

## 8. Page Templates & Section Patterns

### 8.0 V1 Landing Page Scope

The first public release is one English-first, responsive Astro landing page for an early-stage technology consulting agency. Its canonical section order is:

1. Navigation
2. Hero: “Build what matters. Ship with clarity.”
3. Experience signal: 10+ years and JP · SG · US · UK
4. Services: Strategy & Architecture, Product Delivery, Legacy Modernization, Fractional CTO
5. Technical Planning: Understand → Shape → Sequence → Ship with feedback
6. Selected work sourced from the public founder portfolio
7. Engineering foundations: semantic HTML, metadata, structured content, crawlability, performance, and share previews
8. Founder / early-stage context
9. Contact CTA: Book a consultation and `admin@seaguntech.com`
10. Footer

V1 must not require client logos, testimonials, invented metrics, rankings, traffic promises, a CMS, a backend, analytics, a booking provider, or a contact form.

### 8.1 Recommended Site Map
`Home · Services (+ detail pages) · Case studies (+ detail) · Approach / How we work · About · Insights (blog) · Careers · Contact`

### 8.2 Future Full-site Home Page Structure

The following is a future expansion pattern, not a V1 acceptance requirement:
1. **Hero (dark, Horizon gradient + Waypoint Grid)**
   - Eyebrow: `INTERNATIONAL TECHNOLOGY CONSULTING`
   - H1: "Turn complex ideas into **dependable software**."
   - Sub: "Seaguntech partners with ambitious teams to design, build, and scale software that works."
   - CTAs: **Book a consultation** (primary) · See our work (secondary)
   - Trust strip: 4–6 client logos, grayscale.
2. **Value proposition (3 pillars):** Strategy & discovery · Engineering & delivery · Scale & support.
3. **Services grid (6 cards):** Technology consulting · Product & software development · Cloud & DevOps · Data & AI · Quality engineering · Dedicated teams.
4. **Approach — "From idea to dependable"** numbered 4-step horizontal timeline (Discover → Design → Build → Evolve), with mono step numbers.
5. **Case studies (3 featured)** with outcome metrics.
6. **Proof band:** 4 metrics (projects shipped, countries, years, retention).
7. **Testimonials / partner badges.**
8. **Insights (3 latest posts).**
9. **Final CTA (dark):** "Have a complex idea? Let's make it dependable." + CTA + email.
10. **Footer.**

### 8.3 Section Rhythm
- Alternate backgrounds: `--bg` → `--bg-elevated`/`bg-subtle` → dark → `--bg`.
- Section padding: 96px desktop / 64px mobile.
- Every section: eyebrow → h2 → optional lead (max 60ch) → content.
- Max 1 primary CTA per viewport.

### 8.4 Case Study Detail Template
Hero (client, industry, services) → Snapshot (challenge · solution · result) → Key metrics → Narrative sections with visuals → Tech stack chips → Testimonial → Next case → CTA.

---

## 9. Motion

| Token | Value | Use |
|---|---|---|
| `--ease-standard` | `cubic-bezier(.2, .0, .0, 1)` | Most transitions |
| `--ease-emphasized` | `cubic-bezier(.3, 0, 0, 1.0)` | Entrances |
| `--dur-fast` | 120ms | Hover, color |
| `--dur-base` | 200ms | Buttons, accordions |
| `--dur-slow` | 400ms | Section reveals |

- Scroll reveals: fade + translateY(16px), once, staggered 60ms.
- Hover lifts ≤ 2px. No bounce, no parallax overload, no auto-playing carousels.
- Respect `prefers-reduced-motion: reduce` → disable transforms, keep opacity fades ≤ 100ms.

---

## 10. Accessibility Checklist
- [ ] Contrast ≥ 4.5:1 text, ≥ 3:1 for large text and UI boundaries.
- [ ] Visible focus on all interactive elements (2px ring, 2px offset).
- [ ] Full keyboard navigation; logical tab order; skip link.
- [ ] Semantic landmarks (`header`, `nav`, `main`, `footer`), correct heading order.
- [ ] Alt text for meaningful images; decorative images `alt=""`.
- [ ] Form errors announced (`aria-live`), not conveyed by color alone.
- [ ] Touch targets ≥ 44×44px; text resizable to 200%.
- [ ] `lang` attribute set; content structure ready for i18n (avoid text in images, allow +30% text expansion).
- [ ] Video: captions; no autoplay with sound.

---

## 11. Content & SEO Guidelines
- **Title tag:** `Page topic | Seaguntech` (≤ 60 chars).
- **Meta description:** 140–160 chars, outcome-oriented.
- **Default tagline:** "Turning complex ideas into dependable software."
- **Boilerplate:** "Seaguntech is an international technology consulting partner that helps ambitious teams turn complex ideas into dependable software."
- **V1 structured data:** use `Organization` and `WebSite` JSON-LD only, with facts supported by the page and approved company information.
- **Future structured data:** add `Service`, `Article`, and `BreadcrumbList` only when corresponding pages and content exist.
- V1 must generate a canonical URL, Open Graph/Twitter metadata, `robots.txt`, and `sitemap.xml` for `https://seaguntech.com/`.
- Primary positioning, services, Technical Planning, SEO capability, and selected work must be present in generated HTML without requiring client-side JavaScript.
- Open Graph image: 1200×630, navy background, wordmark, headline in Manrope 800.

---

## 12. V1 Technical Baseline

- Core: Astro with TypeScript and static/server-rendered HTML.
- Styling: plain CSS using the tokens in this document.
- Default client-side JavaScript: none; use small Astro islands only when an interaction is genuinely required.
- Content: typed local data boundary for company copy and curated public project records.
- Verification: Astro type checking, production build, content tests, browser acceptance tests, responsive checks, and SEO metadata/crawl-support checks.
- Performance intent: keep the page dependency-light, avoid remote font blocking where possible, and verify Core Web Vitals in deployment validation when a production URL exists.

## 13. Implementation Tokens

### 13.1 CSS Variables
```css
:root {
  /* Brand */
  --sgt-navy-950: #06121F;
  --sgt-navy-900: #0B1F33;
  --sgt-navy-700: #16385A;
  --sgt-navy-500: #3B6A94;
  --sgt-teal-700: #0A7C78;
  --sgt-teal-500: #14B8A6;
  --sgt-teal-300: #5EEAD4;
  --sgt-coral-500: #F97360;
  --sgt-sand-50:  #F6F8FA;
  --sgt-sand-100: #EAF0F5;
  --sgt-sand-300: #CBD5E1;
  --sgt-slate-600:#475569;
  --sgt-slate-400:#94A3B8;
  --sgt-highlight:#F59E0B;

  /* Semantic (light) */
  --bg: var(--sgt-sand-50);
  --bg-elevated: #FFFFFF;
  --bg-subtle: var(--sgt-sand-100);
  --text: var(--sgt-navy-900);
  --text-muted: var(--sgt-slate-600);
  --border: var(--sgt-sand-300);
  --accent: var(--sgt-teal-700);
  --accent-solid: var(--sgt-teal-500);
  --focus-ring: var(--sgt-teal-500);

  /* Type */
  --font-display: "Manrope", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* Shape & motion */
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-xl: 24px;
  --ease-standard: cubic-bezier(.2, 0, 0, 1);
  --dur-fast: 120ms; --dur-base: 200ms; --dur-slow: 400ms;
}

:root[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: var(--sgt-navy-950);
    --bg-elevated: var(--sgt-navy-900);
    --bg-subtle: rgba(22, 56, 90, .4);
    --text: #FFFFFF;
    --text-muted: #A9B8C9;
    --border: var(--sgt-navy-700);
    --accent: var(--sgt-teal-300);
    --focus-ring: var(--sgt-teal-300);
  }
}

body { font-family: var(--font-body); background: var(--bg); color: var(--text); }
h1, h2, h3, h4 { font-family: var(--font-display); text-wrap: balance; }
:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition-duration: .01ms !important; }
}
```

### 13.2 Tailwind Config (future reference excerpt)
```js
// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        navy:  { 950: "#06121F", 900: "#0B1F33", 700: "#16385A", 500: "#3B6A94" },
        teal:  { 700: "#0A7C78", 500: "#14B8A6", 300: "#5EEAD4" },
        sand:  { 50: "#F6F8FA", 100: "#EAF0F5", 300: "#CBD5E1" },
        slate: { 600: "#475569", 400: "#94A3B8" },
        spark: "#F59E0B",
      },
      fontFamily: {
        display: ["Manrope", "system-ui", "sans-serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { sm: "6px", md: "10px", lg: "16px", xl: "24px" },
      maxWidth: { content: "1200px", prose: "720px" },
    },
  },
};
```

---

## 13. Governance
- **Single source of truth:** this file + Figma library "Seaguntech DS". Changes go through a pull request with before/after screenshots.
- **Naming:** `sgt-` prefix for tokens; components in PascalCase (`ServiceCard`, `MetricCard`).
- **Review cadence:** quarterly audit for contrast, performance, and consistency.
- **Do / Don't summary**

| Do | Don't |
|---|---|
| Use teal for actions and key insights only | Use teal everywhere or add new accent colors |
| Keep layouts on the 12-col grid and 4px spacing | Use arbitrary margins/padding |
| Lead with outcomes and numbers | Lead with buzzwords |
| Use real photography and diagrams | Use generic stock imagery |
| Keep motion subtle and purposeful | Add decorative animations |

---

*Seaguntech — turning complex ideas into dependable software.*
