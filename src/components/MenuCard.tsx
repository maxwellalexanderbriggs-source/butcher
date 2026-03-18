import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Maximize2 } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  likes: number;
  details?: string;
}

interface MenuListItemProps {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
  key?: string | number;
}

export const MenuListItem = ({ item, onOpen }: MenuListItemProps) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(item.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 10 }}
      onClick={() => onOpen(item)}
      className="group relative flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 p-6 border-b border-brass/10 hover:bg-white/5 transition-all duration-500 cursor-pointer"
    >
      <div className="relative w-full md:w-32 h-32 shrink-0 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
          <Maximize2 size={20} className="text-copper" />
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-serif italic text-copper group-hover:text-brass transition-colors duration-500 tracking-tight">{item.name}</h3>
          <span className="text-brass font-mono text-lg">{item.price}</span>
        </div>
        <p className="text-whiskey-tan/40 text-sm tracking-wide leading-relaxed max-w-2xl">
          {item.description}
        </p>
        
        <div className="flex items-center space-x-4 pt-2">
          <motion.button
            onClick={handleLike}
            whileTap={{ scale: 0.8 }}
            className="flex items-center space-x-2 text-whiskey-tan/40 hover:text-copper transition-colors"
          >
            <Heart 
              className={liked ? "fill-copper text-copper" : ""} 
              size={16} 
            />
            <span className="text-[10px] tracking-[0.2em] uppercase">{count} HEARTS</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const MenuModal = ({ item, onClose }: { item: MenuItem | null, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-whiskey-dark border border-brass/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-copper hover:text-brass transition-colors"
            >
              <X size={32} />
            </button>

            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-8">
            <div>
                <span className="text-copper tracking-[0.5em] text-[10px] block mb-6 font-bold uppercase">Archive Selection</span>
                <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight tracking-tight text-whiskey-tan">{item.name}</h2>
                <div className="w-16 h-[1px] bg-brass/30" />
              </div>

              <div className="space-y-6">
                <p className="text-brass font-mono text-2xl">{item.price}</p>
                <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide italic">
                  "{item.description}"
                </p>
                {item.details && (
                  <p className="text-whiskey-tan/40 text-sm leading-relaxed tracking-wide border-t border-brass/10 pt-6">
                    {item.details}
                  </p>
                )}
              </div>

              <div className="pt-8">
                <button className="bg-copper text-whiskey-dark px-10 py-4 text-xs font-bold tracking-[0.3em] hover:bg-brass transition-all duration-500">
                  ADD TO SELECTION
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
