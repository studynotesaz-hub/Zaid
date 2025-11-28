import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "VOGUE",
    subtitle: "Digital Fashion Editorial",
    category: "Web Design / UI",
    // Fashion/Editorial website vibe - darker, sleek
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "FINEX",
    subtitle: "Crypto Trading Dashboard",
    category: "SaaS / Product",
    // Dark mode dashboard interface
    src: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2532&auto=format&fit=crop" 
  },
  {
    id: 3,
    title: "ATELIER",
    subtitle: "Architectural Portfolio",
    category: "Immersive Experience",
    // Clean, minimal portfolio layout
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
  },
  {
    id: 4,
    title: "FUTURE",
    subtitle: "AI Research Lab",
    category: "Brand & Web",
    // Abstract tech interface
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
  }
];

const WorkGallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="h-[350vh] relative bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Subtle Grid Background for Technical Feel */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                 backgroundSize: '100px 100px'
             }} 
        />
        
        {/* Decorative Line */}
        <div className="absolute top-24 left-0 w-full h-[1px] bg-white/5" />
        
        <div className="absolute top-12 left-6 md:left-24 z-10 flex items-center gap-4">
             <div className="w-1.5 h-1.5 bg-white rounded-none rotate-45 animate-pulse" />
             <h2 className="font-display text-xs md:text-sm text-neutral-400 uppercase tracking-[0.3em]">Selected Works (04)</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-16 px-24 items-center h-full">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
          
          {/* Call to action card in gallery */}
           <div className="relative h-[60vh] w-[30vw] flex-shrink-0 flex flex-col items-center justify-center border-l border-white/5 group hover:bg-white/5 transition-colors duration-700">
               <div className="text-center" data-hover>
                   <p className="font-body text-neutral-600 mb-6 tracking-widest text-[10px] uppercase">The Archives</p>
                   <span className="font-display text-4xl md:text-6xl text-white italic">VIEW ALL</span>
               </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    return (
        <div className="group relative h-[65vh] w-[85vw] md:w-[50vw] flex-shrink-0 bg-neutral-900 overflow-hidden" data-hover>
            {/* Image Container with Parallax Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                    src={project.src} 
                    alt={project.title} 
                    className="h-[110%] w-[110%] object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1] grayscale-[30%] group-hover:grayscale-0"
                />
            </div>
            
            {/* Premium Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

            {/* Technical Detail Marks */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <span className="font-display text-[9px] tracking-widest text-white/60 border border-white/20 px-3 py-1 uppercase bg-black/20 backdrop-blur-sm">
                    VIEW CASE STUDY
                </span>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-md bg-white/10 border border-white/10 px-4 py-2 rounded-full">
                        {project.category}
                    </span>
                    <span className="font-display text-xs text-white/50">0{project.id}</span>
                </div>

                <div className="translate-y-[20px] group-hover:translate-y-0 transition-all duration-700 ease-out">
                    <h3 className="font-display text-5xl md:text-7xl text-white leading-[0.85] tracking-tighter mb-4 mix-blend-normal">
                        {project.title}
                    </h3>
                    <div className="h-[1px] w-12 bg-white/50 mb-4 group-hover:w-full transition-all duration-700 ease-out delay-200" />
                    <p className="font-body text-neutral-300 text-xs tracking-[0.2em] uppercase">{project.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkGallery;