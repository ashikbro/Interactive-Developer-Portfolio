import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration, real-time inventory, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      demo: 'https://codesandbox.io/embed/react-new',
      code: `// Sample React Component
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}`
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      demo: 'https://codesandbox.io/embed/react-new',
      code: `// Task Component with Drag & Drop
function Task({ task, onDragStart }) {
  return (
    <div 
      draggable
      onDragStart={() => onDragStart(task)}
      className="task"
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <span className="priority">{task.priority}</span>
    </div>
  );
}`
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with charts, forecasts, and location-based weather data.',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      github: 'https://github.com',
      live: 'https://example.com',
      demo: 'https://codesandbox.io/embed/react-new',
      code: `// Weather API Integration
async function fetchWeather(city) {
  const API_KEY = 'your-api-key';
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return {
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon
  };
}`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Featured Projects
        </motion.h2>

        <motion.p variants={itemVariants} className="section-description">
          Explore my latest work with live demos and source code
        </motion.p>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(
                      selectedProject?.id === project.id ? null : project
                    )}
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaCode />
                  </motion.button>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {selectedProject?.id === project.id && (
                <motion.div
                  className="code-preview"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <h4>Code Preview</h4>
                  <SyntaxHighlighter
                    language="javascript"
                    style={atomOneDark}
                    customStyle={{
                      borderRadius: '8px',
                      padding: '1rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    {project.code}
                  </SyntaxHighlighter>
                </motion.div>
              )}

              <div className="project-demo">
                <h4>Live Demo</h4>
                <iframe
                  src={project.demo}
                  title={`${project.title} demo`}
                  className="demo-iframe"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
