
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="section-container flex flex-col items-center text-center">
        <span className="uppercase tracking-widest text-gray-400 text-sm mb-4 animate-fade-in">
          Web Designer & Social Media Manager
        </span>
        <h1 className="heading-xl mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-light block mb-2">Hello, I'm</span>
          <span className="text-gradient">Gerasimos Makris</span>
        </h1>
        <p className="max-w-2xl text-gray-300 text-lg mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Creating visually stunning web experiences and managing impactful social media campaigns from Madrid, Spain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="glass-panel bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('skills')}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-md border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </Button>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-pulse-slow"
        >
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
