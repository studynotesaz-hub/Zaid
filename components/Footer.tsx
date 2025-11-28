import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative min-h-screen bg-black flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
                 backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
             }} 
        />

        <div className="mt-24 z-10">
            <p className="font-body text-neutral-400 uppercase tracking-widest text-sm mb-8">Ready to create history?</p>
            <h2 className="font-display text-5xl md:text-8xl text-white font-bold leading-tight max-w-4xl">
                LET'S BUILD THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">UNIMAGINABLE</span>
            </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 z-10">
            <div className="flex flex-col gap-4">
                 <a href="https://instagram.com/_zaidsiddiquiii" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4" data-hover>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </div>
                    <span className="font-display text-2xl text-white">@_zaidsiddiquiii</span>
                 </a>
            </div>

            <div className="text-right">
                <p className="font-body text-neutral-600 text-sm">
                    Based in the Future.<br/>
                    &copy; {new Date().getFullYear()} Zaid.
                </p>
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="w-full h-[1px] bg-white/20 mt-8 origin-right"
                />
            </div>
        </div>
        
        {/* Big Background Text */}
        <div className="absolute bottom-[-5%] left-0 w-full select-none pointer-events-none opacity-10">
            <h1 className="font-display font-bold text-[30vw] text-center leading-none text-white/50">ZAID</h1>
        </div>
    </footer>
  );
};

export default Footer;