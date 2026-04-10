import { motion } from 'framer-motion';
import { ShaderAnimation } from './ui/shader-animation';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-dark overflow-hidden font-sans">
      
      {/* Full Bleed Shader Background - Softened */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
      </div>

      {/* Floating Orbs for Cinematic Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Digital Flagship Agency Layout Content */}
      <div className="z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-48 flex flex-col justify-center pointer-events-none">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-light/50 uppercase mb-8 ml-1"
        >
           <span className="w-1.5 h-1.5 rounded-full bg-accent" />
           Oracle SprintOps
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-light max-w-5xl mb-16"
        >
          We engineer high-performance sprint cycles for agile teams shaping what's next, from <span className="text-light/50">emerging tech startups</span> to <span className="text-light/50">billion dollar enterprises.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto pointer-events-auto items-start"
        >
          <button className="group flex items-center gap-4 text-light text-sm font-semibold tracking-[0.15em] uppercase hover:text-accent transition-colors">
            <span className="border-b border-light/30 group-hover:border-accent pb-1 transition-colors">Work With Us</span>
            <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
          </button>
          
          <button className="group flex items-center gap-4 text-light/50 text-sm font-semibold tracking-[0.15em] uppercase hover:text-light transition-colors">
            <span className="border-b border-transparent group-hover:border-light/30 pb-1 transition-colors">Explore Platform</span>
          </button>
        </motion.div>
      </div>

      {/* Clean Bottom Gradient to merge with next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
};
