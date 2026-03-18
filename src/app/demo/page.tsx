import { DemoHero } from "@/components/Demo/DemoHero";
import { DemoAdFormats } from "@/components/Demo/DemoAdFormats";
import { DemoEditor } from "@/components/Demo/DemoEditor";
import { DemoVastConversion } from "@/components/Demo/DemoVastConversion";

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <DemoAdFormats />
      <DemoEditor />
      <DemoVastConversion />
    </>
  );
}
