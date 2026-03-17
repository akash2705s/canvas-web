import { Hero } from "@/components/Hero";
import { RuntimeInstallSection } from "@/components/RuntimeInstallSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { CampaignResultsSection } from "@/components/CampaignResultsSection";
import { WhyInteractiveSection } from "@/components/WhyInteractiveSection";
import { PlatformCapabilitiesSection } from "@/components/PlatformCapabilitiesSection";
import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>

      <div className="h-[3px] w-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_25%,#4F46E5_60%,#A78BFA_100%)]" />

      <Reveal delay={0.06}>
        <WhyInteractiveSection />
      </Reveal>
      <Reveal delay={0.14}>
        <PlatformCapabilitiesSection />
      </Reveal>
      <Reveal delay={0.22}>
        <RuntimeInstallSection />
      </Reveal>
      <Reveal delay={0.3}>
        <OutcomesSection />
      </Reveal>
      <Reveal delay={0.38}>
        <CampaignResultsSection />
      </Reveal>
      {/* <Reveal delay={0.46}>
        <ProductFaqAccordion />
      </Reveal> */}
    </>
  );
}
