import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-brass/10 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="space-y-6">
          <h3 className="text-3xl font-serif italic text-copper">The Wise Man's</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-whiskey-tan/40 hover:text-copper transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-whiskey-tan/40 hover:text-copper transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.4em] text-brass font-bold uppercase">Navigation</h4>
          <ul className="space-y-4 text-sm text-whiskey-tan/60">
            <li><Link to="/menu/food" className="hover:text-copper transition-colors tracking-wide">Food Menu</Link></li>
            <li><Link to="/menu/bev" className="hover:text-copper transition-colors tracking-wide">Bev Menu</Link></li>
            <li><Link to="/menu/spirits" className="hover:text-copper transition-colors tracking-wide">Spirit List</Link></li>
            <li><Link to="/about" className="hover:text-copper transition-colors tracking-wide">About & History</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.4em] text-brass font-bold uppercase">Contact</h4>
          <ul className="space-y-4 text-sm text-whiskey-tan/60">
            <li className="flex items-start space-x-3">
              <MapPin size={14} className="text-copper shrink-0 mt-1" />
              <span className="tracking-wide">42 Archive Lane,<br />Old Town, CO 80401</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={14} className="text-copper shrink-0" />
              <span className="tracking-wide">+1 (555) 987-6543</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-brass/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-[10px] tracking-[0.2em] text-whiskey-tan/20">© 2026 THE WISE MAN'S. ALL RIGHTS RESERVED.</p>
          <p className="text-[10px] tracking-[0.2em] text-brass/40 uppercase font-bold">Made by Briggs Davis</p>
        </div>
        <a href="https://example.com/restaurants" className="text-[10px] tracking-[0.3em] text-brass hover:text-copper transition-colors">OUR RESTAURANTS</a>
      </div>
    </footer>
  );
};
