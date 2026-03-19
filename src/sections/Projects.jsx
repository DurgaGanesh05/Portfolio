import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Loan Approval Predictor",
    description:
      "Built ML model using Decision Tree and Logistic Regression. Focused on data preprocessing and model comparison.",
    tech: ["Python", "Pandas", "scikit-learn", "Jupyter"],
    keyResult: "67% Accuracy",
    github: "https://github.com/yourprofile/loan-approval-predictor",
  },
  {
    title: "Air Quality Analysis",
    description:
      "Performed EDA on air quality datasets. Discovered trends, correlations, pollution spikes. Built visualizations using Python libraries.",
    tech: ["Python", "Matplotlib", "Seaborn", "NumPy", "Pandas"],
    keyResult: "Found pollution trends",
    github: "https://github.com/yourprofile/air-quality-analysis",
  },
  {
    title: "INSPIRE MANAK Dashboard",
    description:
      "Built Power BI dashboard to analyze participation and funding distribution. Created KPI-based insights for strategic decisions.",
    tech: ["Power BI", "DAX", "Data Analysis"],
    keyResult: "Live KPI Insights",
    github: "https://github.com/yourprofile/inspire-manak-dashboard",
  },
];

function ProjectCard({ project, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="card card-hover group overflow-hidden"
    >
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-cyan-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-base text-gray-300/90 mb-4 font-medium leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="pill text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mb-6">
          <span
            className={
              "inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200"
            }
          >
            {project.keyResult}
          </span>
        </div>
        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.forEach((ref, i) => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 56,
          scale: 0.97,
          duration: 0.95,
          ease: "power3.out",
          delay: i * 0.17,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cardRefs]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section"
    >
      <div className="container">
        <h1 className="section-title mb-14 text-center">Projects</h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} cardRef={cardRefs[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}