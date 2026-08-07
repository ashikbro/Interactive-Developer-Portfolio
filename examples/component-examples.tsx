import { AnimatedHero } from '../src/components/AnimatedHero';
import { ProjectCard } from '../src/components/ProjectCard';

const projectExample = {
  title: 'Example Project',
  description: 'Reusable project card with typed props.',
  demoUrl: '#',
  stack: ['React', 'TypeScript'],
};

export function ComponentExamples() {
  return (
    <>
      <AnimatedHero
        title="Your Name"
        subtitle="Frontend engineer building interactive products."
        ctaLabel="Contact Me"
      />
      <ProjectCard project={projectExample} />
    </>
  );
}
