import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    index: "01",
    year: "2023 — Present",
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech — Computer Science Engineering",
    desc: "Focusing on Data Structures, Algorithms, and specialized tracks in Data Science and Machine Learning.",
    stat: { value: "7.48", label: "CGPA" },
    tags: ["Data Structures", "Algorithms", "Machine Learning", "Data Science", "DBMS"],
    color: "#a78bfa",
    Icon: GraduationCap,
    current: true,
  },
  {
    index: "02",
    year: "2019 — 2023",
    school: "Barlow Girls' High School",
    location: "West Bengal",
    degree: "Secondary & Higher Secondary",
    desc: "Completed with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
    stat: { value: "10th & 12th", label: "Completed" },
    tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    color: "#f97316",
    Icon: BookOpen,
    current: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

function EduCard({ edu, i }) {
  const Icon = edu.Icon;
  return (
    <motion.div
      variants={fadeUp} custom={i * 0.12 + 0.1}
      initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 rounded-[32px] border border-white/10 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 group"
    >
      {/* Left panel */}
      <div
        className="flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10"
        style={{ background: `${edu.color}08` }}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-[10px] opacity-20 tracking-widest">{edu.index}</span>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}35` }}
          >
            <Icon size={15} style={{ color: edu.color }} />
          </div>
        </div>

        <div>
          <span
            className="font-grotesk font-black text-5xl leading-none block"
            style={{ color: edu.color }}
          >
            {edu.stat.value}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-30 mt-1 block">
            {edu.stat.label}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-30">
            {edu.year}
          </span>
          {edu.current && (
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: edu.color }}
              />
              <span
                className="text-[9px] font-mono uppercase tracking-[0.2em]"
                style={{ color: edu.color, opacity: 0.7 }}
              >
                Currently enrolled
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-col justify-between p-8 md:p-10 gap-6">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] opacity-25 mb-3">
            {edu.location}
          </p>
          <h3
            className="font-grotesk font-black uppercase tracking-tighter text-3xl md:text-4xl leading-none mb-3"
            style={{ transition: "color 0.3s" }}
          >
            {edu.school}
          </h3>
          <p
            className="text-sm font-bold uppercase tracking-[0.15em]"
            style={{ color: edu.color, opacity: 0.8 }}
          >
            {edu.degree}
          </p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.12 + 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `${edu.color}25`, transformOrigin: "left" }}
          className="h-[1px] w-full"
        />

        <p className="text-sm opacity-40 leading-relaxed font-mono max-w-lg">
          {edu.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {edu.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[9px] uppercase tracking-[0.2em] rounded-full font-mono"
              style={{
                border: `1px solid ${edu.color}30`,
                color: edu.color,
                background: `${edu.color}0d`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <>
      <style>{`
        .edu-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }
      `}</style>

      <section id="education" className="py-32 border-t border-white/10 px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] font-mono uppercase tracking-[0.35em] opacity-25 mb-4"
            >
              Academic background
            </motion.p>

            {/* ✅ Now uses section-heading — consistent with all other sections */}
            <motion.h2
              variants={fadeUp} custom={0.07}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="section-heading"
            >
              Education
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp} custom={0.15}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-mono opacity-25 uppercase tracking-[0.25em] max-w-[180px] leading-relaxed"
          >
            {educationData.length} institutions · ongoing
          </motion.p>
        </div>

        <div className="flex flex-col gap-6">
          {educationData.map((edu, i) => (
            <EduCard key={edu.index} edu={edu} i={i} />
          ))}
        </div>

        <motion.p
          variants={fadeUp} custom={0.4}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-[10px] font-mono uppercase tracking-[0.3em] opacity-20 text-right"
        >
          Qualifications verified upon request
        </motion.p>

      </section>
    </>
  );
}