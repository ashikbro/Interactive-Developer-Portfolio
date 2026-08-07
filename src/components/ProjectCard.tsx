import type { PortfolioProject } from '../content/sampleProjects';

export type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={project.demoUrl} target="_blank" rel="noreferrer">
        View demo
      </a>
    </article>
  );
}
