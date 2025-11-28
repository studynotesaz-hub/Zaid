
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Creative Direction",
    description: "Visualizing the unseen. Defining the aesthetic soul of a brand before a single pixel is placed."
  },
  {
    id: "02",
    title: "Immersive Dev",
    description: "WebGL, Three.js, and React. Crafting browser experiences that feel native, fluid, and alive."
  },
  {
    id: "03",
    title: "Motion Design",
    description: "Physics-based animation. Easing curves that mimic reality. Smoothness is the only metric."
  },
  {
    id: "04",
    title: "Brand Alchemy",
    description: "Transforming standard businesses into cult-like brands through rigorous consistency and dark psychology."
  }
];

const Services: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#050505] py-32 px-6 md:px-24 flex flex-col justify-center relative z-10">
      
      {/* Section Header */}
      <div className="mb-24 flex flex-col items-start">
         <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-white mb-6"
         />
         <h2 className="font-display text-xs md:text-sm text-neutral-500 uppercase tracking-[0.4em]">
             The Craft
         </h2>
      </div>

      {/* Services List */}
      <div className="flex flex-col">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
};

const ServiceItem: React.FC<{ service: typeof services[0] }> = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="group relative border-t border-white/10 py-16 transition-colors duration-500 hover:bg-white/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-hover
        >
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-8 relative z-10">
                
                {/* ID & Title */}
                <div className="flex items-baseline gap-8 md:gap-16">
                    <span className="font-display text-xs text-neutral-600 group-hover:text-white transition-colors duration-300">
                        {service.id}
                    </span>
                    <h3 className="font-display text-3xl md:text-6xl text-neutral-400 group-hover:text-white transition-all duration-500 group-hover:tracking-widest">
                        {service.title}
                    </h3>
                </div>

                {/* Description - Reveals on Hover */}
                <div className="max-w-md w-full overflow-hidden">
                    <motion.p 
                        initial={{ opacity: 0.5, y: 10 }}
                        animate={{ 
                            opacity: isHovered ? 1 : 0.5, 
                            y: isHovered ? 0 : 10,
                            x: isHovered ? 10 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="font-body text-sm md:text-base text-neutral-500 leading-relaxed"
                    >
                        <span className="hidden md:inline-block w-2 h-2 bg-white rounded-full mr-4 mb-[2px]" />
                        {service.description}
                    </motion.p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                         <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div 
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : ''}`}
                style={{ transform: 'skewX(-20deg)' }}
            />
        </div>
    )
}

export default Services;
