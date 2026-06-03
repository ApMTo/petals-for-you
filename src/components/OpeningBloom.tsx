import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Flower } from "./Flower";

export function OpeningBloom({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"spark" | "bloom" | "fade">("spark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("bloom"), 700);
    const t2 = setTimeout(() => setPhase("fade"), 3200);
    const t3 = setTimeout(() => onDone(), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  const flowers = Array.from({ length: 18 }, (_, i) => {
    const angle = (360 / 18) * i;
    const radius = 30 + (i % 3) * 12;
    const hue = 320 + ((i * 17) % 60);
    return { angle, radius, hue, size: 60 + (i % 4) * 18, delay: i * 0.05 };
  });

  return (
    <AnimatePresence>
      {phase !== "fade" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* spark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: phase === "spark" ? [0, 1.5, 1] : 0, opacity: phase === "spark" ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute h-6 w-6 rounded-full"
            style={{
              background: "radial-gradient(circle, oklch(0.98 0.1 85), oklch(0.85 0.18 50 / 0.6) 40%, transparent 70%)",
              boxShadow: "0 0 80px oklch(0.9 0.18 60), 0 0 160px oklch(0.85 0.18 50 / 0.6)",
            }}
          />
          {/* flowers bursting */}
          {phase === "bloom" && (
            <div className="relative h-0 w-0">
              {flowers.map((f, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
                  animate={{
                    x: Math.cos((f.angle * Math.PI) / 180) * f.radius * 4,
                    y: Math.sin((f.angle * Math.PI) / 180) * f.radius * 4,
                    scale: 1,
                    opacity: 1,
                    rotate: 360,
                  }}
                  transition={{ duration: 1.4, delay: f.delay, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ transformOrigin: "center" }}
                >
                  <Flower size={f.size} hue={f.hue} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
