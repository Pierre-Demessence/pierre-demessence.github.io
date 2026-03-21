export interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  article?: string;
}

export const projects: Project[] = [
  {
    title: 'Idle LoL',
    date: '2026',
    description: 'A browser-based idle game inspired by League of Legends, centered on team building, wave combat, and long-term progression.',
    tags: ['TypeScript', 'Web Game', 'Game Dev'],
    live: 'https://idlelol.ovh/',
  },
  {
    title: 'Steam AI Games Indicator',
    date: '2025',
    description: 'A collection of userscripts that makes Steam AI-content disclosures more visible with store-wide badges and page-level banners.',
    tags: ['JavaScript', 'Userscript', 'Browser Tools'],
    repo: 'https://github.com/Pierre-Demessence/SteamAIGamesIndicator',
  },
  {
    title: 'CareGame',
    date: '2017-2025',
    description: 'A professional cloud gaming web app for playing Android games streamed from a computer. I built the initial streaming prototype, then developed the web stack including the backend, CMS, and customer-facing web app.',
    tags: ['Cloud Gaming', 'Web App', 'CMS', 'Backend'],
    article: 'https://www.hardwarezone.com.sg/mobile/telco/tech-news-starhub-mobile-gaming-caregame-onmobile-price',
  },
  {
    title: 'Epitech R-Type',
    date: '2014',
    description: 'A multiplayer R-Type-inspired shooter built in C and C++, with networking, custom engine systems, and game architecture work.',
    tags: ['C', 'C++', 'Multiplayer', 'Game Dev'],
    repo: 'https://github.com/Pierre-Demessence/Epitech-R-Type',
  },
];
