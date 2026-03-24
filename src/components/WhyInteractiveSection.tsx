"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import whyCtv from "@/assets/why/ctv.svg";
import whyBrands from "@/assets/why/brands.svg";
import whyIfs from "@/assets/why/ifs.svg";

type CardConfig = {
  id: string;
  icon: any;
  statValue: number;
  statSuffix: string;
  statLabel: string;
  title: string;
  body: string;
  barColor: string;
  statColor: string;
  highlight: string;
};

const CARDS: CardConfig[] = [
  {
    id: "ctv-passive",
    icon: whyCtv,
    statValue: 72,
    statSuffix: "%",
    statLabel: "SKIP OR IGNORE PASSIVE ADS",
    title: "CTV Attention Is Passive",
    body: "Most streaming ads are still one-way. Viewers skip, ignore, or tune out — leaving brands with impressions but no real signal of intent.",
    barColor: "bg-[rgba(249,115,22,0.9)]",
    statColor: "text-[rgba(249,115,22,1)]",
    highlight: "bg-[radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.22),transparent_60%)]",
  },
  {
    id: "brands-need",
    icon: whyBrands,
    statValue: 32,
    statSuffix: "B",
    statLabel: "CTV AD SPEND WITH ZERO ENGAGEMENT DATA",
    title: "Brands Need Measurable Engagement",
    body: "Impression data alone doesn’t tell brands what viewers care about. Without interaction signals, CTV budgets are flying blind.",
    barColor: "bg-[rgba(79,70,229,0.9)]",
    statColor: "text-[rgba(79,70,229,1)]",
    highlight: "bg-[radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.22),transparent_60%)]",
  },
  {
    id: "interactive-formats",
    icon: whyIfs,
    statValue: 26,
    statSuffix: "×",
    statLabel: "MORE SIGNALS VS PASSIVE FORMATS",
    title: "Interactive Formats Unlock First-Party Signals",
    body: "Canvas turns every ad into a live signal-capture surface — QR scans, CTAs, product explores. Declared intent, not inferred behavior.",
    barColor: "bg-[rgba(139,92,246,0.9)]",
    statColor: "text-[rgba(139,92,246,1)]",
    highlight: "bg-[radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.22),transparent_60%)]",
  },
];

function AnimatedStat({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { amount: 0.7, once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  const decimals = Number.isInteger(value) ? 0 : 1;

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function WhyInteractiveSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f4ff] via-[#f6f0ff] to-[#f5edff] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[220px] w-[260px] rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute -bottom-36 right-0 h-[220px] w-[260px] rounded-full bg-pink-200/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5] shadow-sm ring-1 ring-indigo-100">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Why Interactive CTV Now
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            CTV ads were built for impressions.
            <br className="hidden sm:inline" />
            <span className="text-[#4F46E5]"> Brands now need intent.</span>
          </h2>
        </div>

        <motion.div
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              className="relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white/95 px-5 pb-5 pt-6 shadow-[0_26px_80px_rgba(15,23,42,0.13)] ring-1 ring-zinc-100/90"
              variants={{
                hidden: { opacity: 0, y: -60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <div className={`pointer-events-none absolute inset-0 ${card.highlight}`} />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[14px] bg-zinc-50 ring-1 ring-zinc-100">
                  <Image src={card.icon} alt="" className="h-10 w-10" />
                </span>
                <div className="text-right">
                  <AnimatedStat
                    value={card.statValue}
                    suffix={card.statSuffix}
                    className={`text-[24px] font-extrabold tracking-tight sm:text-[26px] ${card.statColor}`}
                  />
                  <p className="mt-0.5 text-[10px] font-semibold leading-[15px] tracking-[0.25px] uppercase text-right text-[#99A1AF]">
                    {card.statLabel}
                  </p>
                </div>
              </div>

              <h3
                className={[
                  "mt-4 text-[14px] font-semibold leading-5 text-zinc-900 sm:text-[15px]",
                  card.id === "interactive-formats" ? "whitespace-nowrap" : "",
                ].join(" ")}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-[12px] leading-5 text-zinc-600">{card.body}</p>

              <motion.div
                className={`mt-4 h-[2px] w-full origin-left rounded-full ${card.barColor}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

