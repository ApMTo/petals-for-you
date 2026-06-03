import { motion, useScroll, useTransform } from "framer-motion";
import { Flower } from "./Flower";

export function ParallaxBackdrop() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, -600]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -900]);
  const rot = useTransform(scrollY, [0, 3000], [0, 90]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.div style={{ y: y1, rotate: rot }} className="absolute -left-20 top-[20vh] opacity-30">
        <Flower size={220} hue={310} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute right-[-40px] top-[60vh] opacity-25">
        <Flower size={260} hue={340} />
      </motion.div>
      <motion.div style={{ y: y3, rotate: rot }} className="absolute left-[30%] top-[120vh] opacity-20">
        <Flower size={180} hue={280} />
      </motion.div>
      <motion.div style={{ y: y1 }} className="absolute right-[20%] top-[180vh] opacity-30">
        <Flower size={200} hue={350} />
      </motion.div>
    </div>
  );
}
