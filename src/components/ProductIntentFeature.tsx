"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import avgSdIcon from "../assets/Product/runtime/avg_sd.svg";
import ctaIcon from "../assets/Product/runtime/cta.svg";
import productIcon from "../assets/Product/runtime/product.svg";
import qrIcon from "../assets/Product/runtime/qr.svg";
import signalsIcon from "../assets/Product/runtime/signals.svg";
import solIcon from "../assets/Product/runtime/sol.svg";
import tickIcon2 from "../assets/Product/runtime/tick2.png";

function useCountUp(target: number, inView: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(target * progress);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, target, durationMs]);

  return value;
}

export function ProductIntentFeature() {
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const metricsInView = useInView(metricsRef, { amount: 0.4, once: true });
  const chartInView = useInView(chartRef, { amount: 0.5, once: true });
  const chartControls = useAnimation();

  const rateValue = useCountUp(26.2, metricsInView);
  const impressionsValue = useCountUp(2.5, metricsInView);
  const liftValue = useCountUp(3, metricsInView);

  useEffect(() => {
    if (chartInView) {
      chartControls.start({ pathLength: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } });
    }
  }, [chartInView, chartControls]);

  return (
    <section className="relative overflow-hidden">


      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:py-20">
        {/* Left copy */}
        <div className="max-w-xl lg:pr-10">
          <p className="mb-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "rgba(167, 139, 250, 0.06)", color: "rgba(167, 139, 250, 1)" }}>
            03 · Intent Signals
          </p>
          <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.04em] text-slate-900 sm:text-[36px] lg:text-[40px] [font-family:var(--font-display)]">
            <span className="block">
              Capture <span className="text-[rgba(167,139,250,1)]">declared</span>
            </span>
            <span className="block">
              <span className="text-[rgba(167,139,250,1)]">viewer intent</span> in real time
            </span>
          </h2>
          <p className="mt-4 text-sm text-[rgba(106,114,130,1)] sm:text-base">
            This is the moat. Every viewer interaction — QR scan, CTA click, product exploration, save-for-later —
            becomes a measurable first-party intent signal. Not inferred behavior. Declared intent, captured live.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {[
              {
                title: "QR scans & CTA clicks",
                body: "The highest-confidence intent signals in CTV",
              },
              {
                title: "Product explores & save for later",
                body: "Rich engagement data no passive ad can capture",
              },
              {
                title: "Session duration tracking",
                body: "14s+ average engagement per interactive session",
              },
              {
                title: "26x more signals vs passive CTV",
                body: "Real-time delivery via dashboard or webhook",
              },
            ].map((item, idx) => (
              <motion.li
                key={item.title}
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.8 }}
                whileHover={{ x: 8 }}
              >
                <span className="mt-[4px]">
                  <Image src={tickIcon2} alt="" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                  <span className="block text-[13px] text-[rgba(106,114,130,1)]">{item.body}</span>
                </span>
              </motion.li>
            ))}
          </ul>

          <Link
            href="/blog/turning-passive-ctv-ads-into-active-experiences"
            className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
          >
            <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 whitespace-nowrap">
              <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                Explore Analytics
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
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        </div>

        {/* Right: dashboard replica */}
        <div className="relative w-full max-w-[640px] lg:flex-[1.1]">
          <div className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.4)] ring-1 ring-slate-200/70 px-6 py-5">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Intent Signal Dashboard</p>
                <p className="text-[11px] text-slate-400">Declared viewer intent · Real-time</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live
              </div>
            </div>

            {/* Top metrics */}
            <div
              ref={metricsRef}
              className="mt-5 grid grid-cols-3 gap-4 border-b border-slate-100 pb-4 text-[11px]"
            >
              <div>
                <p className="text-[22px] font-bold" style={{ color: "rgba(249, 115, 22, 1)" }}>
                  {rateValue.toFixed(1)}%
                </p>
                <p className="mt-1 font-medium text-slate-700">Interaction Rate</p>
              </div>
              <div>
                <p className="text-[22px] font-bold" style={{ color: "rgba(79, 70, 229, 1)" }}>
                  {impressionsValue.toFixed(1)}M+
                </p>
                <p className="mt-1 font-medium text-slate-700">Impressions Served</p>
              </div>
              <div>
                <p className="text-[22px] font-bold" style={{ color: "rgba(167, 139, 250, 1)" }}>
                  {liftValue.toFixed(1).replace(".0", "")}x
                </p>
                <p className="mt-1 font-medium text-slate-700">vs Passive CTV</p>
              </div>
            </div>

            {/* Signal breakdown */}
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Signal Breakdown
              </p>
              <div className="mt-3 space-y-2.5 text-[11px]">
                {[
                  {
                    label: "QR Code Scans",
                    color: "bg-amber-400",
                    iconBg: "rgba(249,115,22,0.14)",
                    valueColor: "rgba(249,115,22,1)",
                    deltaColor: "rgba(249,115,22,1)",
                    deltaBg: "rgba(249,115,22,0.06)",
                    widthPercent: 92,
                    value: "4,821",
                    delta: "+34%",
                    icon: qrIcon,
                  },
                  {
                    label: "CTA Clicks",
                    color: "bg-[rgba(129,140,248,1)]",
                    iconBg: "rgba(129,140,248,0.14)",
                    valueColor: "rgba(129,140,248,1)",
                    deltaColor: "rgba(129,140,248,1)",
                    deltaBg: "rgba(129,140,248,0.08)",
                    widthPercent: 78,
                    value: "2,340",
                    delta: "+21%",
                    icon: ctaIcon,
                  },
                  {
                    label: "Product Explores",
                    color: "bg-[rgba(167,139,250,1)]",
                    iconBg: "rgba(167,139,250,0.14)",
                    valueColor: "rgba(167,139,250,1)",
                    deltaColor: "rgba(167,139,250,1)",
                    deltaBg: "rgba(167,139,250,0.08)",
                    widthPercent: 64,
                    value: "1,876",
                    delta: "+18%",
                    icon: productIcon,
                  },
                  {
                    label: "Save for Later",
                    color: "bg-amber-300",
                    iconBg: "rgba(251,191,36,0.2)",
                    valueColor: "rgba(245,158,11,1)",
                    deltaColor: "rgba(245,158,11,1)",
                    deltaBg: "rgba(251,191,36,0.18)",
                    widthPercent: 52,
                    value: "942",
                    delta: "+12%",
                    icon: solIcon,
                  },
                  {
                    label: "Avg Session Duration",
                    color: "bg-[rgba(129,140,248,1)]",
                    iconBg: "rgba(79,70,229,0.12)",
                    valueColor: "rgba(79,70,229,1)",
                    deltaColor: "rgba(79,70,229,1)",
                    deltaBg: "rgba(79,70,229,0.08)",
                    widthPercent: 70,
                    value: "14.2s",
                    delta: "+8s vs passive",
                    icon: avgSdIcon,
                  },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: row.iconBg }}
                    >
                      <Image src={row.icon} alt="" className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <p className="font-medium text-slate-800">{row.label}</p>
                        <p className="text-[11px] font-semibold" style={{ color: row.valueColor }}>
                          {row.value}{" "}
                          <span
                            className="ml-1 rounded-full px-1.5 py-[1px] text-[10px]"
                            style={{
                              color: row.deltaColor ?? "rgb(22,163,74)",
                              backgroundColor: row.deltaBg ?? "rgba(16,185,129,0.08)",
                            }}
                          >
                            {row.delta}
                          </span>
                        </p>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100">
                        <motion.div
                          className={`h-full rounded-full ${row.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: metricsInView ? `${row.widthPercent}%` : 0 }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interaction over time */}
            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Interaction events over time
              </p>
              <div
                ref={chartRef}
                className="mt-3 h-20 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/95 px-3 py-2"
              >
                <svg
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="intent-line-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="40%" stopColor="#EC4899" />
                      <stop offset="70%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                    <linearGradient id="intent-area-fill" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
                      <stop offset="50%" stopColor="rgba(168,85,247,0.08)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                    </linearGradient>
                    <linearGradient id="intent-bar-fill" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(30,41,59,0.9)" />
                      <stop offset="100%" stopColor="rgba(71,85,105,0.4)" />
                    </linearGradient>
                    <linearGradient id="intent-bar-orange" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(249,115,22,0.5)" />
                      <stop offset="100%" stopColor="rgba(249,115,22,0.15)" />
                    </linearGradient>
                    <linearGradient id="intent-bar-indigo" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(79,70,229,0.5)" />
                      <stop offset="100%" stopColor="rgba(79,70,229,0.15)" />
                    </linearGradient>
                    <linearGradient id="intent-bar-purple" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(167,139,250,0.5)" />
                      <stop offset="100%" stopColor="rgba(167,139,250,0.15)" />
                    </linearGradient>
                  </defs>
                  {/* Vertical bars – colors cycle orange / indigo / purple to match breakdown */}
                  {[
                    { x: 4, h: 22, fill: "url(#intent-bar-orange)" },
                    { x: 24, h: 38, fill: "url(#intent-bar-orange)" },
                    { x: 44, h: 18, fill: "url(#intent-bar-indigo)" },
                    { x: 64, h: 32, fill: "url(#intent-bar-indigo)" },
                    { x: 84, h: 22, fill: "url(#intent-bar-purple)" },
                    { x: 104, h: 36, fill: "url(#intent-bar-purple)" },
                    { x: 124, h: 24, fill: "url(#intent-bar-orange)" },
                    { x: 144, h: 34, fill: "url(#intent-bar-indigo)" },
                    { x: 164, h: 20, fill: "url(#intent-bar-indigo)" },
                    { x: 184, h: 12, fill: "url(#intent-bar-purple)" },
                  ].map((bar) => (
                    <rect
                      key={bar.x}
                      x={bar.x}
                      y={60 - bar.h}
                      width="14"
                      height={bar.h}
                      rx="2"
                      fill={bar.fill}
                    />
                  ))}
                  {/* Area fill under line */}
                  <path
                    d="M0,42 C15,28 30,45 50,22 C70,42 85,25 100,38 C115,24 130,40 150,26 C165,38 180,20 200,10 L200,60 L0,60 Z"
                    fill="url(#intent-area-fill)"
                  />
                  {/* Single gradient line – up, down, up, down, ends high */}
                  <motion.path
                    d="M0,42 C15,28 30,45 50,22 C70,42 85,25 100,38 C115,24 130,40 150,26 C165,38 180,20 200,10"
                    fill="none"
                    stroke="url(#intent-line-gradient)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={chartControls}
                  />
                </svg>
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] text-slate-600" style={{ backgroundColor: "rgba(79, 70, 229, 0.05)" }}>
                <Image src={signalsIcon} alt="" className="h-4 w-4 shrink-0 opacity-90" />
                <span>
                  <span className="font-semibold" style={{ color: "rgba(79, 70, 229, 1)" }}>26x more signals</span>{" "}
                  than passive CTV benchmarks — declared intent, not inferred behavior.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

