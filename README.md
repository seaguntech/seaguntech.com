# Seaguntech

Astro-powered static landing page for Seaguntech, an international technology consulting agency.

## Prerequisites

- Node.js 25+
- pnpm 10+

## Local development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm test
pnpm check
pnpm build
pnpm test:e2e
```

The site is static-first and keeps its public copy and curated project records in `src/content/site.ts`.

SEO baseline is maintained in `src/pages/index.astro`, `public/robots.txt`, and `public/sitemap.xml`.
