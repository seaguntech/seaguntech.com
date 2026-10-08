# Seaguntech Landing Page Design

## Status

Design approved in conversation on 2026-10-08. This document is the reviewable design baseline; implementation does not begin until the document is reviewed and approved.

## Goal

Create the first public website for `seaguntech.com`, positioning Seaguntech as a new, founder-led international technology consulting agency. The page must be honest about its early-stage status while using the founder's 10+ years of software development experience and public project portfolio as evidence of delivery capability.

## Audience and success criteria

Primary audiences:

- Prospective clients looking for senior technology guidance or software delivery.
- Investors and strategic partners evaluating the company's direction and credibility.

The page succeeds when a visitor can quickly understand:

1. What Seaguntech does.
2. Why the team is credible despite being a new company.
3. Which services are available.
4. How to start a conversation.

## Positioning

Working positioning:

> Seaguntech is an international technology consulting partner that helps ambitious teams turn complex ideas into dependable software.

Proof points to surface without overstating them:

- More than 10 years of software development experience.
- Experience working with international clients and teams in Japan, Singapore, the United States, and the United Kingdom.
- Public project evidence sourced from `https://projects.quangpham.dev/`.

The page should present the company as new and capable, not as an established consultancy with invented scale, client logos, revenue, or team size.

## Information architecture

The first release is a single responsive landing page with these sections:

1. **Navigation** — Seaguntech wordmark, lightweight anchors to Work and Services, and a contact action.
2. **Hero** — “Build what matters. Ship with clarity.”, a concise supporting paragraph, and two CTAs: Book a consultation and email `admin@seaguntech.com`.
3. **Experience signal** — 10+ years and the international experience marker `JP · SG · US · UK`.
4. **Services** — Strategy & Architecture, Product Delivery, Legacy Modernization, and Fractional CTO support.
5. **Services** — Strategy & Architecture should explicitly include technical planning: problem framing, scope boundaries, architecture decisions, delivery sequencing, and risk reduction before implementation.
6. **Technical planning signal** — a compact process block showing how Seaguntech moves from ambiguity to an actionable technical plan: Understand, Shape, Sequence, Ship with feedback.
7. **Selected work** — a curated subset of public projects from the founder portfolio. Each item should retain its public title, concise description, technology/role tags where available, and source link where available.
8. **Engineering foundations / SEO** — explain that delivery includes search-friendly technical foundations when relevant: semantic HTML, metadata, structured content, performance, crawlability, and share previews. This is a supporting capability, not a claim to be a dedicated SEO marketing agency.
9. **Founder / early-stage context** — a short statement explaining that Seaguntech is a new agency built on hands-on software delivery experience.
10. **Contact CTA** — repeat the consultation and email actions with a clear expectation for the first conversation.
11. **Footer** — email, portfolio link, and available professional/social links.

## Visual direction

The approved direction is **Signal-led**, combining technical craft with bold early-stage energy.

- Dark navy foundation with high-contrast light typography.
- Mint as the primary action/accent color and coral as a restrained secondary signal.
- Strong editorial typography, generous spacing, and a focused single-column reading rhythm.
- Small technical cues such as monospace labels, tags, rules, and compact metadata; avoid a dashboard-like interface.
- No stock-photo hero, generic gradient blob, fake metrics, or decorative UI that does not support the story.
- Motion should be subtle: entrance/hover emphasis and anchor transitions only; content must remain fully usable without animation.

## Content rules

- English is the primary public language because the initial market is both international and Vietnamese.
- Do not invent client names, logos, outcomes, dates, or performance numbers.
- Use only projects that are already public on the founder portfolio; the user has confirmed they may be reused on Seaguntech.
- Keep the first release concise. Detailed case studies can be added as a later scope when source content is curated.
- Use `mailto:admin@seaguntech.com` for the email CTA and make it clear that it opens the visitor's mail client.
- Describe Technical Planning as a concrete consulting capability, not as a vague process slogan.
- Treat SEO as technical discoverability and delivery quality; do not promise rankings, traffic, or search outcomes that are not evidenced.

## Technical shape

The repository currently contains only an initial README and project-local agent configuration. Use Astro as the core because this site is predominantly static, content-led, and SEO-sensitive. The first release should remain a small static/content-led surface with no CMS, authentication, backend API, or analytics requirement unless separately approved.

Project content should be represented through a typed or schema-shaped local data boundary so that the portfolio source can be curated without coupling the UI directly to scraped HTML. A later sync/import mechanism is out of scope for the first release. Interactive behavior, if needed, should be isolated to small Astro islands; the default page should ship as server-rendered/static HTML and CSS.

## Accessibility and responsive behavior

- Semantic landmarks, heading hierarchy, keyboard-accessible navigation and CTAs.
- Visible focus states and sufficient color contrast for text, controls, and accent treatments.
- Responsive layouts for narrow mobile screens through wide desktop screens.
- Respect reduced-motion preferences.
- External project links should be distinguishable and safe to open in a new tab only when useful.
- Each page must have a unique, descriptive title and meta description, canonical URL, Open Graph/Twitter metadata, and a valid language declaration.
- Use semantic headings, crawlable internal anchors, descriptive link text, `robots.txt`, and `sitemap.xml` for the production domain.
- Include JSON-LD appropriate to the site (Organization and WebSite at minimum) without inventing ratings, reviews, or unsupported business facts.
- Verify that the generated HTML contains the primary positioning, services, Technical Planning, and project content without requiring client-side JavaScript.

## Acceptance criteria

- A first-time visitor can identify the agency's offering and target audience from the hero and first viewport.
- Both consultation and email CTAs are visible without requiring a portfolio deep dive.
- Services are understandable without unexplained technical jargon.
- Technical Planning is visible as a concrete capability and its process is understandable in under one minute.
- The page explains its SEO/technical discoverability capability without promising search rankings or traffic.
- At least three selected public projects are represented without fabricated claims.
- The page clearly distinguishes founder experience from company age.
- The page is responsive and keyboard navigable.
- The generated page has complete baseline SEO metadata, crawlable support files, and server-rendered primary content.
- The implementation has a documented local run command and an appropriate verification command.
- No unrelated untracked or dirty user work is staged or modified.

## Out of scope for this release

- CMS or admin editing workflow.
- Authentication, forms that submit data, CRM integration, or booking provider integration.
- Multi-page case study routes.
- Investor-specific materials or a fundraising narrative.
- Automated scraping or continuous synchronization from the personal portfolio.
- Brand identity package beyond the landing page's wordmark treatment, colors, and type direction.

## Decisions deferred to implementation planning

- Framework and package manager alignment with this repository.
- Exact font sources and licensing-safe loading strategy.
- How the public project portfolio is read and curated into local data.
- Hosting/deployment target.
- Whether a real calendar link will replace or complement the initial mailto consultation CTA.
