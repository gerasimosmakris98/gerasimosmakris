
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  comingSoon: boolean;
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Modern e-commerce platform with cutting-edge UI/UX design, featuring product catalog, cart functionality, and secure checkout process.",
      technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
      comingSoon: true
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "social",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Comprehensive social media campaign strategy focused on brand awareness and audience engagement across multiple platforms.",
      technologies: ["Social Media Strategy", "Content Creation", "Analytics", "Campaign Management"],
      comingSoon: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Modern portfolio website with smooth animations, responsive design, and interactive elements to showcase creative work.",
      technologies: ["React", "Framer Motion", "TailwindCSS", "Three.js"],
      comingSoon: true
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for cohesive brand presence.",
      technologies: ["Figma", "Adobe Creative Suite", "Brand Strategy"],
      comingSoon: true
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      category: "social",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Comprehensive digital marketing strategy focused on driving conversions and ROI across multiple digital channels.",
      technologies: ["SEO", "PPC", "Content Marketing", "Email Marketing"],
      comingSoon: true
    },
    {
      id: 6,
      title: "UI/UX Design System",
      category: "design",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Comprehensive design system with reusable components, design tokens, and guidelines for consistent user experience across platforms.",
      technologies: ["Figma", "UI Design", "UX Research", "Design Systems"],
      comingSoon: true
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
            Explore my upcoming work across web design, social media campaigns, and brand development.
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
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-50"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-dark-200/80 backdrop-blur-sm p-4 rounded-lg transform transition-all duration-300 group-hover:scale-110">
                  <Clock className="w-10 h-10 text-highlight-purple mx-auto mb-2" />
                  <p className="text-white font-bold text-lg text-center">Coming Soon</p>
                </div>
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
              <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-dark-200/80 backdrop-blur-sm p-4 rounded-lg">
                    <Clock className="w-10 h-10 text-highlight-purple mx-auto mb-2" />
                    <p className="text-white font-bold text-lg text-center">Coming Soon</p>
                  </div>
                </div>
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
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
