import { motion } from 'framer-motion';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'TypeScript', level: 85, color: '#3178C6' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'CSS/SASS', level: 92, color: '#CC6699' },
    { name: 'Python', level: 80, color: '#3776AB' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Skills & Expertise
        </motion.h2>

        <motion.p variants={itemVariants} className="section-description">
          Technologies and tools I work with to bring ideas to life
        </motion.p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="skill-chart">
                <ResponsiveContainer width="100%" height={150}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="90%"
                    data={[{ value: skill.level, fill: skill.color }]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={10}
                      animationDuration={1500}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="skill-percentage">
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          variants={itemVariants}
        >
          <h3>Other Technologies</h3>
          <div className="skill-tags">
            {['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 
              'AWS', 'Firebase', 'Redux', 'Next.js', 'Express.js', 'Jest'].map((tech) => (
              <motion.span
                key={tech}
                className="skill-tag"
                whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-color)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
