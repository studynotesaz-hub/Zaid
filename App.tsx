
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling during load
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-[#050505] min-h-screen text-[#e1e1e1] selection:bg-white selection:text-black">
           {/* Navigation - Minimal */}
           <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference">
              <div className="font-display font-bold text-xl tracking-tighter">ZAID</div>
              <a 
                href="https://instagram.com/_zaidsiddiquiii" 
                target="_blank" 
                rel="noreferrer"
                className="hidden md:block font-body text-xs uppercase tracking-widest hover:line-through decoration-white cursor-none"
                data-hover
              >
                Let's Talk
              </a>
           </nav>

           <Hero />
           <About />
           <Manifesto />
           <Services />
           <Footer />
        </main>
      )}
    </>
  );
};

export default App;
