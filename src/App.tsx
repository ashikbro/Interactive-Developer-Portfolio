import './App.css';
import { AnimatedHero } from './components/AnimatedHero';
import { FeaturePills } from './components/FeaturePills';
import { ProjectCard } from './components/ProjectCard';
import { sampleProjects } from './content/sampleProjects';

const features = ['Interactive Animations', 'Live Components', 'Blog-ready Structure'];

function App() {
  return (
    <main className="layout">
      <AnimatedHero
        title="Interactive Developer Portfolio"
        subtitle="A frontend showcase for projects, motion design, and technical storytelling."
        ctaLabel="Explore Projects"
      />

      <section>
        <h2>Feature Highlights</h2>
        <FeaturePills features={features} />
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div className="grid">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
