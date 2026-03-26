import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    index: "01",
    title: "Languages",
    color: "#a78bfa",
    skills: [
      { name: "Python",     level: 90 },
      { name: "C++",        level: 80 },
      { name: "C",          level: 75 },
      { name: "Java",       level: 65 },
    ],
  },
  {
    index: "02",
    title: "Data & ML",
    color: "#f97316",
    skills: [
      { name: "Pandas",       level: 92 },
      { name: "NumPy",        level: 88 },
      { name: "Scikit-learn", level: 78 },
      { name: "Matplotlib",   level: 85 },
      { name: "Seaborn",      level: 80 },
    ],
  },
  {
    index: "03",
    title: "Web Technologies",
    color: "#34d399",
    skills: [
      { name: "HTML",       level: 88 },
      { name: "CSS",        level: 82 },
      { name: "JavaScript", level: 72 },
    ],
  },
  {
    index: "04",
    title: "Tools & Platforms",
    color: "#38bdf8",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Excel",    level: 85 },
      { name: "Jupyter",  level: 90 },
      { name: "DAX",      level: 75 },
    ],
  },
  {
    index: "05",
    title: "Soft Skills",
    color: "#f472b6",
    skills: [
      { name: "Problem-Solving",   level: 95 },
      { name: "Collaboration",     level: 90 },
      { name: "Time Management",   level: 85 },
    ],
  },
];

const MARQUEE_ITEMS = [
  "Python", "Power BI", "C++", "Pandas", "DAX",
  "Scikit-learn", "NumPy", "JavaScript", "Excel", "Seaborn",
];

function MarqueeTicker() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-white/10 py-3 my-16">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-[0.3em] font-mono opacity-25 flex items-center gap-8"
          >
            {item}
            <span className="opacity-40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.35, delay }}
      className="flex items-center gap-3"
    >
      <span className="text-sm font-mono opacity-70 w-32 shrink-0 truncate">{name}</span>
      <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: level / 100 }}
          transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: color, transformOrigin: "left" }}
          className="h-full rounded-full"
        />
      </div>
      <span
        className="text-[10px] font-mono w-7 text-right shrink-0"
        style={{ color, opacity: 0.7 }}
      >
        {level}
      </span>
    </motion.div>
  );
}

function SkillRow({ item, i }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full group flex items-center gap-6 py-8 px-0 text-left transition-all duration-300 cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-mono text-[10px] opacity-20 shrink-0 w-6">{item.index}</span>

        <h3
          className="font-grotesk font-black uppercase tracking-tighter text-2xl md:text-4xl leading-none flex-1 transition-all duration-500"
          style={{ color: open ? item.color : undefined, opacity: open ? 1 : 0.85 }}
        >
          {item.title}
        </h3>

        <span
          className="hidden md:flex items-center gap-1.5 shrink-0 transition-opacity duration-300"
          style={{ opacity: open ? 0 : 0.35 }}
        >
          {item.skills.map((s) => (
            <span
              key={s.name}
              className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase border"
              style={{ borderColor: `${item.color}30`, color: item.color }}
            >
              {s.name}
            </span>
          ))}
        </span>

        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-lg opacity-40 group-hover:opacity-80 transition-opacity"
        >
          +
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 flex flex-col gap-3 max-w-lg">
              {item.skills.map((s, j) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  color={item.color}
                  delay={j * 0.07}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <>
      <style>{`
        .skills-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }
        [data-theme="light"] .skills-divider {
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
        }
      `}</style>

      <section id="skills" className="py-32 border-t border-white/10 px-6 md:px-12">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] font-mono uppercase tracking-[0.35em] opacity-25 mb-6"
        >
          What my skills are
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          {/* ✅ section-heading, single row */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading"
          >
            Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs font-mono opacity-25 uppercase tracking-[0.25em] max-w-[180px] leading-relaxed"
          >
            Click any row to expand skill proficiency
          </motion.p>
        </div>

        <MarqueeTicker />

        <div>
          {skillCategories.map((item, i) => (
            <div key={item.index}>
              <SkillRow item={item} i={i} />
              {i < skillCategories.length - 1 && <div className="skills-divider" />}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-[10px] font-mono uppercase tracking-[0.3em] opacity-20 text-right"
        >
          Proficiency levels are self-assessed
        </motion.p>
      </section>
    </>
  );
}