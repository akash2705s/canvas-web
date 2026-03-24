"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypewriterCodeWindow } from "@/components/TypewriterCodeWindow";
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

const STEPS = [
  {
    id: "01",
    color: "text-[#F97316]",
    bgColor: "bg-[rgba(249,115,22,0.05)]",
    icon: runtimeIcon,
    title: "Install Runtime Script",
    description: "Install a lightweight script across streaming players or apps. The Canvas runtime sits seamlessly alongside existing SSAI environments — compatible with every major CTV platform.",
    feature: "Compatible with SSAI environments",
    href: "/product",
  },
  {
    id: "02",
    color: "text-[rgba(79,70,229,1)]",
    bgColor: "bg-[rgba(79,70,229,0.05)]",
    icon: convertAdsIcon,
    title: "Convert Ads",
    description: "Upload your existing video ad and add interactive triggers in seconds. The Canvas Editor or AI assistant converts any video creative into an interactive unit — no rebuild required.",
    feature: "Drag-and-drop + AI-assisted conversion",
    isVideo: true,
    href: "/product",
  },
  {
    id: "03",
    color: "text-[rgba(129,140,248,1)]",
    bgColor: "bg-[rgba(79,70,229,0.05)]",
    icon: captureSignalsIcon,
    title: "Capture Signals",
    description: "Every viewer interaction becomes measurable first-party intent data. QR scans, CTA clicks, product exploration — all captured as declared intent signals beyond passive impressions.",
    feature: "QR scans, clicks, product exploration",
    href: "/product",
  },
];

export function RuntimeInstallSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#4F46E5]/6 blur-[90px]" />
        <div className="absolute left-[25%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />
        <div className="absolute right-[-220px] top-[10%] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Header */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border-[0.56px] border-[rgba(79,70,229,0.15)] bg-[rgba(79,70,229,0.03)] px-5 py-1.5 text-sm font-semibold text-[rgba(79,70,229,1)] shadow-sm">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[rgba(79,70,229,1)]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            How Canvas Works
          </span>
        </motion.div>

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.6px] text-zinc-900 sm:text-4xl">
            Three steps from passive to interactive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
            Canvas integrates seamlessly into existing streaming infrastructure,
            <br className="hidden sm:inline" /> with no disruption to current ad delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-20">
          {STEPS.map((step, idx) => {
            const isReversed = idx === 1; // Middle step has reversed layout

            return (
              <motion.div
                key={step.id}
                className={`grid gap-8 items-stretch lg:grid-cols-2 lg:gap-12 ${isReversed ? 'lg:grid-cols-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Text Content */}
                <div className={`flex flex-col rounded-2xl border border-zinc-200/60 bg-white/40 backdrop-blur-sm p-8 lg:p-10 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="mb-6 flex items-center gap-3">
                    <motion.span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(249,249,250,1)" }}
                    >
                      <Image src={step.icon} alt="" className="h-6 w-6" />
                    </motion.span>
                    <span className={`text-2xl font-bold ${step.color}`}>{step.id}</span>
                    <div className="h-px flex-1 bg-zinc-200" />
                  </div>

                  <motion.h2
                    className="text-3xl font-extrabold text-zinc-900"
                    whileHover={{ color: "#1f2937" }}
                  >
                    {step.title}
                  </motion.h2>

                  <p className="mt-6 text-sm leading-7 text-zinc-600 flex-1">
                    {step.description}
                  </p>

                  <motion.div
                    className={`mt-6 mb-8 inline-flex items-center gap-2 rounded-full ${step.bgColor} px-4 py-2 ${step.color}`}
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    <span className="text-xs font-semibold">{step.feature}</span>
                  </motion.div>

                  <motion.div
                    className="mt-auto border-t border-zinc-200/50 pt-6 pl-1.5"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={step.href}
                      className={`group inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity ${step.color}`}
                    >
                      <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:bg-current after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100">
                        Learn more
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Media Content */}
                <div className={`flex justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                  {step.id === "01" ? (
                    <TypewriterCodeWindow
                      title="canvas-runtime.ts"
                      tabs={["canvas-runtime.ts", "ssai.config.ts"]}
                      languageLabel="TypeScript"
                      footerLeft="Canvas SDK v2.4.1"
                      footerRight="0 errors • 0 warnings"
                      code={CODE}
                      codeViewportHeightPx={330}
                      typingMsPerChar={12}
                      startDelayMs={350}
                      className="w-full max-w-[540px]"
                      showTooltip={false}
                      codeFontSize={11}
                    />
                  ) : (
                    <motion.div
                      className="relative aspect-[16/9] w-full max-w-[540px] overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-black/10 group"
                      whileHover={{ y: -4, boxShadow: "0 40px 100px rgba(15,23,42,0.25)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <video
                        src={step.id === "02" ? "/videos/Ad_convert.mov" : "/videos/capture_signals.mp4"}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 h-full w-full object-contain bg-black"
                      >
                        <track kind="captions" srcLang="en" label="English" />
                      </video>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
