export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
}

export const experience: Experience[] = [
  {
    role: 'Software Lead Developer',
    company: 'Yuzu.hr',
    location: 'Remote',
    period: 'Mar 2025 - Sep 2025',
    description: 'Contract engagement leading software development.',
    highlights: [
      'Refactored the codebase to eliminate duplication and migrated all JavaScript to TypeScript',
      'Built new features for the organisation and individual dashboards',
      'Implemented a PDF report generation engine',
    ],
  },
  {
    role: 'Lead Developer',
    company: 'CareGame',
    location: 'Paris, France',
    period: 'Oct 2017 - Feb 2025',
    description: 'Cloud gaming platform streaming Android games to mobile browsers.',
    highlights: [
      'Built the initial streaming prototype for Android game diffusion and control on mobile',
      'Implemented the back-end, CMS, and customer-facing Web App',
      'Team management and Kanban JIRA project management',
      'Technical referent for contacts with partners',
    ],
  },
  {
    role: 'Unity Developer',
    company: 'Le Schmilblick',
    location: 'Paris, France',
    period: 'Oct 2016 - Oct 2017',
    description: 'Development of an Android and iOS quiz mobile game in Unity.',
    highlights: [
      'Built mobile game using Unity and Azure PlayFab',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Le Schmilblick',
    location: 'Paris, France',
    period: 'May 2016 - Oct 2016',
    description: 'Full-stack web development for a weekly webzine and a charitable gaming platform.',
    highlights: [
      'Developed a weekly webzine with its back-end and editorial panel',
      'Built a charitable quiz-based gaming platform with payment security and CMS',
    ],
  },
  {
    role: 'MEAN Stack Developer',
    company: 'Le Schmilblick',
    location: 'Paris, France',
    period: 'Jan 2016 - May 2016',
    description: 'Contract work on a webzine platform and quiz-based gaming application.',
    highlights: [
      'Developed a weekly webzine, back-end, and editorial panel',
      'Built a quiz-based gaming platform with front-end, back-end, and payment security',
    ],
  },
  {
    role: 'Teacher',
    company: 'Coding Academy by Epitech',
    location: 'Paris, France',
    period: 'Sep 2015 - Feb 2016',
    description: 'Pedagogical assistant for students in professional retraining.',
    highlights: [
      'Taught C and web technologies: HTML/CSS/JS, PHP & Symfony, Ruby on Rails, MEAN stack',
      'Created lessons and sample projects for ~15 students',
    ],
  },
  {
    role: 'Teacher - Astek',
    company: 'Epitech',
    location: 'Paris, France',
    period: 'Sep 2014 - Feb 2015',
    description: 'Teaching assistant during the Epitech "piscine" and student projects.',
    highlights: [
      'Assisted students with projects and intensive bootcamp sessions',
      'Graded projects and analyzed student questions',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Master\'s Degree in Computer Science',
    school: 'Epitech - European Institute of Technology',
    location: 'Paris, France',
    period: '2013 - 2016',
    //description: 'Activities: Astek, Aspic, Teaching Assistant.',
  },
  {
    degree: 'Two-Year Technical Degree in Computer Science',
    school: 'University of Reims Champagne-Ardenne',
    location: 'Reims, France',
    period: '2011 - 2013',
  },
];
