"use client";

import Link from "next/link";
import { TypewriterCodeWindow } from "@/components/TypewriterCodeWindow";

const CODE = `// canvas-runtime.ts
import { CanvasRuntime } from "@canvas/ctv-sdk";

// 1. Initialize alongside your SSAI
const runtime = CanvasRuntime.init({
  publisherId: "pub-apex-001",
  mode: "ssai-passthrough",
});

// 2. Bind to your existing player
runtime.bindPlayer(player, {
  overlays: ["qr", "cta", "locator"],
  signals: true,
});

// Ready — Canvas is live
`;

export function RuntimeInstallSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#F97316]/12 blur-[90px]" />
        <div className="absolute left-[25%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />
        <div className="absolute right-[-220px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold text-[#F97316]">01</span>
              <div className="h-px flex-1 bg-zinc-200/80" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.6px] text-zinc-900 sm:text-4xl">
              Install Runtime Script
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
              Install a lightweight script across streaming players or apps. The Canvas runtime sits seamlessly alongside existing SSAI environments — compatible with every major CTV platform.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              Compatible with SSAI environments
            </div>

            <div className="mt-8">
              <Link
                href="/#learn-more"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#fb923c]"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="lg:justify-self-end">
            <TypewriterCodeWindow
              title="canvas-runtime.ts"
              tabs={["canvas-runtime.ts", "ssai.config.ts"]}
              languageLabel="TypeScript"
              footerLeft="Canvas SDK v2.4.1"
              footerRight="0 errors • 0 warnings"
              code={CODE}
              typingMsPerChar={12}
              startDelayMs={350}
              className="w-full max-w-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

