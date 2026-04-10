import { motion } from 'framer-motion';
import { features } from '../data/mockData';

export const Features = () => {
  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-light/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-light mb-4 text-gradient">
            System.<span className="font-serif italic font-medium">Features</span>
          </h2>
          <p className="text-light/50 font-light max-w-xl text-lg">
            A comprehensive suite of tools engineered to accelerate your agile velocity.
          </p>
        </div>
        <div className="glass-panel px-6 py-2 rounded-full border-accent/30">
          <span className="font-mono text-xs text-accent tracking-[0.2em] font-medium">4 MODULES ACTIVE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 rounded-3xl flex flex-col group relative overflow-hidden flex-1 transition-all duration-500 hover:bg-light/5 hover:-translate-y-2 glow-border"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500" />
              
              <div className="w-14 h-14 bg-dark border border-light/10 text-light rounded-2xl flex items-center justify-center mb-12 shadow-2xl relative z-10 group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/30 transition-all duration-500">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-medium tracking-tight mb-4 text-light relative z-10">{feature.title}</h3>
              <p className="font-light text-sm leading-relaxed text-light/60 relative z-10 flex-1">
                {feature.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-light/10 flex items-center justify-between font-mono text-xs tracking-widest text-light/40 relative z-10">
                 <span>[ MOD_{index + 1} ]</span>
                 <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">Explore &rarr;</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
