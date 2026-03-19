import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// Use the correct import from "react-icons/hi2"
import { HiOutlineEnvelope, HiOutlineArrowTopRightOnSquare as HiOutlineExternalLink } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const CONTACTS = [
  {
    label: "Email",
    href: "mailto:youremail@example.com",
    icon: HiOutlineEnvelope,
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
    external: true,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: "power2.out",
      }
    );

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        delay: 0.2,
        stagger: 0.15,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section"
    >
      <div className="container flex flex-col items-center">
        <h1 className="section-title mb-3 text-center">Contact</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-100 text-center">
          Let&apos;s Connect
        </h2>
        <p className="mb-10 max-w-xl text-center text-gray-400">
          Feel free to reach out for opportunities, collaborations, or just a conversation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                ref={(el) => (itemsRef.current[i] = el)}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="card card-hover flex items-center gap-4 p-6 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                <span className="flex-shrink-0 text-cyan-300 text-3xl">
                  <Icon />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-white text-lg tracking-wide">{c.label}</span>
                  <span className="block text-gray-400 text-sm truncate">
                    {c.external ? c.href.replace(/^https?:\/\//, "") : c.href.replace("mailto:", "")}
                  </span>
                </div>
                {c.external && (
                  <HiOutlineExternalLink className="text-gray-300 text-xl opacity-80" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}