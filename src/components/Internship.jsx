import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Github, Award, ChevronRight } from "lucide-react";

const internships = [
  {
    index: "01",
    company: "Skillcraft Technology",
    role: "Data Science Intern",
    period: "Jun 2025 – Jul 2025",
    color: "#34d399",
    color2: "#38bdf8",
    link: "https://skillcrafttech.com/",
    certificate: "https://drive.google.com/file/d/1nkFLZjTY6uoZlLXk3TiQP_u7SiAZEhMJ/view",
    github: [
      { label: "India Population Growth Visualization",                           url: "https://github.com/Shreyasi-0107/SCT_DS_Task1" },
      { label: "Titanic Survival Data Analysis & Visualization",                  url: "https://github.com/Shreyasi-0107/SCT_DS_Task2" },
      { label: "Bank Marketing Campaign Prediction using Decision Tree Classifier",url: "https://github.com/Shreyasi-0107/SCT_DS_Task3" },
      { label: "US Road Accidents Data Exploration & Visualization",               url: "https://github.com/Shreyasi-0107/SCT_DS_Task4" },
    ],
    points: [
      "Completed 4 end-to-end data analytics & ML projects using Python.",
      "Performed population growth analysis and accident data visualisation using Pandas, NumPy, Matplotlib and Seaborn.",
      "Built & evaluated a Decision Tree classifier with Scikit-learn using feature selection and model evaluation techniques.",
    ],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Internship() {
  return (
    <>
      <style>{`
        .intern-card {
          border-radius: 32px; border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden; background: rgba(255,255,255,0.015);
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .intern-card:hover { border-color: rgba(52,211,153,0.25); box-shadow: 0 0 60px rgba(52,211,153,0.06); }

        .intern-banner {
          padding: 28px 32px 24px;
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: 16px; border-bottom: 1px solid rgba(255,255,255,0.06);
          background: linear-gradient(135deg, rgba(52,211,153,0.07) 0%, rgba(56,189,248,0.04) 100%);
          flex-wrap: wrap;
        }
        .intern-banner-left { display: flex; align-items: center; gap: 16px; }
        .intern-icon-wrap {
          width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .intern-company {
          font-weight: 900; font-size: clamp(1.3rem, 3vw, 2rem);
          text-transform: uppercase; letter-spacing: -0.03em; line-height: 1;
        }
        .intern-role {
          font-family: monospace; font-size: 10px;
          text-transform: uppercase; letter-spacing: 0.3em; opacity: 0.4; margin-top: 4px;
        }
        .intern-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 100px;
          font-family: monospace; font-size: 9px;
          text-transform: uppercase; letter-spacing: 0.2em; flex-shrink: 0;
        }

        .intern-body { display: grid; grid-template-columns: 1fr; gap: 0; }
        @media (min-width: 768px) { .intern-body { grid-template-columns: 1fr 1fr; } }

        .intern-panel { padding: 28px 32px; }
        .intern-panel + .intern-panel { border-top: 1px solid rgba(255,255,255,0.06); }
        @media (min-width: 768px) {
          .intern-panel + .intern-panel { border-top: none; border-left: 1px solid rgba(255,255,255,0.06); }
        }
        .intern-panel-label {
          font-family: monospace; font-size: 9px; text-transform: uppercase;
          letter-spacing: 0.3em; opacity: 0.3; margin-bottom: 16px; display: block;
        }

        .intern-point { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 12px; }
        .intern-dot { width: 5px; height: 5px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
        .intern-point-text { font-size: 12.5px; line-height: 1.7; opacity: 0.55; font-family: monospace; }

        .intern-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
        .intern-tag {
          padding: 4px 12px; border-radius: 100px;
          font-family: monospace; font-size: 9px;
          text-transform: uppercase; letter-spacing: 0.15em; border: 1px solid;
        }

        .github-link {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
          text-decoration: none; color: inherit;
          transition: opacity 0.2s; opacity: 0.5;
          font-size: 12px; font-family: monospace;
        }
        .github-link:last-child { border-bottom: none; }
        .github-link:hover { opacity: 1; }
        .github-link-arrow { margin-left: auto; opacity: 0.4; transition: transform 0.2s, opacity 0.2s; }
        .github-link:hover .github-link-arrow { transform: translateX(3px); opacity: 0.8; }

        .cert-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 10px;
          font-family: monospace; font-size: 10px;
          text-transform: uppercase; letter-spacing: 0.2em;
          cursor: pointer; border: 1px solid; transition: background 0.25s, opacity 0.25s;
          margin-top: 20px; font-weight: 700; text-decoration: none;
        }
        .cert-btn:hover { opacity: 0.85; }

        .intern-footer {
          padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 8px; background: rgba(255,255,255,0.01);
        }

        [data-theme="light"] .intern-card { background: rgba(0,0,0,0.03); border-color: rgba(0,0,0,0.1); }
        [data-theme="light"] .intern-card:hover { border-color: rgba(52,211,153,0.4); }
        [data-theme="light"] .intern-banner {
          background: linear-gradient(135deg, rgba(52,211,153,0.1) 0%, rgba(56,189,248,0.06) 100%);
          border-color: rgba(0,0,0,0.08);
        }
        [data-theme="light"] .intern-panel + .intern-panel { border-color: rgba(0,0,0,0.08); }
        [data-theme="light"] .intern-footer { border-color: rgba(0,0,0,0.08); }
        [data-theme="light"] .github-link { border-color: rgba(0,0,0,0.06); }
        [data-theme="light"] .intern-point-text { color: #1a1a1a; }
      `}</style>

      <section id="internship" className="py-32 border-t border-white/10 px-6 md:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] font-mono uppercase tracking-[0.35em] opacity-25 mb-4"
            >
              Work Experience
            </motion.p>
            {/* ✅ section-heading, no <br/>, single row */}
            <motion.h2
              variants={fadeUp} custom={0.07}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="section-heading"
            >
              Internship
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp} custom={0.15}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-mono opacity-25 uppercase tracking-[0.25em] max-w-[180px] leading-relaxed"
          >
            {internships.length} internship · industry experience
          </motion.p>
        </div>

        {/* ── Cards ── */}
        {internships.map((item, i) => (
          <motion.div
            key={item.index}
            variants={fadeUp} custom={i * 0.1 + 0.1}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="intern-card mb-6"
          >
            <div className="intern-banner">
              <div className="intern-banner-left">
                <div
                  className="intern-icon-wrap"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}35` }}
                >
                  <Briefcase size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="intern-company" style={{ color: item.color }}>{item.company}</div>
                  <div className="intern-role">{item.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="intern-badge"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, color: item.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: item.color }} />
                  {item.period}
                </span>
                <span
                  className="intern-badge"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
                >
                  Completed ✓
                </span>
              </div>
            </div>

            <div className="intern-body">
              <div className="intern-panel">
                <span className="intern-panel-label">What I did</span>
                {item.points.map((pt, j) => (
                  <div key={j} className="intern-point">
                    <div className="intern-dot" style={{ background: item.color, opacity: 0.7 }} />
                    <p className="intern-point-text">{pt}</p>
                  </div>
                ))}
                <div className="intern-tags">
                  {item.tags.map((tag) => (
                    <span
                      key={tag} className="intern-tag"
                      style={{ borderColor: `${item.color}35`, color: item.color, background: `${item.color}0d` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="intern-panel">
                <span className="intern-panel-label">Project Repos</span>
                <div>
                  {item.github.map((repo, j) => (
                    <a key={j} href={repo.url} target="_blank" rel="noreferrer" className="github-link">
                      <Github size={13} style={{ color: item.color, opacity: 0.8, flexShrink: 0 }} />
                      <span>{repo.label}</span>
                      <ChevronRight size={13} className="github-link-arrow" />
                    </a>
                  ))}
                </div>
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn"
                  style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}0d` }}
                >
                  <Award size={13} />
                  View Certificate
                </a>
              </div>
            </div>

            <div className="intern-footer">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] opacity-25">
                {item.index} — {item.company}
              </span>
              <a
                href={item.link} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] opacity-30 hover:opacity-70 transition-opacity"
              >
                <ExternalLink size={10} />
                Visit Company
              </a>
            </div>
          </motion.div>
        ))}

        <motion.p
          variants={fadeUp} custom={0.4}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-20 text-right"
        >
          Verified upon request
        </motion.p>
      </section>
    </>
  );
}