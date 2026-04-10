import { motion } from 'framer-motion';
import { metrics } from '../data/mockData';

export const Metrics = () => {
  return (
    <section className="w-full bg-dark flex flex-col py-32 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
         
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 text-light max-w-lg"
         >
            <div className="inline-flex self-start items-center gap-3 text-xs font-mono tracking-[0.2em] text-secondary/70 uppercase mb-4 glass-panel px-6 py-2 rounded-full border border-secondary/20">
               <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
               Telemetry
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-light leading-[1.1]">
              Raw Output. <br/>
              <span className="font-serif italic text-light/50">Zero Noise.</span>
            </h2>
            <p className="text-xl text-light/50 font-light leading-relaxed mt-6">
              Stop guessing. Start measuring. Deploy sprints with absolute mathematical certainty.
            </p>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full bg-light/5 border border-light/10 text-secondary font-mono p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden backdrop-blur-3xl shadow-2xl"
         >
             <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />

             <div className="absolute top-6 right-8 text-[10px] font-bold tracking-[0.3em] text-secondary/40">TERMINAL_OUTPUT\\</div>
             
             <div className="flex flex-col gap-6 mt-8 relative z-10 w-full h-full justify-center min-h-[300px]">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                    className="flex justify-between items-end border-b border-light/10 pb-4 group relative cursor-crosshair"
                  >
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-700 ease-out" />
                    
                    <div className="flex flex-col relative z-10">
                      <span className="text-light/40 text-[10px] tracking-[0.2em] uppercase mb-1">{metric.label}_</span>
                      <span className="text-light/80 text-sm">{metric.description}</span>
                    </div>
                    <span className="text-4xl font-light text-secondary relative z-10">{metric.value}</span>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-3 h-5 bg-secondary/80 mt-4" 
                />
             </div>
         </motion.div>
         
      </div>
    </section>
  );
};
