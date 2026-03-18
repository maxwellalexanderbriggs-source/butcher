import React, { useState } from 'react';
import { motion } from 'motion/react';

export const Reservations = () => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="min-h-screen relative flex items-center justify-center py-32 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          alt="Reservations Background" 
          className="w-full h-full object-cover brightness-[0.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-whiskey-dark via-transparent to-whiskey-dark opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-copper tracking-[0.5em] text-[10px] block font-bold uppercase"
          >
            SECURE YOUR SEAT
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan"
          >
            The <br /> <span className="text-copper">Reservation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-whiskey-tan/60 text-sm leading-relaxed tracking-wide max-w-md mx-auto lg:mx-0"
          >
            Limited seating available for the discerning few. Join us in our sanctuary of quiet sophistication and rare spirits.
          </motion.p>
          
          <div className="hidden lg:block pt-12">
            <div className="space-y-6 text-whiskey-tan/30 text-[10px] tracking-[0.3em] uppercase font-bold">
              <p>Tuesday — Saturday</p>
              <p>18:00 — 02:00</p>
              <div className="w-12 h-[1px] bg-brass/20" />
              <p>Dress Code: Sophisticated</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black/40 backdrop-blur-md border border-brass/10 p-8 md:p-12 space-y-8 relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-br from-brass/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] text-brass uppercase font-bold">Date</label>
              <input 
                type="date" 
                className="w-full bg-white/5 border border-brass/10 p-4 text-whiskey-tan focus:outline-none focus:border-copper transition-all duration-500 hover:bg-white/10"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.3em] text-brass uppercase font-bold">Guests</label>
              <select 
                className="w-full bg-white/5 border border-brass/10 p-4 text-whiskey-tan focus:outline-none focus:border-copper transition-all duration-500 hover:bg-white/10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n} className="bg-whiskey-dark">{n} GUESTS</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] tracking-[0.3em] text-brass uppercase font-bold">Special Requests</label>
            <textarea 
              rows={3}
              className="w-full bg-white/5 border border-brass/10 p-4 text-whiskey-tan focus:outline-none focus:border-copper transition-all duration-500 hover:bg-white/10 resize-none"
              placeholder="ANY PREFERENCES OR ALLERGIES..."
            />
          </div>

          <button className="w-full bg-copper text-whiskey-dark py-6 text-[10px] font-bold tracking-[0.5em] hover:bg-brass transition-all duration-700 relative overflow-hidden group/btn">
            <span className="relative z-10">CONFIRM RESERVATION</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
          </button>

          <p className="text-center text-[9px] tracking-[0.3em] text-whiskey-tan/30 uppercase">
            For parties larger than 6, please call us directly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
