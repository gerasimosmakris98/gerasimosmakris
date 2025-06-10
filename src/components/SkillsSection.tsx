
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, MessageSquare, Laptop, Smartphone, Sparkles } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { 
      icon: <Code className="w-8 h-8" />, 
      title: "Web Development", 
      description: "Creating responsive, modern websites with clean code and optimal performance.",
      color: "from-highlight-blue/20 to-highlight-blue/10",
      hoverColor: "group-hover:from-highlight-blue/30 group-hover:to-highlight-blue/20"
    },
    { 
      icon: <Palette className="w-8 h-8" />, 
      title: "UI/UX Design", 
      description: "Crafting intuitive, visually appealing user interfaces and seamless experiences.",
      color: "from-highlight-purple/20 to-highlight-purple/10",
      hoverColor: "group-hover:from-highlight-purple/30 group-hover:to-highlight-purple/20"
    },
    { 
      icon: <MessageSquare className="w-8 h-8" />, 
      title: "Social Media Strategy", 
      description: "Developing engaging content and growth strategies across all social platforms.",
      color: "from-highlight-pink/20 to-highlight-pink/10",
      hoverColor: "group-hover:from-highlight-pink/30 group-hover:to-highlight-pink/20"
    },
    { 
      icon: <Laptop className="w-8 h-8" />, 
      title: "Content Creation", 
      description: "Producing high-quality visual content that aligns with brand identity.",
      color: "from-highlight-blue/20 to-highlight-purple/10",
      hoverColor: "group-hover:from-highlight-blue/30 group-hover:to-highlight-purple/20"
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: "Mobile Design", 
      description: "Optimizing experiences for all screen sizes with mobile-first approach.",
      color: "from-highlight-purple/20 to-highlight-pink/10",
      hoverColor: "group-hover:from-highlight-purple/30 group-hover:to-highlight-pink/20"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-highlight-blue/5 to-highlight-purple/5 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-56 h-56 rounded-full bg-gradient-to-r from-highlight-purple/5 to-highlight-pink/5 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-highlight-purple" />
            <span className="uppercase tracking-widest text-gray-400 text-sm font-modern">
              My Skills
            </span>
            <Sparkles className="w-4 h-4 text-highlight-blue" />
          </motion.div>
          <h2 className="heading-lg mb-6 font-elegant">
            Services I <span className="text-gradient-elegant">Offer</span>
          </h2>
          <p className="text-gray-200 font-modern leading-relaxed">
            I combine technical expertise with creative vision to deliver exceptional digital experiences and social media strategies.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`glass-panel-strong p-8 bg-gradient-to-br ${skill.color} ${skill.hoverColor} transition-all duration-500 group cursor-pointer relative overflow-hidden`}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
              
              <motion.div 
                className="mb-6 text-white relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="heading-sm mb-4 font-modern relative z-10">{skill.title}</h3>
              <p className="text-gray-200 font-modern leading-relaxed relative z-10">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["HTML5", "CSS3", "JavaScript", "React", "Figma", "Photoshop", "Tailwind", "WordPress", "Social Media Management", "Content Strategy"].map((tech, index) => (
            <motion.span
              key={index}
              variants={tagVariants}
              className="px-4 py-2 glass-panel rounded-full text-sm text-gray-200 font-modern hover:bg-white/10 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
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
