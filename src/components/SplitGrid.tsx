import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export interface SplitGridItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  links: { name: string; path: string }[];
  reverse?: boolean;
}

interface SplitGridProps {
  items: SplitGridItem[];
}

export const SplitGrid = ({ items }: SplitGridProps) => {
  return (
    <section className="bg-whiskey-dark overflow-hidden">
      {items.map((item, idx) => (
        <div key={idx} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[600px]`}>
          {/* Text Content */}
          <div className="md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-black/20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-md text-center"
            >
              <span className="text-copper tracking-[0.5em] text-[10px] font-bold uppercase block mb-4">{item.title}</span>
              <h2 className="text-5xl md:text-8xl font-serif italic tracking-tight text-whiskey-tan mb-12">{item.subtitle}</h2>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
                {item.links.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className="text-[10px] tracking-[0.3em] font-bold text-brass border-b border-brass/30 pb-1 hover:text-copper hover:border-copper transition-all duration-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">
                {item.description}
              </p>
            </motion.div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative overflow-hidden group">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-full"
            >
              <img 
                src={item.image} 
                alt={item.subtitle} 
                className="w-full h-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};
