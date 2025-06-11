import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const designCategories = [
  { name: "All", id: "all" },
  { name: "Web Design", id: "web" },
  { name: "Social Media", id: "social" },
  { name: "Branding", id: "branding" },
];

const designWorks = [
  {
    title: "Modern E-commerce Website",
    category: "web",
    description: "Clean, responsive e-commerce design with intuitive UX",
    image: "https://placehold.co/600x400/222/444?text=E-commerce+Design",
  },
  {
    title: "Brand Identity System",
    category: "branding",
    description: "Comprehensive brand identity with logo and style guide",
    image: "https://placehold.co/600x400/222/444?text=Brand+Identity",
  },
  {
    title: "Instagram Campaign",
    category: "social",
    description: "Engaging Instagram campaign with cohesive visual style",
    image: "https://placehold.co/600x400/222/444?text=Instagram+Campaign",
  },
  {
    title: "Corporate Website Redesign",
    category: "web",
    description: "Modern corporate site with improved user journey",
    image: "https://placehold.co/600x400/222/444?text=Corporate+Website",
  },
  {
    title: "Facebook Ads Campaign",
    category: "social",
    description: "High-converting Facebook ad designs with consistent messaging",
    image: "https://placehold.co/600x400/222/444?text=Facebook+Ads",
  },
  {
    title: "Restaurant Website",
    category: "web",
    description: "Appetizing food-focused website with reservation system",
    image: "https://placehold.co/600x400/222/444?text=Restaurant+Website",
  }
];

const DesignShowcaseSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredWorks = activeCategory === "all" 
    ? designWorks 
    : designWorks.filter(work => work.category === activeCategory);

  return (
    <section id="design-showcase" className="py-24">
      <div className="section-container">
        <SectionHeader
          subtitle="Portfolio"
          title="Design"
          highlightedWord="Showcase"
          description="A preview of my design work for web and social media projects. Each project is coming soon with comprehensive case studies."
        />

        <div className="flex justify-center space-x-4 mb-12">
          {designCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-highlight-purple text-white"
                  : "bg-dark-100 text-gray-400 hover:bg-dark-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-highlight-blue uppercase tracking-wider">
                  {designCategories.find(cat => cat.id === work.category)?.name}
                </span>
                <h3 className="text-lg font-semibold mt-2">{work.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">{work.description}</p>
                <div className="mt-4 flex items-center text-highlight-purple text-sm font-medium">
                  <span>Coming Soon</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignShowcaseSection;
