import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "SQL"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
  },
  {
    title: "Tools",
    skills: ["Power BI", "MySQL", "Git", "PyCharm"],
  },
];

function SkillBadge({ name }) {
  return (
    <span
      className="pill"
    >
      {name}
    </span>
  );
}

function SkillCard({ category, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="card card-hover p-8"
      style={{
        minHeight: "235px"
      }}
    >
      <h2 className="font-semibold text-lg mb-5 tracking-wide text-white">
        {category.title}
      </h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Fix: Use forEach on refs and animate each card individually for correct reveal timing
    const ctx = gsap.context(() => {
      cardRefs.forEach((ref, i) => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            // markers: true, // Uncomment if you need to debug
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cardRefs]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section"
    >
      <div className="container">
        <h1 className="section-title mb-12 text-center">
          Skills
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        > 
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} cardRef={cardRefs[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}