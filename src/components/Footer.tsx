
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, Twitter, Facebook, Mail, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/gerasimosmakris/",
      color: "hover:text-highlight-blue"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      label: "Instagram", 
      href: "https://instagram.com/gerasimos.makris/",
      color: "hover:text-highlight-pink"
    },
    { 
      icon: <Github className="h-5 w-5" />, 
      label: "GitHub", 
      href: "https://github.com/gerasimosmakris98",
      color: "hover:text-white"
    },
    { 
      icon: <Twitter className="h-5 w-5" />, 
      label: "X (Twitter)", 
      href: "https://x.com/gerasimos_m1998/",
      color: "hover:text-highlight-blue"
    },
    { 
      icon: <Facebook className="h-5 w-5" />, 
      label: "Facebook", 
      href: "https://www.facebook.com/makris.gerasimos/",
      color: "hover:text-highlight-blue"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "Email", 
      href: "mailto:contact@gerasimosmakris.com",
      color: "hover:text-highlight-purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-dark-300 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-highlight-blue/5 to-highlight-purple/5 blur-3xl"
          animate={{ 
            y: [0, -20, 0], 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-highlight-purple/5 to-highlight-pink/5 blur-3xl"
          animate={{ 
            y: [0, 15, 0], 
            x: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="section-container py-12 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a 
            href="#home" 
            className="text-3xl font-bold text-gradient-elegant mb-6 md:mb-0 font-elegant group"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="flex items-center gap-2">
              GM
              <Sparkles className="w-6 h-6 text-highlight-purple group-hover:animate-spin" />
            </span>
          </motion.a>
          
          <motion.div 
            className="flex space-x-4"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className={`glass-panel p-3 rounded-xl text-gray-400 ${link.color} transition-all duration-300 group relative overflow-hidden`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-highlight-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative z-10">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-400 text-sm font-modern flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span>&copy; {currentYear} Gerasimos Makris. All rights reserved.</span>
          </motion.p>
          
          <motion.p 
            className="text-gray-400 text-sm font-modern flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-highlight-pink fill-current" />
            </motion.span>
            <span>in Madrid, Spain</span>
          </motion.p>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          className="absolute bottom-8 right-8 glass-panel-strong p-3 rounded-full text-gray-400 hover:text-white transition-colors duration-300 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
