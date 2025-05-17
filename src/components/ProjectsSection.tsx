
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "A full-featured e-commerce platform with modern UI/UX design, featuring product catalog, cart functionality, and secure checkout process.",
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Fashion Brand Social Campaign",
      category: "social",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80",
      description: "Comprehensive social media campaign for a fashion brand, resulting in 150% increase in engagement and 25K new followers across platforms.",
      technologies: ["Instagram", "TikTok", "Content Strategy", "Analytics"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Personal portfolio website with smooth animations, responsive design, and modern aesthetic to showcase creative work.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant App Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description: "Mobile app design for a high-end restaurant, featuring online reservations, menu browsing, and loyalty program.",
      technologies: ["Figma", "Photoshop", "UI/UX", "Prototyping"],
      link: "#"
    },
    {
      id: 5,
      title: "Tech Startup Campaign",
      category: "social",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Product launch campaign for a tech startup across multiple social platforms, including content creation and influencer outreach.",
      technologies: ["Social Media Strategy", "Content Creation", "Analytics", "Campaign Management"],
      link: "#"
    },
    {
      id: 6,
      title: "Travel Blog Redesign",
      category: "design",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Complete redesign of a popular travel blog, focusing on immersive visual experience and improved content discovery.",
      technologies: ["WordPress", "Custom CSS", "UX Design", "Information Architecture"],
      link: "#"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-dark-100">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="uppercase tracking-widest text-gray-400 text-sm mb-3 block">
            Portfolio
          </span>
          <h2 className="heading-lg mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300">
            Explore my recent work across web design, social media campaigns, and brand development.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'web', 'social', 'design'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category
                    ? 'bg-white text-dark-200' 
                    : 'bg-dark-200 text-gray-300 hover:bg-dark-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={16} className="mr-2" /> View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-dark-100 border border-white/10 text-white max-w-3xl">
          {selectedProject && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedProject.link && (
                  <Button 
                    variant="default" 
                    className="w-full bg-highlight-purple hover:bg-highlight-purple/90"
                    onClick={() => window.open(selectedProject?.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" /> Visit Project
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
