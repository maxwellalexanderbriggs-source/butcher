import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex overflow-hidden"
          exit={{ pointerEvents: 'none' }}
        >
          {/* Left Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="flex-1 bg-black"
          />
          {/* Right Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="flex-1 bg-black"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-5xl md:text-8xl font-serif italic tracking-tight text-whiskey-tan">THE WISE MAN'S</h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
