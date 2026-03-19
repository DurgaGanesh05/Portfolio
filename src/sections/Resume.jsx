import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// You can further break these objects into separate files or sections as your actual resume grows
const RESUME_DATA = {
  summary: "Detail-oriented and passionate Data Analyst and ML Engineer with 2+ years of hands-on experience, specializing in Python, Java, SQL, and Machine Learning. Oracle certified, with a proven track record of impactful projects and a strong foundation in data-driven decision making.",
  experience: [
    {
      role: "Data Analyst",
      company: "ACME Analytics Pvt Ltd.",
      duration: "Aug 2022 – Present",
      details: [
        "• Led predictive analytics projects using Python, Pandas, and scikit-learn, improving business KPIs by 17%",
        "• Developed interactive dashboards in Power BI used by stakeholders across departments",
        "• Automated ETL processes with SQL and Python, reducing manual effort by 60%",
      ],
    },
    {
      role: "Machine Learning Intern",
      company: "CipherSchools",
      duration: "Mar 2022 – Aug 2022",
      details: [
        "• Built end-to-end ML solutions for real-world client datasets",
        "• Implemented supervised and unsupervised models: regression, classification, clustering",
        "• Collaborated with project mentor to deploy models using Flask APIs",
      ],
    },
  ],
  projects: [
    {
      title: "Customer Churn Prediction",
      details: [
        "• Designed and implemented a machine learning pipeline for telecom churn using scikit-learn",
        "• Improved accuracy to 91% with ensemble techniques, feature engineering, and cross-validation",
        "• Presented actionable insights to client using Power BI dashboards"
      ],
    },
    {
      title: "Sales Forecast Dashboard",
      details: [
        "• End-to-end interactive dashboard built in Power BI using MySQL backend",
        "• Automated monthly reports and enabled drill-down analysis for non-technical users"
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institute: "XYZ University",
      year: "2018 – 2022",
      details: [
        "• GPA: 8.2/10",
        "• Major subjects: Data Structures, Algorithms, DBMS, Machine Learning"
      ],
    },
    {
      degree: "12th Grade (Senior Secondary)",
      institute: "ABC School",
      year: "2016 – 2018",
      details: ["• Percentage: 92.4%"],
    },
  ],
  certifications: [
    "Oracle Generative AI Professional – Oracle",
    "Oracle Data Platform Foundations – Oracle",
    "Machine Learning – CipherSchools",
  ],
  skills: [
    "Python", "Java", "SQL", "C++",
    "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Seaborn",
    "Power BI", "MySQL", "Git", "PyCharm"
  ]
};

function SectionHeading({ children }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-10 tracking-wide">
      {children}
    </h2>
  );
}

function DetailList({ items }) {
  return (
    <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  );
}

export default function Resume() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.85,
        ease: "power2.out",
        delay: 0.10,
      });

      gsap.from(btnRef.current, {
        opacity: 0,
        scale: 0.94,
        duration: 0.62,
        ease: "power2.out",
        delay: 0.38,
      });
    }, sectionRef);

    return () => ctx && ctx.revert();
  }, []);

  // Handler to force download the resume PDF file from public folder
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/specialised_DS.pdf"; // path to your PDF in the public folder
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="section"
    >
      <div className="container flex flex-col items-center">
        <h1 ref={headingRef} className="section-title mb-8 text-center">
          Resume
        </h1>
        {/* Resume Summary */}
        <div className="card w-full max-w-3xl px-8 py-7 mb-10">
          <SectionHeading>Summary</SectionHeading>
          <p className="mb-2 text-gray-300 leading-relaxed">{RESUME_DATA.summary}</p>
        {/* Experience */}
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-6">
          {RESUME_DATA.experience.map((exp, idx) => (
            <div key={exp.role + idx}>
              <span className="font-semibold text-lg text-white">{exp.role}</span>{" "}
              <span className="text-cyan-200 font-medium">– {exp.company}</span>
              <div className="text-gray-400 text-sm mb-1">{exp.duration}</div>
              <DetailList items={exp.details} />
            </div>
          ))}
        </div>
        {/* Projects */}
        <SectionHeading>Projects</SectionHeading>
        <div className="space-y-5">
          {RESUME_DATA.projects.map((proj, idx) => (
            <div key={proj.title + idx}>
              <span className="font-semibold text-base text-white">{proj.title}</span>
              <DetailList items={proj.details} />
            </div>
          ))}
        </div>
        {/* Education */}
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-5">
          {RESUME_DATA.education.map((edu, idx) => (
            <div key={edu.degree + idx}>
              <span className="font-semibold text-base text-white">{edu.degree}</span>{" "}
              <span className="text-cyan-200 font-medium">– {edu.institute}</span>
              <div className="text-gray-400 text-sm mb-1">{edu.year}</div>
              <DetailList items={edu.details} />
            </div>
          ))}
        </div>
        {/* Certifications */}
        <SectionHeading>Certifications</SectionHeading>
        <DetailList items={RESUME_DATA.certifications} />
        {/* Skills */}
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {RESUME_DATA.skills.map((skill, idx) => (
            <span
              key={skill}
              className="pill"
            >
              {skill}
            </span>
          ))}
        </div>
        </div>
        {/* Download Button */}
        <a
          ref={btnRef}
          href="/specialised_DS.pdf"
          download="resume.pdf"
          onClick={handleDownload}
          className="btn mt-2"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}