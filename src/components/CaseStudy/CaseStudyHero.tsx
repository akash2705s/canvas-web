"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import interactRateIcon from "@/assets/case_Studies/Hero/interact_rate.svg";
import avgEngageIcon from "@/assets/case_Studies/Hero/avg_engae.svg";
import tfiIcon from "@/assets/case_Studies/Hero/tfi.svg";
import intentLiftIcon from "@/assets/case_Studies/Hero/intent_lift.svg";

export function CaseStudyHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      <div className="pointer-events-none absolute inset-0">
        {/* Left yellow glow + circle */}
        <div
          className="absolute h-[220px] w-[220px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(252, 211, 77, 0.55)", top: 300, left: -60 }}
        />
        <div
          className="absolute h-[140px] w-[140px] rounded-full"
          style={{ backgroundColor: "rgba(252, 211, 77, 1)", opacity: 0.35, top: 380, left: 40 }}
        />

        {/* Right pink glow + circle aligned with card top-right */}
        <div
          className="absolute h-[260px] w-[260px] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(249, 168, 212, 0.55)", top: 0, right: -20 }}
        />
        <div
          className="absolute h-[200px] w-[200px] rounded-full"
          style={{ backgroundColor: "rgba(249, 168, 212, 1)", opacity: 0.35, top: 40, right: 20 }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* Left copy */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.7)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            <span>Live Case Study</span>
          </div>

          <h1 className="mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[46px] [font-family:var(--font-display)]">
            <span className="block">
              How Canvas drove a <span className="text-[rgba(249,115,22,1)]">26.2%</span> interaction
            </span>
            <span className="block">rate on CTV</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-[15px]">
            A live campaign showing how interactive ads capture real
            <br />
            viewer intent signals.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-[12px] leading-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-600 shadow-sm ring-1 ring-slate-200/70">
              <span className="font-normal text-slate-600">
                Partner: <span className="font-normal text-slate-800">OTT Streaming Platform</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-600 shadow-sm ring-1 ring-slate-200/70">
              <span className="font-normal text-slate-600">
                Goal: <span className="font-normal text-slate-800">Prove interactive CTV</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-600 shadow-sm ring-1 ring-slate-200/70">
              <span className="font-normal text-slate-600">
                Duration: <span className="font-normal text-slate-800">4-week campaign</span>
              </span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md"
            >
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-slate-900">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  View Live Demo
                </span>
                <span className="relative z-10 flex h-[28px] w-[28px] items-center justify-center rounded-[9px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <title>View live demo</title>
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Request Demo
              <span className="text-slate-400">→</span>
            </button>
          </div>
        </div>

        {/* Right: campaign card */}
        <div className="relative w-full max-w-[580px] lg:-mt-4">
          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_24px_72px_rgba(15,23,42,0.32)] ring-1 ring-slate-900/5">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <p className="text-[13px] font-semibold text-slate-900">Christmas Campaign 2024</p>
                <p className="mt-0.5 text-[11px] text-slate-500">OTT Streaming Platform · 4 Weeks</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                Completed
              </div>
            </div>

            {/* Top metrics */}
            <div className="grid grid-cols-3 gap-4 border-b border-slate-100 px-6 py-4 text-[11px]">
              <div className="text-center">
                <p
                  className="font-extrabold"
                  style={{ fontSize: 24, lineHeight: "24px", color: "rgba(249,115,22,1)" }}
                >
                  26.2%
                </p>
                <p className="mt-1 font-medium text-slate-600">Interaction Rate</p>
              </div>
              <div className="text-center">
                <p
                  className="font-extrabold"
                  style={{ fontSize: 24, lineHeight: "24px", color: "rgba(129,140,248,1)" }}
                >
                  14s+
                </p>
                <p className="mt-1 font-medium text-slate-600">Engagement</p>
              </div>
              <div className="text-center">
                <p
                  className="font-extrabold"
                  style={{ fontSize: 24, lineHeight: "24px", color: "rgba(79, 70, 229, 1)" }}
                >
                  6s+
                </p>
                <p className="mt-1 font-medium text-slate-600">Time to First Interaction</p>
              </div>
            </div>

            {/* Interaction breakdown */}
            <InteractionBreakdown />
          </div>
        </div>
      </div>

      {/* Bottom metric cards row */}
      <div className="relative mx-auto mt-2 flex max-w-6xl flex-col gap-4 px-6 pb-16 sm:px-10 sm:pb-20 lg:flex-row lg:gap-5">
        {[
          {
            icon: interactRateIcon,
            value: "26.2%",
            valueColor: "rgba(249,115,22,1)",
            lineColor: "rgba(249,115,22,1)",
            barColor: "rgba(251,191,36,0.7)",
            label: "Interaction rate",
            sublabel: "6×+ vs industry average",
            bgFrom: "rgba(251,191,36,0.08)",
            bgTo: "rgba(248,250,252,1)",
          },
          {
            icon: avgEngageIcon,
            value: "14s+",
            valueColor: "rgba(129,140,248,1)",
            lineColor: "rgba(129,140,248,1)",
            barColor: "rgba(191,219,254,0.9)",
            label: "Avg engagement duration",
            sublabel: "Per interactive session",
            bgFrom: "rgba(129,140,248,0.08)",
            bgTo: "rgba(248,250,252,1)",
          },
          {
            icon: tfiIcon,
            value: "6s+",
            valueColor: "rgba(79,70,229,1)",
            lineColor: "rgba(79,70,229,1)",
            barColor: "rgba(191,219,254,0.9)",
            label: "Time to first interaction",
            sublabel: "From ad start",
            bgFrom: "rgba(129,140,248,0.06)",
            bgTo: "rgba(248,250,252,1)",
          },
          {
            icon: intentLiftIcon,
            value: "3x",
            valueColor: "rgba(245,158,11,1)",
            lineColor: "rgba(245,158,11,1)",
            barColor: "rgba(254,215,170,0.9)",
            label: "Intent lift",
            sublabel: "Vs passive CTV benchmark",
            bgFrom: "rgba(252,211,77,0.12)",
            bgTo: "rgba(248,250,252,1)",
          },
        ].map((item) => {
          const isPrimary = item.value === "26.2%";
          return (
          <div
            key={item.label}
            className="relative h-[228px] w-[258px] rounded-[24px] border-[1.11px] border-white/70 bg-gradient-to-b from-white/95 to-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/70 backdrop-blur-sm"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px]">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, ${item.bgFrom}, ${item.bgTo})`,
                }}
              />
              {/* Top: icon + text */}
              <div className="relative px-5 pt-4 pb-1 sm:px-6 sm:pt-5 sm:pb-1">
                <div className="flex justify-center">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full shadow-sm ring-1"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        borderColor: "transparent",
                        boxShadow: "0 10px 25px rgba(15,23,42,0.12)",
                      }}
                    >
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full"
                        style={{
                          background:
                            item.value === "26.2%"
                              ? "rgba(251,191,36,0.25)"
                              : item.value === "14s+"
                                ? "rgba(129,140,248,0.20)"
                                : item.value === "6s+"
                                  ? "rgba(129,140,248,0.18)"
                                  : "rgba(252,211,77,0.25)",
                          borderRadius: "999px",
                        }}
                      >
                        <Image src={item.icon} alt="" className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                  <div className="mt-4 text-center">
                    <p
                      className="font-extrabold"
                      style={{
                        fontSize: isPrimary ? 32 : 24,
                        lineHeight: isPrimary ? "32px" : "24px",
                        color: item.valueColor,
                      }}
                    >
                      {item.value}
                    </p>
                    <p className={`mt-1 font-semibold text-slate-800 ${isPrimary ? "text-[14px]" : "text-[12px]"}`}>
                      {item.label}
                    </p>
                    <p className={`mt-1 text-slate-500 ${isPrimary ? "text-[12px]" : "text-[11px]"}`}>
                      {item.sublabel}
                    </p>
                  </div>
              </div>

              {/* Bottom: bar + line graph */}
              <div className="relative mt-auto px-3 pb-3 pt-1">
                <div className="h-20 w-full">
                  <svg
                    viewBox="0 0 200 96"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                    aria-hidden
                  >
                    <title>{`${item.label} mini chart`}</title>
                    {/* Bars – tightly packed, no gaps */}
                    <g fill={item.barColor ?? "rgba(251,191,36,0.8)"} opacity="0.9">
                        {[
                          { x: 4, h: 26 },
                          { x: 18, h: 34 },
                          { x: 32, h: 40 },
                          { x: 46, h: 50 },
                          { x: 60, h: 58 },
                          { x: 74, h: 50 },
                          { x: 88, h: 66 },
                          { x: 102, h: 60 },
                          { x: 116, h: 74 },
                          { x: 130, h: 68 },
                          { x: 144, h: 80 },
                          { x: 158, h: 72 },
                          { x: 172, h: 88 },
                          { x: 186, h: 80 },
                        ].map((bar) => (
                          <rect
                            key={bar.x}
                            x={bar.x}
                            y={96 - bar.h}
                            width="12"
                            height={bar.h}
                            rx="2"
                          />
                        ))}
                      </g>
                      {/* Line – sample points taken from bar tops */}
                      <path
                        d="M10,72 L24,64 L38,56 L52,46 L66,38 L80,46 L94,32 L108,38 L122,22 L136,28 L150,16 L164,24 L178,8 L196,16"
                        fill="none"
                        stroke={item.lineColor ?? "rgba(249,115,22,1)"}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.95"
                    />
                    </svg>
                </div>
              </div>

              {/* Bottom-right logo accent */}
              <div className="pointer-events-none absolute right-1 -bottom-2 opacity-70">
                <Image src={item.icon} alt="" className="h-14 w-14 rotate-6" />
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  );
}

function InteractionBreakdown() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  return (
    <div ref={ref} className="px-6 py-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        Interaction Breakdown
      </p>
      <div className="mt-3 space-y-2 text-[11px]">
        {[
          {
            label: "QR Code Scan",
            value: "38%",
            color: "bg-[rgba(79,70,229,1)]",
            valueColor: "rgba(79,70,229,1)",
            widthPercent: 92,
          },
          {
            label: "Learn More CTA",
            value: "29%",
            color: "bg-[rgba(249,115,22,1)]",
            valueColor: "rgba(249,115,22,1)",
            widthPercent: 72,
          },
          {
            label: "Store Locator",
            value: "22%",
            color: "bg-[rgba(129,140,248,1)]",
            valueColor: "rgba(129,140,248,1)",
            widthPercent: 54,
          },
          {
            label: "Product Browse",
            value: "11%",
            color: "bg-[rgba(252,211,77,1)]",
            valueColor: "rgba(252,211,77,1)",
            widthPercent: 32,
          },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between">
              <p className="font-medium text-slate-700">{row.label}</p>
              <p className="font-semibold" style={{ color: row.valueColor }}>
                {row.value}
              </p>
            </div>
            <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
              <motion.div
                className={`h-full rounded-full ${row.color}`}
                initial={{ width: 0 }}
                animate={{ width: inView ? `${row.widthPercent}%` : 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


