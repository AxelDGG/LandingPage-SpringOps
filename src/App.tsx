import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Metrics } from './components/Metrics';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark selection:bg-accent selection:text-white relative">


      <main className="relative z-10 flex flex-col w-full min-h-screen bg-dark">
        <Hero />
        <ProblemSolution />
        <Features />
        <Metrics />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>

      <div className="w-full">
         <Footer />
      </div>
    </div>
  );
}

export default App;
