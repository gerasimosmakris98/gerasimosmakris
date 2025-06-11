
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  highlightedWord: string;
  description: string;
}

const SectionHeader = ({ subtitle, title, highlightedWord, description }: SectionHeaderProps) => {
  return (
    <motion.div 
      className="text-center max-w-3xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center justify-center gap-2 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Sparkles className="w-4 h-4 text-highlight-purple" />
        <span className="uppercase tracking-widest text-gray-400 text-sm font-modern">
          {subtitle}
        </span>
        <Sparkles className="w-4 h-4 text-highlight-blue" />
      </motion.div>
      <h2 className="heading-lg mb-6 font-elegant">
        {title} <span className="text-gradient-elegant">{highlightedWord}</span>
      </h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-200 font-modern leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
