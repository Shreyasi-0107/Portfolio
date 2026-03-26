import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const certificates = [
  {
    index: "01",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    platform: "Forage",
    date: "Nov 2025",
    color: "#a78bfa",
    img: "/Deloitte.png",
    link: "https://drive.google.com/file/d/1Zk4S5-WOTHNN17CYDk6l3HKiUCr_mXVV/view",
  },
  {
    index: "02",
    title: "Cloud Computing",
    issuer: "NPTEL",
    platform: "IIT Courses",
    date: "Apr 2025",
    color: "#38bdf8",
    img: "/NPTEL.png",
    link: "https://drive.google.com/file/d/169ichUSdBxKJDWO-IN4MYi9WoIWsPm3b/view?usp=sharing",
  },
  {
    index: "03",
    title: "Web Development (Live)",
    issuer: "Rising Tech Pro",
    platform: "Live Training",
    date: "Mar 2024",
    color: "#f97316",
    img: "/Web Development.png",
    link: "https://drive.google.com/file/d/1-NwiOr7Y0ZXMbLh506panOKyZMrysQ_J/view",
  },
  {
    index: "04",
    title: "Workshop on Web Development",
    issuer: "IIT Roorkee",
    platform: "Workshop",
    date: "Nov 2023",
    color: "#34d399",
    img: "/Workshop.png",
    link: "https://drive.google.com/file/d/16lHHr6e9_a4UZgVKikGkV_KdIFpMg1ob/view",
  },
  {
    index: "05",
    title: '"Code-A-Haunt" 24-Hour Hackathon',
    issuer: "CodingBlocks LPU",
    platform: "Hackathon",
    date: "Feb 2024",
    color: "#eab308",
    img: "/Hackathon.jpg",
    link: "https://drive.google.com/file/d/1CEa2dtiw8ZC_PqOUmRsSeG8cD5MynkPX/view?usp=sharing",
  },
  {
    index: "06",
    title: "Introduction to JavaScript",
    issuer: "Great Learning",
    platform: "Online Course",
    date: "Nov 2023",
    color: "#f472b6",
    img: "/JS.jpg",
    link: "https://drive.google.com/file/d/1b2litv2AfHZ-5l5BAMo-BgUmc-FsTOaR/view",
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CertCard({ cert, i }) {
  const hasImage = cert.img && cert.img !== "";

  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp}
      custom={i * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="cert-card group"
      style={{ "--c": cert.color }}
    >
      <div className="cert-img-wrap">
        {hasImage ? (
          <img src={cert.img} alt={cert.title} className="cert-img" />
        ) : (
          <div className="cert-placeholder" style={{ background: `${cert.color}12` }}>
            <Award size={28} style={{ color: cert.color, opacity: 0.4 }} />
          </div>
        )}
        <div className="cert-img-fade" />
        <div className="cert-hover-overlay">
          <span className="cert-hover-label">
            View certificates <ArrowUpRight size={11} />
          </span>
        </div>
        <span className="cert-index-badge">{cert.index}</span>
      </div>

      <div className="cert-info">
        <div className="cert-meta">
          <span className="cert-platform" style={{ color: cert.color }}>{cert.issuer}</span>
          <span className="cert-date">{cert.date}</span>
        </div>
        <p className="cert-title">{cert.title}</p>
      </div>
      <div className="cert-bar" style={{ background: cert.color }} />
    </motion.a>
  );
}

export default function Certificates() {
  return (
    <>
      <style>{`
        .cert-card {
          display: flex; flex-direction: column;
          border-radius: 10px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #111; text-decoration: none; color: inherit;
          position: relative; transition: all 0.35s ease;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.15);
          box-shadow: 0 12px 24px rgba(0,0,0,0.4);
        }
        .cert-img-wrap {
          position: relative; width: 100%;
          aspect-ratio: 11/7; overflow: hidden; background: #0a0a0a;
        }
        .cert-img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.8); transition: all 0.6s ease;
        }
        .cert-card:hover .cert-img { transform: scale(1.05); filter: brightness(1); }
        .cert-hover-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s; backdrop-filter: blur(2px);
        }
        .cert-card:hover .cert-hover-overlay { opacity: 1; }
        .cert-hover-label {
          display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap; padding: 5px 12px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.3); background: rgba(0,0,0,0.5);
          color: #fff; font-size: 8px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.15em;
        }
        .cert-index-badge {
          position: absolute; top: 8px; left: 10px;
          font-family: monospace; font-size: 8px; opacity: 0.3; color: #fff;
        }
        .cert-info {
          padding: 8px 10px; background: #111; flex: 1;
          display: flex; flex-direction: column; gap: 3px;
        }
        .cert-meta {
          display: flex; align-items: center; justify-content: space-between;
          font-family: monospace; font-size: 8.5px;
          text-transform: uppercase; letter-spacing: 0.1em;
        }
        .cert-date { opacity: 0.3; }
        .cert-title {
          font-weight: 700; font-size: 0.8rem; line-height: 1.3;
          color: rgba(255,255,255,0.85);
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .cert-bar { height: 2px; width: 0%; transition: width 0.4s ease; }
        .cert-card:hover .cert-bar { width: 100%; }

        [data-theme="light"] .cert-card { background: #f5f2ee; border-color: rgba(0,0,0,0.1); }
        [data-theme="light"] .cert-info { background: #f5f2ee; }
        [data-theme="light"] .cert-title { color: #111; }
      `}</style>

      <section id="certificates" className="py-24 border-t border-white/10">
        <div className="px-6 md:px-12">

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <motion.p
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="text-[10px] font-mono uppercase tracking-[0.35em] opacity-25 mb-4"
              >
                Credentials
              </motion.p>
              {/* ✅ section-heading, single row */}
              <motion.h2
                variants={fadeUp} custom={0.07}
                initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="section-heading"
              >
                Certificates
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp} custom={0.15}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-xs font-mono opacity-25 uppercase tracking-[0.25em] max-w-[200px] leading-relaxed"
            >
              {certificates.length} verified credentials · click to view
            </motion.p>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, i) => (
              <CertCard key={cert.index} cert={cert} i={i} />
            ))}
          </div>

          <motion.p
            variants={fadeUp} custom={0.4}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-[10px] font-mono uppercase tracking-[0.3em] opacity-20 text-right"
          >
            Click any card to view full certificate
          </motion.p>
        </div>
      </section>
    </>
  );
}