
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'sending' | 'success' | 'error';
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'sending', message: 'Sending your message...' });
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
      });
      setFormData({ name: '', email: '', projectType: '', message: '' });
    }, 2000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="glass-panel bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-highlight-blue/50 transition-all duration-300"
            placeholder="Your full name"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="glass-panel bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-highlight-purple/50 transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </motion.div>
      </div>

      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Label htmlFor="projectType" className="text-white font-medium">Project Type</Label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          required
          className="w-full glass-panel bg-white/5 border-white/20 text-white rounded-md px-3 py-2 focus:bg-white/10 focus:border-highlight-pink/50 transition-all duration-300"
        >
          <option value="" className="bg-dark-200">Select a project type</option>
          <option value="web-design" className="bg-dark-200">Web Design</option>
          <option value="social-media" className="bg-dark-200">Social Media Management</option>
          <option value="branding" className="bg-dark-200">Branding & Identity</option>
          <option value="consultation" className="bg-dark-200">Consultation</option>
          <option value="other" className="bg-dark-200">Other</option>
        </select>
      </motion.div>

      <motion.div
        className="space-y-2"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Label htmlFor="message" className="text-white font-medium">Project Details</Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full glass-panel bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-md px-3 py-2 focus:bg-white/10 focus:border-highlight-blue/50 transition-all duration-300 resize-none"
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        />
      </motion.div>

      {status.type !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-4 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-300'
              : status.type === 'error'
              ? 'bg-red-500/20 border border-red-500/30 text-red-300'
              : 'bg-blue-500/20 border border-blue-500/30 text-blue-300'
          }`}
        >
          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
          {status.type === 'sending' && <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />}
          <span>{status.message}</span>
        </motion.div>
      )}

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          disabled={status.type === 'sending'}
          className="w-full btn-primary text-lg py-4 group relative overflow-hidden"
        >
          <span className="flex items-center justify-center gap-2 relative z-10">
            {status.type === 'sending' ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-highlight-blue/20 to-highlight-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
