import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
    </div>
  );
}