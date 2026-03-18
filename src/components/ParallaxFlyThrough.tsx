import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const ParallaxFlyThrough = ({ image, title, subtitle }: { image: string, title: string, subtitle: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale, y }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight tracking-tight text-whiskey-tan"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-copper tracking-[0.5em] text-[10px] font-bold uppercase"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};
