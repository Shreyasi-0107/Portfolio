import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Globe, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rapido Ride Analytics",
    date: "Dec 2025",
    cat: "Dashboard",
    index: "01",
    tags: ["Power BI", "Power Query", "DAX", "Excel"],
    img: "/Rapido.png",
    link: "https://github.com/Shreyasi-0107/Rapido-PowerBI-Dashboard.git",
    type: "github",
    desc: "Interactive dashboard for ecosystem analysis across Bharat. Modeling data via Power Query and DAX to reveal revenue trends.",
    color: "#f97316",
  },
  {
    title: "SnapTrack VCS",
    date: "Feb 2026",
    cat: "DSA Based",
    index: "02",
    tags: ["C++", "Crow", "Data Structures", "REST API"],
    img: "/SnapTrack.png",
    link: "https://github.com/Shreyasi-0107/SnapTrack-VCS.git",
    type: "github",
    desc: "Git-inspired control system. Integrated a Crow C++ web server with Stacks & Trees to visualize commit history.",
    color: "#a78bfa",
  },
  {
    title: "Panch Phoron",
    date: "Nov 2023",
    cat: "Web Dev",
    index: "03",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "/PANCH_PHORON.png",
    link: "https://isnehaha.github.io/PANCH-PHORON/",
    type: "live",
    desc: "Interactive food blogging platform for authentic Bengali recipes. Focused on smooth navigation and user-centric modules.",
    color: "#34d399",
  },
];

function ProjectCard({ p, i }) {
  const [hovered, setHovered] = useState(false);
  const isEven = i % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-20 items-center`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Area */}
      <div className="flex-1 w-full relative group">
        <motion.div
          animate={{ opacity: hovered ? 0.3 : 0, scale: hovered ? 1.05 : 0.95 }}
          transition={{ duration: 0.5 }}
          style={{ background: p.color }}
          className="absolute inset-0 rounded-[32px] blur-3xl -z-10"
        />
        <div className="relative aspect-video overflow-hidden rounded-[32px] border border-white/10 bg-[#111]">
          <motion.img
            src={p.img}
            alt={p.title}
            animate={{
              scale: hovered ? 1.05 : 1,
              filter: hovered ? "grayscale(0%)" : "grayscale(100%)"
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold bg-white text-black hover:scale-105 transition-transform"
            >
              {p.type === "github" ? <Github size={14} /> : <Globe size={14} />}
              View Project
            </a>
          </motion.div>
        </div>
      </div>

      {/* Info Area */}
      <div className={`flex-1 flex flex-col gap-6 ${isEven ? "text-left" : "md:text-right md:items-end"}`}>
        <div className={`flex items-center gap-4 w-full ${isEven ? "" : "md:flex-row-reverse"}`}>
          <span className="font-mono text-sm opacity-20 tracking-tighter">{p.index}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: p.color }}>
            {p.cat}
          </span>
          <div className="h-[1px] flex-1 bg-white/5" />
          <span className="font-mono text-[10px] opacity-30 uppercase tracking-widest">{p.date}</span>
        </div>

        <h3 className="text-4xl md:text-5xl lg:text-6xl font-grotesk font-black uppercase tracking-tighter leading-[0.9]">
          {p.title}
        </h3>

        <p className="text-base opacity-50 leading-relaxed max-w-md font-inter">
          {p.desc}
        </p>

        <div className={`flex flex-wrap gap-2 ${isEven ? "" : "md:justify-end"}`}>
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] rounded-lg border font-mono"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 mt-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: p.color }}>
            {p.type === "github" ? "GitHub Repo" : "Live Demo"}
          </span>
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all"
            style={{ borderColor: `${p.color}40` }}
          >
            <ArrowUpRight size={14} />
          </div>
        </a>
      </div>
    </motion.article>
  );
}

export default function Project() {
  return (
    <section id="projects" className="py-32 border-t border-white/10 px-6 md:px-12">
      <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

        {/* ✅ section-heading, no <br/>, "Works" inline with opacity */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Selected <span className="opacity-20 not-italic">Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm opacity-30 max-w-xs leading-relaxed font-mono uppercase tracking-tighter"
        >
          Curated data science & software engineering projects.
        </motion.p>
      </div>

      <div className="flex flex-col gap-40">
        {projects.map((p, i) => (
          <ProjectCard key={p.index} p={p} i={i} />
        ))}
      </div>

     {/* Footer CTA */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  /* REMOVED: border-t border-white/5 and pt-10 */
  className="mt-40 flex items-center justify-between"
>
  <span className="font-mono text-sm uppercase tracking-[0.2em] opacity-60">
    <span className="text-white font-bold">{projects.length}</span> projects shown
  </span>

  <a
    href="https://github.com/Shreyasi-0107"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] opacity-80 hover:opacity-100 hover:text-[#f97316] transition-all font-mono group"
  >
    <Github size={18} className="group-hover:scale-110 transition-transform" />
    View all on GitHub
  </a>
</motion.div>
    </section>
  );
}