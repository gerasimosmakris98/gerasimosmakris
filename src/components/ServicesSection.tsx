
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Layout, 
  Smartphone, 
  Instagram, 
  Facebook, 
  Twitter,
  PenTool,
  BarChart,
  Lightbulb,
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const servicesData = [
  {
    title: "Website Design",
    description: "Beautiful, responsive websites that convert visitors into customers. Focusing on UI/UX principles and modern design trends.",
    icon: <Layout className="h-10 w-10 text-highlight-blue" />,
    delay: 0.1,
    gradient: "from-highlight-blue/20 to-highlight-blue/10"
  },
  {
    title: "Mobile-First Approach",
    description: "Ensuring your digital presence looks and functions perfectly on every device, especially mobile.",
    icon: <Smartphone className="h-10 w-10 text-highlight-purple" />,
    delay: 0.2,
    gradient: "from-highlight-purple/20 to-highlight-purple/10"
  },
  {
    title: "Social Media Management",
    description: "Strategic content creation and community engagement to grow your brand's social presence.",
    icon: <Instagram className="h-10 w-10 text-highlight-pink" />,
    delay: 0.3,
    gradient: "from-highlight-pink/20 to-highlight-pink/10"
  },
  {
    title: "Content Strategy",
    description: "Creating compelling content plans that resonate with your target audience and drive engagement.",
    icon: <PenTool className="h-10 w-10 text-highlight-blue" />,
    delay: 0.4,
    gradient: "from-highlight-blue/20 to-highlight-purple/10"
  },
  {
    title: "Social Media Analytics",
    description: "Data-driven insights to optimize your social media performance and ROI.",
    icon: <BarChart className="h-10 w-10 text-highlight-purple" />,
    delay: 0.5,
    gradient: "from-highlight-purple/20 to-highlight-pink/10"
  },
  {
    title: "Campaign Management",
    description: "End-to-end management of social media campaigns to achieve your marketing objectives.",
    icon: <Lightbulb className="h-10 w-10 text-highlight-pink" />,
    delay: 0.6,
    gradient: "from-highlight-pink/20 to-highlight-blue/10"
  }
];

const ServicesSection = () => {
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
    hidden: { opacity: 0, y: 30, rotateY: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-100 relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-highlight-blue/5 to-highlight-purple/5 blur-3xl"
          animate={{ 
            y: [0, -40, 0], 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-highlight-purple/5 to-highlight-pink/5 blur-3xl"
          animate={{ 
            y: [0, 30, 0], 
            x: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-highlight-purple animate-pulse" />
            <span className="uppercase tracking-widest text-gray-400 text-sm font-modern">
              My Services
            </span>
            <Sparkles className="w-4 h-4 text-highlight-blue animate-pulse" />
          </motion.div>
          <h2 className="heading-lg mb-6 font-elegant">
            What I <span className="text-gradient-elegant">Offer</span>
          </h2>
          <p className="text-gray-200 font-modern leading-relaxed">
            Specialized services in web design and social media management to help your brand grow and connect with your audience.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`glass-panel-strong p-8 bg-gradient-to-br ${service.gradient} hover:bg-gradient-to-br hover:from-white/15 hover:to-white/5 transition-all duration-500 group cursor-pointer relative overflow-hidden`}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>

              <motion.div 
                className="mb-6 relative z-10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 font-modern relative z-10 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-200 font-modern leading-relaxed relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover arrow indicator */}
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <ArrowRight className="w-5 h-5 text-highlight-blue" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Get Started Today</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
