import { useState, useEffect } from "react";
import { Github, Linkedin, Phone, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return <span>{String(count).padStart(2, "0")}</span>;
}

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build systems that turn raw data → real decisions";
  const [showCursor, setShowCursor] = useState(true);

  const roles = ["Aspiring Data Analyst", "Aspiring Data Scientist", "Aspiring Data Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 50;

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20 px-6">
      {/* Animated gradient orb background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #6366F1 0%, #A78BFA 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[58fr_42fr] gap-12 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#34D399]/10 border border-[#34D399]/20 rounded-full mb-8"
          >
            <motion.div
              className="w-2 h-2 bg-[#34D399] rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="text-[#34D399] text-xs"
              style={{ fontFamily: "DM Mono" }}
            >
              Open to Internships & Full-Time Roles
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-6xl md:text-7xl leading-tight text-white mb-2"
              style={{ fontFamily: "Clash Display", fontWeight: 700 }}
            >
              S. V. Durga Ganesh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-3xl md:text-4xl font-semibold text-[#22D3EE] mb-4"
              style={{ fontFamily: "DM Mono" }}
            >
              {roles[roleIndex]}
              {/* <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>|
              </span> */}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="relative inline-block"
            >
              {/* SVG brushstroke underline */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 400 20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
              >
                <motion.path
                  d="M 0 10 Q 100 5, 200 10 T 400 10"
                  stroke="#6366F1"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </motion.div>
          </div>

          {/* Typewriter Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-white/70 text-lg mb-8 h-8"
            style={{ fontFamily: "Instrument Sans" }}
          >
            {typedText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>
              |
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="flex gap-4 mb-8"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white rounded-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              Explore Work
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border border-[#6366F1]/40 text-white rounded-lg hover:bg-[#6366F1]/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/DurgaGanesh05" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ganesh005/" },
              { icon: Phone, href: "tel:+91 7416002905" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="w-10 h-10 bg-[#0D1121] border border-[#6366F1]/20 rounded-lg flex items-center justify-center hover:border-[#6366F1] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-[340px] h-[340px] rounded-full border-4 border-[#6366F1]/30 shadow-[0_0_80px_rgba(34,211,238,0.35)] overflow-hidden">
            <img
              src="/profile2.png"
              alt="S. V. Durga Ganesh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#22D3EE]/30 to-[#6366F1]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
