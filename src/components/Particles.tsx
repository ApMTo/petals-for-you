import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 14,
        size: 1 + Math.random() * 3,
        hue: 280 + Math.random() * 80,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute top-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `oklch(0.92 0.1 ${p.hue})`,
            boxShadow: `0 0 ${p.size * 4}px oklch(0.85 0.15 ${p.hue})`,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
