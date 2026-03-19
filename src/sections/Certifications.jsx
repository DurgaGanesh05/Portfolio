import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certs = [
  {
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    url: "#", // Replace "#" with actual certificate link if available
  },
  {
    title: "Oracle Data Platform Foundations",
    issuer: "Oracle",
    url: "#", // Replace "#" with actual certificate link if available
  },
  {
    title: "Machine Learning",
    issuer: "CipherSchools",
    url: "#", // Replace "#" with actual certificate link if available
  },
];

function CertificationCard({ cert, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="card card-hover px-8 py-7 flex flex-col"
      style={{
        minHeight: "148px",
      }}
    >
      <h2 className="text-lg font-semibold text-white tracking-wide mb-2">
        {cert.title}
      </h2>
      <span className="text-gray-400 font-medium mb-4">{cert.issuer}</span>
      <div className="mt-auto pt-4">
        <a
          href={cert.url}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.forEach((ref, i) => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.16,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx && ctx.revert();
  }, [cardRefs]);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section"
    >
      <div className="container max-w-4xl">
        <h1 className="section-title mb-12 text-center">
          Certifications
        </h1>
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {certs.map((cert, i) => (
            <CertificationCard key={cert.title} cert={cert} cardRef={cardRefs[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}