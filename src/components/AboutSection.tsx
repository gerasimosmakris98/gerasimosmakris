
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="relative py-24 bg-dark-100 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-highlight-purple/10 to-highlight-blue/10 blur-2xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-highlight-pink/10 to-highlight-purple/10 blur-2xl"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="section-container">
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-highlight-purple/30 via-highlight-blue/20 to-highlight-pink/30 z-0"></div>
              <img 
                src="/placeholder.svg" 
                alt="Gerasimos Makris"
                className="object-cover w-full h-full z-10 mix-blend-luminosity opacity-80 group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-200/90 via-dark-200/50 to-transparent backdrop-blur-sm z-20">
                <motion.div 
                  className="flex items-center gap-2 text-gray-200 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <MapPin size={18} className="text-highlight-blue" />
                  <span className="font-modern">Madrid, Spain</span>
                </motion.div>
                <motion.p 
                  className="text-sm text-gray-300 font-modern"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Originally from Athens, Greece
                </motion.p>
              </div>
              
              {/* Floating sparkles */}
              <motion.div
                className="absolute top-4 right-4 text-highlight-yellow"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={20} />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.span 
              className="uppercase tracking-widest text-gray-400 text-sm mb-3 block font-modern"
              variants={itemVariants}
            >
              About Me
            </motion.span>
            <motion.h2 
              className="heading-lg mb-6"
              variants={itemVariants}
            >
              Bridging Design & <span className="text-gradient-elegant">Social Strategy</span>
            </motion.h2>
            <motion.div 
              className="space-y-4 text-gray-200 mb-8 font-modern leading-relaxed"
              variants={itemVariants}
            >
              <p>
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
              <Button className="btn-primary mb-8 flex items-center gap-2 group">
                <FileText size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Download CV</span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              <motion.div 
                className="glass-panel-strong p-6 rounded-xl group cursor-pointer"
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-3xl font-bold mb-2 text-gradient-elegant font-elegant">5+</h3>
                <p className="text-gray-300 font-modern">Years of Experience</p>
              </motion.div>
              <motion.div 
                className="glass-panel-strong p-6 rounded-xl group cursor-pointer"
                variants={statsVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-3xl font-bold mb-2 text-gradient-elegant font-elegant">50+</h3>
                <p className="text-gray-300 font-modern">Projects Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
