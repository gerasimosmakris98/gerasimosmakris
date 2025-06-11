
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Clock, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import SectionHeader from './SectionHeader';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <SectionHeader
          subtitle="Portfolio"
          title="My"
          highlightedWord="Projects"
          description="Explore my upcoming work across web design, social media campaigns, and brand development."
        />
        
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel-strong p-2 rounded-2xl">
            <div className="flex flex-wrap justify-center gap-2">
              <motion.div className="flex items-center gap-2 mr-4">
                <Filter className="w-4 h-4 text-highlight-blue" />
                <span className="text-sm font-modern text-gray-300">Filter:</span>
              </motion.div>
              {['all', 'web', 'social', 'design'].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-highlight-blue to-highlight-purple text-white shadow-lg' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${filter}`}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl glass-panel-strong hover:scale-[1.02] transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 filter brightness-40 group-hover:brightness-30"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 via-dark-200/20 to-transparent" />
                  
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="glass-panel-strong p-6 rounded-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock className="w-12 h-12 text-highlight-purple mx-auto mb-3" />
                      </motion.div>
                      <p className="text-white font-bold text-xl text-center font-elegant">Coming Soon</p>
                      <p className="text-gray-300 text-sm text-center mt-2 font-modern">Project in development</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <h3 className="text-xl font-semibold mb-2 text-white font-modern">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 font-modern">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="glass-panel-strong border-white/30 hover:bg-white/20 font-modern"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Eye size={16} className="mr-2" /> View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-dark-100/95 backdrop-blur-2xl border border-white/20 text-white max-w-4xl">
          {selectedProject && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-panel-strong p-6 rounded-xl">
                    <Clock className="w-12 h-12 text-highlight-purple mx-auto mb-3" />
                    <p className="text-white font-bold text-lg text-center font-elegant">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3 font-elegant">{selectedProject.title}</h3>
                  <p className="text-gray-200 leading-relaxed font-modern">{selectedProject.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-3 font-modern">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 glass-panel rounded-lg text-sm font-modern">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                  <p className="text-sm text-gray-300 font-modern">
                    This project is currently in development. Stay tuned for updates and the full case study!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
