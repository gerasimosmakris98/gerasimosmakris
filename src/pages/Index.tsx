
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import DesignShowcaseSection from '@/components/DesignShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    // Enhanced SEO title
    document.title = 'Gerasimos Makris | Professional Web Designer & Social Media Manager in Madrid';
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gerasimos Makris",
      "jobTitle": "Web Designer & Social Media Manager",
      "description": "Professional web designer and social media manager specializing in modern web design, UI/UX, and strategic social media campaigns.",
      "url": "https://gerasimosmakris.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressCountry": "Spain"
      },
      "sameAs": [
        "https://twitter.com/gerasimos_makris",
        "https://linkedin.com/in/gerasimos-makris",
        "https://instagram.com/gerasimos_makris"
      ]
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    // Smooth scroll to sections when hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      // Clean up structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <DesignShowcaseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
