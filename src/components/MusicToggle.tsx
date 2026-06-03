import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio("https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3");
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().catch(() => {}); setPlaying(true); }
  };

  return (
    <motion.button
      onClick={toggle}
      className="glass-panel fixed right-5 top-5 z-40 flex h-12 w-12 items-center justify-center rounded-full text-foreground"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label={playing ? "Выключить музыку" : "Включить музыку"}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      )}
    </motion.button>
  );
}
