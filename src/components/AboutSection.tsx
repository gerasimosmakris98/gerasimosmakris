
import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200 overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-highlight-purple/8 to-highlight-blue/8 blur-3xl"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-highlight-purple" />
            <span className="uppercase tracking-widest text-gray-400 text-sm font-modern">
              About Me
            </span>
            <Sparkles className="w-4 h-4 text-highlight-blue" />
          </motion.div>
          <h2 className="heading-lg mb-6 font-elegant">
            About <span className="text-gradient-elegant">Me</span>
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:w-1/2 flex justify-center" variants={itemVariants}>
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 glass-panel-strong z-0"></div>
              
              <img 
                alt="Gerasimos Makris - Professional Web Designer & Social Media Manager" 
                className="object-cover object-center w-full h-full z-20 relative transition-all duration-500 group-hover:scale-105" 
                src="/lovable-uploads/4b1ab70d-30fe-467b-8e93-016a47ca07b5.png" 
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark-200/90 to-transparent backdrop-blur-lg z-30">
                <motion.div 
                  className="flex items-center gap-2 text-gray-100 mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="p-1 rounded-lg glass-panel">
                    <MapPin size={10} className="text-highlight-blue" />
                  </div>
                  <span className="font-modern font-medium text-xs">Madrid, Spain</span>
                </motion.div>
                <motion.p 
                  className="text-xs text-gray-300 font-modern flex items-center gap-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="w-1 h-1 rounded-full bg-highlight-pink"></span>
                  <span>Originally from Athens, Greece</span>
                </motion.p>
              </div>
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
              <motion.div 
                className="glass-panel-strong p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-highlight-blue/8 to-highlight-purple/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-bold mb-2 text-gradient-elegant font-elegant relative z-10">5+</h3>
                <p className="text-gray-300 font-modern relative z-10">Years of Experience</p>
              </motion.div>
              
              <motion.div 
                className="glass-panel-strong p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-highlight-purple/8 to-highlight-pink/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-3xl font-bold mb-2 text-gradient-elegant font-elegant relative z-10">50+</h3>
                <p className="text-gray-300 font-modern relative z-10">Projects Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
