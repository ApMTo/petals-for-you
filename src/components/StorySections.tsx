import { motion } from "framer-motion";
import { TypewriterLine } from "./TypewriterLine";
import { Flower } from "./Flower";
import { FlowerHeart } from "./FlowerHeart";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Pause() {
  return <div className="h-10" />;
}

export function HeroSection() {
  const floats = [
    { t: "Я улыбаюсь, когда вижу твоё сообщение.", x: "8%", y: "14%", d: 1.5 },
    { t: "Мне нравится слышать твой голос.", x: "72%", y: "18%", d: 2.2 },
    { t: "Я жду твоих кружочков.", x: "10%", y: "68%", d: 2.9 },
    { t: "Ты стала частью моего дня.", x: "68%", y: "78%", d: 3.6 },
    {
      t: "С тобой обычные моменты становятся особенными.",
      x: "30%",
      y: "90%",
      d: 4.3,
    },
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative z-10 max-w-4xl space-y-8">
        <TypewriterLine
          text="Иногда человек появляется в твоей жизни совершенно неожиданно..."
          className="font-display text-3xl leading-snug text-foreground md:text-5xl"
        />

        <Pause />

        <TypewriterLine
          delay={1.2}
          text="И ты ещё даже не успеваешь понять, насколько он станет важным."
          className="font-display text-2xl leading-snug text-foreground md:text-4xl"
        />

        <Pause />

        <TypewriterLine
          delay={2.4}
          text="Мы общаемся всего десять дней."
          className="font-display text-xl text-foreground/80 md:text-3xl"
        />

        <Pause />

        <TypewriterLine
          delay={3.6}
          text="Но иногда мне кажется, будто я знаю тебя намного дольше."
          className="font-display text-2xl text-foreground md:text-4xl"
        />

        <Pause />

        <TypewriterLine
          delay={4.8}
          text="Потому что за это время ты стала частью моего утра, моего дня и моих мыслей перед сном."
          className="font-display text-xl text-foreground/80 md:text-3xl"
        />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {floats.map((f, i) => (
          <motion.span
            key={i}
            className="absolute font-display text-sm italic text-foreground/80 md:text-lg"
            style={{
              left: f.x,
              top: f.y,
              textShadow: "0 0 12px oklch(0.78 0.16 340 / 0.6)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.9, 0.9, 0], y: [10, 0, -10, -20] }}
            transition={{
              duration: 6,
              delay: 6 + f.d,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            {f.t}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export function GratitudeSection() {
  const lines = [
    "Спасибо за сообщения, которые делают мой день лучше.",
    "Спасибо за голос, который мне нравится слушать.",
    "Спасибо за заботу, которую ты даришь каждый день.",
    "Спасибо за то, что ты появилась в моей жизни.",
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      <div className="relative z-10 space-y-10">
        {lines.map((l, i) => (
          <motion.h2
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: i * 0.3 }}
            className="font-display text-3xl text-gradient-rose md:text-5xl"
          >
            {l}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}

export function DreamSection() {
  const lines = [
    "Я не знаю, что ждёт нас впереди.",
    "Не знаю, какие дороги нам предстоит пройти.",
    "Не знаю, что будет через месяц.",
    "И не знаю, что будет через год.",
    "Но одно я знаю точно",

    "Какими бы ни были трудности, рядом с тобой они кажутся намного легче",

    "И мне хочется верить",

    "что если они когда-нибудь появятся",
    "мы обязательно справимся с ними вместе",
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      <div className="relative z-10 max-w-4xl space-y-12">
        {lines.map((l, i) => (
          <motion.h2
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.4,
              delay: i * 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-3xl text-foreground md:text-5xl"
          >
            {l}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}

export function FinalSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      <FlowerHeart />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 1.6 }}
        className="relative z-10 mt-12 max-w-5xl space-y-8"
      >
        <h2 className="font-display text-3xl text-gradient-rose md:text-5xl">
          Я благодарен судьбе за тот день, когда мы начали общаться.
        </h2>

        <h3 className="font-display text-2xl text-foreground md:text-4xl">
          Потому что за это короткое время ты подарила мне множество улыбок,
          тёплых моментов и счастливых мыслей.
        </h3>

        <h2 className="font-display text-4xl text-gradient-rose md:text-6xl">
          И если честно...
        </h2>

        <h2 className="font-display text-4xl text-gradient-gold md:text-6xl">
          Я очень рад, что именно ты появилась в моей жизни.
        </h2>

        <p className="font-display text-lg text-gradient-gold md:text-2xl">
          ❤️ Для девушки, которая стала особенной намного быстрее, чем сама это
          понимает ❤️
        </p>
      </motion.div>
    </section>
  );
}
