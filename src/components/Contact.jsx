import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, ArrowUpRight, Send, CheckCircle, Mail, Copy, Check } from "lucide-react";
import { useState, useRef } from "react";

const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const SOCIALS = [
  {
    label: "Instagram", handle: "@_me_s.s_",
    href: "https://www.instagram.com/_me_s.s_/",
    Icon: Instagram, color: "#f472b6",
    bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.25)",
  },
  {
    label: "LinkedIn", handle: "shreyasi0104",
    href: "https://www.linkedin.com/in/shreyasi0104",
    Icon: Linkedin, color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.25)",
  },
  {
    label: "GitHub", handle: "Shreyasi-0107",
    href: "https://github.com/Shreyasi-0107",
    Icon: Github, color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)",
  },
];

const EMAIL = "shreyasisaha0107@gmail.com";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const formRef             = useRef(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const emailjs = await import("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/es/emailjs.js");
      emailjs.init(EMAILJS_PUBLIC_KEY);
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .input-field {
          width: 100%; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.14); border-radius: 12px;
          padding: 14px 18px; font-size: 14px; color: #c7bfb2;
          outline: none; transition: border-color 0.3s, background 0.3s;
          resize: none; font-family: inherit;
        }
        .input-field::placeholder {
          color: #c7bfb2; opacity: 0.28;
          font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
        }
        .input-field:hover:not(:focus) { border-color: rgba(255,255,255,0.24); background: rgba(255,255,255,0.06); }
        .input-field:focus { border-color: rgba(167,139,250,0.65); background: rgba(167,139,250,0.06); }

        .send-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px; border-radius: 100px;
          border: 1px solid rgba(167,139,250,0.35); background: rgba(167,139,250,0.08);
          color: #a78bfa; font-size: 11px; font-family: inherit;
          text-transform: uppercase; letter-spacing: 0.25em; font-weight: 700;
          cursor: pointer; transition: background 0.2s, border-color 0.2s, opacity 0.2s;
        }
        .send-btn:hover:not(:disabled) { background: rgba(167,139,250,0.18); border-color: rgba(167,139,250,0.6); }
        .send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .social-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px; border-radius: 16px;
          border: 1px solid; text-decoration: none; color: inherit;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          position: relative; overflow: hidden;
        }
        .social-card::before { content:''; position:absolute; inset:0; opacity:0; transition:opacity 0.3s; border-radius:inherit; }
        .social-card:hover { transform: translateY(-3px); }
        .social-card:hover::before { opacity: 1; }

        .social-icon-wrap {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s ease;
        }
        .social-card:hover .social-icon-wrap { transform: scale(1.1); }
        .social-label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em; line-height: 1; }
        .social-handle { font-family: monospace; font-size: 11px; opacity: 0.55; margin-top: 3px; }
        .social-arrow { margin-left: auto; opacity: 0.35; flex-shrink: 0; transition: transform 0.25s, opacity 0.25s; }
        .social-card:hover .social-arrow { transform: translate(3px,-3px); opacity: 0.8; }

        .email-box {
          padding: 20px 24px; border-radius: 16px;
          border: 1px solid rgba(167,139,250,0.2); background: rgba(167,139,250,0.05);
          display: flex; align-items: center; gap: 12px;
          transition: border-color 0.25s, background 0.25s;
        }
        .email-box:hover { border-color: rgba(167,139,250,0.4); background: rgba(167,139,250,0.09); }
        .email-address {
          font-family: monospace; font-size: clamp(11px, 1.4vw, 14px);
          color: #c7bfb2; opacity: 0.85; word-break: break-all; flex: 1; font-weight: 600;
        }
        .copy-btn {
          flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
          border: 1px solid rgba(167,139,250,0.3); background: rgba(167,139,250,0.1);
          color: #a78bfa; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .copy-btn:hover { background: rgba(167,139,250,0.2); }

        .contact-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent); }

        .marquee-email {
          display: flex; gap: 4rem; white-space: nowrap;
          animation: scroll-left 14s linear infinite;
        }
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-email:hover { animation-play-state: paused; }

        [data-theme="light"] .input-field { background:rgba(0,0,0,0.04)!important; border-color:rgba(0,0,0,0.15)!important; color:#1A1A1A!important; }
        [data-theme="light"] .input-field::placeholder { color:rgba(26,26,26,0.4)!important; opacity:1!important; }
        [data-theme="light"] .input-field:focus { border-color:rgba(240,119,26,0.6)!important; background:rgba(240,119,26,0.04)!important; }
        [data-theme="light"] .email-box { border-color:rgba(167,139,250,0.35)!important; background:rgba(167,139,250,0.07)!important; }
        [data-theme="light"] .email-address { color:#1a1a1a!important; opacity:1; }
        [data-theme="light"] .social-card { background:rgba(0,0,0,0.03)!important; }
      `}</style>

      <section id="contact" className="pt-32 border-t border-white/10">

        {/* ── Header ── */}
        <div className="px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] font-mono uppercase tracking-[0.35em] opacity-25 mb-4"
            >
              Get in touch
            </motion.p>
            {/* ✅ section-heading, no <br/>, single row, matches all other sections */}
            <motion.h2
              variants={fadeUp} custom={0.07}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="section-heading"
            >
              Let's <span className="opacity-25">Talk</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp} custom={0.15} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-mono opacity-25 uppercase tracking-[0.25em] max-w-[200px] leading-relaxed"
          >
            Open to data science roles, freelance, and collaborations.
          </motion.p>
        </div>

        {/* ── Main grid ── */}
        <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pb-24">

          {/* Left — form */}
          <motion.div
            variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 mb-8">Send a message</p>
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-start gap-4 py-10"
                >
                  <CheckCircle size={32} className="text-emerald-400" />
                  <p className="font-grotesk font-black text-2xl uppercase tracking-tight">Message sent!</p>
                  <p className="text-sm opacity-40 font-mono">I'll get back to you soon.</p>
                  <button className="send-btn mt-4" onClick={() => setStatus("idle")}>Send another</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form" ref={formRef} onSubmit={handleSubmit}
                  initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col gap-8"
                >
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="input-field" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email address" className="input-field" />
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="What's on your mind?" className="input-field" />
                  {status === "error" && (
                    <p className="text-red-400 text-xs font-mono">Something went wrong — try emailing directly below.</p>
                  )}
                  <button type="submit" disabled={status === "sending"} className="send-btn self-start">
                    <Send size={12} />
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right — socials + email */}
          <motion.div
            variants={fadeUp} custom={0.2} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 mb-5">Find me on</p>
              <div className="flex flex-col gap-3">
                {SOCIALS.map(({ label, handle, href, Icon, color, bg, border }, idx) => (
                  <motion.a
                    key={label} href={href} target="_blank" rel="noreferrer"
                    className="social-card"
                    style={{ borderColor: border, background: bg, boxShadow: `0 0 0 0 ${color}` }}
                    whileHover={{ boxShadow: `0 8px 32px ${color}22` }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                  >
                    <div className="social-icon-wrap" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="social-label" style={{ color }}>{label}</div>
                      <div className="social-handle">{handle}</div>
                    </div>
                    <ArrowUpRight size={16} className="social-arrow" style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 mb-4">Or email directly</p>
              <div className="email-box">
                <Mail size={16} style={{ color: "#a78bfa", flexShrink: 0 }} />
                <span className="email-address">{EMAIL}</span>
                <button className="copy-btn" onClick={copyEmail} title="Copy email">
                  {copied ? <Check size={13} style={{ color: "#34d399" }} /> : <Copy size={13} />}
                </button>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 mt-3 text-[10px] font-mono uppercase tracking-[0.25em] opacity-40 hover:opacity-80 transition-opacity"
                style={{ color: "#a78bfa" }}
              >
                <Send size={10} />
                Open in mail client
              </a>
            </div>
          </motion.div>
        </div>

        <div className="contact-divider" />

        <div className="overflow-hidden py-6 border-b border-white/10">
          <div className="marquee-email">
            {Array(6).fill(EMAIL).map((e, i) => (
              <a key={i} href={`mailto:${EMAIL}`}
                className="text-[11px] font-mono uppercase tracking-[0.3em] opacity-15 hover:opacity-40 transition-opacity shrink-0">
                {e}
              </a>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-20">© 2025 Shreyasi Saha — All rights reserved</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-20">Built with React + Vite + Framer Motion</span>
        </div>
      </section>
    </>
  );
}