import { Hero } from "@/components/Hero";
import { RuntimeInstallSection } from "@/components/RuntimeInstallSection";
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
    </>
  );
}
