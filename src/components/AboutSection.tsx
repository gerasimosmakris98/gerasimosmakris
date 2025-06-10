
import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200 overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-highlight-purple/15 via-highlight-blue/10 to-highlight-pink/15 blur-3xl"
          animate={{ 
            y: [0, -30, 0], 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-highlight-pink/15 via-highlight-purple/10 to-highlight-blue/15 blur-3xl"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, 15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="section-container">
        <motion.div 
          className="flex flex-col lg:flex-row gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden group perspective-1000">
              {/* Glass background layers */}
              <div className="absolute inset-0 glass-panel-strong z-0"></div>
              
              {/* Main image */}
              <img 
                src="/lovable-uploads/61c2a79f-1047-40f7-8a62-ebd7c7bd7fba.png" 
                alt="Gerasimos Makris - Professional Web Designer & Social Media Manager"
                className="object-cover object-center w-full h-full z-20 relative transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Location overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-200/95 via-dark-200/70 to-transparent backdrop-blur-xl z-30">
                <motion.div 
                  className="flex items-center gap-3 text-gray-100 mb-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="p-2 rounded-lg glass-panel-strong">
                    <MapPin size={16} className="text-highlight-blue" />
                  </div>
                  <span className="font-modern font-medium text-sm">Madrid, Spain</span>
                </motion.div>
                <motion.p 
                  className="text-xs text-gray-300 font-modern flex items-center gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight-pink"></span>
                  Originally from Athens, Greece
                </motion.p>
              </div>
              
              {/* Floating sparkle */}
              <motion.div
                className="absolute top-4 right-4 p-2 glass-panel-strong rounded-full"
                animate={{ 
                  rotate: [0, 360], 
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={16} className="text-highlight-yellow" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-highlight-blue" size={20} />
                <Sparkles className="text-highlight-purple" size={16} />
                <Sparkles className="text-highlight-pink" size={18} />
              </motion.div>
              
              <motion.h2 
                className="heading-lg text-center lg:text-left"
                variants={itemVariants}
              >
                About <span className="text-gradient-elegant">Me</span>
              </motion.h2>
              
              <motion.div
                className="flex items-center gap-2"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-highlight-pink" size={18} />
                <Sparkles className="text-highlight-purple" size={16} />
                <Sparkles className="text-highlight-blue" size={20} />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-6 text-gray-200 mb-10 font-modern leading-relaxed"
              variants={itemVariants}
            >
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
            
            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={containerVariants}
            >
              <motion.div 
                className="glass-panel-strong p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-highlight-blue/10 to-highlight-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-bold mb-3 text-gradient-elegant font-elegant relative z-10">5+</h3>
                <p className="text-gray-300 font-modern relative z-10">Years of Experience</p>
              </motion.div>
              
              <motion.div 
                className="glass-panel-strong p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-highlight-purple/10 to-highlight-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-bold mb-3 text-gradient-elegant font-elegant relative z-10">50+</h3>
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
