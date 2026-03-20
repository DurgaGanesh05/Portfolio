import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025',
    subtitle: 'Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    color: '#F80000',
    certId: 'OCI-2025-GenAI-12345',
    issueDate: 'January 15, 2025',
    url: '/oracle ai.pdf',
  },
  {
    title: 'Oracle Data Platform 2025',
    subtitle: 'Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    color: '#F80000',
    certId: 'ODP-2025-FA-67890',
    issueDate: 'February 10, 2025',
    url: '/oracle database.pdf',
  },
  {
    title: 'Machine Learning with Data Science',
    subtitle: 'Complete Course',
    issuer: 'CipherSchools',
    year: '2025',
    color: '#6366F1',
    certId: 'CS-ML-2025-11223',
    issueDate: 'March 5, 2025',
    url: '/DSML.pdf',
  },
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.15 }}
      className="perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-[320px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-6 backface-hidden overflow-hidden group"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Top color stripe */}
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: cert.color }}
          />

          <div className="flex flex-col h-full">
            {/* Logo/Icon */}
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl text-white"
                style={{ backgroundColor: cert.color }}
              >
                {cert.issuer === 'Oracle' ? '⚡' : '🎓'}
              </div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
                {cert.title}
              </h3>
              <p className="text-sm text-[#22D3EE] mb-4" style={{ fontFamily: 'Instrument Sans' }}>
                {cert.subtitle}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#6366F1]/20">
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-sm" style={{ fontFamily: 'Instrument Sans' }}>
                  {cert.issuer}
                </span>
                <span className="px-2 py-0.5 bg-[#111827] border border-[#6366F1]/20 rounded text-xs text-white/50" style={{ fontFamily: 'DM Mono' }}>
                  {cert.year}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#34D399]/10 border border-[#34D399]/30 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-[#34D399]" />
                <span className="text-[#34D399] text-xs" style={{ fontFamily: 'DM Mono' }}>Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 bg-[#0D1121] border border-[#6366F1]/40 rounded-2xl p-6 backface-hidden overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Top gradient stripe */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />

          <div className="flex flex-col h-full justify-between">
            <div>
              <h4 className="text-white/60 text-xs mb-4" style={{ fontFamily: 'DM Mono' }}>
                CERTIFICATE DETAILS
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="text-white/50 text-xs mb-1" style={{ fontFamily: 'Instrument Sans' }}>
                    Certificate ID
                  </div>
                  <div className="text-white text-sm" style={{ fontFamily: 'DM Mono' }}>
                    {cert.certId}
                  </div>
                </div>

                <div>
                  <div className="text-white/50 text-xs mb-1" style={{ fontFamily: 'Instrument Sans' }}>
                    Issue Date
                  </div>
                  <div className="text-white text-sm" style={{ fontFamily: 'DM Mono' }}>
                    {cert.issueDate}
                  </div>
                </div>

                <div>
                  <div className="text-white/50 text-xs mb-1" style={{ fontFamily: 'Instrument Sans' }}>
                    Issued By
                  </div>
                  <div className="text-white text-sm" style={{ fontFamily: 'Instrument Sans' }}>
                    {cert.issuer}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-lg text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2"
            >
              View Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 px-6 relative">
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backfaceVisibility: hidden;
          -webkit-backfaceVisibility: hidden;
        }
      `}} />
      
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'Clash Display', fontWeight: 700 }}>
            Certifications
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.certId} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}