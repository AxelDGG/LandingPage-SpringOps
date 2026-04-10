import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="w-full bg-dark flex flex-col relative overflow-hidden">
      
      {/* Cinematic Spotlight Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-dark to-dark pointer-events-none" />
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="w-full max-w-5xl mx-auto px-6 py-48 flex flex-col items-center text-center gap-12 z-10 relative">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-light/50 uppercase glass-panel px-6 py-2 rounded-full mb-4"
        >
           <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
           Deployment_Ready
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tight text-light leading-[0.9]"
        >
          Start <br/>
          Building <br/>
          <span className="font-serif italic text-gradient-accent">Sprints.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex w-full max-w-lg relative group"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-colors duration-500" />
          <input 
             type="text" 
             placeholder="ENTER WORK EMAIL" 
             className="relative flex-1 bg-dark/50 backdrop-blur-xl text-light font-light text-center sm:text-left p-6 sm:pl-8 rounded-l-full sm:rounded-full outline-none border border-light/10 focus:border-accent/50 transition-colors placeholder:text-light/30 w-full"
          />
          <button className="relative sm:absolute sm:right-2 sm:top-2 sm:bottom-2 bg-accent text-light px-8 py-4 sm:py-0 rounded-r-full sm:rounded-full uppercase tracking-[0.2em] text-xs font-semibold hover:bg-light hover:text-accent transition-all duration-300">
            Deploy
          </button>
        </motion.div>
      </div>
      
    </section>
  );
};
