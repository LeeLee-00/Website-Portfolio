import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="section-line"></motion.div>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p>
              Hello! I'm a passionate full-stack developer with a love for creating 
              digital experiences that make a difference. My journey in web development 
              started several years ago, and I've been hooked ever since.
            </p>
            
            <p>
              I enjoy working with modern technologies and frameworks to build 
              scalable, efficient, and user-friendly applications. My goal is to 
              write clean, maintainable code while delivering exceptional user experiences.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h4>🎯 Focus</h4>
                <p>Building scalable web applications with modern technologies</p>
              </div>
              
              <div className="highlight-item">
                <h4>🚀 Passion</h4>
                <p>Creating seamless user experiences and clean, efficient code</p>
              </div>
              
              <div className="highlight-item">
                <h4>💡 Learning</h4>
                <p>Always exploring new technologies and best practices</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-image">
            <div className="about-image-container">
              <div className="about-image-placeholder">
                <span>Professional Photo</span>
              </div>
              <div className="about-image-overlay"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
