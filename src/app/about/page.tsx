import { AboutHero } from "@/components/About/AboutHero";
import { AboutMissionSection } from "@/components/About/AboutMissionSection";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <AboutHero />
      </Reveal>
      <div className="-mt-8">
        <Reveal delay={0.08}>
          <AboutMissionSection />
        </Reveal>
      </div>
    </>
  );
}

