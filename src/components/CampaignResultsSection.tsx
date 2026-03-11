"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import agenciesIcon from "@/assets/who/agencies.svg";
import publishersIcon from "@/assets/who/publishers.svg";
import dspIcon from "@/assets/who/DSP.svg";
import runtimeIcon from "@/assets/works/runtime.svg";
import convertAdsIcon from "@/assets/works/convertads.svg";
import captureSignalsIcon from "@/assets/works/capture_signals.svg";

type Metric = {
  id: string;
  icon: any;
  value: string;
  label: string;
  sub: string;
  accent: string;
  tint: string;
};

const METRICS: Metric[] = [
  {
    id: "impressions",
    icon: publishersIcon,
    value: "2.5M+",
    label: "Impressions Served",
    sub: "Across streaming platforms",
    accent: "text-[#6366F1]",
    tint: "bg-[rgba(99,102,241,0.10)]",
  },
  {
    id: "ir",
    icon: agenciesIcon,
    value: "26.2%",
    label: "Interaction Rate",
    sub: "vs <1% passive CTV",
    accent: "text-[#F97316]",
    tint: "bg-[rgba(249,115,22,0.10)]",
  },
  {
    id: "ttfa",
    icon: runtimeIcon,
    value: "6+s",
    label: "Time to First Action",
    sub: "Average first interaction",
    accent: "text-[#7C3AED]",
    tint: "bg-[rgba(124,58,237,0.10)]",
  },
  {
    id: "dur",
    icon: convertAdsIcon,
    value: "14+s",
    label: "Engagement Duration",
    sub: "Average seconds per session",
    accent: "text-[#A855F7]",
    tint: "bg-[rgba(168,85,247,0.10)]",
  },
  {
    id: "signals",
    icon: captureSignalsIcon,
    value: "3x",
    label: "Intent Signals Captured",
    sub: "QR scans, clicks, explore",
    accent: "text-[#F59E0B]",
    tint: "bg-[rgba(245,158,11,0.10)]",
  },
];

const PARTNER_LOGOS = [
  { src: agenciesIcon, alt: "Agency partner" },
  { src: publishersIcon, alt: "Publisher partner" },
  { src: dspIcon, alt: "DSP partner" },
  { src: runtimeIcon, alt: "Runtime" },
  { src: convertAdsIcon, alt: "Editor" },
  { src: captureSignalsIcon, alt: "Signals" },
];

function ArrowBox() {
  return (
    <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <title>Arrow right</title>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </span>
  );
}

export function CampaignResultsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f6ff] via-[#f6f4ff] to-[#f5f3ff] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-120px] h-[320px] w-[320px] rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute right-[-120px] top-[-160px] h-[420px] w-[420px] rounded-full bg-pink-100/40 blur-3xl" />
        <div className="absolute left-1/2 bottom-[-180px] h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-sky-100/45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-sm ring-1 ring-indigo-100">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Proof of Engagement
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-[30px] font-extrabold tracking-tight text-zinc-900 sm:text-[34px]">
            Results from our earlier campaigns
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-zinc-600 sm:text-[14px]">
            From a major streaming platform&apos;s first interactive CTV
            <br className="hidden sm:inline" /> campaign powered by Canvas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-5">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.id}
              className="rounded-[22px] bg-white/90 p-4 shadow-[0_26px_70px_rgba(15,23,42,0.14)] ring-1 ring-zinc-100/90"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.05 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-center">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-[14px] ${m.tint} ring-1 ring-zinc-100`}>
                  <Image src={m.icon} alt="" className="h-5 w-5 opacity-80" />
                </span>
              </div>
              <p className={`mt-3 text-center text-2xl font-extrabold ${m.accent}`}>{m.value}</p>
              <p className="mt-1 text-center text-[11px] font-semibold text-zinc-700">{m.label}</p>
              <p className="mt-0.5 text-center text-[10px] text-zinc-400">{m.sub}</p>
              <div className="mt-3 h-[2px] w-full rounded-full bg-zinc-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-white/90 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.16)] ring-1 ring-zinc-100/90 sm:p-8">
          <p className="text-center text-[10px] font-medium tracking-[0.18em] text-zinc-400">
            STREAMING ECOSYSTEM PARTNERS
          </p>

          <div className="mt-6 grid grid-cols-3 items-center justify-items-center gap-6 sm:grid-cols-6">
            {PARTNER_LOGOS.map((l) => (
              <div key={l.alt} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
                <Image src={l.src} alt={l.alt} className="h-7 w-auto" />
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 text-[11px] text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              WE ARE LIVE
            </span>
            <span className="text-zinc-300">•</span>
            <span>Compatible with all major CTV environments</span>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(249,115,22,0.14)] px-5 py-2 text-[11px] font-semibold text-[rgba(249,115,22,1)] shadow-sm ring-1 ring-orange-200/60">
              SVTA Grant Recipient
              <span className="text-[10px] font-semibold tracking-[0.14em] text-[rgba(249,115,22,0.8)]">
                STREAMING VIDEO TECHNOLOGY ALLIANCE
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] bg-white/90 px-6 py-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.14)] ring-1 ring-zinc-100/90 sm:px-10">
          <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900">
            Run your first interactive CTV campaign
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-zinc-600">
            Join the streaming platforms and agencies already using Canvas to turn passive impressions into measurable intent.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] via-[#22C55E] to-[#6366F1] p-[2px] shadow-sm"
            >
              <span className="relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-zinc-900">
                <span className="pointer-events-none absolute inset-[-1px] origin-right scale-x-0 bg-black transition-transform duration-300 ease-out will-change-transform group-hover:scale-x-[1.02]" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  Request Demo
                </span>
                <ArrowBox />
              </span>
            </Link>

            <Link
              href="/#case-studies"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] via-[#22C55E] to-[#6366F1] p-[2px] shadow-sm"
            >
              <span className="relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-zinc-900">
                <span className="pointer-events-none absolute inset-[-1px] origin-right scale-x-0 bg-black transition-transform duration-300 ease-out will-change-transform group-hover:scale-x-[1.02]" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  View Case Study
                </span>
                <ArrowBox />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

