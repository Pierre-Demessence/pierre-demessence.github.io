export interface UsesCategory {
  title: string;
  items: UsesItem[];
}

export interface UsesItem {
  name: string;
  description: string;
  url?: string;
}

export const uses: UsesCategory[] = [
  {
    title: 'Editor & Terminal',
    items: [
      { name: 'VS Code', description: 'Primary editor for everything web and general-purpose development.', url: 'https://code.visualstudio.com/' },
      { name: 'Windows Terminal', description: 'Terminal emulator with tabs and profiles.' },
      { name: 'GitHub Copilot', description: 'AI pair-programming assistant integrated into the editor.', url: 'https://github.com/features/copilot' },
    ],
  },
  {
    title: 'Development',
    items: [
      { name: 'TypeScript', description: 'Go-to language for web projects.', url: 'https://www.typescriptlang.org/' },
      { name: 'Astro', description: 'Static site generator powering this website.', url: 'https://astro.build/' },
      { name: 'Node.js', description: 'Server-side runtime for tooling and APIs.', url: 'https://nodejs.org/' },
      { name: 'Docker', description: 'Containerization for reproducible environments.', url: 'https://www.docker.com/' },
      { name: 'Git', description: 'Version control - everything lives in Git.' },
    ],
  },
  {
    title: 'Services',
    items: [
      { name: 'GitHub', description: 'Code hosting, CI/CD, and project management.', url: 'https://github.com/' },
      { name: 'GitHub Pages', description: 'Free static hosting for this site.' },
      { name: 'Cloudflare', description: 'DNS and CDN.' },
    ],
  },
];
