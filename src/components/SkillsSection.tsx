import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MessageSquare, Laptop, Smartphone } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SkillsSection = () => {
  const skills = [
    { 
      icon: <Code className="w-7 h-7" />, 
      title: "Web Development", 
      description: "Creating responsive, modern websites with clean code and optimal performance.",
      color: "from-highlight-blue/15 to-highlight-blue/8"
    },
    { 
      icon: <Palette className="w-7 h-7" />, 
      title: "UI/UX Design", 
      description: "Crafting intuitive, visually appealing user interfaces and seamless experiences.",
      color: "from-highlight-purple/15 to-highlight-purple/8"
    },
    { 
      icon: <MessageSquare className="w-7 h-7" />, 
      title: "Social Media Strategy", 
      description: "Developing engaging content and growth strategies across all social platforms.",
      color: "from-highlight-pink/15 to-highlight-pink/8"
    },
    { 
      icon: <Laptop className="w-7 h-7" />, 
      title: "Content Creation", 
      description: "Producing high-quality visual content that aligns with brand identity.",
      color: "from-highlight-blue/15 to-highlight-purple/8"
    },
    { 
      icon: <Smartphone className="w-7 h-7" />, 
      title: "Mobile Design", 
      description: "Optimizing experiences for all screen sizes with mobile-first approach.",
      color: "from-highlight-purple/15 to-highlight-pink/8"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Minimal floating background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-highlight-purple/6 to-highlight-pink/6 blur-3xl"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container">
        <SectionHeader
          subtitle="My Skills"
          title="Services I"
          highlightedWord="Offer"
          description="I combine technical expertise with creative vision to deliver exceptional digital experiences and social media strategies."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`glass-panel-strong p-7 bg-gradient-to-br ${skill.color} transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              
              <motion.div 
                className="mb-5 text-white relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 font-modern relative z-10">{skill.title}</h3>
              <p className="text-gray-200 font-modern leading-relaxed relative z-10">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {["HTML5", "CSS3", "JavaScript", "React", "Figma", "Photoshop", "Tailwind", "WordPress", "Social Media Management", "Content Strategy"].map((tech, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 glass-panel rounded-full text-sm text-gray-200 font-modern hover:bg-white/8 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
