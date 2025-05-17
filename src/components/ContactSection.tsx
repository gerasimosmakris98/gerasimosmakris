
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd normally handle the form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com" },
    { icon: <Twitter className="w-5 h-5" />, label: "X (Twitter)", href: "https://twitter.com" },
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
            Have a project in mind or want to discuss how we can work together? Reach out to me through the form below or my social channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 h-full">
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 text-highlight-blue" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="font-medium">gerasimos@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 text-highlight-purple" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="font-medium">+34 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 text-highlight-pink" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="font-medium">Madrid, Spain</p>
                    <p className="text-sm text-gray-400">Originally from Athens, Greece</p>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-dark-200 hover:bg-dark-100 transition-colors px-4 py-2 rounded-md"
                    aria-label={link.label}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8">
              <h3 className="heading-md mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-300">Name</label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-dark-200 border-white/10 focus:border-highlight-purple"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-dark-200 border-white/10 focus:border-highlight-purple"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
                  <Input 
                    id="subject"
                    placeholder="Subject"
                    className="bg-dark-200 border-white/10 focus:border-highlight-purple"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-300">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-dark-200 border-white/10 focus:border-highlight-purple resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-highlight-purple hover:bg-highlight-purple/90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
