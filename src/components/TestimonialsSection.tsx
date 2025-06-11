import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from './SectionHeader';

const TestimonialsSection = () => {
  const [showAddReview, setShowAddReview] = useState(false);

  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <SectionHeader
          subtitle="Client Feedback"
          title="Client"
          highlightedWord="Testimonials"
          description="Building trust through exceptional work and client satisfaction."
        />
        
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel-strong p-12 text-center max-w-2xl"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-highlight-blue/20 to-highlight-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-10 h-10 text-highlight-purple" />
            </div>
            
            <h3 className="heading-md mb-4">Your Review Could Be Here</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm building my portfolio and would love to work with you! If you've worked with me or are interested in a project, 
              I'd appreciate your feedback to help showcase my work to future clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => setShowAddReview(true)}
                  className="btn-primary group"
                >
                  <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Add Your Review
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Start a Project
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Future testimonials will appear here */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-highlight-yellow text-highlight-yellow" />
                ))}
              </div>
              <span className="text-sm">Ready to earn your 5-star review</span>
            </div>
          </motion.div>
        </div>

        {showAddReview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowAddReview(false)}
          >
            <div 
              className="glass-panel-strong p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="heading-md mb-4">Share Your Experience</h3>
              <p className="text-gray-300 mb-6">
                Thank you for considering leaving a review! Please reach out via the contact form to share your experience working with me.
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => {
                    setShowAddReview(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex-1"
                >
                  Go to Contact
                </Button>
                <Button 
                  onClick={() => setShowAddReview(false)}
                  className="btn-secondary"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
