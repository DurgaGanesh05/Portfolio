import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12 lg:px-20">
        <nav
          ref={navRef}
          className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3"
          aria-label="Primary navigation"
        >
          <a
            href="#hero"
            className="text-white font-semibold tracking-wide hover:text-cyan-200 transition-colors"
          >
            Ganesh
          </a>
          <div className="hidden md:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-200/90 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn px-4 py-2 text-sm">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}

