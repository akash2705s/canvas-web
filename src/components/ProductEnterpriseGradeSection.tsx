"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import runtime50kbIcon from "@/assets/Product/Enterprise-grade/50kb.svg";
import binary50kbIcon from "@/assets/Product/Enterprise-grade/50kb_binary.svg";
import bgPlayback from "@/assets/Product/Enterprise-grade/bg_playbac.svg";
import crossPlatformIcon from "@/assets/Product/Enterprise-grade/cp.svg";
import jsIcon from "@/assets/Product/Enterprise-grade/js.svg";
import lessThanIcon from "@/assets/Product/Enterprise-grade/lessthan.svg";
import mobileIcon from "@/assets/Product/Enterprise-grade/mobile.svg";
import monitorIcon from "@/assets/Product/Enterprise-grade/monitor.svg";
import playbackSafetyIcon from "@/assets/Product/Enterprise-grade/ps.svg";
import realtimeSignalsIcon from "@/assets/Product/Enterprise-grade/rts.svg";
import signalCardSvg from "@/assets/Product/Enterprise-grade/signal.svg";
import tabIcon from "@/assets/Product/Enterprise-grade/tab.svg";

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

// Accent color configuration
const ACCENT_CONFIG = {
  orange: {
    bg: "bg-[rgba(249,115,22,0.14)]",
    border: "border-[rgba(249,115,22,0.18)]",
    fill: "bg-[rgba(249,115,22,0.10)]",
    rgb: "249,115,22",
    plus: "text-[rgba(249,115,22,0.38)]",
  },
  indigo: {
    bg: "bg-[rgba(79,70,229,0.14)]",
    border: "border-[rgba(79,70,229,0.18)]",
    fill: "bg-[rgba(79,70,229,0.10)]",
    rgb: "79,70,229",
    plus: "text-[rgba(79,70,229,0.38)]",
  },
  violet: {
    bg: "bg-[rgba(167,139,250,0.15)]",
    border: "border-[rgba(167,139,250,0.22)]",
    fill: "bg-[rgba(167,139,250,0.12)]",
    rgb: "167,139,250",
    plus: "text-[rgba(167,139,250,0.40)]",
  },
  amber: {
    bg: "bg-[rgba(234,179,8,0.14)]",
    border: "border-[rgba(234,179,8,0.20)]",
    fill: "bg-[rgba(234,179,8,0.10)]",
    rgb: "234,179,8",
    plus: "text-[rgba(234,179,8,0.38)]",
  },
} as const;

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
    tint: "bg-transparent",
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
  const bg = ACCENT_CONFIG[accent].bg;

  return (
    <span
      className={[
        "pointer-events-none absolute right-0 top-0 h-[74%] w-[74%]",
        bg,
        "[clip-path:polygon(34%_0%,100%_0%,100%_70%)]",
      ].join(" ")}
      aria-hidden="true"
    />
  );
}

function IconBadge({
  accent,
  children,
}: {
  accent: FeatureCard["accent"];
  children: ReactNode;
}) {
  const border = ACCENT_CONFIG[accent].border;
  const fill = ACCENT_CONFIG[accent].fill;

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
                active
                  ? "text-white shadow-[0_12px_24px_rgba(79,70,229,0.22)]"
                  : "",
              ].join(" ")}
            >
              {active ? (
                <motion.span
                  layoutId="product-enterprise-pill-active"
                  transition={{
                    type: "spring",
                    stiffness: 520,
                    damping: 42,
                    mass: 0.6,
                  }}
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

type PlatformBadgeProps = {
  label: string;
  rgb: string;
  position: string;
};

function PlatformBadge({ label, rgb, position }: PlatformBadgeProps) {
  return (
    <span
      className={`absolute top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 ring-1 ring-slate-200/90 backdrop-blur-sm shadow-[0_12px_26px_rgba(15,23,42,0.04)] ${position}`}
      style={{ color: `rgba(${rgb},0.92)` }}
    >
      <span className="text-[7px] font-bold leading-none tracking-[0.01em]">
        {label}
      </span>
    </span>
  );
}

export function ProductEnterpriseGradeSection() {
  const [tab, setTab] = useState<TabId>("runtime");

  useEffect(() => {
    const id = window.setInterval(() => {
      setTab((current: TabId) => {
        const idx = TABS.findIndex((t) => t.id === current);
        const next = TABS[(idx + 1) % TABS.length];
        return next?.id ?? "runtime";
      });
    }, 1500);

    return () => window.clearInterval(id);
  }, []);

  const cards = useMemo(() => {
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
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for streaming infrastructure
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas is engineered for the reliability and scale that premium
            streaming platforms demand.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {cards.map((card) => {
            const config = ACCENT_CONFIG[card.accent];
            const diagStroke = `rgba(${config.rgb},0.18)`;
            const horizFill = `rgba(${config.rgb},0.62)`;

            return (
              <motion.div
                key={card.id}
                data-cursor="hover"
                className={[
                  "group relative h-[248px] w-[260px] overflow-hidden rounded-[24px] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-[1.11px] ring-slate-100/90 cursor-pointer transition-all duration-300",
                  card.tint,
                ].join(" ")}
                whileHover={{ scale: 1.01 }}
              >
                {card.id === "playback-safety" ? (
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 opacity-[0.64]"
                    aria-hidden
                  >
                    <div className="canvas-float-soft h-full w-full">
                      <Image
                        src={bgPlayback}
                        alt=""
                        aria-hidden
                        width={190}
                        height={190}
                        priority={false}
                        className="h-[190px] w-[190px] object-contain"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="pointer-events-none absolute inset-0 opacity-[0.78]">
                  <div className="absolute -left-12 -bottom-10 h-40 w-40 rounded-full bg-white/60 blur-2xl" />
                  <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/40 blur-2xl" />
                </div>

                <CornerWedge accent={card.accent} />

                {card.id === "playback-safety" ? (
                  <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[rgba(249,115,22,0.14)] px-2 py-0.5 text-[10px] font-extrabold tracking-[0.02em] text-[rgba(249,115,22,0.95)] ring-1 ring-[rgba(249,115,22,0.22)] backdrop-blur-[2px]">
                    <span
                      aria-hidden="true"
                      className="inline-block h-[7px] w-[7px] rounded-[1px] bg-[rgba(249,115,22,0.95)]"
                    />
                    SAFE
                  </span>
                ) : null}

                {card.id === "realtime-signals" ? (
                  <span className="pointer-events-none absolute right-2 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-[rgba(234,179,8,0.18)] px-3 py-0.5 text-[10px] font-extrabold tracking-[0.02em] text-[rgba(234,179,8,0.95)] ring-1 ring-[rgba(234,179,8,0.25)] backdrop-blur-[2px]">
                    <span
                      aria-hidden="true"
                      className="inline-block h-[7px] w-[7px] rounded-[1px] bg-[rgba(234,179,8,0.95)]"
                    />
                    <span
                      aria-hidden="true"
                      className="inline-block h-[7px] w-[9px]"
                    >
                      <svg
                        width="9"
                        height="7"
                        viewBox="0 0 9 7"
                        aria-hidden="true"
                      >
                        <polygon
                          points="0,0 0,7 9,3.5"
                          fill="rgba(234,179,8,0.95)"
                        />
                      </svg>
                    </span>
                    Intent
                  </span>
                ) : null}

                {card.id === "cross-platform" ? (
                  <div
                    className="pointer-events-none absolute left-1/2 top-[52%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-20"
                    aria-hidden
                  >
                    <div className="canvas-drift-soft flex items-end justify-center gap-4">
                      <Image
                        src={mobileIcon}
                        alt=""
                        aria-hidden
                        className="h-16 w-10 object-contain"
                      />
                      <Image
                        src={monitorIcon}
                        alt=""
                        aria-hidden
                        className="h-20 w-18 object-contain"
                      />
                      <Image
                        src={tabIcon}
                        alt=""
                        aria-hidden
                        className="h-16 w-10 object-contain"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="pointer-events-none absolute left-4 bottom-2 z-0">
                  <svg
                    viewBox="0 0 220 140"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-[150px]"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <path
                      d="M18 118 L172 22"
                      stroke={diagStroke}
                      strokeWidth="1.0"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 118 L224 22"
                      stroke={diagStroke}
                      strokeWidth="1.0"
                      strokeLinecap="round"
                    />
                    <rect
                      x="28"
                      y="74"
                      width="56"
                      height="2.7"
                      rx="1.35"
                      fill={horizFill}
                    />
                  </svg>
                </div>

                <span
                  className={`pointer-events-none absolute left-2 top-28 -translate-y-1/2 text-[26px] font-light leading-none ${config.plus}`}
                  aria-hidden="true"
                >
                  +
                </span>

                <motion.div
                  className="relative z-10 flex items-start gap-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative">
                    <IconBadge accent={card.accent}>
                      <Image
                        src={card.icon as never}
                        alt=""
                        className={card.iconClassName ?? "h-7 w-7"}
                      />
                    </IconBadge>

                    {card.id === "50kb-runtime" ? (
                      <div
                        className="pointer-events-none absolute left-26 top-2 h-8 w-8 canvas-wobble-soft"
                        aria-hidden
                      >
                        <Image
                          src={binary50kbIcon}
                          alt=""
                          aria-hidden
                          className="h-8 w-8"
                        />
                      </div>
                    ) : null}
                  </div>
                </motion.div>

                <div
                  className={[
                    "relative z-10 mt-4",
                    card.id === "50kb-runtime" ? "flex items-start gap-3" : "",
                  ].join(" ")}
                >
                  <div>
                    <h3 className="text-[15px] font-extrabold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>

                  {card.id === "50kb-runtime" ? (
                    <div className="pointer-events-none absolute right-0 top-0 -translate-x-2 pt-1">
                      <div className="canvas-float-soft" aria-hidden>
                        <Image
                          src={jsIcon}
                          alt=""
                          aria-hidden
                          className="h-16 w-auto"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>

                {card.id === "50kb-runtime" ? (
                  <div className="pointer-events-none absolute bottom-2 right-6 z-10 flex items-center gap-2">
                    <Image
                      src={jsIcon}
                      alt=""
                      aria-hidden
                      className="h-12 w-auto"
                    />
                    <Image
                      src={lessThanIcon}
                      alt=""
                      aria-hidden
                      className="h-9 w-9"
                    />
                  </div>
                ) : null}

                {card.id === "cross-platform" ? (
                  <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
                    <div className="relative h-6 w-[170px]">
                      <PlatformBadge
                        label="LG"
                        rgb={config.rgb}
                        position="left-0"
                      />
                      <PlatformBadge
                        label="ROKU"
                        rgb={config.rgb}
                        position="left-[82px]"
                      />
                      <PlatformBadge
                        label="VIZIO"
                        rgb={config.rgb}
                        position="left-[140px]"
                      />
                    </div>
                  </div>
                ) : null}

                {card.id === "realtime-signals" && (
                  <div
                    className="pointer-events-none absolute bottom-5 right-6 z-10 opacity-90"
                    aria-hidden="true"
                  >
                    <div className="canvas-drift-soft" aria-hidden="true">
                      <Image
                        src={signalCardSvg}
                        alt=""
                        aria-hidden
                        className="h-14 w-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-2">
          <PillTabs value={tab} onChange={setTab} />
        </div>

        <AnimatePresence mode="wait">
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
