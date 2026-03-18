import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/src/components/Hero';
import { StaircaseSection } from '@/src/components/StaircaseSection';
import { ParallaxFlyThrough } from '@/src/components/ParallaxFlyThrough';
import { SplitGrid } from '@/src/components/SplitGrid';
import { FeatureGrid } from '@/src/components/FeatureGrid';
import { motion } from 'motion/react';

const homeSplitItems = [
  {
    title: "THE",
    subtitle: "BAR",
    description: "Once inside, you'll want to take your time to explore our extraordinary and select collection of whiskies from around the world, as it should be. Or, if you prefer, take a look at our bold cocktail menu, where iconic classics and original creations blend to surprise you.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    links: [
      { name: "WHISKY", path: "/menu/spirits" },
      { name: "WHISKY FLIGHTS", path: "/menu/spirits" },
      { name: "COCKTAILS", path: "/menu/bev" },
      { name: "OTHER SPIRITS", path: "/menu/spirits" }
    ]
  },
  {
    title: "THE",
    subtitle: "CLUB",
    description: "An exclusive space for lovers of fine drinking. Guided tastings, private events, and an atmosphere designed for conversation and the enjoyment of the jewels in our cellar.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    links: [
      { name: "WHISKY TASTINGS", path: "/reservations" },
      { name: "EVENTS", path: "/reservations" }
    ],
    reverse: true
  }
];

export const Home = () => {
  return (
    <main>
      <Hero />
      
      <FeatureGrid />

      <SplitGrid items={homeSplitItems} />

      <StaircaseSection />

      <ParallaxFlyThrough 
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
        title="The Library"
        subtitle="A collection of forgotten tales"
      />

      <section className="py-32 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-16">
        <div className="md:w-1/2 space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-copper tracking-[0.5em] text-[10px] font-bold uppercase block"
          >
            THE ARCHIVE
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan">
            A Legacy <br /> <span className="text-copper">In Every Drop.</span>
          </h2>
          <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">
            Our collection spans decades and continents. We don't just serve whiskey; we preserve history. 
            From the peated malts of Islay to the bold ryes of the New World, every bottle has a story.
          </p>
          <div className="pt-8 flex flex-wrap gap-8">
            <Link to="/menu/spirits" className="text-[10px] tracking-[0.3em] font-bold text-brass border-b border-brass/30 pb-2 hover:text-copper hover:border-copper transition-all duration-500">
              VIEW THE SPIRIT LIST
            </Link>
            <Link to="/about" className="text-[10px] tracking-[0.3em] font-bold text-brass border-b border-brass/30 pb-2 hover:text-copper hover:border-copper transition-all duration-500">
              LEARN OUR HISTORY
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border border-brass/20 z-0" />
          <img 
            src="https://images.unsplash.com/photo-1527281405159-35d5b9a1650c?auto=format&fit=crop&q=80&w=1200" 
            alt="Whiskey Bottles" 
            className="relative z-10 w-full h-auto brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="py-32 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-[1800px] mx-auto">
        <div className="relative aspect-[16/9] md:aspect-square overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
            alt="Cocktail Craft" 
            className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-4xl font-serif italic mb-6 text-whiskey-tan">The Art of the Mix</h3>
            <Link to="/menu/bev" className="bg-copper text-whiskey-dark px-8 py-3 text-[10px] font-bold tracking-[0.3em] hover:bg-brass transition-all duration-500">
              EXPLORE COCKTAILS
            </Link>
          </div>
        </div>
        <div className="relative aspect-[16/9] md:aspect-square overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" 
            alt="Fine Dining" 
            className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-4xl font-serif italic mb-6 text-whiskey-tan">Rustic Elegance</h3>
            <Link to="/menu/food" className="bg-copper text-whiskey-dark px-8 py-3 text-[10px] font-bold tracking-[0.3em] hover:bg-brass transition-all duration-500">
              DISCOVER THE MENU
            </Link>
          </div>
        </div>
      </section>

      <ParallaxFlyThrough 
        image="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?auto=format&fit=crop&q=80&w=2000"
        title="The Vault"
        subtitle="Vintages of the old world"
      />

      <section className="py-32 px-8 text-center bg-black/40">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan">"Whiskey is liquid sunshine."</h2>
          <div className="w-16 h-[1px] bg-brass/30 mx-auto" />
          <p className="text-whiskey-tan/40 tracking-[0.5em] text-[10px] font-bold uppercase mb-12">— GEORGE BERNARD SHAW</p>
          <Link to="/reservations" className="inline-block bg-copper text-whiskey-dark px-12 py-5 text-xs font-bold tracking-[0.4em] hover:bg-brass transition-all duration-500">
            SECURE YOUR SEAT
          </Link>
        </div>
      </section>
    </main>
  );
};
