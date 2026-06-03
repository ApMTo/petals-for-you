import { motion } from "framer-motion";
import { useMemo } from "react";
import { Flower } from "./Flower";

// Generates points along a heart curve
function heartPoints(n: number, scale = 1) {
  const pts: { x: number; y: number; t: number }[] = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    pts.push({ x: x * scale, y: y * scale, t: i / n });
  }
  return pts;
}

export function FlowerHeart() {
  const outline = useMemo(() => heartPoints(60, 12), []);
  const inner = useMemo(() => heartPoints(36, 8), []);
  const core = useMemo(() => heartPoints(18, 4), []);
  const all = [...outline, ...inner, ...core];

  return (
    <div className="relative h-[500px] w-[500px] max-w-[90vw]" style={{ maxHeight: "70vh" }}>
      {all.map((p, i) => {
        const hue = 320 + ((i * 13) % 60);
        const size = 22 + ((i * 7) % 18);
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            whileInView={{
              x: p.x * 8 - size / 2,
              y: -p.y * 8 - size / 2,
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.4,
              delay: 0.4 + i * 0.02,
              ease: [0.34, 1.4, 0.5, 1],
            }}
          >
            <Flower size={size} hue={hue} />
          </motion.div>
        );
      })}
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 m-auto h-40 w-40 rounded-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 2 }}
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.18 340 / 0.6), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}
