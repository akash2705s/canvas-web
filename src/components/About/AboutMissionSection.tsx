"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import apcIcon from "@/assets/About/our_mission/apc.svg";
import tickIcon from "@/assets/About/our_mission/tick.svg";
import vaeIcon from "@/assets/About/our_mission/vae.svg";
import zdrIcon from "@/assets/About/our_mission/zdr.svg";

type Checkpoint = { text: string; noWrapFrom?: "sm" };

const CHECKPOINTS: Checkpoint[] = [
  { text: "CTV deserves the same interaction depth as digital" },
  { text: "Intent data should come from viewers, not inferred from proxies" },
  { text: "Publishers shouldn't need to rebuild their stacks to unlock interactivity", noWrapFrom: "sm" },
  { text: "Every ad impression is an opportunity for a real conversation" },
];

const FEATURE_CARDS = [
  {
    title: "Zero-Disruption Runtime",
    body: "A lightweight (<50KB) script publishers drop into their streaming app. No rebuilds. No new ad stacks. Interactive-ready in hours.",
    icon: zdrIcon,
  },
  {
    title: "Visual Ad Editor",
    body: "Agencies drag, drop, and deploy interactive overlays — QR codes, CTAs, product carousels — without engineering resources.",
    icon: vaeIcon,
  },
  {
    title: "AI-Powered Conversion",
    body: "Upload any video creative. Canvas AI suggests interaction points and converts it to a live interactive unit in seconds.",
    icon: apcIcon,
  },
] as const;

export function AboutMissionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F9FAFB] to-[#EEF2FF] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,#EEF2FF_0,#EEF2FF_30%,transparent_70%)] opacity-80" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-14">
        {/* Left: mission copy */}
        <div className="max-w-lg lg:flex-[0.9]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4F46E51A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Our mission
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            <span className="block">CTV is the biggest screen.</span>
            <span className="block text-[#4F46E5]">It deserves real interaction.</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            We started Canvas because we saw a massive gap: CTV had become the dominant video channel, but its ads
            were stuck in the passive, impression-only model of broadcast TV. Viewers were skipping. Brands were
            guessing. Publishers were under-monetizing.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas gives every stakeholder something they actually need — publishers a new premium ad surface, agencies
            a measurable engagement layer, and viewers an experience worth their attention.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {CHECKPOINTS.map((item) => (
              <li key={item.text} className="flex items-start gap-2.5">
                <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center">
                  <Image src={tickIcon} alt="" className="h-4 w-4" aria-hidden />
                </span>
                <span
                  className={[
                    "leading-relaxed",
                    item.noWrapFrom === "sm" ? "sm:whitespace-nowrap" : "",
                  ].join(" ")}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: feature cards */}
        <div className="space-y-3 mt-16 lg:mt-18 lg:flex-[1.1]">
          {FEATURE_CARDS.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 rounded-2xl bg-white/90 px-6 lg:px-7 py-4 shadow-[0_22px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 backdrop-blur-sm"
            >
              <div className="mt-0.5 shrink-0">
                <Image src={card.icon} alt="" className="h-10 w-10" aria-hidden />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold leading-[1.3] text-slate-900">{card.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{card.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
