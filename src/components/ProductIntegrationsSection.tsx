"use client";

import Image from "next/image";

import tickIcon from "@/assets/Product/integrations/tick.svg";

type IntegrationTag = "SSAI" | "CTV" | "RTB";

type IntegrationCard = {
  id: string;
  title: string;
  subtitle: string;
  tag: IntegrationTag;
  accent: "orange" | "indigo" | "amber" | "violet";
};

const CARDS: IntegrationCard[] = [
  {
    id: "google-dai",
    title: "Google DAI",
    subtitle: "Dynamic ad insertion",
    tag: "SSAI",
    accent: "orange",
  },
  {
    id: "aws-mediatailor",
    title: "AWS MediaTailor",
    subtitle: "Server-side ad stitching",
    tag: "SSAI",
    accent: "indigo",
  },
  {
    id: "roku-os",
    title: "Roku OS",
    subtitle: "Streaming device support",
    tag: "CTV",
    accent: "indigo",
  },
  {
    id: "amazon-fire-tv",
    title: "Amazon Fire TV",
    subtitle: "App-level integration",
    tag: "CTV",
    accent: "amber",
  },
  {
    id: "apple-tvos",
    title: "Apple TV / tvOS",
    subtitle: "Native runtime support",
    tag: "CTV",
    accent: "violet",
  },
  {
    id: "android-tv",
    title: "Android TV",
    subtitle: "Google ecosystem support",
    tag: "CTV",
    accent: "orange",
  },
  {
    id: "samsung-tizen",
    title: "Samsung Tizen",
    subtitle: "Smart TV platform",
    tag: "CTV",
    accent: "indigo",
  },
  {
    id: "iab-vast",
    title: "IAB / VAST",
    subtitle: "OpenRTB & VAST compliant",
    tag: "RTB",
    accent: "violet",
  },
];

function AccentDot({ accent }: { accent: IntegrationCard["accent"] }) {
  const bg =
    accent === "orange"
      ? "bg-[rgba(249,115,22,1)]"
      : accent === "amber"
        ? "bg-[rgba(234,179,8,1)]"
        : accent === "violet"
          ? "bg-[rgba(167,139,250,1)]"
          : "bg-[rgba(79,70,229,1)]";

  const glow =
    accent === "orange"
      ? "shadow-[0_0_0_6px_rgba(249,115,22,0.10)]"
      : accent === "amber"
        ? "shadow-[0_0_0_6px_rgba(234,179,8,0.10)]"
        : accent === "violet"
          ? "shadow-[0_0_0_6px_rgba(167,139,250,0.12)]"
          : "shadow-[0_0_0_6px_rgba(79,70,229,0.10)]";

  return <span className={`h-2 w-2 rounded-full ${bg} ${glow}`} aria-hidden="true" />;
}

function TagPill({ tag, accent }: { tag: IntegrationTag; accent: IntegrationCard["accent"] }) {
  const palette =
    accent === "orange"
      ? {
          text: "text-[rgba(249,115,22,1)]",
          bg: "bg-[rgba(249,115,22,0.06)]",
          border: "border-[rgba(249,115,22,0.16)]",
        }
      : accent === "amber"
        ? {
            text: "text-[rgba(234,179,8,1)]",
            bg: "bg-[rgba(234,179,8,0.06)]",
            border: "border-[rgba(234,179,8,0.16)]",
          }
        : accent === "violet"
          ? {
              text: "text-[rgba(167,139,250,1)]",
              bg: "bg-[rgba(167,139,250,0.07)]",
              border: "border-[rgba(167,139,250,0.18)]",
            }
          : {
              text: "text-[rgba(79,70,229,1)]",
              bg: "bg-[rgba(79,70,229,0.06)]",
              border: "border-[rgba(79,70,229,0.16)]",
            };

  return (
    <span
      className={[
        "rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide shadow-sm",
        palette.border,
        palette.bg,
        palette.text,
      ].join(" ")}
    >
      {tag}
    </span>
  );
}

function ConcentricRings({ accent }: { accent: IntegrationCard["accent"] }) {
  const dottedStroke =
    accent === "orange"
      ? "stroke-[rgba(249,115,22,0.35)]"
      : accent === "amber"
        ? "stroke-[rgba(234,179,8,0.35)]"
        : accent === "violet"
          ? "stroke-[rgba(167,139,250,0.38)]"
          : "stroke-[rgba(79,70,229,0.34)]";

  const solidStroke =
    accent === "orange"
      ? "stroke-[rgba(249,115,22,0.26)]"
      : accent === "amber"
        ? "stroke-[rgba(234,179,8,0.26)]"
        : accent === "violet"
          ? "stroke-[rgba(167,139,250,0.28)]"
          : "stroke-[rgba(79,70,229,0.26)]";

  return (
    <>
      {/* Top-right dotted concentric circles */}
      <svg
        className={`pointer-events-none absolute -right-8 -top-8 h-36 w-36 ${dottedStroke}`}
        viewBox="0 0 140 140"
        fill="none"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <circle cx="92" cy="54" r="42" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="6 10" />
        <circle cx="92" cy="54" r="28" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="6 10" opacity="0.75" />
        <circle cx="114" cy="34" r="3.4" fill="currentColor" opacity="0.22" />
        <circle cx="76" cy="96" r="3.0" fill="currentColor" opacity="0.18" />
      </svg>

      {/* Bottom-right solid concentric circles */}
      <svg
        className={`pointer-events-none absolute -left-24 -bottom-16 h-40 w-40 ${solidStroke}`}
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <circle cx="104" cy="76" r="46" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="104" cy="76" r="30" strokeWidth="2.6" strokeLinecap="round" opacity="0.75" />
      </svg>
    </>
  );
}

function IntegrationMiniCard({ card }: { card: IntegrationCard }) {
  const bg =
    card.accent === "orange"
      ? "bg-[linear-gradient(135deg,rgba(249,115,22,0.08)_0%,rgba(255,255,255,0.92)_60%,rgba(255,255,255,1)_100%)]"
      : card.accent === "amber"
        ? "bg-[linear-gradient(135deg,rgba(234,179,8,0.08)_0%,rgba(255,255,255,0.92)_60%,rgba(255,255,255,1)_100%)]"
        : card.accent === "violet"
          ? "bg-[linear-gradient(135deg,rgba(167,139,250,0.10)_0%,rgba(255,255,255,0.92)_60%,rgba(255,255,255,1)_100%)]"
          : "bg-[linear-gradient(135deg,rgba(79,70,229,0.08)_0%,rgba(255,255,255,0.92)_60%,rgba(255,255,255,1)_100%)]";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[20px] border border-white/60 bg-white/80 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-slate-100/80",
        bg,
      ].join(" ")}
    >
      <ConcentricRings accent={card.accent} />
      <div className="relative z-10 flex items-start justify-between">
        <span className="inline-flex items-center gap-2">
          <AccentDot accent={card.accent} />
        </span>
        <TagPill tag={card.tag} accent={card.accent} />
      </div>

      <div className="relative z-10 mt-3">
        <p className="text-[13px] font-extrabold text-slate-900">{card.title}</p>
        <p className="mt-1 text-[11px] text-slate-500">{card.subtitle}</p>
      </div>
    </div>
  );
}

export function ProductIntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-[rgba(238,240,251,1)] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -bottom-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-48 top-10 h-80 w-80 rounded-full bg-[rgba(244,114,182,0.18)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border-[0.56px] border-[rgba(79,70,229,0.15)] bg-[rgba(79,70,229,0.03)] px-5 py-1.5 text-sm font-semibold text-[rgba(79,70,229,1)] shadow-sm">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[rgba(79,70,229,1)]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            Integrations
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[42px] [font-family:var(--font-display)]">
            Plugs into your existing stack
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas integrates without disruption into the tools and platforms your team already uses — no rip-and-replace.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <IntegrationMiniCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-[12px] font-semibold text-slate-600 shadow-[0_18px_55px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70">
            <Image src={tickIcon} alt="" className="h-4 w-4" />
            <span>One integration. Every major CTV environment. No disruption to existing ad delivery.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

