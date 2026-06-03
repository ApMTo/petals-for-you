import { useMemo } from "react";

interface Petal {
  left: number;
  delay: number;
  duration: number;
  size: number;
  hue: number;
  drift: number;
}

export function Petals({ count = 24 }: { count?: number }) {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 16,
        size: 8 + Math.random() * 14,
        hue: 330 + Math.random() * 30,
        drift: (Math.random() - 0.5) * 200,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            ['--drift' as never]: `${p.drift}px`,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            style={{
              filter: `drop-shadow(0 0 6px oklch(0.8 0.15 ${p.hue} / 0.7))`,
              transform: `translateX(var(--drift))`,
            }}
          >
            <path
              d="M12 2 C 7 6, 6 14, 12 22 C 18 14, 17 6, 12 2 Z"
              fill={`oklch(0.85 0.12 ${p.hue})`}
              opacity="0.85"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
