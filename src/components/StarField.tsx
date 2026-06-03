import { useMemo } from "react";

interface Star {
  x: number; y: number; size: number; delay: number; duration: number;
}

export function StarField({ count = 120 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: `0 0 ${s.size * 3}px oklch(0.95 0.05 300 / 0.8)`,
          }}
        />
      ))}
    </div>
  );
}
