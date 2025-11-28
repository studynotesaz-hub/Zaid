import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Total duration of animation before completing
    const timer = setTimeout(() => {
      setFinished(true);
      setTimeout(onComplete, 1000); // fade out duration
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // SVG Paths for "Zaid" - Refined for clarity and premium style
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.5, type: "tween", ease: "easeInOut", duration: 1.5 },
        opacity: { delay: i * 0.5, duration: 0.01 }
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center overflow-hidden cursor-none"
    >
        <div className="relative z-10 scale-150 md:scale-[2]">
            <svg 
                width="200" 
                height="100" 
                viewBox="0 0 200 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {/* Z: Sharp elegant start, diagonal stroke, bottom swash */}
                <motion.path
                    d="M 40 30 L 70 30 L 40 70 C 40 70, 35 75, 50 75 C 65 75, 75 70, 80 65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                />
                
                {/* a: connect from Z, round body, vertical stem */}
                <motion.path
                    d="M 80 65 C 85 60, 95 60, 100 65 C 105 70, 105 75, 100 75 C 95 75, 90 70, 90 65 C 90 60, 95 55, 100 55 L 100 75 L 105 75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.2}
                />

                {/* i: simple vertical stroke */}
                <motion.path
                    d="M 105 75 L 110 75 L 110 55 L 110 75 L 115 75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2.4}
                />

                {/* i (dot): distinct placement */}
                <motion.path
                    d="M 110 40 L 110 42"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    custom={3.0}
                />

                {/* d: round body like 'a', tall ascender, exit stroke */}
                <motion.path
                    d="M 115 75 C 120 70, 130 70, 135 75 C 140 80, 135 85, 130 85 C 125 85, 120 80, 120 75 C 120 70, 125 65, 135 65 L 135 30 L 135 80 C 135 80, 140 85, 150 80"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    custom={3.2}
                />
            </svg>
            
            {/* Subtle glow trace */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
                className="absolute inset-0 blur-md bg-white/20 -z-10"
            />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: finished ? 1 : 0, y: finished ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-24 font-display text-[10px] tracking-[0.4em] text-neutral-500 uppercase"
        >
            Signature Series
        </motion.div>

    </motion.div>
  );
};

export default Preloader;