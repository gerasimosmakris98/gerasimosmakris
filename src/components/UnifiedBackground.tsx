
import React from 'react';
import { motion } from 'framer-motion';

const UnifiedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200" />
      
      {/* Subtle animated overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(244, 114, 182, 0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(96, 165, 250, 0.03) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle moving particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UnifiedBackground;
