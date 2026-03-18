import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface FeatureItem {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  image: string;
}

const features: FeatureItem[] = [
  {
    title: "SPIRIT",
    description: "We feature over 850 varieties of Whiskies and a select collection of distillates from around the world.",
    link: "/menu/spirits",
    image: "https://images.unsplash.com/photo-1527281405159-35d5b9a1650c?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-brass fill-none stroke-[0.5]">
        <path d="M40 20 L60 20 L60 70 L65 70 L65 80 L35 80 L35 70 L40 70 Z" />
        <path d="M45 70 L55 70 L55 75 L45 75 Z" />
        <circle cx="50" cy="60" r="5" />
      </svg>
    )
  },
  {
    title: "BEV",
    description: "An attractive list of Cocktails where iconic classics and original creations blend seamlessly.",
    link: "/menu/bev",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-brass fill-none stroke-[0.5]">
        <path d="M30 20 L70 20 L55 50 L55 80 L65 80 L35 80 L45 80 L45 50 Z" />
        <path d="M45 50 L55 50" />
      </svg>
    )
  },
  {
    title: "FOOD",
    description: "We have created dishes that are in harmony with our roots and gastronomic traditions.",
    link: "/menu/food",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-brass fill-none stroke-[0.5]">
        <path d="M50 10 C30 10 20 30 20 50 C20 70 40 90 50 90 C60 90 80 70 80 50 C80 30 70 10 50 10 Z" />
        <path d="M40 40 L45 60 L55 60 L60 40" />
        <path d="M42 45 L58 45" />
      </svg>
    )
  }
];

export const FeatureGrid = () => {
  return (
    <section className="bg-whiskey-dark py-32 px-8 relative overflow-hidden border-y border-brass/10">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none leather-bg" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-serif text-brass tracking-[0.1em] mb-4">HOLY DROP</h2>
          <span className="text-xs tracking-[0.4em] text-brass/60 uppercase block">INSPIRED BY PASSION</span>
          
          <div className="max-w-2xl mx-auto mt-12">
            <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">
              In the vibrant heart of Chamberi, central Madrid, Holy Drop emerges from a corner—an exclusive bar specializing in whiskey. A place to pause and enjoy, where the art of tasting a fine distillate reaches a new level, seducing whiskey enthusiasts with every drop.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center group relative p-12 overflow-hidden border border-brass/5"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover brightness-[0.1] group-hover:brightness-[0.2] group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-whiskey-dark/80 group-hover:bg-whiskey-dark/60 transition-colors duration-700" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-700">
                  {feature.icon}
                </div>
                
                <h3 className="text-3xl font-serif text-whiskey-tan tracking-[0.2em] mb-6">{feature.title}</h3>
                
                <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide mb-12 max-w-[250px] mx-auto">
                  {feature.description}
                </p>

                <Link 
                  to={feature.link}
                  className="text-[10px] tracking-[0.3em] font-bold text-brass border-b border-brass/30 pb-2 hover:text-copper hover:border-copper transition-all duration-500"
                >
                  SEE MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
