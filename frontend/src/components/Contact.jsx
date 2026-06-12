import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useReveal } from '../hooks/useAnimations';

const Contact = () => {
  const { personal } = portfolioData;
  const [headRef, headVisible] = useReveal(0.1);
  const [bodyRef, bodyVisible] = useReveal(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const CONTACTS = [
    { Icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { Icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { Icon: MapPin, label: 'Location', value: 'Andhra Pradesh, India', href: null },
  ];

  return (
    <section id="contact" className="relative bg-[var(--surface)] overflow-hidden border-t border-[var(--line)]">
      <div className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-glow/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-glow2/[0.04] blur-[100px]" />

      {/* ── Hero CTA block ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-24 pb-20 border-b border-[var(--line)]">
        <div ref={headRef}>
          <p className={`eyebrow mb-8 rv ${headVisible ? 'rv-in' : ''}`}>Get In Touch</p>

          <h2
            className={`font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(3rem,9vw,8rem)] uppercase text-mist mb-10 rv ${headVisible ? 'rv-in' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Let's Build<br />
            <span className="text-gradient">Something</span><br />
            Together
          </h2>

          <div
            className={`flex flex-wrap gap-4 rv ${headVisible ? 'rv-in' : ''}`}
            style={{ transitionDelay: '0.22s' }}
          >
            <a
              href={`mailto:${personal.email}`}
              className="contact-chip hover:border-glow hover:text-glow"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="contact-chip hover:border-glow hover:text-glow"
            >
              <Phone className="w-4 h-4" />
              {personal.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Two-column: info + form ── */}
      <div ref={bodyRef} className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <div className={`space-y-10 rv ${bodyVisible ? 'rv-in' : ''}`}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog mb-6">Direct contacts</p>
              <div className="space-y-4">
                {CONTACTS.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-5 group">
                    <div className="w-11 h-11 flex-shrink-0 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:border-glow/50 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-fog group-hover:text-glow transition-colors" style={{ width: '1.1rem', height: '1.1rem' }} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-fog/60 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-mist text-sm hover:text-glow transition-colors link-underline">
                          {value}
                        </a>
                      ) : (
                        <p className="text-mist text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-3 px-6 py-4 border border-[var(--line)] rounded-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-mist">Available for hire</p>
                <p className="font-mono text-[10px] text-fog">Open to full-time & freelance — 2026</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`rv ${bodyVisible ? 'rv-in' : ''}`} style={{ transitionDelay: '0.14s' }}>
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-glow/30 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-glow/10 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-glow" />
                </div>
                <h3 className="font-display font-bold text-2xl text-mist mb-3">Message sent!</h3>
                <p className="text-fog text-sm">I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2.5 border border-[var(--line)] rounded-full font-mono text-[11px] uppercase tracking-wider text-fog hover:text-mist hover:border-mist transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog mb-6">Send a message</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[11px] uppercase tracking-widest text-fog">Message *</label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--void)] border border-[var(--line)] rounded-xl px-5 py-4 text-mist text-sm placeholder:text-fog/40 focus:outline-none focus:border-glow/60 transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center gap-3 px-8 py-4 bg-mist text-[#0a0a0f] font-mono text-[12px] uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 font-bold disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>Sending…</>
                  ) : (
                    <>Send Message <ArrowUpRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[11px] uppercase tracking-widest text-fog">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-[var(--void)] border border-[var(--line)] rounded-xl px-5 py-4 text-mist text-sm placeholder:text-fog/40 focus:outline-none focus:border-glow/60 transition-colors font-sans"
      />
    </div>
  );
}

export default Contact;
