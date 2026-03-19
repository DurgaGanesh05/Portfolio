import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.8,
        y: 40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      gsap.from(leftRef.current, {
        x: -64,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
      gsap.from(rightRef.current, {
        x: 64,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Card */}
        <div
          ref={leftRef}
          className="flex justify-center"
        >
          <div
            className="card card-hover relative w-full max-w-sm p-7 group"
            tabIndex={0}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 ring-4 ring-slate-950/40 flex items-center justify-center shadow-md">
              {/* Placeholder profile icon */}
              <svg
                className="w-14 h-14 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="20" r="10" />
                <path d="M7 42c2-8 11-12 17-12s15 4 17 12" />
              </svg>
            </div>
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-1 tracking-wide">
                S. V. Durga Ganesh
              </h2>
              <div className="bg-white/10 h-px w-20 mx-auto rounded-full mb-4" />
              <p className="text-gray-200 font-semibold text-base mb-2">
                B.Tech CSE
              </p>
              <p className="text-gray-400 text-sm mb-1">
                Lovely Professional University
              </p>
              <p className="text-cyan-300 font-semibold text-sm tracking-wide">
                CGPA: <span className="font-bold">7.70</span>
              </p>
            </div>
          </div>
        </div>
        {/* Right: About Text */}
        <div ref={rightRef}>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="section-title mb-3">
                About Me
              </h3>
              <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed mb-2">
                Passionate about transforming raw data into meaningful insights and building scalable software solutions. I thrive on tackling complex problems, employing data-driven thinking, and delivering high-impact results that make a difference.
              </p>
            </div>
            <div>
              <h4 className="text-cyan-300 font-semibold text-sm uppercase tracking-widest mb-2">
                Career Goal
              </h4>
              <p className="text-gray-400 text-base leading-normal">
                Eager to create intelligent systems that bridge the gap between data science and software engineering—empowering smarter decisions and real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}