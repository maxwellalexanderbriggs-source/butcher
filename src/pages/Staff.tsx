import React from 'react';
import { motion } from 'motion/react';

const staff = [
  {
    name: 'Arthur Sterling',
    role: 'Master of Spirits',
    bio: 'With 30 years in the industry, Arthur has curated some of the world\'s most prestigious vaults.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Elena Vance',
    role: 'Head Mixologist',
    bio: 'Elena specializes in forgotten pre-prohibition cocktails with a modern, sophisticated twist.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Julian Thorne',
    role: 'Sommelier',
    bio: 'Julian brings a scholarly approach to our rare vintage collection and private tastings.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Marcus Reed',
    role: 'Cellar Master',
    bio: 'Marcus oversees the preservation of our oldest vintages, ensuring every bottle is kept in optimal conditions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Silas Vane',
    role: 'Archive Curator',
    bio: 'Silas tracks the provenance of every bottle in our collection, from auction house to vault.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Isabella Rossi',
    role: 'Senior Mixologist',
    bio: 'Isabella brings a background in chemistry to her innovative spirit infusions and bitters.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Thomas Beckett',
    role: 'Whiskey Historian',
    bio: 'Thomas leads our educational seminars, sharing the rich history of distillation with our guests.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Clara Beaumont',
    role: 'Hospitality Lead',
    bio: 'Clara ensures that every guest\'s journey through the archive is seamless and personalized.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Victor Hugo',
    role: 'Bar Manager',
    bio: 'Victor oversees the daily operations of the archive, maintaining the highest standards of service.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Sophia Chen',
    role: 'Spirit Specialist',
    bio: 'Sophia focuses on our burgeoning collection of rare Asian whiskies and spirits.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Oliver Grant',
    role: 'Apprentice Archivist',
    bio: 'Oliver is learning the delicate art of spirit preservation under the tutelage of Arthur Sterling.',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Amelia Hart',
    role: 'Events Coordinator',
    bio: 'Amelia designs bespoke private events that center around rare spirit exploration.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Nathaniel Drake',
    role: 'Spirit Scout',
    bio: 'Nathaniel travels the globe to find the next great addition to our permanent collection.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Lydia Thorne',
    role: 'Private Vault Liaison',
    bio: 'Lydia manages our private locker program for our most dedicated collectors.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Staff = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Staff Hero" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-whiskey-dark/0 to-whiskey-dark" />
        </div>
        <div className="relative z-10 text-center px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-copper tracking-[0.5em] text-[10px] block mb-6 font-bold uppercase"
          >
            MEET THE TEAM
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan"
          >
            The <span className="text-copper">Archivists.</span>
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 py-32">
        {/* Static Left Section */}
        <div className="lg:w-1/2 lg:sticky lg:top-40 lg:h-[calc(100vh-160px)] flex flex-col justify-center space-y-8">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-copper tracking-[0.5em] text-[10px] block font-bold uppercase mb-6"
          >
            THE ARCHIVISTS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan"
          >
            The Hands Behind <br /> <span className="text-copper">The Archive.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide max-w-md"
          >
            Our team is comprised of scholars, historians, and masters of the craft. 
            Each member brings a unique perspective to the art of the pour, 
            ensuring that every visit to The Wise Man's is a lesson in excellence.
          </motion.p>
          <div className="pt-8">
            <div className="w-16 h-[1px] bg-brass/30" />
          </div>
        </div>

        {/* Scrolling Right Section */}
        <div className="lg:w-1/2 space-y-32 pb-32">
          {staff.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group space-y-8"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-whiskey-dark/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="space-y-4">
                <div className="flex items-end justify-between border-b border-brass/10 pb-4">
                  <h3 className="text-3xl font-serif italic text-whiskey-tan">{member.name}</h3>
                  <span className="text-brass text-[10px] tracking-[0.3em] uppercase mb-1">{member.role}</span>
                </div>
                <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
