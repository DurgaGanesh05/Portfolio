import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const taglines = [
  "Turning Data into Insights",
  "Building Intelligent Solutions",
  "Empowering Decisions with Analytics"
];

// Resume file name in public folder
const RESUME_PUBLIC_PATH = "/specialised_DS.pdf";
const RESUME_DOWNLOAD_NAME = "resume.pdf";

export default function Hero() {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Handler to force download the resume PDF file from public folder
  const handleDownloadResume = (e) => {
    // Prevent default browser link so we can force download and custom filename
    e.preventDefault();
    const link = document.createElement("a");
    link.href = RESUME_PUBLIC_PATH;
    link.download = RESUME_DOWNLOAD_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Typing/Deleting effect with smooth loop
  useEffect(() => {
    let timeoutId;
    const currentTagline = taglines[taglineIdx];

    if (typing) {
      if (charIndex < currentTagline.length) {
        timeoutId = setTimeout(() => {
          setDisplayedTagline(currentTagline.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 42);
      } else {
        // Pause fully typed
        timeoutId = setTimeout(() => {
          setTyping(false);
        }, 1000);
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedTagline(currentTagline.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 26);
      } else {
        setTyping(true);
        setTaglineIdx((prev) => (prev + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typing, charIndex, taglineIdx]);

  // Reset charIndex and displayedTagline (for new tagline start)
  useEffect(() => {
    setCharIndex(0);
    setDisplayedTagline("");
  }, [taglineIdx]);

  // GSAP entrance + stagger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRefs.current, {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.fromTo(
        ".hero-shape",
        { y: 40, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.utils.toArray(".hero-shape").forEach((el, i) => {
        gsap.to(el, {
          y: gsap.utils.wrap([-25, 25], i),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 3.4 + Math.random(),
          delay: Math.random(),
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Tailwind v4: assumes base + components + utilities imported in main CSS
  return (
    <section ref={heroRef} className="section relative" id="hero">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        {/* Left side */}
        <div className="flex flex-col gap-6 md:gap-7">
          <h1
            ref={(el) => (textRefs.current[0] = el)}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            S. V. Durga Ganesh
          </h1>
          <div
            ref={(el) => (textRefs.current[1] = el)}
            className="min-h-[44px] sm:min-h-[48px] flex items-center"
          >
            <span className="text-xl sm:text-2xl font-semibold text-gray-200 tracking-wide leading-tight select-none">
              {displayedTagline}
              <span className="ml-1 text-gray-300 blink">|</span>
            </span>
          </div>
          <div
            ref={(el) => (textRefs.current[2] = el)}
            className="text-gray-400 font-medium text-sm sm:text-base pt-1 tracking-wide"
          >
            Data Science Enthusiast <span className="mx-2 text-gray-700"><span className="blink">|</span></span></div>
          <div
            ref={(el) => (textRefs.current[3] = el)}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#projects"
              className="btn"
              tabIndex={0}
            >
              View Projects
            </a>
            <a
              href={RESUME_PUBLIC_PATH}
              download={RESUME_DOWNLOAD_NAME}
              onClick={handleDownloadResume}
              className="btn btn-secondary"
              tabIndex={0}
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] flex items-center justify-center">
          {/* Decorative subtle shapes */}
          <div
            className="hero-shape absolute left-10 top-12 w-44 h-44 sm:w-56 sm:h-56 bg-cyan-400/10 blur-2xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="hero-shape absolute right-8 bottom-14 w-36 h-36 sm:w-44 sm:h-44 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="hero-shape absolute left-24 top-28 w-24 h-24 sm:w-28 sm:h-28 bg-white/5 blur-xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div className="hero-shape absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
      <style>{
        `.blink {
          animation: blink 1.1s steps(1) infinite;
          }
        @keyframes blink {
          0%, 49% { opacity: 1 }
          50%, 100% { opacity: 0 }
        }`
      }</style>
    </section>
  );
}