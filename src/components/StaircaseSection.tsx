import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const StaircaseSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const images = [
    "https://images.unsplash.com/photo-1518131359073-ad293c3f90ca?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section ref={containerRef} className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div style={{ y: y1 }} className="aspect-[3/4] overflow-hidden">
          <img src={images[0]} alt="Vibe 1" className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="aspect-[3/4] overflow-hidden mt-12 md:mt-24">
          <img src={images[1]} alt="Vibe 2" className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div style={{ y: y3 }} className="aspect-[3/4] overflow-hidden">
          <img src={images[2]} alt="Vibe 3" className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000" referrerPolicy="no-referrer" />
        </motion.div>
      </div>
      
      <div className="mt-24 text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif italic mb-8 leading-tight tracking-tight text-whiskey-tan">The Wise Man's Ritual</h2>
        <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">
          A ritual of patience and precision. We believe the best conversations happen 
          over a glass of something aged, in a room where the world fades away.
        </p>
      </div>
    </section>
  );
};
