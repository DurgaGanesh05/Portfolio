import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Matriculation',
    institution: 'Sanskruthi Global School',
    year: '2021',
    grade: '71%',
    color: '#6B7280',
    current: false,
  },
  {
    degree: 'Intermediate',
    institution: 'Sanskruthi Global School',
    year: '2023',
    grade: '72%',
    color: '#A78BFA',
    current: false,
  },
  {
    degree: 'B.Tech CSE',
    institution: 'Lovely Professional University',
    year: 'Present',
    grade: '7.70 CGPA',
    color: '#6366F1',
    current: true,
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 700 }}>
            Education Journey
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE] mx-auto" />
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-[60%] left-0 right-0 h-0.5 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6B7280] via-[#A78BFA] to-[#22D3EE]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Connecting Line */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b ${
                  index % 2 === 0 ? 'top-full h-20' : 'bottom-full h-20'
                }`} style={{ backgroundColor: edu.color }} />

                {/* Node */}
                <div className={`absolute left-1/2 -translate-x-1/2 ${
                  index % 2 === 0 ? 'top-full mt-20' : 'bottom-full mb-20'
                } z-10`}>
                  <div className="relative">
                    <div 
                      className="w-6 h-6 rounded-full border-4 border-[#050810]"
                      style={{ backgroundColor: edu.color }}
                    />
                    {edu.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: edu.color }}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`${
                  index % 2 === 0 ? 'mb-32' : 'mt-32'
                }`}>
                  <div 
                    className="bg-[#0D1121] border rounded-2xl p-6 relative overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300"
                    style={{ borderColor: `${edu.color}33` }}
                  >
                    {/* Top gradient stripe */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]"
                    />

                    <div className="flex items-start gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${edu.color}20`, borderColor: `${edu.color}40` }}
                      >
                        <GraduationCap className="w-5 h-5" style={{ color: edu.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white mb-1" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-white/70 mb-2" style={{ fontFamily: 'Instrument Sans' }}>
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span 
                        className="px-2 py-1 rounded text-xs"
                        style={{ 
                          fontFamily: 'DM Mono',
                          backgroundColor: `${edu.color}20`,
                          color: edu.color,
                          border: `1px solid ${edu.color}40`,
                        }}
                      >
                        {edu.year}
                      </span>
                      <span 
                        className="px-2 py-1 rounded text-xs"
                        style={{ 
                          fontFamily: 'DM Mono',
                          backgroundColor: `${edu.color}20`,
                          color: edu.color,
                          border: `1px solid ${edu.color}40`,
                        }}
                      >
                        {edu.grade}
                      </span>
                      {edu.current && (
                        <span className="px-2 py-1 bg-[#22D3EE]/20 border border-[#22D3EE]/40 rounded text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>
                          ONGOING
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
