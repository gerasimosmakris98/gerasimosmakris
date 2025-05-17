
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MessageSquare, Laptop, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Web Development", 
      description: "Creating responsive, modern websites with clean code and optimal performance.",
      color: "from-highlight-blue/20 to-highlight-blue/10"
    },
    { 
      icon: <Palette className="w-8 h-8" />, 
      title: "UI/UX Design", 
      description: "Crafting intuitive, visually appealing user interfaces and seamless experiences.",
      color: "from-highlight-purple/20 to-highlight-purple/10" 
    },
    { 
      icon: <MessageSquare className="w-8 h-8" />, 
      title: "Social Media Strategy", 
      description: "Developing engaging content and growth strategies across all social platforms.",
      color: "from-highlight-pink/20 to-highlight-pink/10"
    },
    { 
      icon: <Laptop className="w-8 h-8" />, 
      title: "Content Creation", 
      description: "Producing high-quality visual content that aligns with brand identity.",
      color: "from-highlight-blue/20 to-highlight-blue/10"
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: "Mobile Design", 
      description: "Optimizing experiences for all screen sizes with mobile-first approach.",
      color: "from-highlight-purple/20 to-highlight-purple/10" 
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-gray-400 text-sm mb-3 block">
            My Skills
          </span>
          <h2 className="heading-lg mb-6">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-gray-300">
            I combine technical expertise with creative vision to deliver exceptional digital experiences and social media strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel p-6 bg-gradient-to-br ${skill.color} hover:translate-y-[-5px] transition-transform duration-300`}
            >
              <div className="mb-4 text-white">{skill.icon}</div>
              <h3 className="heading-sm mb-3">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["HTML5", "CSS3", "JavaScript", "React", "Figma", "Photoshop", "Tailwind", "WordPress", "Social Media Management", "Content Strategy"].map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-dark-100 rounded-full text-sm text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
