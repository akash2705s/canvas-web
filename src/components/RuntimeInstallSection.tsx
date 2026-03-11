"use client";

import Image from "next/image";
import Link from "next/link";
import { TypewriterCodeWindow } from "@/components/TypewriterCodeWindow";
import { AiConvertWindow } from "@/components/AiConvertWindow";
import { IntentSignalDashboard } from "@/components/IntentSignalDashboard";
import runtimeIcon from "@/assets/works/runtime.svg";
import convertAdsIcon from "@/assets/works/convertads.svg";
import captureSignalsIcon from "@/assets/works/capture_signals.svg";

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
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#4F46E5]/6 blur-[90px]" />
        <div className="absolute left-[25%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />
        <div className="absolute right-[-220px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border-[0.56px] border-[rgba(79,70,229,0.15)] bg-[rgba(79,70,229,0.03)] px-5 py-1.5 text-sm font-semibold text-[rgba(79,70,229,1)] shadow-sm">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[rgba(79,70,229,1)]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            How Canvas Works
          </span>
        </div>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.6px] text-zinc-900 sm:text-4xl">
            Three steps from passive to interactive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
            Canvas integrates seamlessly into existing streaming infrastructure,
            <br className="hidden sm:inline" /> with no disruption to current ad delivery.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* Step 01 – left text, right code */}
          <div className="w-full lg:max-w-md">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-[35.998px] w-[35.998px] items-center justify-center rounded-[14px] border-[1.11px] border-zinc-200 bg-white pr-[0.01px] shadow-sm">
                <Image src={runtimeIcon} alt="Canvas Runtime" className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-[#F97316]">01</span>
              <div className="h-px flex-1 bg-zinc-200/80" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.6px] text-zinc-900 sm:text-4xl">
              Install Runtime Script
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
              Install a lightweight script across streaming players or apps. The Canvas runtime sits seamlessly alongside existing SSAI environments — compatible with every major CTV platform.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-transparent bg-[rgba(249,115,22,0.055)] px-4 py-2 text-xs font-semibold text-[rgba(249,115,22,1)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(249,115,22,1)]" />
              Compatible with SSAI environments
            </div>

            <div className="mt-8">
              <Link
                href="/#learn-more"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#fb923c]"
              >
                <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[#F97316] after:transition-transform after:duration-300 after:ease-out after:transform-gpu group-hover:after:scale-x-100">
                  Learn more
                </span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:flex lg:justify-end">
            <TypewriterCodeWindow
              title="canvas-runtime.ts"
              tabs={["canvas-runtime.ts", "ssai.config.ts"]}
              languageLabel="TypeScript"
              footerLeft="Canvas SDK v2.4.1"
              footerRight="0 errors • 0 warnings"
              code={CODE}
              codeViewportHeightPx={355}
              typingMsPerChar={12}
              startDelayMs={350}
              className="w-full max-w-[540px]"
            />
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Step 02 – right text, left code (mirrored layout) */}
          <div className="lg:order-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-[35.998px] w-[35.998px] items-center justify-center rounded-[14px] border-[1.11px] border-zinc-200 bg-white pr-[0.01px] shadow-sm">
                <Image src={convertAdsIcon} alt="Convert ads" className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-[rgba(79,70,229,1)]">02</span>
              <div className="h-px flex-1 bg-zinc-200/80" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.6px] text-zinc-900 sm:text-4xl">
              Convert Ads
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
              Upload your existing video ad and add interactive triggers in seconds. The Canvas Editor or AI assistant
              converts any video creative into an interactive unit — no rebuild required.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-transparent bg-[rgba(79,70,229,0.05)] px-4 py-2 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(79,70,229,1)]" />
              Drag-and-drop + AI-assisted conversion
            </div>

            <div className="mt-8">
              <Link
                href="/#learn-more"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[rgba(79,70,229,1)] hover:text-[rgba(79,70,229,0.9)]"
              >
                <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[rgba(79,70,229,1)] after:transition-transform after:duration-300 after:ease-out after:transform-gpu group-hover:after:scale-x-100">
                  Learn more
                </span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:order-1 lg:justify-self-start">
            <AiConvertWindow />
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Step 03 – left text, right code (same as step 01 layout) */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-[35.998px] w-[35.998px] items-center justify-center rounded-[14px] border-[1.11px] border-zinc-200 bg-white pr-[0.01px] shadow-sm">
                <Image src={captureSignalsIcon} alt="Capture signals" className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold text-[rgba(129,140,248,1)]">03</span>
              <div className="h-px flex-1 bg-zinc-200/80" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-[-0.6px] text-zinc-900 sm:text-4xl">
              Capture Signals
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
              Every viewer interaction becomes measurable first-party intent data. QR scans, CTA clicks, product
              exploration — all captured as declared intent signals beyond passive impressions.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-transparent bg-[rgba(79,70,229,0.05)] px-4 py-2 text-xs font-semibold text-[rgba(129,140,248,1)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgba(129,140,248,1)]" />
              QR scans, clicks, product exploration
            </div>

            <div className="mt-8">
              <Link
                href="/#learn-more"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[rgba(79,70,229,1)] hover:text-[rgba(79,70,229,0.9)]"
              >
                <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[rgba(79,70,229,1)] after:transition-transform after:duration-300 after:ease-out after:transform-gpu group-hover:after:scale-x-100">
                  Learn more
                </span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="w-full lg:justify-self-end">
            <IntentSignalDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

