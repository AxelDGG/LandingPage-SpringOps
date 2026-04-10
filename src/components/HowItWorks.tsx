import { motion } from 'framer-motion';
import { howItWorksSteps } from '../data/mockData';

export const HowItWorks = () => {
  return (
    <section className="w-full bg-dark flex flex-col pt-32 pb-48 relative overflow-hidden">
      
      {/* Cinematic Deep Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light/5 via-dark to-dark pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-24 px-6 lg:px-12 w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-light/50 uppercase glass-panel px-6 py-2 rounded-full">
            Execution_Path
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-light tracking-tight">
            The <span className="font-serif italic text-gradient-accent">Mechanism.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Elegant soft connector line */}
          <div className="absolute left-[24px] md:left-[35px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-light/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-16">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16 pl-12 md:pl-0 group cursor-default"
              >
                {/* Step Node */}
                <div className="absolute left-0 top-0 md:relative w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full border border-light/10 glass-panel flex items-center justify-center text-xl md:text-2xl font-light text-light/50 group-hover:text-accent group-hover:border-accent/30 transition-colors duration-500 z-10 shrink-0">
                  0{index + 1}
                </div>
                
                <div className="glass-panel p-8 md:p-12 w-full rounded-[2rem] border border-light/5 hover:bg-light/[0.03] transition-colors duration-500">
                  <h3 className="text-2xl md:text-3xl font-normal text-light tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-light group-hover:to-accent transition-all duration-500">{step.title}</h3>
                  <p className="font-light text-light/50 leading-relaxed text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
