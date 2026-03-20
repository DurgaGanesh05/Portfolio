import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050810] overflow-x-hidden relative">
      {/* Anima ted dot-grid background pattern */}
      <div
        className="fixed inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #6366F1 2px, transparent 2px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Custom scrollbar styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366F1, #22D3EE);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #8B92F8, #4DD9EE);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `,
        }}
      />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
