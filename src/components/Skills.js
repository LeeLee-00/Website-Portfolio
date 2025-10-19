import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 80 },
        { name: 'Python', icon: <FaPython />, level: 75 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 70 }
      ]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div 
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>
          <motion.div variants={itemVariants} className="section-line"></motion.div>
          <motion.p variants={itemVariants} className="section-subtitle">
            Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        variants={skillBarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-summary"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="summary-item">
            <h4>3+</h4>
            <p>Years Experience</p>
          </motion.div>
          <motion.div variants={itemVariants} className="summary-item">
            <h4>50+</h4>
            <p>Projects Completed</p>
          </motion.div>
          <motion.div variants={itemVariants} className="summary-item">
            <h4>10+</h4>
            <p>Technologies Mastered</p>
          </motion.div>
          <motion.div variants={itemVariants} className="summary-item">
            <h4>100%</h4>
            <p>Client Satisfaction</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
