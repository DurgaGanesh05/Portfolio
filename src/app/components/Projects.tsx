import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const techTags = ['Python', 'ML', 'Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Scikit-learn', 'Data Analytics'];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 700 }}>
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE] mx-auto mb-8" />
        </motion.div>

        {/* Scrolling Tech Tag Marquee */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ fontFamily: 'DM Mono', fontSize: '12px' }}
          >
            {[...techTags, ...techTags, ...techTags].map((tag, i) => (
              <span key={i} className="text-white/30">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="space-y-6">
          {/* Project 1 - Full Width Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="group relative bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl overflow-hidden hover:border-[#6366F1]/80 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-300"
          >
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
            
            <div className="grid md:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 relative">
                {/* Watermark Number */}
                <div 
                  className="absolute top-4 right-4 text-[120px] leading-none opacity-[0.12] group-hover:opacity-[0.25] transition-opacity"
                  style={{ fontFamily: 'DM Mono', fontWeight: 500 }}
                >
                  01
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>Dec 2025</span>
                  <div className="flex gap-2">
                    {['Power BI', 'Data Analytics', 'Government Data'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
                  INSPIRE MANAK Scholarship Analytics Dashboard
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: 'Instrument Sans' }}>
                  Interactive Power BI dashboard analyzing state-wise scholarship distribution, social equity metrics, and regional participation patterns using KPI-driven design.
                </p>

                {/* Impact Bullets */}
                <div className="space-y-2 mb-6">
                  {[
                    'State-wise participation analysis',
                    'Social category equity metrics',
                    'Regional performance dashboards',
                  ].map(bullet => (
                    <div key={bullet} className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                        <path d="M2 8 L6 12 L14 4" stroke="#22D3EE" strokeWidth="2" fill="none" />
                      </svg>
                      <span className="text-white/60 text-sm" style={{ fontFamily: 'Instrument Sans' }}>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href="https://github.com/DurgaGanesh05/INSPIRE-MANAK-Power-BI-Dashboard.git" className="px-4 py-2 bg-[#111827] border border-[#6366F1]/30 rounded-lg text-white/80 hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  
                </div>
              </div>

              {/* Right - Dashboard Image Preview */}
              <div className="relative bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 p-8 flex items-center justify-center">
                <div className="w-full h-full min-h-[300px] bg-[#111827] rounded-lg p-4 opacity-80">
                  <img
                    src="/dashboard.png"
                    alt="INSPIRE MANAK Scholarship Analytics Dashboard"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 & 3 - Half Width Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 2 - Loan Approval Predictor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="group bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-8 relative overflow-hidden hover:border-[#6366F1]/80 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
              
              <div 
                className="absolute top-4 right-4 text-[90px] leading-none opacity-[0.12] group-hover:opacity-[0.25] transition-opacity"
                style={{ fontFamily: 'DM Mono', fontWeight: 500 }}
              >
                02
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>July 2025</span>
                <div className="flex gap-2">
                  {['ML', 'Python', 'Scikit-learn'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
                Loan Approval Predictor
              </h3>

              {/* Model Comparison Meters */}
              <div className="mb-6 space-y-4">
                <div className="bg-[#111827] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm" style={{ fontFamily: 'Instrument Sans' }}>Decision Tree</span>
                    <div className="px-2 py-0.5 bg-[#34D399]/20 border border-[#34D399]/40 rounded text-xs text-[#34D399]" style={{ fontFamily: 'DM Mono' }}>
                      SELECTED
                    </div>
                  </div>
                  <div 
                    className="text-4xl text-white"
                    style={{ 
                      fontFamily: 'DM Mono',
                      fontWeight: 500,
                      textShadow: '0 0 30px rgba(99,102,241,0.6)',
                    }}
                  >
                    67%
                  </div>
                </div>
                
                <div className="bg-[#111827] rounded-lg p-4 opacity-50">
                  <span className="text-white/60 text-sm block mb-2" style={{ fontFamily: 'Instrument Sans' }}>Logistic Regression</span>
                  <div className="text-2xl text-white/60" style={{ fontFamily: 'DM Mono' }}>62%</div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://github.com/DurgaGanesh05/Loan-Approval-Predictor" className="flex-1 px-4 py-2 bg-[#111827] border border-[#6366F1]/30 rounded-lg text-white/80 hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                
              </div>
            </motion.div>

            {/* Project 3 - Air Quality Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -6 }}
              className="group bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-8 relative overflow-hidden hover:border-[#6366F1]/80 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
              
              <div 
                className="absolute top-4 right-4 text-[90px] leading-none opacity-[0.12] group-hover:opacity-[0.25] transition-opacity"
                style={{ fontFamily: 'DM Mono', fontWeight: 500 }}
              >
                03
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>May 2025</span>
                <div className="flex gap-2">
                  {['EDA', 'Python', 'Visualization'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
                Air Quality Analysis
              </h3>

              {/* Animated Sparkline */}
              <div className="mb-6 bg-[#111827] rounded-lg p-4 h-32 relative overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <motion.path
                    d="M 0 60 Q 30 40, 60 45 T 120 50 T 180 30 T 240 40 T 300 35"
                    stroke="#22D3EE"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 0.6 }}
                  />
                  <motion.path
                    d="M 0 60 Q 30 40, 60 45 T 120 50 T 180 30 T 240 40 T 300 35 L 300 80 L 0 80 Z"
                    fill="url(#sparklineGradient)"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Stack Icons */}
              <div className="flex gap-2 mb-6">
                {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map(lib => (
                  <div key={lib} className="px-2 py-1 bg-[#111827] border border-[#22D3EE]/30 rounded text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>
                    {lib}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="https://github.com/DurgaGanesh05/Air-Quality-Data-Analysis" className="flex-1 px-4 py-2 bg-[#111827] border border-[#6366F1]/30 rounded-lg text-white/80 hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all flex items-center justify-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                
              </div>
            </motion.div>
          </div>

          {/* Project 4 - Internet Facility Classifier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -6 }}
            className="group bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-8 relative overflow-hidden hover:border-[#6366F1]/80 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
            <div className="absolute top-4 right-4 text-[90px] leading-none opacity-[0.12] group-hover:opacity-[0.25] transition-opacity" style={{ fontFamily: 'DM Mono', fontWeight: 500 }}>
              04
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>Nov 2024</span>
              <div className="flex gap-2">
                {['Python', 'pandas', 'scikit-learn', 'matplotlib'].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded text-xs text-[#22D3EE]" style={{ fontFamily: 'DM Mono' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
              Internet Facility Classifier — Andhra Pradesh (2020)
            </h3>

            <p className="text-white/70 mb-6 leading-relaxed" style={{ fontFamily: 'Instrument Sans' }}>
              Built a full ML pipeline: data cleaning, median/mode imputation, encoding, scaling, stratified split, and model benchmarking to predict village internet availability.
            </p>

            <div className="space-y-2 mb-6">
              {[
                'Logistic Regression, Decision Tree, RBF SVM, KNN comparison',
                'Accuracy, precision, recall, F1 and confusion matrices',
                'Target distribution and model-accuracy bar charts',
              ].map(bullet => (
                <div key={bullet} className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                    <path d="M2 8 L6 12 L14 4" stroke="#22D3EE" strokeWidth="2" fill="none" />
                  </svg>
                  <span className="text-white/60 text-sm" style={{ fontFamily: 'Instrument Sans' }}>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/DurgaGanesh05/Predictive-Analysis-Project" className="flex-1 px-4 py-2 bg-[#111827] border border-[#6366F1]/30 rounded-lg text-white/80 hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
