# Codebase Guide

### Directory Layout

```text
.github/workflows/   # GitHub Actions deployment workflow
docs/                 # Project documentation
  plans/              # Feature plans and design docs
public/               # Static assets served as-is (favicon, CNAME)
src/
  components/         # Reusable .astro components
  data/               # TypeScript data files (projects, etc.)
  layouts/            # Page wrapper layouts
  pages/              # File-based routing — each .astro = one page
  styles/             # Global CSS and design tokens
```

### Conventions

- **Components**: PascalCase filenames (`ProjectCard.astro`)
- **Pages**: lowercase kebab-case (`projects.astro`)
- **Data**: TypeScript files in `src/data/` export typed arrays/objects
- **Styles**: Global tokens in `src/styles/global.css`, component styles co-located via `<style>` blocks
- **New pages**: Add a `.astro` file to `src/pages/` and update `Header.astro` nav links
- **New projects**: Add an entry to `src/data/projects.ts`
- **Experience data**: Work history and education in `src/data/experience.ts`
- **Uses data**: Tools and services in `src/data/uses.ts`
