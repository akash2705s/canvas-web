import { AboutHero } from "@/components/About/AboutHero";
import { AboutMissionSection } from "@/components/About/AboutMissionSection";
import { AboutOurStorySection } from "@/components/About/AboutOurStorySection";
import { AboutTeamSection } from "@/components/About/AboutTeamSection";
import { AboutCtaSection } from "@/components/About/AboutCtaSection";
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
      <Reveal delay={0.12}>
        <AboutOurStorySection />
      </Reveal>
      <Reveal delay={0.16}>
        <AboutTeamSection />
      </Reveal>
      <Reveal delay={0.2}>
        <AboutCtaSection />
      </Reveal>
    </>
  );
}

