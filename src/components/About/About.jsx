import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a passionate full-stack developer with a love for creating beautiful,
              functional, and user-centered digital experiences. With expertise in modern
              web technologies, I transform ideas into reality through clean code and
              innovative solutions.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work,
              and it has evolved into a career where I get to solve complex problems and
              build products that make a difference. I'm always learning new technologies
              and best practices to stay at the forefront of web development.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical blog posts, or exploring new frameworks and tools to
              enhance my development workflow.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>5+</h3>
              <p>Years Experience</p>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>50+</h3>
              <p>Projects Completed</p>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>30+</h3>
              <p>Happy Clients</p>
            </motion.div>

            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
