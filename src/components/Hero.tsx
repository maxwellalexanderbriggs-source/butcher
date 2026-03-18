import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const blur = useTransform(scrollY, [0, 300], [0, 10]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
        initial={{ filter: 'blur(40px)', scale: 1.1 }}
        animate={{ filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          alt="Whiskey Pour" 
          className="w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-copper tracking-[0.5em] text-[10px] mb-6 block font-bold uppercase"
        >
          EST. 1924 — THE ART OF THE POUR
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight tracking-tight text-whiskey-tan"
        >
          Rare Spirits. <br /> <span className="text-copper">Deep Silence.</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="w-16 h-[1px] bg-brass/30 mx-auto mb-10"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide max-w-xl mx-auto"
        >
          An archive of the world's most elusive whiskies. Curated for the discerning palate, served in a sanctuary of quiet sophistication.
        </motion.p>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/40">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-copper to-transparent" />
      </motion.div>
    </section>
  );
};
