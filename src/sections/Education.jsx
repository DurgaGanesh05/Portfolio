import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EDUCATION = [
  {
    title: "B.Tech CSE",
    institution: "Lovely Professional University",
    details: [
      { label: "CGPA", value: "7.70" },
      { label: "Duration", value: "2023 – Present" },
    ],
  },
  {
    title: "Intermediate",
    details: [{ label: "Percentage", value: "72%" }],
  },
  {
    title: "Matriculation",
    details: [{ label: "Percentage", value: "71%" }],
  },
];

function TimelineDot({ isActive }) {
  return (
    <span
      className={`
        block w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 z-10
        bg-gradient-to-r from-cyan-400 to-blue-500
        shadow-[0_0_18px_0_rgba(34,211,238,0.25)]
        ring-2 ring-white/20
        transition-all
        duration-300
        ${isActive ? "opacity-100 scale-110" : "opacity-70"}
      `}
    />
  );
}

function EducationCard({ edu, index, cardRef }) {
  return (
    <div
      ref={cardRef}
      className={[
        "card card-hover relative max-w-lg w-full px-8 py-7 mb-10 flex flex-col",
        index % 2 === 0 ? "md:ml-16 md:items-start items-center" : "md:mr-16 md:items-end items-center",
      ].join(" ")}
    >
      <span className="text-lg md:text-xl font-bold text-white tracking-wide">{edu.title}</span>
      {edu.institution && (
        <span className="block text-cyan-200 mt-1 font-medium">{edu.institution}</span>
      )}
      <div className="mt-3 space-y-1 text-gray-200/90 text-[16px]">
        {edu.details.map(({ label, value }) => (
          <div key={label}>
            <span className="font-semibold">{label}:</span> {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const cardRefs = Array.from({ length: EDUCATION.length }, () => useRef(null));
  const lineProgressRef = useRef(null);

  useEffect(() => {
    // Animate timeline growing vertically
    const ctx = gsap.context(() => {
      gsap.set(lineProgressRef.current, { scaleY: 0, transformOrigin: "top center" });
      gsap.to(lineProgressRef.current, {
        scaleY: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      cardRefs.forEach((ref, idx) => {
        gsap.from(ref.current, {
          opacity: 0,
          y: idx % 2 === 0 ? 50 : -50,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.12 + idx * 0.11,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx && ctx.revert();
  }, [cardRefs]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="section"
    >
      <div className="container max-w-4xl">
        <h1 className="section-title mb-14 text-center">
          Education
        </h1>
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Timeline container */}
          <div className="relative w-9 md:w-20 flex-shrink-0 h-full min-h-[410px] md:min-h-[450px]">
            {/* Vertical Timeline Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 md:w-1.5 h-full bg-white/10 rounded-full z-0" />
            {/* Timeline growing overlay */}
            <div
              ref={lineProgressRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 md:w-1.5 h-full bg-gradient-to-b from-cyan-300/80 to-blue-500/70 rounded-full z-10"
              style={{ pointerEvents: "none" }}
            />
          </div>

          {/* Cards & dots */}
          <div className="flex-1 w-full relative">
            <div className="flex flex-col gap-0">
              {EDUCATION.map((edu, idx) => (
                <div key={edu.title + idx} className="relative flex flex-row items-center">
                  {/* Dot */}
                  <div className="absolute left-[-34px] md:left-[-46px] top-8">
                    <TimelineDot isActive />
                  </div>
                  {/* Card */}
                  <EducationCard
                    edu={edu}
                    index={idx}
                    cardRef={cardRefs[idx]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}