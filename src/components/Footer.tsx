
import React from 'react';
import { Linkedin, Instagram, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-300 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" className="text-2xl font-bold text-gradient mb-4 md:mb-0 transition-transform hover:scale-110">GM</a>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
               className="transform transition-all duration-300 hover:scale-125">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-highlight-blue transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               className="transform transition-all duration-300 hover:scale-125">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-highlight-pink transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               className="transform transition-all duration-300 hover:scale-125">
              <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
               className="transform transition-all duration-300 hover:scale-125">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-highlight-blue transition-colors" />
            </a>
            <a href="mailto:contact@gerasimosmakris.com" target="_blank" rel="noopener noreferrer" aria-label="Email"
               className="transform transition-all duration-300 hover:scale-125">
              <Mail className="h-5 w-5 text-gray-400 hover:text-highlight-purple transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Gerasimos Makris. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
