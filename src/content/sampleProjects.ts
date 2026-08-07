export type PortfolioProject = {
  title: string;
  description: string;
  demoUrl: string;
  stack: string[];
};

export const sampleProjects: PortfolioProject[] = [
  {
    title: 'Interactive Skill Radar',
    description: 'Animated skill visualization with smooth hover details.',
    demoUrl: '#',
    stack: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    title: 'Live Project Timeline',
    description: 'Timeline cards with dynamic filtering and transitions.',
    demoUrl: '#',
    stack: ['React', 'Vite', 'CSS Grid'],
  },
];
