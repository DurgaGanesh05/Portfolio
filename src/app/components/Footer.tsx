import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm" style={{ fontFamily: 'DM Mono' }}>
              © 2026 S.V. Durga Ganesh · Built using (Typescript + TailwindCSS + GSAP)
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DurgaGanesh05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0D1121] border border-[#6366F1]/20 rounded-lg flex items-center justify-center hover:border-[#6366F1] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh005/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0D1121] border border-[#6366F1]/20 rounded-lg flex items-center justify-center hover:border-[#6366F1] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
            <a
              href="mailto:seeramdurgaganesh@gmail.com"
              className="w-10 h-10 bg-[#0D1121] border border-[#6366F1]/20 rounded-lg flex items-center justify-center hover:border-[#6366F1] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 w-10 h-10 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-lg flex items-center justify-center hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
