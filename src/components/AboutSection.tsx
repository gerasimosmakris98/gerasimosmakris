import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
const AboutSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  return <section id="about" className="relative py-24 overflow-hidden">
      <div className="section-container">
        <SectionHeader subtitle="About Me" title="About" highlightedWord="Me" description="I'm a passionate web designer and social media manager with a keen eye for modern aesthetics and engaging digital experiences." />

        <motion.div className="flex flex-col lg:flex-row gap-16 items-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }}>
          <motion.div className="lg:w-1/2 flex justify-center" variants={itemVariants}>
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 glass-panel-strong z-0"></div>
              
              <img alt="Gerasimos Makris - Professional Web Designer & Social Media Manager" className="object-center w-full h-full z-20 relative transition-all duration-300 group-hover:scale-105 object-cover" src="https://drive.google.com/file/d/1WYFg5d3bfLG_pud0blLsSLZGoT2Gcqkw/view?usp=drive_link" />
            </div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.div className="space-y-6 text-gray-200 mb-10 font-modern leading-relaxed" variants={itemVariants}>
              <p className="text-lg">
                I'm a passionate web designer and social media manager with a keen eye for modern aesthetics and engaging digital experiences.
              </p>
              <p>
                Originally from Athens, Greece, I now call Madrid my home, bringing a unique Mediterranean perspective to my creative work.
              </p>
              <p>
                My approach combines technical precision with artistic vision, resulting in designs that not only look beautiful but also drive engagement and achieve business goals.
              </p>
              <p>
                With expertise in both design and social media strategy, I help brands establish a cohesive online presence that resonates with their target audience.
              </p>
            </motion.div>
            
            <motion.div className="grid grid-cols-2 gap-6" variants={containerVariants}>
              <motion.div className="glass-panel-strong p-6 rounded-2xl group cursor-pointer relative overflow-hidden" variants={itemVariants} whileHover={{
              scale: 1.02,
              y: -5
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-highlight-blue/8 to-highlight-purple/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-bold mb-2 text-gradient-elegant font-elegant relative z-10">5+</h3>
                <p className="text-gray-300 font-modern relative z-10">Years of Experience</p>
              </motion.div>
              
              <motion.div className="glass-panel-strong p-6 rounded-2xl group cursor-pointer relative overflow-hidden" variants={itemVariants} whileHover={{
              scale: 1.02,
              y: -5
            }}>
                <div className="absolute inset-0 bg-gradient-to-br from-highlight-purple/8 to-highlight-pink/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-bold mb-2 text-gradient-elegant font-elegant relative z-10">50+</h3>
                <p className="text-gray-300 font-modern relative z-10">Projects Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;