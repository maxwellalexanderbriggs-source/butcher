import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { Home } from './pages/Home';
import { FoodMenu } from './pages/FoodMenu';
import { BevMenu } from './pages/BevMenu';
import { SpiritList } from './pages/SpiritList';
import { About } from './pages/About';
import { Staff } from './pages/Staff';
import { Reservations } from './pages/Reservations';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-copper selection:text-whiskey-dark">
        <LoadingScreen onComplete={() => setLoading(false)} />
        
        <div className="grain-overlay" />
        
        <AnimatePresence>
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Header />
              <SmoothScroll>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu/food" element={<FoodMenu />} />
                  <Route path="/menu/bev" element={<BevMenu />} />
                  <Route path="/menu/spirits" element={<SpiritList />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/staff" element={<Staff />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
              </SmoothScroll>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
