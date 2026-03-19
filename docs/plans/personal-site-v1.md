# Personal Site v1 — Portfolio + Project Showcase

## Requirements

### R1 — Home / Portfolio Page

WHEN a visitor navigates to the root URL, THE SYSTEM SHALL display:

- Name and professional title
- Brief bio / about section
- Key skills/technologies
- Links to GitHub, LinkedIn, and email

### R2 — Projects Showcase Page

WHEN a visitor navigates to /projects, THE SYSTEM SHALL display:

- A gallery of featured projects with title, description, tech stack tags, and links (live demo + repo)
- Projects defined as data in a TypeScript file for easy maintenance

### R3 — Navigation

THE SYSTEM SHALL provide consistent navigation between Home and Projects pages via a header.

### R4 — Responsive Design

THE SYSTEM SHALL render correctly on mobile, tablet, and desktop viewports.

### R5 — Deployment

WHEN code is pushed to the master branch, THE SYSTEM SHALL automatically build and deploy to GitHub Pages via a GitHub Actions workflow, preserving the custom domain (pierre.demessence.fr).

### R6 — Performance

THE SYSTEM SHALL ship zero JavaScript by default (Astro static output).

## Design Decisions

### Stack

- **Framework**: Astro (static output, zero JS, content-focused)
- **Styling**: Vanilla CSS with CSS custom properties
- **Fonts**: "Syne" (headings) + "Work Sans" (body) via Google Fonts
- **Deployment**: GitHub Actions → GitHub Pages

### Color Palette (60-30-10)

- **Primary (60%)**: Off-white `#FAFAF9`, cool gray surfaces `#F1F5F9`
- **Secondary (30%)**: Slate text `#1E293B`, muted `#64748B`
- **Accent (10%)**: Terracotta `#C2410C`, hover `#9A3412`

### Layout

- Clean, spacious, generous whitespace
- Two pages: Home (`/`) and Projects (`/projects`)
- Sticky header with nav links

## Subtasks

- [x] Create plan document
- [ ] Initialize Astro project (package.json, tsconfig, astro.config)
- [ ] Build BaseLayout + Header + Footer components
- [ ] Build global CSS with design tokens
- [ ] Build Home page (Hero + About + Skills)
- [ ] Build Projects page (ProjectCard grid)
- [ ] Add GitHub Actions deploy workflow
- [ ] Update README and docs
- [ ] Build validation
- [ ] Peer review
