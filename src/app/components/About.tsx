import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ end, duration = 2, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(progress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString().padStart(2, '0')}</span>;
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-[40fr_60fr] gap-16 items-center">
          {/* Avatar Module */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-[220px] h-[220px]">
              {/* Rotating dashed ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#6366F1]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Static violet inner ring */}
              <div className="absolute inset-4 rounded-full border border-[#A78BFA]/30" />
              
              {/* Avatar circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-4xl text-white" style={{ fontFamily: 'Clash Display', fontWeight: 700 }}>
                DG
              </div>

              {/* Data point dots around perimeter */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x = 110 + Math.cos(angle) * 110;
                const y = 110 + Math.sin(angle) * 110;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#22D3EE] rounded-full"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Bio and Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'Clash Display', fontWeight: 700 }}>
                About Me
              </h2>
              
              <div className="space-y-4 mb-8 text-white/70 leading-relaxed" style={{ fontFamily: 'Instrument Sans' }}>
                <p>
                  B.Tech CSE student at Lovely Professional University with hands-on experience in machine learning, data analysis, and dashboard development. Passionate about building systems that extract intelligence from complex datasets.
                </p>
                <p>
                  From cleaning messy CSVs to deploying ML classifiers, I work across the full data pipeline.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="space-y-4">
                {[
                  { label: 'Projects Completed', value: 4, color: '#6366F1' },
                  { label: 'Certifications', value: 3, color: '#22D3EE' },
                  { label: 'Current CGPA', value: 7.70, decimals: 2, color: '#A78BFA' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-4 relative overflow-hidden group"
                  >
                    {/* Top gradient stripe */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]"
                    />
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/60 text-sm" style={{ fontFamily: 'Instrument Sans' }}>
                        {stat.label}
                      </span>
                      <span className="text-2xl text-white" style={{ fontFamily: 'DM Mono', fontWeight: 500 }}>
                        <Counter end={stat.value} decimals={stat.decimals || 0} />
                      </span>
                    </div>
                    
                    {/* Animated progress bar */}
                    <div className="h-1.5 bg-[#111827] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
