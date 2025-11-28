import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen relative flex items-center justify-center py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
        
        {/* Subtle Background Art */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
            
            <motion.div
                style={{ y, opacity }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-cursive text-3xl md:text-5xl text-neutral-600 mb-8 block">
                    The Artist
                </span>
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-12 leading-[1.1]">
                    I DON'T JUST CODE.<br/>
                    I <span className="text-neutral-500 italic">COMPOSE</span>.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8 max-w-2xl mx-auto"
            >
                <p className="font-body text-neutral-400 text-base md:text-lg leading-relaxed tracking-wide">
                    I am <span className="text-white font-medium">Zaid</span>. A Visualiser, Designer, and Startup Founder. 
                    In a world cluttered with templates and mediocrity, I choose to be a rebellion. 
                    My work is not about filling space; it's about evoking emotion.
                </p>
                <p className="font-body text-neutral-400 text-base md:text-lg leading-relaxed tracking-wide">
                    To me, a website is not a utility. It is a canvas. It is an extension of the soul. 
                    I blend the razor-sharp precision of engineering with the chaotic beauty of art, 
                    obsessing over the minute details that others ignore. 
                </p>
                <p className="font-body text-neutral-400 text-base md:text-lg leading-relaxed tracking-wide">
                    Every pixel is a deliberate stroke. Every interaction is a curated moment. 
                    This is not just development. This is <span className="font-cursive text-2xl text-white ml-2">Digital Alchemy</span>.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex flex-col items-center gap-4"
            >
                <div className="h-16 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                    Based in the Void
                </span>
            </motion.div>
        </div>
    </section>
  );
};

export default About;