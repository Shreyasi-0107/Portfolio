import { motion } from "framer-motion";

export default function RobotLogo({ size = 40, color = "var(--accent)" }) {
  const s = size;

  return (
    <motion.div
      style={{ display:"inline-flex", flexDirection:"column", alignItems:"center" }}
      animate={{ y: [0, -s*0.07, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Antenna */}
      <motion.div
        style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:-1, transformOrigin:"50% 100%" }}
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          style={{ width: s*0.08, height: s*0.08, borderRadius:"50%", background: color, marginBottom: s*0.025 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <div style={{ width: s*0.025, height: s*0.15, background: color, borderRadius: s*0.02 }} />
      </motion.div>

      {/* Head — thin ring only, transparent background */}
      <div style={{
        width: s, height: s, borderRadius:"50%",
        border: `${Math.max(1.5, s*0.03)}px solid ${color}`,
        background: "transparent",
        position:"relative",
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        {/* Face visor — wide oval, dark fill */}
        <div style={{
          width: s*0.72, height: s*0.54,
          borderRadius:"50%",
          background:"rgba(0,0,0,0.78)",
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          {/* Eyes */}
          <motion.div
            style={{ display:"flex", gap: s*0.14 }}
            animate={{ x: [0, -s*0.03, 0, s*0.03, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {[0, 0.18].map((delay, i) => (
              <motion.div
                key={i}
                style={{
                  width: s*0.12, height: s*0.14,
                  borderRadius:"50%",
                  background: color,
                  position:"relative",
                  transformOrigin:"center",
                }}
                animate={{ scaleY: [1,1,1,0.05,1,1] }}
                transition={{ duration: 3.5, repeat: Infinity, delay }}
              >
                <div style={{
                  position:"absolute", top:"18%", left:"22%",
                  width:"36%", height:"36%",
                  borderRadius:"50%",
                  background:"rgba(255,255,255,0.5)",
                }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}