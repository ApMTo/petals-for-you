interface FlowerProps {
  size?: number;
  hue?: number;
  className?: string;
  style?: React.CSSProperties;
  glow?: boolean;
}

export function Flower({ size = 60, hue = 340, className, style, glow = true }: FlowerProps) {
  const petals = 6;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{
        filter: glow ? `drop-shadow(0 0 ${size / 4}px oklch(0.8 0.18 ${hue} / 0.7))` : undefined,
        ...style,
      }}
    >
      <defs>
        <radialGradient id={`g-${hue}`}>
          <stop offset="0%" stopColor={`oklch(0.95 0.08 ${hue})`} />
          <stop offset="60%" stopColor={`oklch(0.78 0.18 ${hue})`} />
          <stop offset="100%" stopColor={`oklch(0.55 0.2 ${hue + 20})`} />
        </radialGradient>
      </defs>
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (360 / petals) * i;
        return (
          <ellipse
            key={i}
            cx="50"
            cy="28"
            rx="14"
            ry="22"
            fill={`url(#g-${hue})`}
            opacity="0.92"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      <circle cx="50" cy="50" r="8" fill={`oklch(0.92 0.14 85)`} />
      <circle cx="50" cy="50" r="3" fill={`oklch(0.98 0.05 85)`} />
    </svg>
  );
}
