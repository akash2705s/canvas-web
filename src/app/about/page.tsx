import { AboutHero } from "@/components/About/AboutHero";
import { AboutInsideCanvasSection } from "@/components/About/AboutInsideCanvasSection";
import { AboutMissionSection } from "@/components/About/AboutMissionSection";
import { AboutPartnersSection } from "@/components/About/AboutPartnersSection";
import { AboutOurStorySection } from "@/components/About/AboutOurStorySection";
import { AboutRecognitionSection } from "@/components/About/AboutRecognitionSection";
import { AboutTeamSection } from "@/components/About/AboutTeamSection";
import { AboutCtaSection } from "@/components/About/AboutCtaSection";
import { Reveal } from "@/components/motion/Reveal";

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <AboutHero />
      </Reveal>
      <Reveal delay={0.04}>
        <AboutInsideCanvasSection />
      </Reveal>
      <div className="-mt-8">
        <Reveal delay={0.08}>
          <AboutMissionSection />
        </Reveal>
      </div>
      <div className="-mt-10">
        <Reveal delay={0.1}>
          <AboutPartnersSection />
        </Reveal>
      </div>
      <div className="-mt-8">
        <Reveal delay={0.12}>
          <AboutOurStorySection />
        </Reveal>
      </div>
      <Reveal delay={0.16}>
        <AboutRecognitionSection />
      </Reveal>
      <Reveal delay={0.2}>
        <AboutTeamSection />
      </Reveal>
      <Reveal delay={0.24}>
        <AboutCtaSection />
      </Reveal>
    </>
  );
}

