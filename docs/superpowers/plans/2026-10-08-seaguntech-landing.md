# Seaguntech Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first responsive Seaguntech landing page as an English-first, founder-led technology consulting site with curated public project evidence, a clear Technical Planning story, baseline SEO foundations, and clear consultation/email CTAs.

**Architecture:** Use Astro as the core because the site is predominantly static and content-led. Keep public copy and selected project records in a typed local content module, render the page as static/server-rendered HTML, and isolate any future interaction to small Astro islands. Use one page with semantic sections and a global stylesheet for the approved Signal-led visual system; no CMS, backend, booking integration, or analytics.

**Tech Stack:** pnpm, Astro, TypeScript, Vitest, Playwright, plain CSS.

**Spec:** `docs/superpowers/specs/2026-10-08-seaguntech-landing-design.md`

## Global Constraints

- English is the primary public language because the initial market is both international and Vietnamese.
- Use only projects that are already public on `https://projects.quangpham.dev/`; do not invent client names, logos, outcomes, dates, or performance numbers.
- Use `mailto:admin@seaguntech.com` for the email CTA.
- Use a dark navy foundation, high-contrast typography, mint primary accent, and restrained coral secondary accent.
- Use Astro as the application core and prefer zero client-side JavaScript for the first release.
- Keep the first release a single responsive landing page with no CMS, authentication, backend API, analytics, or booking provider integration.
- Provide semantic landmarks, visible focus states, keyboard-accessible controls, responsive behavior, reduced-motion support, and sufficient contrast.
- Make Technical Planning a concrete capability with a visible four-step process: Understand, Shape, Sequence, Ship with feedback.
- Treat SEO as technical discoverability: metadata, canonical URL, crawlability, semantic content, structured data, performance, and share previews; do not promise rankings or traffic.
- Generate `robots.txt` and `sitemap.xml` for `https://seaguntech.com/`.
- Preserve unrelated `.agents/`, `.DS_Store`, `.superpowers/`, and user changes; only stage files belonging to this feature.

## Review Focus

- Empty or incomplete project metadata must not create broken cards or invented copy; test the local project normalization boundary in Task 2.
- Long project titles and tag lists must not break the responsive work grid; test representative content at narrow viewport in Task 4.
- Keyboard users must be able to reach every navigation link and CTA with visible focus; test the page keyboard flow in Task 5.
- Reduced-motion users must not receive forced transitions or animated entrances; test the CSS media query and page behavior in Task 5.
- The two contact paths must remain distinct and usable (`#contact` consultation action and `mailto:admin@seaguntech.com`); test their destinations in Task 3 and Task 4.
- Search crawlers and link previews must receive complete metadata and primary content from generated HTML; test metadata, canonical, JSON-LD, `robots.txt`, and `sitemap.xml` in Task 5.

## File Map

- Create: `package.json` — project scripts and dependency boundary.
- Create: `astro.config.mjs` — Astro site/build configuration.
- Create: `src/pages/index.astro` — page shell, metadata, and section order.
- Create: `src/content/site.ts` — typed company copy, services, contact details, and selected project records.
- Create: `src/components/SiteNav.astro` — wordmark, anchor links, and contact action.
- Create: `src/components/Hero.astro` — hero statement and primary CTAs.
- Create: `src/components/ExperienceSignal.astro` — years and market proof signal.
- Create: `src/components/Services.astro` — four service offerings with Technical Planning detail.
- Create: `src/components/PlanningProcess.astro` — Understand, Shape, Sequence, Ship with feedback.
- Create: `src/components/SelectedWork.astro` — curated project cards and external links.
- Create: `src/components/EngineeringFoundations.astro` — technical SEO/discoverability capability.
- Create: `src/components/FounderNote.astro` — founder/early-stage context.
- Create: `src/components/ContactPanel.astro` — consultation and email CTA panel.
- Create: `src/components/SiteFooter.astro` — footer links and attribution.
- Create: `src/styles/global.css` — tokens, layout, responsive rules, focus states, and reduced-motion rules.
- Create: `src/content/site.test.ts` — content boundary and normalization tests.
- Create: `tests/landing.spec.ts` — browser-level responsive and keyboard acceptance tests.
- Create: `vitest.config.ts` — Vitest configuration for content tests.
- Create: `playwright.config.ts` — local browser test configuration.
- Create: `public/robots.txt` — crawl policy and sitemap reference.
- Create: `public/sitemap.xml` — production URL sitemap.
- Modify: `README.md` — local install, development, test, SEO verification, and build commands.

### Task 1: Bootstrap the Astro application foundation

**Files:**
- Create: `package.json`, `astro.config.mjs`, `src/pages/index.astro`, `vitest.config.ts`, `playwright.config.ts`
- Test: `src/content/site.test.ts`
- Modify: `README.md`

**Interfaces:**
- Produces a runnable Astro TypeScript app with `pnpm dev`, `pnpm test`, `pnpm test:e2e`, `pnpm check`, and `pnpm build` scripts.
- Produces an `src/pages/index.astro` route that renders a semantic `<main>` placeholder and owns document metadata.

- [ ] **Step 1: Create the package manifest and Astro scripts**

  Add Astro, `@astrojs/check`, TypeScript, Vitest, and Playwright dependencies. Define scripts: `dev`, `build`, `check`, `test`, `test:e2e`, and `preview`. Pin a compatible Node/pnpm engine only after checking the local environment.

- [ ] **Step 2: Add Astro configuration and strict TypeScript settings**

  Configure the site origin as `https://seaguntech.com`, enable strict TypeScript through Astro's generated config, and configure Vitest for the content module. Keep the initial document metadata in `src/pages/index.astro`.

- [ ] **Step 3: Write the failing content smoke test**

  In `src/content/site.test.ts`, assert that the content boundary exposes the Seaguntech name, contact email, 10+ experience signal, and four service categories.

- [ ] **Step 4: Implement the minimal Astro page shell**

  Create `src/pages/index.astro` with the language declaration, a `<main>` placeholder, and a metadata slot that later tasks can extend. Keep content data out of the page until Task 2.

- [ ] **Step 5: Run the Astro foundation checks**

  Run `pnpm install`, `pnpm test`, `pnpm check`, and `pnpm build`. Expected: install succeeds, content smoke tests pass, Astro type checking passes, and the static build emits an index page.

- [ ] **Step 6: Document local commands and commit**

  Update `README.md` with prerequisites and Astro scripts, then run `git add` only on Task 1 files and commit with `chore: bootstrap Astro Seaguntech site`.

### Task 2: Define and verify the content boundary

**Files:**
- Create: `src/content/site.ts`
- Create: `src/content/site.test.ts`

**Interfaces:**
- Produces `siteContent`, `services`, `selectedProjects`, and `contact` exports.
- `ProjectRecord` includes `title: string`, `description: string`, `tags: readonly string[]`, and optional `href?: string`.
- `normalizeProject(record: ProjectRecord): ProjectRecord` returns a render-safe record without inventing missing values.

- [ ] **Step 1: Write failing content invariant tests**

  Assert that the contact email equals `admin@seaguntech.com`, the experience signal contains `10+`, all four approved services exist, at least three project records are present, and normalization removes blank tags without manufacturing descriptions or links.

- [ ] **Step 2: Curate public project records from the approved portfolio source**

  Inspect the public content at `https://projects.quangpham.dev/` and record only projects that are publicly visible. Preserve public titles and links where available; write concise descriptions that stay faithful to the source and do not add unverified metrics or client claims.

- [ ] **Step 3: Implement typed content exports and normalization**

  Keep company copy, service labels, contact details, international markets, and project records in `src/content/site.ts`. Make the UI consume this module rather than hard-coding project content in components.

- [ ] **Step 4: Run the content tests**

  Run `pnpm test src/content/site.test.ts`. Expected: all content invariants pass and no record contains an empty renderable title.

- [ ] **Step 5: Commit the content boundary**

  Commit with `feat: add Seaguntech site content model`.

### Task 3: Build the core Signal-led Astro sections

**Files:**
- Create: `src/components/SiteNav.astro`, `src/components/Hero.astro`, `src/components/ExperienceSignal.astro`, `src/components/Services.astro`, `src/components/FounderNote.astro`, `src/components/ContactPanel.astro`, `src/components/SiteFooter.astro`
- Modify: `src/pages/index.astro`, `src/content/site.test.ts`

**Interfaces:**
- Astro components accept typed props or consume the exported site content boundary; they must not fetch remote content.
- `index.astro` renders one `<header>`, one `<main>`, and one `<footer>`, with stable IDs `services`, `work`, and `contact` for navigation.

- [ ] **Step 1: Extend content and build-facing tests**

  Assert the content exports include the exact hero heading, both contact paths, all four service names, and the Technical Planning process labels.

- [ ] **Step 2: Implement navigation and hero as Astro components**

  Add the Seaguntech wordmark, lightweight anchor links, hero copy, a `#contact` consultation CTA, and a `mailto:admin@seaguntech.com` email CTA.

- [ ] **Step 3: Implement experience signal and services**

  Present the 10+ years signal and `JP · SG · US · UK` market marker. Render services as concise, buyer-readable descriptions for Strategy & Architecture, Product Delivery, Legacy Modernization, and Fractional CTO. Explicitly mention Technical Planning under Strategy & Architecture.

- [ ] **Step 4: Implement founder context, contact panel, and footer**

  Explain that Seaguntech is a new agency built on hands-on software delivery experience. Repeat the two CTAs in the contact panel and include the public founder portfolio link in the footer.

- [ ] **Step 5: Run content/type checks and commit**

  Run `pnpm test` and `pnpm check`. Expected: content tests and Astro checks pass. Commit with `feat: add Seaguntech consulting page sections`.

### Task 4: Add planning, selected work, SEO capability, and the visual system

**Files:**
- Create: `src/components/PlanningProcess.astro`, `src/components/SelectedWork.astro`, `src/components/EngineeringFoundations.astro`
- Create: `src/styles/global.css`
- Modify: `src/pages/index.astro`, `src/content/site.test.ts`

**Interfaces:**
- `PlanningProcess` renders the exact four steps `Understand`, `Shape`, `Sequence`, and `Ship with feedback`.
- `SelectedWork` consumes `readonly ProjectRecord[]` and renders a stable `work` section.
- `EngineeringFoundations` communicates semantic HTML, metadata, structured content, crawlability, performance, and share previews without promising rankings or traffic.
- External project links use the record `href` when present and do not render empty anchors.

- [ ] **Step 1: Write failing planning, selected-work, and SEO content tests**

  Assert that all four Technical Planning steps exist, every rendered project title is visible, project links are omitted when `href` is absent, and the SEO capability copy does not contain ranking or traffic guarantees.

- [ ] **Step 2: Implement the Technical Planning process and SEO foundations section**

  Render a compact four-step planning flow and a supporting engineering foundations section. Keep both scannable and connected to the buyer's decision to contact Seaguntech.

- [ ] **Step 3: Implement selected work cards**

  Render at least three curated public projects with title, concise description, tags, and optional source link. Keep card copy scannable and avoid presenting personal projects as client engagements unless the source explicitly supports that claim.

- [ ] **Step 4: Add global visual tokens and layout**

  Implement the approved dark navy, mint, and coral palette; typography hierarchy; content width; section rhythm; rules; pills; card surfaces; and the Signal-led hero treatment. Use CSS custom properties so visual adjustments remain centralized.

- [ ] **Step 5: Add responsive, focus, and reduced-motion rules**

  Collapse grids for narrow screens, preserve readable line lengths, add visible `:focus-visible` styles, and wrap transitions/animations in `@media (prefers-reduced-motion: no-preference)`.

- [ ] **Step 6: Run content checks, build, and commit**

  Run `pnpm test`, `pnpm check`, and `pnpm build`. Expected: all tests/checks pass and the production build succeeds. Commit with `feat: add Signal-led visual system and selected work`.

### Task 5: Add SEO metadata and verify browser behavior

**Files:**
- Create: `tests/landing.spec.ts`, `public/robots.txt`, `public/sitemap.xml`
- Modify: `src/pages/index.astro`, `playwright.config.ts`, `README.md`

**Interfaces:**
- Browser tests start the Astro preview/dev server and target the root page.
- The test suite verifies user-visible behavior, not implementation details.

- [ ] **Step 1: Add complete page metadata and crawl support**

  Add a unique title, meta description, canonical URL, `og:title`, `og:description`, `og:url`, Twitter card metadata, and `Organization`/`WebSite` JSON-LD to `src/pages/index.astro`. Add `public/robots.txt` referencing `https://seaguntech.com/sitemap.xml` and a sitemap containing the canonical home URL.

- [ ] **Step 2: Write browser acceptance tests**

  Add tests that assert the hero, Technical Planning section, SEO foundations section, and both CTAs are visible, anchor navigation reaches `#services` and `#work`, the email CTA has the exact `mailto:admin@seaguntech.com` target, and keyboard tabbing reaches the primary interactive elements with visible focus.

- [ ] **Step 3: Add SEO and narrow viewport coverage**

  Assert the generated document title, description, canonical, Open Graph tags, JSON-LD, and page source presence of primary positioning text. Request `/robots.txt` and `/sitemap.xml` and validate their expected contents. Run the page at a mobile viewport and assert no horizontal overflow. Emulate reduced motion and assert the page remains usable without relying on animation completion.

- [ ] **Step 4: Run the browser verification**

  Run `pnpm test:e2e`. Expected: all landing, responsive, accessibility-flow, and SEO acceptance tests pass. If the environment cannot launch the configured browser, report the exact blocked gate rather than claiming full browser verification.

- [ ] **Step 5: Run the final local quality gates**

  Run `pnpm test`, `pnpm check`, `pnpm test:e2e`, `pnpm build`, `git diff --check`, and `git status --short`. Confirm only intended feature files are staged/committed and unrelated user artifacts remain untouched.

- [ ] **Step 6: Commit verification/configuration changes**

  Commit with `test: verify Seaguntech landing page behavior`.

## Handoff Notes

- Do not add a calendar provider until the user supplies a real booking URL or explicitly approves one.
- Do not add automated scraping in the first implementation; curate local project data from the public portfolio source.
- If the repository gains a framework or package-manager convention before implementation, re-audit Task 1 and align rather than introducing a second toolchain.
