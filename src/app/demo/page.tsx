import { DemoHero } from "@/components/Demo/DemoHero";
import { DemoAdFormats } from "@/components/Demo/DemoAdFormats";
import { DemoEditor } from "@/components/Demo/DemoEditor";
import { DemoVAST } from "@/components/Demo/DemoVAST";
import { DemoIntentIntelligence } from "@/components/Demo/DemoIntentIntelligence";
import { DemoCta } from "@/components/Demo/DemoCta";

export default function DemoPage() {
  return (
    <main className="overflow-x-hidden">
      <DemoHero />
      <DemoAdFormats />
      <DemoEditor />
      <DemoVAST />
      <DemoIntentIntelligence />
      <DemoCta />
    </main>
  );
}
