
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
    
    // Enhanced structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://gerasimosmakris.com/#person",
          "name": "Gerasimos Makris",
          "givenName": "Gerasimos",
          "familyName": "Makris",
          "jobTitle": "Web Designer & Social Media Manager",
          "description": "Professional web designer and social media manager specializing in modern web design, UI/UX, responsive development, and strategic social media campaigns for businesses and brands.",
          "url": "https://gerasimosmakris.com",
          "image": "https://gerasimosmakris.com/lovable-uploads/4be2e524-8b85-433f-9e31-b1166bd5f7b8.png",
          "email": "j.makris98@gmail.com",
          "birthPlace": {
            "@type": "Place",
            "name": "Athens, Greece"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressRegion": "Madrid",
            "addressCountry": "Spain"
          },
          "nationality": {
            "@type": "Country",
            "name": "Greece"
          },
          "knowsAbout": [
            "Web Design",
            "Social Media Management", 
            "UI/UX Design",
            "Frontend Development",
            "Digital Marketing",
            "Brand Identity",
            "Responsive Design",
            "Content Creation"
          ],
          "sameAs": [
            "https://linkedin.com/in/gerasimosmakris/",
            "https://instagram.com/gerasimos.makris/", 
            "https://github.com/gerasimosmakris98",
            "https://x.com/gerasimos_m1998/",
            "https://www.facebook.com/makris.gerasimos/"
          ]
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://gerasimosmakris.com/#service",
          "name": "Gerasimos Makris - Web Design & Social Media Services",
          "description": "Professional web design and social media management services in Madrid, Spain. Specializing in modern, responsive websites and strategic social media campaigns.",
          "provider": {
            "@id": "https://gerasimosmakris.com/#person"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Madrid"
            },
            {
              "@type": "Country", 
              "name": "Spain"
            },
            {
              "@type": "Place",
              "name": "Europe"
            }
          ],
          "serviceType": [
            "Web Design",
            "Social Media Management",
            "UI/UX Design", 
            "Digital Marketing",
            "Brand Development"
          ],
          "priceRange": "€€",
          "url": "https://gerasimosmakris.com"
        },
        {
          "@type": "WebSite",
          "@id": "https://gerasimosmakris.com/#website",
          "url": "https://gerasimosmakris.com",
          "name": "Gerasimos Makris Portfolio",
          "description": "Professional portfolio of Gerasimos Makris, web designer and social media manager based in Madrid, Spain.",
          "publisher": {
            "@id": "https://gerasimosmakris.com/#person"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://gerasimosmakris.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
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
      <div id="portfolio">
        <ProjectsSection />
      </div>
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
