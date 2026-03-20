import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

const languages = ['JavaScript', 'Python', 'C/C++', 'SQL', 'Java'];
const libraries = ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'];
const tools = [
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Power BI', color: '#F2C811' },
  { name: 'Git', color: '#F05032' },
  { name: 'VS Code', color: '#007ACC' },
  { name: 'PyCharm', color: '#21D789' },
];
const softSkills = ['Collaboration', 'Adaptability', 'Time Management', 'Problem Solving'];

// Radar chart data
const radarSkills = [
  { label: 'Python', value: 90 },
  { label: 'ML', value: 85 },
  { label: 'SQL', value: 85 },
  { label: 'Viz', value: 88 },
  { label: 'Tools', value: 87 },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const languagesRef = useRef(null);
  const languagesInView = useInView(languagesRef, { once: true });

  // Terminal typing effect for languages
  useEffect(() => {
    if (!languagesInView) return;

    setTerminalText([]); // reset on enter view to avoid duplicated entries on repeated triggers

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < languages.length) {
        setTerminalText(prev => [...prev, languages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [languagesInView]);

  // Calculate radar chart points
  const centerX = 60;
  const centerY = 60;
  const maxRadius = 45;
  
  const radarPoints = radarSkills.map((skill, i) => {
    const angle = (i * 2 * Math.PI) / radarSkills.length - Math.PI / 2;
    const radius = (skill.value / 100) * maxRadius;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  const radarPath = radarPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header with Radar Chart */}
        <div className="flex items-start justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          >
            <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 700 }}>
              Technical Arsenal
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
          </motion.div>

          {/* Animated Radar Chart */}
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3 }}
          >
            {/* Background pentagon */}
            <path
              d={radarSkills.map((_, i) => {
                const angle = (i * 2 * Math.PI) / radarSkills.length - Math.PI / 2;
                const x = centerX + Math.cos(angle) * maxRadius;
                const y = centerY + Math.sin(angle) * maxRadius;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              }).join(' ') + ' Z'}
              fill="none"
              stroke="#6366F1"
              strokeWidth="0.5"
              opacity="0.2"
            />
            
            {/* Filled polygon */}
            <motion.path
              d={radarPath}
              fill="#6366F1"
              fillOpacity="0.3"
              stroke="#6366F1"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            />

            {/* Points */}
            {radarPoints.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="2"
                fill="#22D3EE"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              />
            ))}
          </motion.svg>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Languages Card - Tall (Left) */}
          <motion.div
            ref={languagesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-6 relative overflow-hidden group hover:border-[#6366F1]/50 transition-all"
          >
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
            
            <h3 className="text-xl text-white mb-6" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
              Languages
            </h3>

            {/* Terminal Style */}
            <div className="bg-[#050810] rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#34D399]" />
                <div className="w-3 h-3 rounded-full bg-[#FCD34D]" />
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              </div>
              
              <div style={{ fontFamily: 'DM Mono' }}>
                {terminalText.map((lang, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[#34D399] mb-2"
                  >
                    <span className="text-white/50">$</span> {lang}
                  </motion.div>
                ))}
                {languagesInView && terminalText.length === languages.length && (
                  <motion.span
                    className="text-[#34D399]"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ▊
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Libraries Card (Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-6 relative overflow-hidden group hover:border-[#6366F1]/50 transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
            
            <h3 className="text-xl text-white mb-6" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
              Libraries
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {libraries.map((lib, i) => (
                <motion.div
                  key={lib}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -3, boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}
                  className="bg-[#111827] border border-[#6366F1]/20 rounded-lg px-3 py-2 text-center text-sm text-white/80 cursor-pointer transition-all"
                  style={{ fontFamily: 'Instrument Sans' }}
                >
                  {lib}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Card (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-6 relative overflow-hidden group hover:border-[#6366F1]/50 transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
            
            <h3 className="text-xl text-white mb-6" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
              Tools & Platforms
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ y: -3, boxShadow: `0 0 20px ${tool.color}40` }}
                  className="bg-[#111827] border border-[#6366F1]/20 rounded-lg px-3 py-2 text-center text-sm text-white/80 cursor-pointer transition-all relative overflow-hidden group/tool"
                  style={{ fontFamily: 'Instrument Sans' }}
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover/tool:opacity-100 transition-opacity"
                    style={{ backgroundColor: tool.color }}
                  />
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills Row (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
          
          <h3 className="text-xl text-white mb-6 text-center" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
            Soft Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-6 py-2 bg-[#111827] border border-[#6366F1]/30 rounded-full text-white/80 hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all cursor-pointer"
                style={{ fontFamily: 'Instrument Sans' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
