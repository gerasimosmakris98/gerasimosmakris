
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Garcia",
    company: "Vibrant Fashion",
    role: "Marketing Director",
    content: "Gerasimos transformed our online presence completely! His web design skills combined with social media expertise delivered incredible results. Our engagement increased by 80% within just two months.",
    image: "/testimonial1.jpg"
  },
  {
    name: "Alex Johnson",
    company: "Tech Innovate",
    role: "CEO",
    content: "Working with Gerasimos was the best decision for our rebrand. His attention to design details and strategic social media approach helped us connect with our audience in ways we never thought possible.",
    image: "/testimonial2.jpg"
  },
  {
    name: "Sofia Martinez",
    company: "Culinary Delights",
    role: "Owner",
    content: "As a restaurant owner, I needed someone who understood both visual appeal and engagement. Gerasimos delivered a stunning website and managed our social media with creativity that truly captured our brand's essence.",
    image: "/testimonial3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-300">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-widest text-gray-400 text-sm mb-3 block">
            Client Feedback
          </span>
          <h2 className="heading-lg mb-6">
            What My <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-gray-300">
            Don't just take my word for it. Here's what clients say about working with me on their web design and social media projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-6 flex flex-col h-full"
            >
              <Quote className="text-highlight-purple w-10 h-10 mb-4 opacity-50" />
              <p className="text-gray-200 italic mb-6 flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-highlight-blue to-highlight-purple flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
