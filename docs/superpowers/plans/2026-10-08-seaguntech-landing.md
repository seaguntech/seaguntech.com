# Seaguntech Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first responsive Seaguntech landing page as an English-first, founder-led technology consulting site with curated public project evidence and clear consultation/email CTAs.

**Architecture:** Use a small React application built with Vite and TypeScript. Keep all public copy and selected project records in a typed local content module, separate from presentational sections. Use one page with semantic sections and a single global stylesheet for the approved Signal-led visual system; no CMS, backend, booking integration, or analytics.

**Tech Stack:** pnpm, React, TypeScript, Vite, Vitest, Testing Library, Playwright, plain CSS.

**Spec:** `docs/superpowers/specs/2026-10-08-seaguntech-landing-design.md`

## Global Constraints

- English is the primary public language because the initial market is both international and Vietnamese.
- Use only projects that are already public on `https://projects.quangpham.dev/`; do not invent client names, logos, outcomes, dates, or performance numbers.
- Use `mailto:admin@seaguntech.com` for the email CTA.
- Use a dark navy foundation, high-contrast typography, mint primary accent, and restrained coral secondary accent.
- Keep the first release a single responsive landing page with no CMS, authentication, backend API, analytics, or booking provider integration.
- Provide semantic landmarks, visible focus states, keyboard-accessible controls, responsive behavior, reduced-motion support, and sufficient contrast.
- Preserve unrelated `.agents/`, `.DS_Store`, `.superpowers/`, and user changes; only stage files belonging to this feature.

## Review Focus

- Empty or incomplete project metadata must not create broken cards or invented copy; test the local project normalization boundary in Task 2.
- Long project titles and tag lists must not break the responsive work grid; test representative content at narrow viewport in Task 4.
- Keyboard users must be able to reach every navigation link and CTA with visible focus; test the page keyboard flow in Task 5.
- Reduced-motion users must not receive forced transitions or animated entrances; test the CSS media query and page behavior in Task 5.
- The two contact paths must remain distinct and usable (`#contact` consultation action and `mailto:admin@seaguntech.com`); test their destinations in Task 3 and Task 4.

## File Map

- Create: `package.json` — project scripts and dependency boundary.
- Create: `index.html` — document shell and metadata.
- Create: `src/main.tsx` — React entry point.
- Create: `src/App.tsx` — page composition and section order.
- Create: `src/content/site.ts` — typed company copy, services, contact details, and selected project records.
- Create: `src/content/site.test.ts` — content invariants and project normalization tests.
- Create: `src/components/SiteNav.tsx` — wordmark, anchor links, and contact action.
- Create: `src/components/Hero.tsx` — hero statement and primary CTAs.
- Create: `src/components/ExperienceSignal.tsx` — years and market proof signal.
- Create: `src/components/Services.tsx` — four service offerings.
- Create: `src/components/SelectedWork.tsx` — curated project cards and external links.
- Create: `src/components/FounderNote.tsx` — founder/early-stage context.
- Create: `src/components/ContactPanel.tsx` — consultation and email CTA panel.
- Create: `src/components/SiteFooter.tsx` — footer links and attribution.
- Create: `src/styles/global.css` — tokens, layout, responsive rules, focus states, and reduced-motion rules.
- Create: `src/App.test.tsx` — page composition, CTA, and semantic landmark tests.
- Create: `tests/landing.spec.ts` — browser-level responsive and keyboard acceptance tests.
- Create: `vite.config.ts` — Vite and Vitest configuration.
- Create: `tsconfig.json` — strict TypeScript configuration.
- Create: `playwright.config.ts` — local browser test configuration.
- Modify: `README.md` — local install, development, test, and build commands.

### Task 1: Bootstrap the application foundation

**Files:**
- Create: `package.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `vite.config.ts`, `tsconfig.json`, `playwright.config.ts`
- Test: `src/App.test.tsx`
- Modify: `README.md`

**Interfaces:**
- Produces a runnable Vite React TypeScript app with `pnpm dev`, `pnpm test`, `pnpm test:e2e`, and `pnpm build` scripts.
- Produces an `App` component that initially renders a semantic `<main>` placeholder and is ready for section composition.

- [ ] **Step 1: Create the package manifest and scripts**

  Add React/Vite/TypeScript runtime and test dependencies. Define scripts: `dev`, `build`, `test`, `test:e2e`, and `preview`. Pin a compatible Node/pnpm engine only after checking the local environment.

- [ ] **Step 2: Add the document shell and strict TypeScript/Vite configuration**

  Set the document language to English, add the initial title/description for Seaguntech, enable strict TypeScript, and configure Vitest with a jsdom environment.

- [ ] **Step 3: Write the failing app smoke test**

  In `src/App.test.tsx`, render `<App />` and assert that a `<main>` landmark exists and the placeholder heading identifies Seaguntech.

- [ ] **Step 4: Implement the minimal entry point and app shell**

  Mount `<App />` from `src/main.tsx`; keep `src/App.tsx` as the composition boundary and avoid putting content data directly in the entry point.

- [ ] **Step 5: Run the foundation checks**

  Run `pnpm install`, `pnpm test`, and `pnpm build`. Expected: install succeeds, the smoke test passes, and Vite emits a production build.

- [ ] **Step 6: Document local commands and commit**

  Update `README.md` with prerequisites and the four scripts, then run `git add` only on Task 1 files and commit with `chore: bootstrap Seaguntech landing app`.

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

### Task 3: Build the core Signal-led page sections

**Files:**
- Create: `src/components/SiteNav.tsx`, `src/components/Hero.tsx`, `src/components/ExperienceSignal.tsx`, `src/components/Services.tsx`, `src/components/FounderNote.tsx`, `src/components/ContactPanel.tsx`, `src/components/SiteFooter.tsx`
- Modify: `src/App.tsx`, `src/App.test.tsx`

**Interfaces:**
- Components accept content through typed props or consume the exported site content boundary; they must not fetch remote content.
- `App` renders one `<header>`, one `<main>`, and one `<footer>`, with stable IDs `services`, `work`, and `contact` for navigation.

- [ ] **Step 1: Extend failing component/page tests**

  Assert the hero heading is `Build what matters. Ship with clarity.`, both contact paths exist, the services section exposes all four service names, and the page contains `header`, `main`, and `footer` landmarks.

- [ ] **Step 2: Implement navigation and hero**

  Add the Seaguntech wordmark, lightweight anchor links, hero copy, a `#contact` consultation CTA, and a `mailto:admin@seaguntech.com` email CTA.

- [ ] **Step 3: Implement experience signal and services**

  Present the 10+ years signal and `JP · SG · US · UK` market marker. Render services as concise, buyer-readable descriptions for Strategy & Architecture, Product Delivery, Legacy Modernization, and Fractional CTO.

- [ ] **Step 4: Implement founder context, contact panel, and footer**

  Explain that Seaguntech is a new agency built on hands-on software delivery experience. Repeat the two CTAs in the contact panel and include the public founder portfolio link in the footer.

- [ ] **Step 5: Run unit tests and commit**

  Run `pnpm test`. Expected: all foundation, content, and page composition tests pass. Commit with `feat: add Seaguntech consulting page sections`.

### Task 4: Add selected work and the visual system

**Files:**
- Create: `src/components/SelectedWork.tsx`
- Create: `src/styles/global.css`
- Modify: `src/App.tsx`, `src/App.test.tsx`

**Interfaces:**
- `SelectedWork` consumes `readonly ProjectRecord[]` and renders a stable `work` section.
- External project links use the record `href` when present and do not render empty anchors.

- [ ] **Step 1: Write failing selected-work and responsive-content tests**

  Assert that every rendered project title is visible, project links are omitted when `href` is absent, and long tags remain inside the project card container at the component level.

- [ ] **Step 2: Implement selected work cards**

  Render at least three curated public projects with title, concise description, tags, and optional source link. Keep card copy scannable and avoid presenting personal projects as client engagements unless the source explicitly supports that claim.

- [ ] **Step 3: Add global visual tokens and layout**

  Implement the approved dark navy, mint, and coral palette; typography hierarchy; content width; section rhythm; rules; pills; card surfaces; and the Signal-led hero treatment. Use CSS custom properties so visual adjustments remain centralized.

- [ ] **Step 4: Add responsive, focus, and reduced-motion rules**

  Collapse grids for narrow screens, preserve readable line lengths, add visible `:focus-visible` styles, and wrap transitions/animations in `@media (prefers-reduced-motion: no-preference)`.

- [ ] **Step 5: Run unit tests, build, and commit**

  Run `pnpm test` and `pnpm build`. Expected: all tests pass and the production build succeeds. Commit with `feat: add Signal-led visual system and selected work`.

### Task 5: Verify browser behavior and accessibility acceptance

**Files:**
- Create: `tests/landing.spec.ts`
- Modify: `playwright.config.ts`, `README.md`

**Interfaces:**
- Browser tests start the Vite preview/dev server and target the root page.
- The test suite verifies user-visible behavior, not implementation details.

- [ ] **Step 1: Write browser acceptance tests**

  Add tests that assert the hero and both CTAs are visible, anchor navigation reaches `#services` and `#work`, the email CTA has the exact `mailto:admin@seaguntech.com` target, and keyboard tabbing reaches the primary interactive elements with visible focus.

- [ ] **Step 2: Add narrow viewport and reduced-motion coverage**

  Run the page at a mobile viewport and assert no horizontal overflow. Emulate reduced motion and assert the page remains usable without relying on animation completion.

- [ ] **Step 3: Run the browser verification**

  Run `pnpm test:e2e`. Expected: all landing acceptance tests pass. If the environment cannot launch the configured browser, report the exact blocked gate rather than claiming full browser verification.

- [ ] **Step 4: Run the final local quality gates**

  Run `pnpm test`, `pnpm test:e2e`, `pnpm build`, `git diff --check`, and `git status --short`. Confirm only intended feature files are staged/committed and unrelated user artifacts remain untouched.

- [ ] **Step 5: Commit verification/configuration changes**

  Commit with `test: verify Seaguntech landing page behavior`.

## Handoff Notes

- Do not add a calendar provider until the user supplies a real booking URL or explicitly approves one.
- Do not add automated scraping in the first implementation; curate local project data from the public portfolio source.
- If the repository gains a framework or package-manager convention before implementation, re-audit Task 1 and align rather than introducing a second toolchain.
