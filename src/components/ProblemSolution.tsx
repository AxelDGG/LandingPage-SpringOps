import { motion } from 'framer-motion';

export const ProblemSolution = () => {
  return (
    <section className="w-full bg-dark flex flex-col py-32 px-6 lg:px-12 relative overflow-hidden font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-light/50 uppercase mb-8 glass-panel px-6 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            The Paradigm Shift
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-light mb-6">
            From Chaos to <span className="font-serif italic text-gradient-accent">Order.</span>
          </h2>
          <p className="text-xl text-light/50 font-light leading-relaxed">
            Disconnected tools cause friction. SprintOps establishes a unified systemic reality for high-velocity teams.
          </p>
        </motion.div>

        <div className="w-full grid md:grid-cols-2 gap-8 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[1px] bg-light/20 z-0" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-light/20 bg-dark z-10 flex items-center justify-center">
             <span className="text-light/50 text-xs tracking-widest">&rarr;</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-10 md:p-16 flex flex-col glass-panel rounded-[2rem] border-light/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="text-accent/80 font-mono text-xs tracking-[0.2em] uppercase mb-8">Legacy Systems</span>
            <ul className="flex flex-col gap-8 relative z-10">
              <li className="flex items-start gap-6 group/item">
                <span className="text-accent text-sm mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity">01</span>
                <span className="text-light/60 font-light text-lg">Teams lack alignment; system visibility is severely fractured across platforms.</span>
              </li>
              <li className="flex items-start gap-6 group/item">
                <span className="text-accent text-sm mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity">02</span>
                <span className="text-light/60 font-light text-lg">Sprint velocity relies on manual state updates leading to data decay.</span>
              </li>
              <li className="flex items-start gap-6 group/item">
                <span className="text-accent text-sm mt-1 opacity-50 group-hover/item:opacity-100 transition-opacity">03</span>
                <span className="text-light/60 font-light text-lg">Context switching drains 30% of engineering bandwidth daily.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="p-10 md:p-16 flex flex-col bg-light/5 rounded-[2rem] border border-light/10 relative overflow-hidden group hover:bg-light/10 transition-colors duration-700 glow-border"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
             <span className="text-light font-mono text-xs tracking-[0.2em] uppercase mb-8 relative z-10">SprintOps Protocol</span>
             <ul className="flex flex-col gap-8 relative z-10">
              <li className="flex items-start gap-6 group/item">
                <span className="text-secondary text-sm mt-1">✓</span>
                <span className="text-light font-medium text-lg">Absolute visibility in a singular, perfectly synchronized pane of glass.</span>
              </li>
              <li className="flex items-start gap-6 group/item">
                <span className="text-secondary text-sm mt-1">✓</span>
                <span className="text-light font-medium text-lg">Completely centralized and automated sprint state orchestration.</span>
              </li>
              <li className="flex items-start gap-6 group/item">
                <span className="text-secondary text-sm mt-1">✓</span>
                <span className="text-light font-medium text-lg">Real-time predictive metrics eliminate blind spots and bottlenecks.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
