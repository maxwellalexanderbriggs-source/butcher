import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { SplitGrid } from '../components/SplitGrid';
import { FeatureGrid } from '../components/FeatureGrid';

const aboutSplitItems = [
  {
    title: "OUR",
    subtitle: "HISTORY",
    description: "The Wise Man's began as a private archive in 1924, a hidden sanctuary for those who appreciated the finer nuances of aged spirits. It was never meant for the masses, but for the few who understood that whiskey is more than a drink: it's a conversation with time.",
    image: "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?auto=format&fit=crop&q=80&w=1200",
    links: [
      { name: "VIEW TEAM", path: "/staff" },
      { name: "RESERVATIONS", path: "/reservations" }
    ]
  }
];

const values = [
  {
    title: "Patience",
    desc: "We believe time is the most essential ingredient. From the aging of our barrels to the slow pour of a rare vintage, we never rush the process."
  },
  {
    title: "Preservation",
    desc: "Our mission is to safeguard the history of spirits. We curate rare bottles that tell stories of eras long gone."
  },
  {
    title: "Precision",
    desc: "Every glass, every temperature, every ice sphere is measured with exacting detail to ensure the spirit is expressed perfectly."
  },
  {
    title: "Privacy",
    desc: "We provide a sanctuary from the noise. Our space is designed for quiet contemplation and intimate conversation."
  }
];

export const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?auto=format&fit=crop&q=80&w=2000" 
            alt="About Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="relative z-10 text-center px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-copper tracking-[0.5em] text-[10px] block mb-6 font-bold uppercase"
          >
            OUR STORY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan"
          >
            The Archive of <br /> <span className="text-copper">The Wise Man.</span>
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8">
        {/* Main Story */}
        <section className="py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif italic leading-tight tracking-tight text-whiskey-tan">A Century of <br /> <span className="text-copper">Quiet Excellence.</span></h2>
            <div className="w-16 h-[1px] bg-brass/30" />
            <div className="space-y-6 text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">
              <p>
                The Wise Man's began as a private archive in 1924, a hidden sanctuary for those who appreciated 
                the finer nuances of aged spirits. It was never meant for the masses, but for the few who 
                understood that whiskey is more than a drink—it's a conversation with time.
              </p>
              <p>
                Today, we maintain that same spirit of exclusivity and scholarly pursuit. Our vault houses 
                bottles that have survived wars, prohibitions, and the changing tides of taste.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
              alt="Vintage Bar" 
              className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      </div>

      <SplitGrid items={aboutSplitItems} />

      <div className="max-w-7xl mx-auto px-8">
        {/* Values Section */}
        <section className="py-32 border-t border-brass/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((v, idx) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <span className="text-copper font-serif italic text-4xl">0{idx + 1}</span>
                <h3 className="text-xl tracking-[0.2em] font-bold uppercase text-brass">{v.title}</h3>
                <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <FeatureGrid />

      <div className="max-w-7xl mx-auto px-8">
        {/* Gallery Section */}
        <section className="py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
              alt="Atmosphere 1" 
              className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden mt-12">
            <img 
              src="https://images.unsplash.com/photo-1527281405159-35d5b9a1650c?auto=format&fit=crop&q=80&w=1200" 
              alt="Atmosphere 2" 
              className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
              alt="Atmosphere 3" 
              className="w-full h-full object-cover brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
