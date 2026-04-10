import { motion } from 'framer-motion';
import { testimonials } from '../data/mockData';

export const Testimonials = () => {
  return (
    <section className="w-full bg-dark flex flex-col py-32 px-6 lg:px-16 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10 w-full">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col gap-6 max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-light text-light tracking-tight leading-[1.1]">
             Verified <br />
             <span className="font-serif italic text-gradient-accent">Deployments.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel border border-light/10 rounded-[2rem] flex flex-col justify-between group overflow-hidden hover:bg-light/[0.02] transition-colors duration-500"
            >
              <div className="p-8 md:p-10 font-light text-light/70 text-lg leading-relaxed relative">
                <span className="absolute top-6 text-6xl font-serif text-light/10 leading-none">"</span>
                <span className="relative z-10">{testimonial.text}</span>
              </div>
              
              <div className="flex items-center gap-4 p-6 md:p-8 mt-4 border-t border-light/5">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-light/20">
                   <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-light">{testimonial.name}</h4>
                  <p className="text-xs text-light/40 tracking-widest uppercase mt-1">
                    {testimonial.role} <span className="mx-1">•</span> {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
