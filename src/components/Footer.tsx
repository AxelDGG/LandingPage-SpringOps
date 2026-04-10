export const Footer = () => {
  return (
    <footer className="w-full bg-dark text-light flex flex-col font-sans pt-32 pb-8 px-6 lg:px-16 overflow-hidden relative">
      {/* Soft Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-light/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 pb-24">
        {/* Brand Block */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <h3 className="text-3xl font-light tracking-tight mb-6 text-light">
              Oracle<span className="font-serif italic text-secondary ml-1">SprintOps</span>
            </h3>
            <p className="text-light/50 font-light text-lg leading-relaxed max-w-sm">
              The paradigm shift in sprint workflow orchestration for high-performance teams.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#446E51] animate-pulse" />
             <span className="font-mono text-xs tracking-[0.2em] uppercase text-light/50">All Systems Operational</span>
          </div>
        </div>

        {/* Links matrix */}
        <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 font-mono text-xs tracking-widest uppercase">
          <div className="flex flex-col gap-6">
            <h4 className="text-light/30 mb-2">Platform</h4>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Features</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Security</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Enterprise</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Pricing</a>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-light/30 mb-2">Resources</h4>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Documentation</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Changelog</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">API Reference</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Network Status</a>
          </div>

          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <h4 className="text-light/30 mb-2">Company</h4>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">About Us</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Careers</a>
            <a href="#" className="text-light/70 hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-light/30 pt-8 border-t border-light/5">
        <p>&copy; {new Date().getFullYear()} Oracle SprintOps. All Rights Reserved.</p>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-light transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-light transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
