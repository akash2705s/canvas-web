import { Hero } from "@/components/Hero";
import { RuntimeInstallSection } from "@/components/RuntimeInstallSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { CampaignResultsSection } from "@/components/CampaignResultsSection";
import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={0.08}>
        <RuntimeInstallSection />
      </Reveal>
      <Reveal delay={0.16}>
        <OutcomesSection />
      </Reveal>
      <Reveal delay={0.24}>
        <CampaignResultsSection />
      </Reveal>
    </>
  );
}
