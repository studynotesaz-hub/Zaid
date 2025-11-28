import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-[#050505]">
      
      {/* Background Abstract Elements - More subtle/premium */}
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0 select-none pointer-events-none">
         {/* Central Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-[120px]" />
         {/* Noise or Texture could go here via CSS in index.html, handled by parent noise-overlay */}
      </motion.div>

      {/* Minute Details: Corner Data */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-8 left-8 hidden md:block"
      >
          <div className="font-display text-[10px] text-neutral-500 tracking-[0.2em]">
              EST. 2024<br/>
              LAT: 34.0522° N
          </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-8 right-8 hidden md:block text-right"
      >
          <div className="font-display text-[10px] text-neutral-500 tracking-[0.2em]">
              SYSTEM: ONLINE<br/>
              VER: 2.0.4
          </div>
      </motion.div>

      <div className="z-10 flex flex-col items-center justify-center text-white mix-blend-normal">
        <div className="overflow-hidden relative">
            <motion.h1 
                initial={{ y: 200, rotateX: -20 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="font-display font-bold text-[18vw] leading-[0.8] tracking-[-0.05em] text-white"
            >
                ZAID
            </motion.h1>
             {/* Small accent text near the logo */}
             <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-8 font-cursive text-4xl text-neutral-500 rotate-12"
             >
                 art
             </motion.span>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
            <div className="h-[1px] w-12 bg-neutral-800 hidden md:block" />
            
            <div className="flex gap-8 items-center uppercase tracking-[0.2em] text-[10px] md:text-xs font-body text-neutral-400">
                <motion.span 
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.8 }}
                >
                    Visualiser
                </motion.span>
                <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                <motion.span 
                     initial={{ opacity: 0, filter: "blur(10px)" }}
                     animate={{ opacity: 1, filter: "blur(0px)" }}
                     transition={{ delay: 0.9 }}
                >
                    Designer
                </motion.span>
                <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                <motion.span 
                     initial={{ opacity: 0, filter: "blur(10px)" }}
                     animate={{ opacity: 1, filter: "blur(0px)" }}
                     transition={{ delay: 1.0 }}
                >
                    Founder
                </motion.span>
            </div>
            
            <div className="h-[1px] w-12 bg-neutral-800 hidden md:block" />
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 w-full flex justify-between px-12 items-end"
      >
         <div className="font-display text-[10px] text-neutral-600 tracking-widest hidden md:block">
            SCROLL TO EXPLORE
         </div>
         <div className="flex flex-col items-center gap-2 mx-auto md:mx-0">
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" 
            />
         </div>
         <div className="font-display text-[10px] text-neutral-600 tracking-widest hidden md:block">
            ZAID &copy; 2024
         </div>
      </motion.div>
    </div>
  );
};

export default Hero;