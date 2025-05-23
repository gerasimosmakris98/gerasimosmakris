
import React from 'react';
import { Linkedin, Instagram, Github, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-300 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" className="text-2xl font-bold text-gradient mb-4 md:mb-0 transition-transform hover:scale-110">GM</a>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/gerasimosmakris/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
               className="transform transition-all duration-300 hover:scale-125">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-highlight-blue transition-colors" />
            </a>
            <a href="https://instagram.com/gerasimos.makris/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="transform transition-all duration-300 hover:scale-125">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-highlight-pink transition-colors" />
            </a>
            <a href="https://github.com/gerasimosmakris98" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               className="transform transition-all duration-300 hover:scale-125">
              <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://x.com/gerasimos_m1998/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
               className="transform transition-all duration-300 hover:scale-125">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-highlight-blue transition-colors" />
            </a>
            <a href="https://www.facebook.com/makris.gerasimos/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               className="transform transition-all duration-300 hover:scale-125">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-highlight-blue transition-colors" />
            </a>
            <a href="mailto:j.makris98@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"
               className="transform transition-all duration-300 hover:scale-125">
              <Mail className="h-5 w-5 text-gray-400 hover:text-highlight-purple transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Gerasimos Makris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
