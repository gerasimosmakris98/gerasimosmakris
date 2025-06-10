
import React from 'react';
import { FileText, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-highlight-blue/5 via-highlight-purple/5 to-highlight-pink/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
            className="lg:w-1/2"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden group perspective-1000">
              {/* Enhanced glass background with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-highlight-purple/20 via-highlight-blue/15 to-highlight-pink/20 z-10"></div>
              
              {/* Main image */}
              <img 
                src="/lovable-uploads/4be2e524-8b85-433f-9e31-b1166bd5f7b8.png" 
                alt="Gerasimos Makris - Professional Web Designer & Social Media Manager"
                className="object-cover object-center w-full h-full z-20 relative mix-blend-luminosity opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Enhanced overlay with better gradients */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-200/95 via-dark-200/70 to-transparent backdrop-blur-xl z-30">
                <motion.div 
                  className="flex items-center gap-3 text-gray-100 mb-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="p-2 rounded-lg glass-panel-strong">
                    <MapPin size={20} className="text-highlight-blue" />
                  </div>
                  <span className="font-modern font-medium">Madrid, Spain</span>
                </motion.div>
                <motion.p 
                  className="text-sm text-gray-300 font-modern flex items-center gap-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <span className="w-2 h-2 rounded-full bg-highlight-pink"></span>
                  Originally from Athens, Greece
                </motion.p>
              </div>
              
              {/* Enhanced floating sparkles */}
              <motion.div
                className="absolute top-6 right-6 p-3 glass-panel-strong rounded-full"
                animate={{ 
                  rotate: [0, 360], 
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={24} className="text-highlight-yellow" />
              </motion.div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-500 z-40"></div>
            </div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.span 
              className="inline-flex items-center gap-2 uppercase tracking-widest text-gray-400 text-sm mb-4 font-modern"
              variants={itemVariants}
            >
              <div className="w-8 h-px bg-gradient-to-r from-highlight-blue to-highlight-purple"></div>
              About Me
              <div className="w-8 h-px bg-gradient-to-r from-highlight-purple to-highlight-pink"></div>
            </motion.span>
            
            <motion.h2 
              className="heading-lg mb-8"
              variants={itemVariants}
            >
              Bridging Design & <span className="text-gradient-elegant">Social Strategy</span>
            </motion.h2>
            
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
            
            <motion.div variants={itemVariants}>
              <Button className="btn-primary mb-10 flex items-center gap-3 text-lg px-8 py-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/30 to-highlight-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FileText size={20} className="group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </Button>
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
