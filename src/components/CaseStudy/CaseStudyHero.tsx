"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import interactRateIcon from "@/assets/case_Studies/Hero/interact_rate.svg";
import avgEngageIcon from "@/assets/case_Studies/Hero/avg_engae.svg";
import tfiIcon from "@/assets/case_Studies/Hero/tfi.svg";
import intentLiftIcon from "@/assets/case_Studies/Hero/intent_lift.svg";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

function useCountUp(target: number, inView: boolean, durationMs = 1200, replayToken: number) {
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const prevReplayRef = useRef(replayToken);

  useEffect(() => {
    const replayChanged = prevReplayRef.current !== replayToken;
    prevReplayRef.current = replayToken;

    if (replayChanged) {
      hasAnimatedRef.current = false;
      setValue(0);
    }

    if (!inView) {
      hasAnimatedRef.current = false;
      setValue(0);
      return;
    }

    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(target * progress);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, target, durationMs, replayToken]);

  return inView ? value : 0;
}

export function CaseStudyHero() {
  const [hoveredMetricId, setHoveredMetricId] = useState<string | null>(null);
  const [replayToken, setReplayToken] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { amount: 0.5, once: true });

  const interactionRate = useCountUp(26.2, cardInView, 1200, replayToken);
  const engagementTime = useCountUp(14, cardInView, 1000, replayToken);
  const timeToFirst = useCountUp(6, cardInView, 800, replayToken);

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
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur"
            initial={{ opacity: 0, y: 10, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.7)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            <span>Live Case Study</span>
          </motion.div>

          <motion.h1
            className="mt-5 text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[46px] [font-family:var(--font-display)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            {[
              { key: "line-1", content: "How Canvas drove a" },
              {
                key: "line-2",
                content: (
                  <>
                    <span className="text-[rgba(249,115,22,1)]">26.2%</span> interaction
                  </>
                ),
              },
              { key: "line-3", content: "rate on CTV" },
            ].map((line, index) => (
              <motion.span
                key={line.key}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(16px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.9,
                      delay: 0.1 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="block will-change-transform"
              >
                {line.content}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-lg text-sm text-slate-600 sm:text-[15px]"
            initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            A live campaign showing how interactive ads capture real
            <br />
            viewer intent signals.
          </motion.p>

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
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <RequestDemoTrigger className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md">
                <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-slate-900">
                  <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    Request Demo
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
                      <title>Request demo</title>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </RequestDemoTrigger>
            </motion.div>

            <motion.button
              type="button"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[rgb(192,192,192)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md"
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-black">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  View Live Demo
                </span>
                <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgb(192,192,192)] text-black transition group-hover:text-white">
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
            </motion.button>
          </div>
        </div>

        {/* Right: campaign card */}
        <div className="relative w-full max-w-[580px] lg:-mt-4" ref={cardRef}>
          <motion.button
            type="button"
            className="block w-full text-left relative overflow-hidden rounded-[24px] bg-white shadow-[0_24px_72px_rgba(15,23,42,0.32)] ring-1 ring-slate-900/5"
            data-interaction-zone="custom-card"
            data-cursor="hover"
            data-cursor-label="Click to interact"
            onClick={() => setReplayToken((v) => v + 1)}
          >
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
                <motion.p
                  key={`interaction-rate-number-${replayToken}`}
                  className="font-extrabold"
                  style={{ fontSize: 24, lineHeight: "24px", color: "rgba(249,115,22,1)" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {interactionRate.toFixed(1)}%
                </motion.p>
                <motion.p
                  key={`interaction-rate-label-${replayToken}`}
                  className="mt-1 font-medium text-slate-600"
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Interaction Rate
                </motion.p>
              </div>
              <div className="text-center">
                <motion.p
                  key={`engagement-time-number-${replayToken}`}
                  className="font-extrabold"
                  style={{ fontSize: 24, lineHeight: "24px", color: "rgba(129,140,248,1)" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  {engagementTime.toFixed(0)}s+
                </motion.p>
                <motion.p
                  key={`engagement-time-label-${replayToken}`}
                  className="mt-1 font-medium text-slate-600"
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  Engagement
                </motion.p>
              </div>
              <div className="text-center">
                <motion.p
                  key={`time-to-first-number-${replayToken}`}
                  className="font-extrabold"
                  style={{ fontSize: 24, lineHeight: "24px", color: "rgba(79, 70, 229, 1)" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {timeToFirst.toFixed(0)}s+
                </motion.p>
                <motion.p
                  key={`time-to-first-label-${replayToken}`}
                  className="mt-1 font-medium text-slate-600"
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Time to First Interaction
                </motion.p>
              </div>
            </div>

            {/* Interaction breakdown */}
            <InteractionBreakdown key={replayToken} isRevealed={cardInView} />
          </motion.button>
        </div>
      </div>

      {/* Bottom metric cards row */}
      <div className="relative mx-auto mt-2 flex max-w-6xl flex-col items-center gap-4 px-6 pb-16 sm:px-10 sm:pb-20 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-5">
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
          const barFill = item.lineColor.replace("1)", "0.20)");
          const lineStrokeIdle = item.lineColor.replace("1)", "0.45)");
          const id = item.label;
          const isActive = hoveredMetricId === id;
          return (
            <motion.div
              key={item.label}
              data-cursor="hover"
              className="h-[182px] w-[198px] shrink-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99, y: -2 }}
              onMouseEnter={() => setHoveredMetricId(id)}
              onMouseLeave={() => setHoveredMetricId(null)}
              onFocus={() => setHoveredMetricId(id)}
              onBlur={() => setHoveredMetricId(null)}
              tabIndex={0}
            >
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-zinc-100/90 bg-white/90 shadow-[0_20px_54px_rgba(15,23,42,0.14)] transition-[filter,opacity] duration-200 ease-out"
                style={
                  hoveredMetricId && hoveredMetricId !== id
                    ? { opacity: 0.6, filter: "blur(2px)" }
                    : undefined
                }
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ backgroundImage: `linear-gradient(180deg, ${item.bgFrom}, ${item.bgTo})` }}
                />

                <div className="relative px-5 pt-4 pb-0 sm:px-6 sm:pt-5 sm:pb-0">
                  <div className="text-center">
                    <p
                      className="font-extrabold text-[42px] leading-[42px] tracking-[-1.1px] text-center"
                      style={{ color: item.lineColor }}
                    >
                      {item.value}
                    </p>
                    <p className="mt-2 text-center text-[13px] font-semibold leading-[18px] tracking-[0px] text-slate-800">
                      {item.label}
                    </p>
                    <p className="mt-1 text-center text-[11px] font-normal leading-[15px] tracking-[0px] text-[rgba(153,161,175,1)]">
                      {item.sublabel}
                    </p>
                  </div>
                </div>

                <div
                  className={[
                    "relative mt-auto px-3 pb-0 pt-0 -translate-y-[18px] transition-opacity duration-200 ease-linear",
                    isActive ? "opacity-[0.85]" : "opacity-[0.55]",
                  ].join(" ")}
                >
                  <div className="h-16 w-full">
                    <svg viewBox="0 0 200 96" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
                      <title>Mini chart</title>
                      <g fill={barFill} opacity="0.9">
                        {[
                          { x: 4, h: 16 },
                          { x: 18, h: 22 },
                          { x: 32, h: 26 },
                          { x: 46, h: 38 },
                          { x: 60, h: 44 },
                          { x: 74, h: 38 },
                          { x: 88, h: 50 },
                          { x: 102, h: 46 },
                          { x: 116, h: 58 },
                          { x: 130, h: 54 },
                          { x: 144, h: 68 },
                          { x: 158, h: 62 },
                          { x: 172, h: 76 },
                          { x: 186, h: 70 },
                        ].map((bar) => (
                          <rect key={bar.x} x={bar.x} y={96 - bar.h} width="12" height={bar.h} rx="2" />
                        ))}
                      </g>
                      <motion.path
                        d="M10,78 L24,72 L38,68 L52,58 L66,52 L80,58 L94,46 L108,50 L122,38 L136,42 L150,28 L164,34 L178,20 L192,26"
                        fill="none"
                        stroke={isActive ? item.lineColor : lineStrokeIdle}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="1"
                        strokeDasharray="1"
                        initial={{ opacity: 0.22, strokeDashoffset: 1 }}
                        animate={{
                          opacity: isActive ? 0.9 : 0.42,
                          strokeDashoffset: isActive ? [1, 0] : 1,
                        }}
                        transition={{
                          opacity: { duration: 0.18, ease: "linear" },
                          strokeDashoffset: { duration: 0.65, ease: "linear" },
                        }}
                      />
                    </svg>
                  </div>
                </div>

                <motion.div
                  className={[
                    "pointer-events-none absolute right-1 h-14 w-14 rotate-6",
                    item.label === "Avg engagement duration" ? "bottom-1" : "bottom-2",
                  ].join(" ")}
                  initial={{ opacity: 0.18, y: 6, scale: 0.98 }}
                  animate={{
                    opacity: isActive ? 0.58 : 0.18,
                    y: isActive ? 0 : 6,
                    scale: isActive ? 1.02 : 0.98,
                  }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={item.icon} alt="" className="h-14 w-14" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function InteractionBreakdown({ isRevealed }: { isRevealed: boolean }) {
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
                animate={{ width: isRevealed && inView ? `${row.widthPercent}%` : 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


