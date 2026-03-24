"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./PlatformCapabilitiesSection.css";

import capAi from "@/assets/platform/ai.svg";
import capSignals from "@/assets/platform/vis.svg";
import capAnalytics from "@/assets/platform/rta.svg";
import capRuntime from "@/assets/platform/zdr.svg";

type CardId = "ai-conversion" | "intent-signals" | "analytics" | "runtime";

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {text}
    </motion.span>
  );
}

function Counter({ value, delay }: { value: number; delay: number }) {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayValue((prev) => {
          if (prev < value) {
            return Math.min(prev + 2, value);
          }
          clearInterval(interval);
          return value;
        });
      }, 20);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return <span>{displayValue}%</span>;
}

function CardVisual({ id }: { id: CardId }) {
  if (id === "ai-conversion") {
    const rows = [
      { label: "QR Code CTA", value: 98, color: "bg-orange-400" },
      { label: "Learn More Btn", value: 94, color: "bg-[#6366F1]" },
      { label: "Product Overlay", value: 87, color: "bg-[#8B5CF6]" },
    ];

    return (
      <div className="mt-4 space-y-1.5 rounded-2xl bg-[#020420] px-2.5 py-2.5 text-[10px] text-slate-100 shadow-[0_14px_40px_rgba(59,130,246,0.5)] ring-1 ring-indigo-500/40">
        {rows.map((row, idx) => (
          <motion.div
            key={row.label}
            className="flex items-center justify-between rounded-full bg-white/5 px-2 py-1"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${row.color} shadow-[0_0_0_4px_rgba(255,255,255,0.08)]`}
              />
              <span className="text-[9px] text-slate-200">{row.label}</span>
            </div>
            <motion.span 
              className="text-[9px] font-semibold text-slate-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              <Counter value={row.value} delay={0.3 + idx * 0.15} />
            </motion.span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (id === "intent-signals") {
    return (
      <div className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[rgba(249,115,22,0.07)] px-4 py-3 ring-1 ring-[rgba(249,115,22,0.18)] shadow-[0_18px_55px_rgba(249,115,22,0.16)]">
        <div className="relative overflow-hidden rounded-2xl bg-white/80 px-4 pb-3 pt-3 ring-1 ring-zinc-100">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(244,63,94,0.0),rgba(249,115,22,0.10),rgba(234,179,8,0.08),rgba(244,63,94,0.0))]" />
            <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(24,24,27,0.05)_1px,transparent_1px),linear-gradient(to_top,rgba(24,24,27,0.05)_1px,transparent_1px)] [background-size:18px_18px]" />
          </div>

          <motion.div 
            className="relative flex items-end justify-between gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            {[32, 44, 38, 56, 48, 66, 74].map((v, index) => {
              const key = `bar-${index}-${v}`;
              return (
                <motion.div
                  key={key}
                  className="flex w-full items-end justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="relative h-14 w-2 rounded-full bg-zinc-200/40">
                    <motion.div
                      className="absolute inset-x-0 bottom-0 rounded-full bg-[linear-gradient(180deg,rgba(249,115,22,1)_0%,rgba(234,179,8,1)_100%)] shadow-[0_10px_22px_rgba(249,115,22,0.22)] transition-transform duration-500 ease-out [transform-origin:bottom] hover:scale-y-110"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${v}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "analytics") {
    const legend = [
      { label: "QR Scan", color: "bg-orange-400" },
      { label: "CTA Click", color: "bg-sky-300" },
      { label: "Explore", color: "bg-violet-400" },
    ];

    return (
      <div className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-b from-[#0B1027] via-[#080A1A] to-[#020617] px-3 py-3 text-[9px] text-violet-50 shadow-[0_18px_55px_rgba(79,70,229,0.45)] ring-1 ring-indigo-500/30">
        <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] px-3 py-3 ring-1 ring-white/10">
          <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_top,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:22px_18px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_85%_35%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(circle_at_40%_110%,rgba(249,115,22,0.18),transparent_60%)]" />

          <motion.svg
            className="relative h-14 w-full"
            viewBox="0 0 240 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <title>Signal chart</title>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F97316" />
                <stop offset="0.45" stopColor="#6366F1" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
              <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="rgba(99,102,241,0.35)" />
                <stop offset="1" stopColor="rgba(2,6,23,0)" />
              </linearGradient>
            </defs>

            <motion.path
              d="M0 44 C 18 40, 28 18, 46 22 C 64 26, 74 38, 92 30 C 110 22, 118 12, 138 18 C 158 24, 166 42, 186 34 C 206 26, 216 14, 240 18"
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 44 C 18 40, 28 18, 46 22 C 64 26, 74 38, 92 30 C 110 22, 118 12, 138 18 C 158 24, 166 42, 186 34 C 206 26, 216 14, 240 18 L240 56 L0 56 Z"
              fill="url(#fillGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {[
              { x: 46, y: 22, c: "#F97316" },
              { x: 92, y: 30, c: "#60A5FA" },
              { x: 138, y: 18, c: "#6366F1" },
              { x: 186, y: 34, c: "#A855F7" },
            ].map((p, idx) => (
              <motion.g 
                key={`${p.x}-${p.y}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              >
                <circle cx={p.x} cy={p.y} r="4.5" fill="rgba(255,255,255,0.10)" />
                <circle cx={p.x} cy={p.y} r="2.5" fill={p.c} />
              </motion.g>
            ))}
          </motion.svg>

          <motion.div 
            className="relative mt-2 flex items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {legend.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-[9px] text-violet-100/85">
                <span className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "runtime") {
    return (
      <motion.div 
        className="mt-4 rounded-2xl bg-[#020617] px-3 py-3 text-[10px] leading-4 text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.6)] ring-1 ring-slate-800/80"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="mb-2 flex items-center justify-between text-[9px] text-slate-400"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-1">
            <motion.span 
              className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-emerald-500/90"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              canvas-runtime.ts
            </motion.span>
          </span>
          <motion.span 
            className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[8px] font-medium text-emerald-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Live
          </motion.span>
        </motion.div>
        <motion.code 
          className="block rounded-xl bg-slate-900/70 px-3 py-2 font-mono text-[9px] leading-relaxed text-slate-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TypewriterText text="import {" delay={0.4} />
          <span className="text-amber-300">
            <TypewriterText text=" CanvasRuntime " delay={0.5} />
          </span>
          <TypewriterText text="} from" delay={0.65} />
          <br />
          <span className="text-emerald-300">
            <TypewriterText text='  "@canvas/ctv-sdk"' delay={0.8} />
          </span>
          <br />
          <br />
          <span className="text-[#22C55E]">
            <TypewriterText text={`// ✓ Ready — Canvas is live`} delay={1} />
          </span>
        </motion.code>
      </motion.div>
    );
  }

  return null;
}
const CARDS = [
  {
    id: "ai-conversion",
    icon: capAi,
    pillLabel: "AI-powered conversion",
    pillColor: "bg-[#8B5CF61A] text-[#8B5CF6]",
    title: "Video to interactive in seconds",
    body: "Upload any existing video creative. Canvas AI analyzes scene content and suggests interaction points — QR, CTA, product overlays — and converts it in seconds.",
    footerLabel: "↑ No rebuild required",
    footerTint: "bg-[#8B5CF61A] text-[#8B5CF6]",
  },
  {
    id: "intent-signals",
    icon: capSignals,
    pillLabel: "Viewer intent signals",
    pillColor: "bg-[rgba(249,115,22,0.08)] text-[rgba(249,115,22,1)]",
    title: "Real declared intent, not inferred data",
    body: "Every viewer interaction — QR scan, CTA click, product explore — becomes a measurable first-party signal. 26.2% interaction rate from real campaigns.",
    footerLabel: "↑ 26.2% avg interaction rate",
    footerTint: "bg-[rgba(249,115,22,0.08)] text-[rgba(249,115,22,1)]",
  },
  {
    id: "analytics",
    icon: capAnalytics,
    pillLabel: "Real-time analytics",
    pillColor: "bg-[#4F46E51A] text-[#4F46E5]",
    title: "Live signal dashboard for every campaign",
    body: "Track interaction events, engagement duration, and signal types as they happen. 6s+ avg time to interact, measurable in your dashboard.",
    footerLabel: "↑ 6s+ avg time to interact",
    footerTint: "bg-[#4F46E51A] text-[#4F46E5]",
  },
  {
    id: "runtime",
    icon: capRuntime,
    pillLabel: "Zero-disruption runtime",
    pillColor: "bg-[#EAB3081A] text-[#EAB308]",
    title: "Drop-in script, live in hours",
    body: "The Canvas runtime integrates alongside existing SSAI environments with a single lightweight script. No rebuilds, no new ad stack, compatible with every major CTV platform.",
    footerLabel: "↑ 1 script • SSAI compatible",
    footerTint: "bg-[#EAB3081A] text-[#EAB308]",
  },
];

export function PlatformCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f2ff] via-[#f7f4ff] to-[#f9f6ff] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[220px] w-[260px] rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[220px] w-[260px] rounded-full bg-blue-200/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5] shadow-sm ring-1 ring-indigo-100">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Platform capabilities
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Built for the interactive TV era
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[24px] bg-white/95 px-5 pb-5 pt-6 shadow-[0_26px_80px_rgba(15,23,42,0.13)] ring-1 ring-zinc-100/90"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[14px] bg-zinc-50 ring-1 ring-zinc-100">
                  <Image src={card.icon} alt="" className="h-10 w-10" />
                </span>
              </div>

              <div className="mt-4 inline-flex items-center rounded-full px-0 py-1">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] leading-[15px] font-bold tracking-[1px] uppercase ${card.pillColor}`}
                >
                  {card.pillLabel}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold leading-5 text-zinc-900">{card.title}</h3>
              <p className="mt-2 text-[12px] leading-5 text-zinc-600">{card.body}</p>
              <CardVisual id={card.id as CardId} />
              <div className="mt-auto pt-4">
                <div
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${card.footerTint}`}
                >
                  {card.footerLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

