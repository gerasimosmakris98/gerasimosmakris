
import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Minimal floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-highlight-blue/10 to-highlight-purple/10 blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-highlight-purple/10 to-highlight-pink/10 blur-3xl"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 glass-panel px-6 py-3"
        >
          <Sparkles className="w-5 h-5 text-highlight-purple" />
          <span className="uppercase tracking-widest text-gray-200 text-sm font-modern font-medium">
            Web Designer & Social Media Manager
          </span>
          <Sparkles className="w-5 h-5 text-highlight-blue" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl mb-8"
        >
          <motion.span 
            className="font-light block mb-4 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hello, I'm
          </motion.span>
          <motion.span 
            className="text-gradient-elegant font-bold block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Gerasimos Makris
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl text-gray-200 text-xl mb-12 leading-relaxed font-modern"
        >
          Creating visually stunning web experiences and managing impactful social media campaigns from Madrid, Spain. 
          <br />
          <span className="text-lg text-gray-300 mt-2 block">Where creativity meets strategy.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-8 mb-20"
        >
          <motion.button 
            className="btn-primary text-lg px-10 py-5 group relative overflow-hidden"
            onClick={() => scrollToSection('portfolio')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View My Work</span>
          </motion.button>
          
          <motion.button 
            className="btn-secondary text-lg px-10 py-5"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Get in Touch</span>
          </motion.button>
        </motion.div>
        
        <motion.a 
          href="#about" 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col items-center gap-3">
            <motion.span 
              className="text-sm font-modern opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-panel px-4 py-2"
            >
              Scroll to explore
            </motion.span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={28} className="text-highlight-blue" />
            </motion.div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
