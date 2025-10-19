import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.',
      image: '/api/placeholder/400/250',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: '/api/placeholder/400/250',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/250',
      technologies: [
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and excellent user experience.',
      image: '/api/placeholder/400/250',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="section-line"></motion.div>
          <motion.p variants={itemVariants} className="section-subtitle">
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  <span>Project Screenshot</span>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="tech-item"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for more projects and contributions</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
