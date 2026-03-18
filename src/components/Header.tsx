import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'FOOD MENU', path: '/menu/food' },
  { name: 'BEV MENU', path: '/menu/bev' },
  { name: 'SPIRIT LIST', path: '/menu/spirits' },
  { name: 'ABOUT', path: '/about' },
  { name: 'OUR STAFF', path: '/staff' },
  { name: 'RESERVATIONS', path: '/reservations' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex items-center justify-between border-b border-brass/10 bg-whiskey-dark/90 backdrop-blur-md">
        <button 
          onClick={() => setIsOpen(true)}
          className="text-copper hover:text-brass transition-colors duration-500 flex items-center space-x-2 group"
        >
          <Menu size={24} />
          <span className="hidden sm:block text-[10px] tracking-[0.3em] font-bold">MENU</span>
        </button>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl sm:text-3xl font-serif tracking-[0.3em] text-copper hover:text-brass transition-all duration-700">
          THE WISE MAN'S
        </Link>

        <div className="flex items-center space-x-6">
          <Link 
            to="/reservations" 
            className="bg-copper text-whiskey-dark px-6 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-brass hover:scale-105 transition-all duration-500"
          >
            BOOK NOW
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-whiskey-dark flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-8 text-copper hover:text-brass transition-colors"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col items-center space-y-6 overflow-y-auto max-h-[70vh] w-full py-8 no-scrollbar">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl sm:text-4xl font-serif italic tracking-wider transition-all duration-500 hover:text-copper hover:pl-4 block text-center",
                      location.pathname === link.path ? "text-copper" : "text-whiskey-tan/40"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a 
                  href="https://example.com/gift-cards" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-serif italic text-whiskey-tan/40 hover:text-copper transition-all duration-500"
                >
                  GIFT CARDS
                </a>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 flex flex-col items-center space-y-4">
              <div className="w-12 h-[1px] bg-brass/30" />
              <a href="https://example.com/restaurants" className="text-[10px] tracking-[0.4em] text-brass hover:text-copper transition-colors">
                OUR RESTAURANTS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
