import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, ChevronRight } from 'lucide-react';
import { MenuListItem, MenuModal, MenuItem } from './MenuCard';
import { cn } from '@/src/lib/utils';
import { FeatureGrid } from './FeatureGrid';

interface MenuSection {
  title: string;
  items: MenuItem[];
}

interface MenuPageProps {
  title: string;
  subtitle: string;
  sections: MenuSection[];
  pdfUrl: string;
}

export const MenuPageTemplate = ({ title, subtitle, sections, pdfUrl }: MenuPageProps) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeSection, setActiveSection] = useState(sections[0]?.title);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.title);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.title);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt={title} 
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
            THE SELECTION
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif italic leading-tight tracking-tight text-whiskey-tan"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-whiskey-tan/40 mt-8 tracking-[0.4em] uppercase text-[10px] font-bold"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-32 flex flex-col lg:flex-row gap-16">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-40 h-fit">
          <div className="space-y-8">
            <div>
              <span className="text-copper tracking-[0.5em] text-[10px] block mb-6 font-bold uppercase">Categories</span>
              <nav className="flex flex-col space-y-4">
                {sections.map((section) => (
                  <button
                    key={section.title}
                    onClick={() => scrollToSection(section.title)}
                    className={cn(
                      "flex items-center justify-between text-left transition-all duration-500 group",
                      activeSection === section.title ? "text-copper pl-4" : "text-whiskey-tan/30 hover:text-whiskey-tan/60"
                    )}
                  >
                    <span className="text-xs tracking-[0.2em] font-bold uppercase">{section.title}</span>
                    <ChevronRight 
                      size={14} 
                      className={cn(
                        "transition-transform duration-500",
                        activeSection === section.title ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      )} 
                    />
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-brass/10">
              <a 
                href={pdfUrl} 
                download
                className="flex items-center space-x-3 text-brass hover:text-copper transition-colors group"
              >
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                <span className="text-[10px] tracking-[0.2em] font-bold">DOWNLOAD PDF</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-32">
            {sections.map((section, sIdx) => (
              <div key={section.title} id={section.title} className="scroll-mt-40">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6 mb-12"
                >
                  <h2 className="text-4xl font-serif italic text-brass">{section.title}</h2>
                  <div className="flex-1 h-[1px] bg-brass/10" />
                </motion.div>

                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <MenuListItem 
                      key={item.id} 
                      item={item} 
                      onOpen={(item) => setSelectedItem(item)} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 pt-32 border-t border-brass/10 text-center space-y-12">
            <span className="text-copper tracking-[0.5em] text-[10px] block font-bold uppercase">CONTINUE THE JOURNEY</span>
            <h2 className="text-4xl md:text-6xl font-serif italic">Ready to experience <br /> <span className="text-copper">The Archive?</span></h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
              <Link to="/reservations" className="bg-copper text-whiskey-dark px-12 py-5 text-xs font-bold tracking-[0.4em] hover:bg-brass transition-all duration-500">
                SECURE YOUR SEAT
              </Link>
              <Link to="/about" className="text-brass border-b border-brass/30 pb-2 text-[10px] tracking-[0.3em] hover:text-copper hover:border-copper transition-all duration-500">
                LEARN OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <FeatureGrid />
      </div>
    </div>
  );
};
