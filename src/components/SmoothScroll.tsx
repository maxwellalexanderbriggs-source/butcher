import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Basic smooth scroll implementation or just use CSS scroll-behavior
    // For "weight", we could use a library like Lenis, but let's stick to CSS and Motion for now
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
};
