"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import playbackSafetyIcon from "@/assets/Product/Enterprise-grade/ps.svg";
import crossPlatformIcon from "@/assets/Product/Enterprise-grade/cp.svg";
import runtime50kbIcon from "@/assets/Product/Enterprise-grade/50kb.svg";
import realtimeSignalsIcon from "@/assets/Product/Enterprise-grade/rts.svg";

type TabId = "creative" | "runtime" | "overlay" | "signals";

type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon: unknown;
  tint: string;
  accent: "orange" | "indigo" | "violet" | "amber";
  iconClassName?: string;
};

const TABS: { id: TabId; label: string }[] = [
  { id: "creative", label: "Your Ad Creative" },
  { id: "runtime", label: "Canvas Runtime" },
  { id: "overlay", label: "Interactive Overlay" },
  { id: "signals", label: "Intent Signals" },
];

const RUNTIME_CARDS: FeatureCard[] = [
  {
    id: "playback-safety",
    title: "Playback Safety",
    description:
      "Canvas runtime never interrupts ad playback. Overlay architecture is fully non-destructive — no ad fills affected.",
    icon: playbackSafetyIcon,
    tint: "bg-[linear-gradient(135deg,rgba(249,115,22,0.08)_0%,rgba(255,255,255,0.96)_58%,rgba(255,255,255,1)_100%)]",
    accent: "orange",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform",
    description:
      "Integration for Roku, Fire TV, Apple TV, Samsung, LG, iOS, and Android TV. Universal coverage — no rebuild.",
    icon: crossPlatformIcon,
    tint: "bg-[linear-gradient(135deg,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0.96)_58%,rgba(255,255,255,1)_100%)]",
    accent: "indigo",
  },
  {
    id: "50kb-runtime",
    title: "50KB Runtime",
    description:
      "Under 50KB JS footprint. Lightweight injection, zero performance impact on streaming apps or ad fill rates.",
    icon: runtime50kbIcon,
    tint: "bg-[linear-gradient(135deg,rgba(167,139,250,0.10)_0%,rgba(255,255,255,0.96)_58%,rgba(255,255,255,1)_100%)]",
    accent: "violet",
    iconClassName: "h-8 w-8",
  },
  {
    id: "realtime-signals",
    title: "Real-Time Signals",
    description:
      "Intent data delivered in real-time via webhook or the Canvas analytics dashboard. No batch delays.",
    icon: realtimeSignalsIcon,
    tint: "bg-[linear-gradient(135deg,rgba(234,179,8,0.10)_0%,rgba(255,255,255,0.96)_58%,rgba(255,255,255,1)_100%)]",
    accent: "amber",
  },
];

function CornerWedge({ accent }: { accent: FeatureCard["accent"] }) {
  const bg =
    accent === "orange"
      ? "bg-[rgba(249,115,22,0.14)]"
      : accent === "indigo"
        ? "bg-[rgba(79,70,229,0.14)]"
        : accent === "amber"
          ? "bg-[rgba(234,179,8,0.14)]"
          : "bg-[rgba(167,139,250,0.15)]";

  const stroke =
    accent === "orange"
      ? "stroke-[rgba(249,115,22,0.50)]"
      : accent === "indigo"
        ? "stroke-[rgba(79,70,229,0.50)]"
        : accent === "amber"
          ? "stroke-[rgba(234,179,8,0.52)]"
          : "stroke-[rgba(167,139,250,0.52)]";

  const dot =
    accent === "orange"
      ? "fill-[rgba(249,115,22,0.60)]"
      : accent === "indigo"
        ? "fill-[rgba(79,70,229,0.60)]"
        : accent === "amber"
          ? "fill-[rgba(234,179,8,0.62)]"
          : "fill-[rgba(167,139,250,0.62)]";

  return (
    <span
      className={[
        "pointer-events-none absolute right-0 top-0 h-[74%] w-[74%]",
        bg,
        "[clip-path:polygon(34%_0%,100%_0%,100%_70%)]",
      ].join(" ")}
      aria-hidden="true"
    >
      {/* Wedge-contained signal line */}
      <svg
        className={`absolute -right-2 -top-3 h-40 w-40 -scale-x-100 ${stroke}`}
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        {/* Thick "drop" line with dot (matches reference) */}
        <path d="M44 -6C40 14 40 30 44 56" strokeWidth="4.4" strokeLinecap="round" />
        <circle cx="44" cy="56" r="6.2" className={dot} />
      </svg>
    </span>
  );
}

function IconBadge({
  accent,
  children,
}: {
  accent: FeatureCard["accent"];
  children: React.ReactNode;
}) {
  const border =
    accent === "orange"
      ? "border-[rgba(249,115,22,0.18)]"
      : accent === "indigo"
        ? "border-[rgba(79,70,229,0.18)]"
        : accent === "amber"
          ? "border-[rgba(234,179,8,0.20)]"
          : "border-[rgba(167,139,250,0.22)]";

  const fill =
    accent === "orange"
      ? "bg-[rgba(249,115,22,0.10)]"
      : accent === "indigo"
        ? "bg-[rgba(79,70,229,0.10)]"
        : accent === "amber"
          ? "bg-[rgba(234,179,8,0.10)]"
          : "bg-[rgba(167,139,250,0.12)]";

  return (
    <span className="relative inline-flex h-12 w-12 items-center justify-center">
      <span
        className={[
          "absolute inset-0 rounded-[18px] border border-dashed bg-white/35",
          border,
        ].join(" ")}
      />
      <span
        className={[
          "relative flex h-[44px] w-[44px] items-center justify-center rounded-[16px] border shadow-[0_12px_26px_rgba(15,23,42,0.10)]",
          border,
          fill,
        ].join(" ")}
      >
        {children}
      </span>
    </span>
  );
}

function FallingSignals({ accent }: { accent: FeatureCard["accent"] }) {
  const stroke =
    accent === "orange"
      ? "stroke-[rgba(249,115,22,0.32)]"
      : accent === "indigo"
        ? "stroke-[rgba(79,70,229,0.32)]"
        : accent === "amber"
          ? "stroke-[rgba(234,179,8,0.34)]"
          : "stroke-[rgba(167,139,250,0.34)]";

  const dot =
    accent === "orange"
      ? "fill-[rgba(249,115,22,0.40)]"
      : accent === "indigo"
        ? "fill-[rgba(79,70,229,0.40)]"
        : accent === "amber"
          ? "fill-[rgba(234,179,8,0.42)]"
          : "fill-[rgba(167,139,250,0.42)]";

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full -scale-x-100 ${stroke}`}
      viewBox="0 0 320 260"
      fill="none"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      {/* Leading (was middle) line */}
      <path
        d="M44 -6C56 16 64 34 70 56C76 78 72 94 60 108"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="60" cy="108" r="4.4" className={dot} />

      {/* Second line */}
      <path
        d="M44 -6C98 18 130 48 142 78C154 108 146 126 124 142"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BottomLeftMarks({ accent }: { accent: FeatureCard["accent"] }) {
  const stroke =
    accent === "orange"
      ? "stroke-[rgba(249,115,22,0.20)]"
      : accent === "indigo"
        ? "stroke-[rgba(79,70,229,0.18)]"
        : accent === "amber"
          ? "stroke-[rgba(234,179,8,0.19)]"
          : "stroke-[rgba(167,139,250,0.20)]";

  return (
    <svg
      className="pointer-events-none absolute bottom-1 left-1 h-24 w-32 opacity-70"
      viewBox="0 0 180 140"
      fill="none"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      {/* short horizontal line */}
      <path d="M62 100H116" className={stroke} strokeWidth="3.0" strokeLinecap="round" />
      {/* diagonal slash */}
      <path d="M122 132L156 98" className={stroke} strokeWidth="4.2" strokeLinecap="round" />
    </svg>
  );
}

function PillTabs({
  value,
  onChange,
}: {
  value: TabId;
  onChange: (id: TabId) => void;
}) {
  return (
    <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
      {TABS.map((tab, index) => {
        const active = tab.id === value;
        return (
          <div key={tab.id} className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => onChange(tab.id)}
              className={[
                "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-[12px] font-semibold transition sm:px-5 sm:text-[13px]",
                "bg-white/80 text-slate-700 ring-1 ring-slate-200/80 shadow-[0_10px_22px_rgba(15,23,42,0.06)] hover:bg-white",
                active ? "text-white shadow-[0_12px_24px_rgba(79,70,229,0.22)]" : "",
              ].join(" ")}
            >
              {active ? (
                <motion.span
                  layoutId="product-enterprise-pill-active"
                  transition={{ type: "spring", stiffness: 520, damping: 42, mass: 0.6 }}
                  className="pointer-events-none absolute inset-0 rounded-full bg-[#4F46E5]"
                  aria-hidden
                />
              ) : null}
              <span
                className={[
                  "relative z-10 transition-colors",
                  active ? "text-white" : "text-slate-700",
                ].join(" ")}
              >
                {tab.label}
              </span>
              {active ? (
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_55%)]"
                  aria-hidden
                />
              ) : null}
            </button>
            {index < TABS.length - 1 ? (
              <span
                className="hidden select-none items-center text-[15px] font-semibold text-slate-300 sm:inline-flex"
                aria-hidden="true"
              >
                →
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function ProductEnterpriseGradeSection() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("runtime");

  useEffect(() => {
    const id = window.setInterval(() => {
      setTab((current) => {
        const idx = TABS.findIndex((t) => t.id === current);
        const next = TABS[(idx + 1) % TABS.length];
        return next?.id ?? "runtime";
      });
    }, 1500);

    return () => window.clearInterval(id);
  }, []);

  const cards = useMemo(() => {
    // Today the design mock is specifically for the Canvas Runtime view.
    // We keep the tab UI to match the screenshot exactly; other tabs reuse the same card grid for now.
    return RUNTIME_CARDS;
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-14 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl" />
        <div className="absolute right-16 bottom-14 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border-[0.56px] border-[rgba(79,70,229,0.15)] bg-[rgba(79,70,229,0.03)] px-5 py-1.5 text-sm font-semibold text-[rgba(79,70,229,1)] shadow-sm">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[rgba(79,70,229,1)]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            Enterprise-grade
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-[32px] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[40px] [font-family:var(--font-display)]">
            Built for streaming infrastructure
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas is engineered for the reliability and scale that premium streaming platforms demand.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const plusColor =
              card.accent === "orange"
                ? "text-[rgba(249,115,22,0.38)]"
                : card.accent === "indigo"
                  ? "text-[rgba(79,70,229,0.38)]"
                  : card.accent === "amber"
                    ? "text-[rgba(234,179,8,0.38)]"
                    : "text-[rgba(167,139,250,0.40)]";

            const content = (
              <motion.div
                key={card.id}
                className={[
                  "group relative overflow-hidden rounded-[22px] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/90 cursor-pointer transition-all duration-300",
                  card.tint,
                ].join(" ")}
                whileHover={{ scale: 1.01 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.9]">
                  <div className="absolute -left-12 -bottom-10 h-40 w-40 rounded-full bg-white/60 blur-2xl" />
                  <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/40 blur-2xl" />
                </div>

                <CornerWedge accent={card.accent} />
                <FallingSignals accent={card.accent} />
                <BottomLeftMarks accent={card.accent} />

                <span
                  className={`pointer-events-none absolute left-2 top-28 -translate-y-1/2 text-[26px] font-light leading-none ${plusColor}`}
                  aria-hidden="true"
                >
                  +
                </span>

                <motion.div
                  className="relative z-10 flex items-start gap-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <IconBadge accent={card.accent}>
                    <Image src={card.icon as never} alt="" className={card.iconClassName ?? "h-7 w-7"} />
                  </IconBadge>
                </motion.div>

                <div className="relative z-10 mt-4">
                  <h3 className="text-[15px] font-extrabold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">{card.description}</p>
                </div>

                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] group-hover:h-[3px] bg-[linear-gradient(90deg,rgba(249,115,22,0.0)_0%,rgba(234,179,8,0.0)_30%,rgba(79,70,229,0.0)_60%,rgba(167,139,250,0.0)_100%)]"
                  aria-hidden
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0.5 }}
                />
              </motion.div>
            );

            if (reduceMotion) return content;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, duration: 0.65, delay: 0.06 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -4,
                  filter: "blur(0px)",
                  boxShadow: "0 20px 40px rgba(79,70,229,0.10)",
                  scale: 1.01,
                }}
                whileTap={{ scale: 0.99 }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-2">
          <PillTabs value={tab} onChange={setTab} />
        </div>

        <AnimatePresence mode="wait">
          {/* Keep a tiny animated underline glow for the active tab, without changing the grid (matches mock behavior). */}
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none mx-auto mt-4 h-[1px] w-[min(720px,92%)] bg-[linear-gradient(90deg,rgba(249,115,22,0.0)_0%,rgba(234,179,8,0.18)_20%,rgba(79,70,229,0.22)_55%,rgba(167,139,250,0.0)_100%)]"
            aria-hidden
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

