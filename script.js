const projects = [
  {
    name: 'Fire Fighting Humanoid Robot',
    description: 'A safety-focused robotics platform with simulation, perception, navigation, and test coverage.',
    tags: ['Robotics', 'Python', 'Computer vision'],
  },
  {
    name: 'My Legal AI Buddy',
    description: 'A local-first contract analysis MVP with source-linked findings, authentication, and document versioning.',
    tags: ['Next.js', 'Prisma', 'Privacy'],
  },
  {
    name: 'AgroMind',
    description: 'An agricultural assistant combining farm workflows, analytics, and AI-oriented services.',
    tags: ['React', 'Node.js', 'Agriculture'],
  },
];

const projectGrid = document.querySelector('#project-grid');
if (projectGrid) {
  projectGrid.innerHTML = projects.map((project) => `
    <article class="project-card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <ul class="tags" aria-label="${project.name} technologies">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
