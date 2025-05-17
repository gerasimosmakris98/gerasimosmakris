
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Twitter, Facebook } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/gerasimosmakris/" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/gerasimos.makris/" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/gerasimosmakris98" },
    { icon: <Twitter className="w-5 h-5" />, label: "X (Twitter)", href: "https://x.com/gerasimos_m1998/" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/makris.gerasimos/" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-gray-400 text-sm mb-3 block">
            Get In Touch
          </span>
          <h2 className="heading-lg mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-300">
            Ready to elevate your web presence and social media strategy? Let's discuss how we can work together to achieve your goals.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-panel p-8">
            <h3 className="heading-md text-center mb-8">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                className="flex items-start"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-6 h-6 mr-4 text-highlight-blue" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="font-medium">j.makris98@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-6 h-6 mr-4 text-highlight-purple" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <p className="font-medium">+34 657 20 59 54</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="w-6 h-6 mr-4 text-highlight-pink" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="font-medium">Madrid, Spain</p>
                  <p className="text-sm text-gray-400">Originally from Athens, Greece</p>
                </div>
              </motion.div>
            </div>
            
            <h4 className="text-lg font-medium text-center mb-6">Connect with me</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-dark-200 hover:bg-dark-100 transition-colors px-6 py-3 rounded-md"
                  aria-label={link.label}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
