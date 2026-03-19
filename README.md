# pierre.demessence.fr

Personal portfolio and project showcase built with [Astro](https://astro.build).

**Live**: [pierre.demessence.fr](https://pierre.demessence.fr)

## Quick Start

```bash
npm install
npm run dev       # local dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

## Project Structure

```text
src/
  components/   # Reusable Astro components (Header, Footer, ProjectCard)
  data/         # TypeScript data files (projects list)
  layouts/      # Page layouts (BaseLayout)
  pages/        # File-based routing (index, projects)
  styles/       # Global CSS and design tokens
public/         # Static assets (favicon, CNAME)
```

## Deployment

Pushes to `master` trigger automatic deployment to GitHub Pages
via the workflow in `.github/workflows/deploy.yml`.

## Documentation

See [docs/INDEX.md](docs/INDEX.md) for full documentation.
