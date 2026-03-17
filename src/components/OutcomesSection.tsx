"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

import agenciesIcon from "@/assets/who/agencies.svg";
import publishersIcon from "@/assets/who/publishers.svg";
import dspIcon from "@/assets/who/DSP.svg";
import tick1 from "@/assets/who/tick1.svg";
import tick2 from "@/assets/who/tick2.svg";
import tick3 from "@/assets/who/tick3.svg";

const cards = [
  {
    id: "agencies",
    eyebrow: "Agencies",
    subtitle: "Campaign differentiation",
    icon: agenciesIcon,
    tick: tick1,
    stat: "26.2%",
    statLabel: "interaction rate",
    bulletColor: "text-amber-500",
    body: "Launch differentiated CTV campaigns with measurable engagement. Use the Canvas Editor to transform existing video creatives into interactive ad units.",
    bullets: ["Interactive overlays", "AI-powered conversion", "Real-time intent signals"],
    quote: "“Canvas lets us offer our clients something no other format could — real viewer intent data.”",
  },
  {
    id: "publishers",
    eyebrow: "Publishers",
    subtitle: "Minimal integration",
    icon: publishersIcon,
    tick: tick2,
    stat: "1 script",
    statLabel: "integration",
    bulletColor: "text-indigo-500",
    body: "Enable interactive ad formats with minimal integration effort. The Canvas runtime works alongside your existing SSAI setup — no disruption, immediate value.",
    bullets: ["SSAI compatible", "All major CTV platforms", "Zero disruption"],
    quote: "“We enabled interactive inventory across all our apps in under a week.”",
  },
  {
    id: "dsp",
    eyebrow: "DSP / Ad Platforms",
    subtitle: "Premium inventory access",
    icon: dspIcon,
    tick: tick3,
    stat: "3x",
    statLabel: "intent signals",
    bulletColor: "text-violet-500",
    body: "Access signal-rich interactive CTV inventory. Offer advertisers premium placements with\nmeasurable intent data beyond standard impressions.",
    bullets: ["Rich intent data", "Premium inventory", "Audience insights"],
    quote: "“Interactive CTV signals are a completely new data layer we can offer buyers.”",
  },
];

export function OutcomesSection() {
  const [activeId, setActiveId] = useState<(typeof cards)[number]["id"]>("agencies");
  const active = useMemo(() => cards.find((c) => c.id === activeId) ?? cards[0], [activeId]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f9f5ff] via-[#f6f4ff] to-[#f4f3ff] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-120px] h-[320px] w-[320px] rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute left-1/2 top-[-160px] h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute -right-40 bottom-[-160px] h-[320px] w-[320px] rounded-full bg-violet-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-sm ring-1 ring-indigo-100">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Who Canvas Is For
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-[30px] font-extrabold tracking-tight text-zinc-900 sm:text-[34px]">
            Outcomes speak louder than words
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-zinc-600 sm:text-[14px]">
            Canvas works for every stakeholder in the CTV ecosystem — with clear,
            <br className="hidden sm:inline" /> measurable results for each.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.button
              key={card.id}
              type="button"
              className={[
                "relative flex h-full cursor-pointer flex-col rounded-[24px] bg-white/90 px-5 pb-5 pt-6 shadow-[0_28px_80px_rgba(15,23,42,0.18)] ring-1 transition",
                activeId === card.id ? "ring-zinc-200/90" : "ring-zinc-100/90 hover:ring-zinc-200/80",
              ].join(" ")}
              aria-pressed={activeId === card.id}
              onClick={() => setActiveId(card.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              animate={activeId === card.id ? { y: -6, scale: 1.01 } : { y: 0, scale: 1 }}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-[47.995px] w-[47.995px] items-center justify-center rounded-[16px] bg-zinc-50 pr-[0.01px] ring-1 ring-zinc-100">
                    <Image src={card.icon} alt="" className="h-10 w-10" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-zinc-800">{card.eyebrow}</p>
                    <p className="mt-0.5 text-[11px] text-zinc-400">{card.subtitle}</p>
                  </div>
                </div>
              </div>

              <div
                className={[
                  "mt-4 inline-flex items-baseline rounded-[18px] px-4 py-2.5",
                  card.id === "agencies"
                    ? "bg-[rgba(249,115,22,0.1)]"
                    : card.id === "publishers"
                      ? "bg-[rgba(79,70,229,0.1)]"
                      : "bg-[rgba(139,92,246,0.1)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "text-2xl font-extrabold",
                    card.id === "agencies" ? "text-[rgba(249,115,22,1)]" : card.bulletColor,
                  ].join(" ")}
                >
                  {card.stat}
                </span>
                <span
                  className={[
                    "ml-2 text-[11px] font-medium",
                    card.id === "agencies"
                      ? "text-[rgba(249,115,22,1)]"
                      : card.id === "publishers"
                        ? "text-[rgba(79,70,229,1)]"
                        : "text-[rgba(139,92,246,1)]",
                  ].join(" ")}
                >
                  {card.statLabel}
                </span>
              </div>

              <p className="mt-4 whitespace-pre-line text-[13px] leading-6 text-zinc-600">{card.body}</p>

              <ul className="mt-4 space-y-1.5 text-[12px] leading-5 text-zinc-600">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Image src={card.tick} alt="" className="h-4 w-4" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                className={[
                  "mt-5 rounded-[14px] px-3 py-2 text-[11px] leading-5 text-zinc-600 border-l-2",
                  card.id === "agencies"
                    ? "border-l-[rgba(249,115,22,0.9)] bg-[rgba(249,115,22,0.06)]"
                    : card.id === "publishers"
                      ? "border-l-[rgba(79,70,229,0.9)] bg-[rgba(79,70,229,0.06)]"
                      : "border-l-[rgba(139,92,246,0.9)] bg-[rgba(139,92,246,0.06)]",
                ].join(" ")}
              >
                <motion.span
                  initial={false}
                  animate={{ opacity: activeId === card.id ? 1 : 0.75 }}
                  transition={{ duration: 0.25 }}
                >
                  {card.quote}
                </motion.span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <RequestDemoTrigger
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] via-[#22C55E] to-[#6366F1] p-[2px] shadow-sm"
          >
            <span className="relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-zinc-900">
              <span className="pointer-events-none absolute inset-[-1px] origin-right scale-x-0 bg-black transition-transform duration-300 ease-out will-change-transform group-hover:scale-x-[1.02]" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                See How Canvas Fits Your Team
              </span>
              <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <title>Arrow right</title>
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </RequestDemoTrigger>
        </div>

        {/* Micro-feedback for selection (screen readers + subtle UX) */}
        <p className="sr-only" aria-live="polite">
          Active card: {active.eyebrow}
        </p>
      </div>
    </section>
  );
}

