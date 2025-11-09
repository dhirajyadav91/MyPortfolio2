// components/EnhancedBlurBlob.jsx
import React from 'react';
import { motion } from 'framer-motion';

const EnhancedBlurBlob = ({ 
  position = { top: '50%', left: '50%' }, 
  size = { width: '400px', height: '400px' },
  color = 'purple',
  delay = 0,
  duration = 20
}) => {
  const colorMap = {
    purple: 'bg-purple-500',
    cyan: 'bg-cyan-500',
    pink: 'bg-pink-500',
    blue: 'bg-blue-500'
  };

  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }
    }
  };

  return (
    <motion.div
      className="absolute mix-blend-multiply filter blur-3xl opacity-20"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        transform: 'translate(-50%, -50%)',
      }}
      variants={blobVariants}
      animate="animate"
    >
      <div className={`w-full h-full rounded-full ${colorMap[color]}`}></div>
    </motion.div>
  );
};

export default EnhancedBlurBlob;