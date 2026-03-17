import { ProductHero } from "@/components/ProductHero";
import { ProductRuntimeFeature } from "@/components/ProductRuntimeFeature";
import { ProductEditorFeature } from "@/components/ProductEditorFeature";
import { ProductIntentFeature } from "@/components/ProductIntentFeature";
import { ProductEnterpriseGradeSection } from "@/components/ProductEnterpriseGradeSection";
import { ProductFaqAccordion } from "@/components/ProductFaqAccordion";
import { ProductFinalCta } from "@/components/ProductFinalCta";
import { Reveal } from "@/components/motion/Reveal";

export default function ProductPage() {
  return (
    <>
      <Reveal>
        <ProductHero />
      </Reveal>
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_25%,#4F46E5_60%,#A78BFA_100%)]" />
      <Reveal delay={0.08}>
        <ProductRuntimeFeature />
      </Reveal>
      <Reveal delay={0.16}>
        <ProductEditorFeature />
      </Reveal>
      <Reveal delay={0.24}>
        <ProductIntentFeature />
      </Reveal>
      <Reveal delay={0.3}>
        <ProductEnterpriseGradeSection />
      </Reveal>
      <Reveal delay={0.32}>
        <ProductFaqAccordion />
      </Reveal>
      <Reveal delay={0.4}>
        <ProductFinalCta />
      </Reveal>
    </>
  );
}



