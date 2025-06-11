
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Twitter, Facebook, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ContactSection = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/gerasimosmakris/" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/gerasimos.makris/" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/gerasimosmakris98" },
    { icon: <Twitter className="w-5 h-5" />, label: "X (Twitter)", href: "https://x.com/gerasimos_m1998/" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/makris.gerasimos/" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-6 h-6 text-highlight-blue" />, label: "Email", value: "contact@gerasimosmakris.com", type: "email" },
    { icon: <Phone className="w-6 h-6 text-highlight-purple" />, label: "Phone", value: "+34 657 20 59 54", type: "phone" },
    { icon: <MapPin className="w-6 h-6 text-highlight-pink" />, label: "Location", value: "Madrid, Spain", type: "location" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeader
          subtitle="Get In Touch"
          title="Contact"
          highlightedWord="Me"
          description="Ready to elevate your web presence and social media strategy? Let's discuss how we can work together to achieve your goals."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coming Soon Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="glass-panel-strong p-8 lg:p-10"
          >
            <h3 className="heading-md mb-8 text-center">Send Me a Message</h3>
            
            {/* Coming Soon Message */}
            <motion.div 
              className="aspect-[4/3] flex items-center justify-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel-strong p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/20 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="w-16 h-16 text-highlight-purple mx-auto mb-4" />
                </motion.div>
                <p className="text-white font-bold text-2xl mb-3 font-elegant">Coming Soon</p>
                <p className="text-gray-300 text-sm font-modern">
                  Direct messaging feature is currently in development. For now, please use the contact information to reach out directly.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel p-8">
              <h3 className="heading-md mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="font-medium text-white group-hover:text-highlight-blue transition-colors">
                        {info.value}
                      </p>
                      {info.type === "location" && (
                        <p className="text-sm text-gray-400 mt-1">Originally from Athens, Greece</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-8">
                <h4 className="text-lg font-medium text-center mb-6 font-modern">Connect with me</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a 
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 glass-panel px-4 py-3 hover:bg-white/10 transition-all duration-300 group"
                      aria-label={link.label}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="group-hover:text-highlight-blue transition-colors">
                        {link.icon}
                      </span>
                      <span className="text-sm group-hover:text-white transition-colors">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-highlight-blue to-highlight-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Quick Response</h4>
              <p className="text-gray-300 text-sm">I typically respond within 24 hours. For urgent projects, feel free to call directly.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
