import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Linkedin, Github, Phone, ArrowRight, Check } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 74160 02905',
    href: 'tel:+917416002905',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Durga Ganesh',
    href: 'https://www.linkedin.com/in/ganesh005/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Durga Ganesh',
    href: 'https://github.com/DurgaGanesh05',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:seeramdurgaganesh@gmail.com';
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Pulsing Orb Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-5xl text-white mb-4"
            style={{ fontFamily: 'Clash Display', fontWeight: 700 }}
          >
            Let's Build Something With Data
          </h2>
          <p 
            className="text-[#22D3EE]"
            style={{ 
              fontFamily: 'DM Mono',
              fontSize: '14px',
              letterSpacing: '0.1em',
            }}
          >
            Open to internships · collaboration · data projects
          </p>
        </motion.div>

        {/* Contact Method Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-6 hover:border-[#6366F1]/60 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Top gradient stripe - appears on hover */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />

                <Icon className="w-8 h-8 text-[#6366F1] mb-4 group-hover:text-[#22D3EE] transition-colors" />
                <div className="text-white/50 text-xs mb-1" style={{ fontFamily: 'Instrument Sans' }}>
                  {method.label}
                </div>
                <div className="text-white" style={{ fontFamily: 'DM Mono', fontSize: '14px' }}>
                  {method.value}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="bg-[#0D1121] border border-[#6366F1]/20 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/60 text-sm mb-2" style={{ fontFamily: 'Instrument Sans' }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#6366F1]/20 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#6366F1] transition-colors"
                  placeholder="Your name"
                  style={{ fontFamily: 'Instrument Sans' }}
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2" style={{ fontFamily: 'Instrument Sans' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#6366F1]/20 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#6366F1] transition-colors"
                  placeholder="your@email.com"
                  style={{ fontFamily: 'Instrument Sans' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2" style={{ fontFamily: 'Instrument Sans' }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#111827] border border-[#6366F1]/20 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                placeholder="Tell me about your project..."
                style={{ fontFamily: 'Instrument Sans' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-lg text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Sent
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
