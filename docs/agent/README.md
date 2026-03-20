---
last-updated: 2026-03-20
applicable: ['**']
owner: Pierre Demessence
---

# Agent — Operational Reference

## Purpose

Assists with development on the personal portfolio site at `pierre.demessence.fr`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npx astro check` | TypeScript and Astro diagnostics |

## Important Paths

- `src/pages/` — file-based routing (one `.astro` = one page)
- `src/components/` — reusable Astro components
- `src/data/projects.ts` — project data (add new projects here)
- `src/styles/global.css` — design tokens and global styles
- `src/layouts/BaseLayout.astro` — page shell (SEO meta, fonts, theme script)
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `public/` — static assets served as-is

## Invariants

- Zero client-side JS by default (Astro static output) — exception: theme toggle and mobile nav use minimal scripts.
- All pages use `BaseLayout` with named slots (`header`, default, `footer`).
- New pages must be added to `Header.astro` nav links array.
- New projects go in `src/data/projects.ts`.
- CSS uses custom properties defined in `global.css` `:root` / `[data-theme="dark"]`.
