import { AboutHero } from "@/components/AboutHero";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <AboutHero />
      </Reveal>
    </>
  );
}

