import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { OpeningBloom } from "@/components/OpeningBloom";
import { StarField } from "@/components/StarField";
import { Petals } from "@/components/Petals";
import { Particles } from "@/components/Particles";
import { MouseGlow } from "@/components/MouseGlow";
import { MusicToggle } from "@/components/MusicToggle";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import {
  HeroSection,
  GratitudeSection,
  DreamSection,
  FinalSection,
} from "@/components/StorySections";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Для самой особенной ❤️",
    meta: [
      {
        name: "description",
        content:
          "Небольшая история о человеке, который стал особенным намного быстрее, чем сам это понимает.",
      },

      {
        property: "og:title",
        content: "Для самой особенной ❤️",
      },

      {
        property: "og:description",
        content:
          "Небольшая история о человеке, который сделал мои дни счастливее.",
      },

      {
        property: "og:type",
        content: "website",
      },
    ],

    links: [
      {
        rel: "icon",
        href: "/heart.png",
        type: "image/png",
      },

      {
        rel: "apple-touch-icon",
        href: "/heart.png",
      },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [intro, setIntro] = useState(true);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {intro && <OpeningBloom onDone={() => setIntro(false)} />}
      <StarField />
      <ParallaxBackdrop />
      <Petals />
      <Particles />
      <MouseGlow />

      <div className="relative z-30">
        <HeroSection />
        <GratitudeSection />
        <DreamSection />
        <FinalSection />
      </div>

      {/* vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.05 0.02 270 / 0.6) 100%)",
        }}
      />
    </main>
  );
}
