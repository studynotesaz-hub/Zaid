import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={container} className="min-h-screen py-32 px-6 md:px-24 flex items-center justify-center relative bg-[#050505]">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            
            {/* Sticky Header with Stronger Glassmorphism to prevent overlap */}
            <div className="md:col-span-4 sticky top-32 h-fit z-30">
                <div className="relative">
                    {/* Increased blur and background opacity for legibility */}
                    <div className="backdrop-blur-xl bg-black/40 border border-white/10 px-6 py-4 rounded-2xl w-fit flex items-center gap-3 shadow-2xl">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="font-display text-xs tracking-[0.2em] text-neutral-300 uppercase">
                            The Philosophy
                        </span>
                    </div>
                    {/* Decorative rotating element */}
                    <motion.div 
                        style={{ rotate }}
                        className="absolute -right-12 -top-12 w-24 h-24 border border-dashed border-white/10 rounded-full hidden md:block pointer-events-none"
                    />
                </div>
            </div>

            <div className="md:col-span-8 z-10 relative">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Large Quote */}
                    <h2 className="font-serif-accent text-5xl md:text-8xl leading-[1.1] text-neutral-300 mix-blend-screen">
                       "I don't just build. I <span className="text-white italic font-cursive pr-4">sculpt</span> digital experiences."
                    </h2>
                </motion.div>
                
                <motion.div style={{ y }} className="mt-32 space-y-20">
                    <DetailBlock 
                        title="Minute Details" 
                        number="01"
                        text="The magic isn't in what you see, but in what you feel. Micro-interactions, perfect easing, and pixel-perfect alignment that creates a subconscious sense of quality."
                    />
                    
                    <DetailBlock 
                        title="Huge Results" 
                        number="02"
                        text="Founding a startup taught me that design without function is decoration. I bridge the gap between high-art visuals and conversion-focused revenue."
                    />

                    <DetailBlock 
                        title="Godly Touch" 
                        number="03"
                        text="Smoothness isn't an option; it's the standard. Utilizing WebGL and advanced motion physics to bring iOS-level fluidity to the browser."
                    />
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

const DetailBlock: React.FC<{title: string, number: string, text: string}> = ({title, number, text}) => {
    return (
        <div className="group border-t border-white/10 pt-8" data-hover>
            <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-display text-2xl md:text-3xl text-neutral-500 group-hover:text-white transition-colors duration-500">{title}</h3>
                <span className="font-display text-xs text-neutral-700 group-hover:text-white/50 transition-colors duration-500">({number})</span>
            </div>
            <p className="font-body text-neutral-500 text-sm md:text-base leading-relaxed max-w-lg group-hover:text-neutral-300 transition-colors duration-500">
                {text}
            </p>
        </div>
    )
}

export default Manifesto;