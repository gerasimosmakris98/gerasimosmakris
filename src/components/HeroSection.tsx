
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
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-highlight-blue/20 to-highlight-purple/20 blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-highlight-purple/20 to-highlight-pink/20 blur-xl"
          animate={{ y: [0, 30, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-highlight-pink/20 to-highlight-blue/20 blur-xl"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="section-container flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-highlight-purple" />
          <span className="uppercase tracking-widest text-gray-300 text-sm font-modern">
            Web Designer & Social Media Manager
          </span>
          <Sparkles className="w-5 h-5 text-highlight-blue" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="heading-xl mb-6"
        >
          <span className="font-light block mb-2 text-white/90">Hello, I'm</span>
          <span className="text-gradient-elegant font-bold">Gerasimos Makris</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-gray-200 text-lg mb-10 leading-relaxed"
        >
          Creating visually stunning web experiences and managing impactful social media campaigns from Madrid, Spain. 
          Where creativity meets strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <button 
            className="btn-primary text-lg px-8 py-4 group relative overflow-hidden"
            onClick={() => scrollToSection('portfolio')}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue to-highlight-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          
          <button 
            className="btn-secondary text-lg px-8 py-4 group"
            onClick={() => scrollToSection('contact')}
          >
            <span>Get in Touch</span>
          </button>
        </motion.div>
        
        <motion.a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-all duration-300 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-modern opacity-0 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
            <ArrowDown size={28} className="animate-bounce" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
