
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
  Search
} from 'lucide-react';

const servicesData = [
  {
    title: "Website Design",
    description: "Beautiful, responsive websites that convert visitors into customers. Focusing on UI/UX principles and modern design trends.",
    icon: <Layout className="h-10 w-10 text-highlight-blue" />,
    delay: 0.1
  },
  {
    title: "Mobile-First Approach",
    description: "Ensuring your digital presence looks and functions perfectly on every device, especially mobile.",
    icon: <Smartphone className="h-10 w-10 text-highlight-purple" />,
    delay: 0.2
  },
  {
    title: "Social Media Management",
    description: "Strategic content creation and community engagement to grow your brand's social presence.",
    icon: <Instagram className="h-10 w-10 text-highlight-pink" />,
    delay: 0.3
  },
  {
    title: "Content Strategy",
    description: "Creating compelling content plans that resonate with your target audience and drive engagement.",
    icon: <PenTool className="h-10 w-10 text-highlight-blue" />,
    delay: 0.4
  },
  {
    title: "Social Media Analytics",
    description: "Data-driven insights to optimize your social media performance and ROI.",
    icon: <BarChart className="h-10 w-10 text-highlight-purple" />,
    delay: 0.5
  },
  {
    title: "Campaign Management",
    description: "End-to-end management of social media campaigns to achieve your marketing objectives.",
    icon: <Lightbulb className="h-10 w-10 text-highlight-pink" />,
    delay: 0.6
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-gray-400 text-sm mb-3 block">
            My Services
          </span>
          <h2 className="heading-lg mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-gray-300">
            Specialized services in web design and social media management to help your brand grow and connect with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              className="glass-panel p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
