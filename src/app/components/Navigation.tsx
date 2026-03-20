import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      // Update active section
      const sections = ['about', 'skills', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`fixed top-[60px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'top-4' : ''
      }`}
      style={{ maxWidth: '680px', width: 'calc(100% - 2rem)' }}
    >
      <div
        className={`backdrop-blur-[20px] rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D1121]/80 border-[#6366F1]/20 h-[58px]'
            : 'bg-[#0D1121]/80 border-[#6366F1]/20 h-[72px]'
        }`}
      >
        <div className="px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="w-9 h-9 bg-gradient-to-br from-[#6366F1] to-[#22D3EE] rounded-md flex items-center justify-center relative"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            whileHover={{ rotate: 60 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-sm font-bold" style={{ fontFamily: 'DM Mono' }}>DG</span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Certs', id: 'certifications' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors relative"
                style={{ fontFamily: 'Instrument Sans' }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#6366F1] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/specialised_DS.pdf"
            download
            className="px-4 py-2 border border-[#6366F1]/40 rounded-full text-white/80 hover:bg-gradient-to-r hover:from-[#6366F1] hover:to-[#22D3EE] hover:text-white hover:border-transparent transition-all duration-300 text-sm flex items-center gap-2 group"
            style={{ fontFamily: 'Instrument Sans' }}
          >
            Resume
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
