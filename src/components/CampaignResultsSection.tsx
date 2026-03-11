"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import agenciesIcon from "@/assets/who/agencies.svg";
import publishersIcon from "@/assets/who/publishers.svg";
import dspIcon from "@/assets/who/DSP.svg";
import runtimeIcon from "@/assets/works/runtime.svg";
import convertAdsIcon from "@/assets/works/convertads.svg";
import captureSignalsIcon from "@/assets/works/capture_signals.svg";
import proofImpressions from "@/assets/proof/impressions.svg";
import proofInteractionRate from "@/assets/proof/interaction_rate.svg";
import proofTimeTo from "@/assets/proof/time_to.svg";
import proofEngageDur from "@/assets/proof/engage_dur.svg";
import proofIsc from "@/assets/proof/isc.svg";
import svta from "@/assets/Eco/svta.svg";
import ctvSamsung from "@/assets/proof/ctv/samsung.svg";
import ctvLg from "@/assets/proof/ctv/lg.svg";
import ctvRoku from "@/assets/proof/ctv/roku.svg";
import ctvFireTv from "@/assets/proof/ctv/firetv.svg";
import ctvVizio from "@/assets/proof/ctv/vizio.svg";
import ctvIos from "@/assets/proof/ctv/ios.svg";
import ctvHtml5 from "@/assets/proof/ctv/html.svg";
import ctvHp from "@/assets/proof/ctv/hp.svg";
import ctvShaka from "@/assets/proof/ctv/shaka.svg";
import ecoSvta from "@/assets/proof/ecosystems/svta.svg";
import ecoIab from "@/assets/proof/ecosystems/iab.svg";
import ecoSteveAi from "@/assets/proof/ecosystems/steveai.svg";
import ecoSabio from "@/assets/proof/ecosystems/sabio.svg";
import ecoOneStudio from "@/assets/proof/ecosystems/onestudio.svg";
import ecoOttStudio from "@/assets/proof/ecosystems/ott_studio.svg";
import ecoMovin from "@/assets/proof/ecosystems/movin.svg";
import ecoBitcentral from "@/assets/proof/ecosystems/bitcentral.svg";

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
    icon: proofImpressions,
    value: "2.5M+",
    label: "Impressions Served",
    sub: "Across streaming platforms",
    accent: "text-[#6366F1]",
    tint: "bg-[rgba(99,102,241,0.10)]",
  },
  {
    id: "ir",
    icon: proofInteractionRate,
    value: "26.2%",
    label: "Interaction Rate",
    sub: "vs <1% passive CTV",
    accent: "text-[#F97316]",
    tint: "bg-[rgba(249,115,22,0.10)]",
  },
  {
    id: "ttfa",
    icon: proofTimeTo,
    value: "6+s",
    label: "Time to First Action",
    sub: "Average first interaction",
    accent: "text-[#7C3AED]",
    tint: "bg-[rgba(124,58,237,0.10)]",
  },
  {
    id: "dur",
    icon: proofEngageDur,
    value: "14+s",
    label: "Engagement Duration",
    sub: "Average seconds per session",
    accent: "text-[#A855F7]",
    tint: "bg-[rgba(168,85,247,0.10)]",
  },
  {
    id: "signals",
    icon: proofIsc,
    value: "3x",
    label: "Intent Signals Captured",
    sub: "QR scans, clicks, explore",
    accent: "text-[#F59E0B]",
    tint: "bg-[rgba(245,158,11,0.10)]",
  },
];



const ECOSYSTEM_LOGOS = [
  { id: "eco-svta", src: ecoSvta },
  { id: "eco-iab", src: ecoIab },
  { id: "eco-steveai", src: ecoSteveAi },
  { id: "eco-sabio", src: ecoSabio },
  { id: "eco-onestudio", src: ecoOneStudio },
  { id: "eco-ottstudio", src: ecoOttStudio },
  { id: "eco-movin", src: ecoMovin },
  { id: "eco-bitcentral", src: ecoBitcentral },
];

const CTV_LOGOS = [
  { id: "ctv-samsung", src: ctvSamsung },
  { id: "ctv-lg", src: ctvLg },
  { id: "ctv-roku", src: ctvRoku },
  { id: "ctv-firetv", src: ctvFireTv },
  { id: "ctv-vizio", src: ctvVizio },
  { id: "ctv-ios", src: ctvIos },
  { id: "ctv-html5", src: ctvHtml5 },
  { id: "ctv-hp", src: ctvHp },
  { id: "ctv-shaka", src: ctvShaka },
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
  const [hoveredEcoId, setHoveredEcoId] = useState<string | null>(null);
  const [hoveredCtvId, setHoveredCtvId] = useState<string | null>(null);
  const ecoControls = useAnimation();
  const ctvControls = useAnimation();
  const [showSvtaConfetti, setShowSvtaConfetti] = useState(false);
  const svtaBadgeRef = useRef<HTMLDivElement | null>(null);
  const svtaConfettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    ecoControls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, repeatType: "loop", duration: 26, ease: "linear" },
    });
    ctvControls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" },
    });
  }, [ecoControls, ctvControls]);

  useEffect(() => {
    const badge = svtaBadgeRef.current;
    if (!badge) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let stopped = false;
    let active = false;

    const stopLoop = () => {
      active = false;
      setShowSvtaConfetti(false);
    };

    const startLoop = () => {
      active = true;
      setShowSvtaConfetti(true);

      void import("canvas-confetti").then(({ default: confetti }) => {
        if (stopped || !active) return;
        const canvas = svtaConfettiCanvasRef.current;
        if (!canvas) return;

        const fire = confetti.create(canvas, { resize: true, useWorker: false });
        const colors = ["#F59E0B", "#A78BFA", "#34D399", "#FB7185", "#38BDF8"];

        const pass = () => {
          const badgeRect = badge.getBoundingClientRect();
          const canvasRect = canvas.getBoundingClientRect();

          const y = Math.min(
            0.9,
            Math.max(0.05, (badgeRect.top - canvasRect.top + badgeRect.height * 0.1) / canvasRect.height),
          );

          fire({
            particleCount: 18,
            angle: 40,
            spread: 18,
            startVelocity: 14,
            ticks: 120,
            decay: 0.94,
            gravity: 1.0,
            scalar: 0.7,
            origin: { x: 0, y },
            colors,
          });
          fire({
            particleCount: 18,
            angle: 140,
            spread: 18,
            startVelocity: 14,
            ticks: 120,
            decay: 0.94,
            gravity: 1.0,
            scalar: 0.7,
            origin: { x: 1, y },
            colors,
          });
        };

        let cyclesRun = 0;

        const cycle = () => {
          if (stopped || !active) return;
          pass();
          window.setTimeout(() => {
            if (stopped || !active) return;
            pass();
          }, 333);
          window.setTimeout(() => {
            if (stopped || !active) return;
            pass();
          }, 666);

          cyclesRun += 1;
          if (cyclesRun >= 3) {
            window.setTimeout(() => {
              if (!stopped && active) {
                stopLoop();
              }
            }, 1000);
          } else {
            window.setTimeout(cycle, 1000);
          }
        };

        cycle();
      });
    };

    startLoop();

    return () => {
      stopped = true;
      stopLoop();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f6ff] via-[#f6f4ff] to-[#f5f3ff] py-14 sm:py-18">
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
          <h2 className="text-[30px] font-extrabold tracking-tight text-center text-zinc-900 sm:text-[34px]">
            Results from our earlier campaigns
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-zinc-600 sm:text-[14px]">
            From a major streaming platform&apos;s first interactive CTV
            <br className="hidden sm:inline" /> campaign powered by Canvas.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:flex-nowrap">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.id}
              className="h-[176px] w-[198px] shrink-0 rounded-[20px] border border-zinc-100/90 bg-white/90 px-3.5 py-3 shadow-[0_20px_54px_rgba(15,23,42,0.14)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.05 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-center">
                <span className={`inline-flex h-[34px] w-[34px] items-center justify-center rounded-[12px] ${m.tint} ring-1 ring-zinc-100`}>
                  <Image src={m.icon} alt="" className="h-10 w-10 opacity-90" />
                </span>
              </div>
              <p className={`mt-2.5 text-center text-[32px] font-extrabold leading-[34px] tracking-[-0.9px] ${m.accent}`}>{m.value}</p>
              <p className="mt-1 text-center text-[12px] font-semibold leading-5 text-zinc-700">{m.label}</p>
              <p className="mt-0.5 text-center text-[10px] font-normal leading-4 text-[rgba(153,161,175,1)]">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-white/90 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.16)] ring-1 ring-zinc-100/90 sm:p-8">
          <p className="text-center text-[10px] font-medium tracking-[0.18em] text-zinc-400">
            STREAMING ECOSYSTEM PARTNERS
          </p>

          {/* Ecosystem partners carousel */}
          <div className="mt-5 overflow-hidden rounded-[20px] border border-zinc-100/80 bg-white/60 px-3 py-3">
            <motion.div
              className="flex gap-10"
              aria-hidden="true"
              initial={{ x: 0 }}
              animate={ecoControls}
            >
              {[ECOSYSTEM_LOGOS, ECOSYSTEM_LOGOS].map((row, pass) =>
                row.map((logo) => (
                  <button
                    key={`${logo.id}-${pass}`}
                    type="button"
                    className={`flex shrink-0 items-center justify-center transition ${hoveredEcoId && hoveredEcoId !== logo.id
                      ? "opacity-40 grayscale"
                      : "opacity-100 grayscale-0"
                      }`}
                    onMouseEnter={() => {
                      setHoveredEcoId(logo.id);
                      ecoControls.stop();
                    }}
                    onMouseLeave={() => {
                      setHoveredEcoId(null);
                      ecoControls.start({
                        x: ["0%", "-50%"],
                        transition: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 26,
                          ease: "linear",
                        },
                      });
                    }}
                    aria-label="Streaming ecosystem partner logo"
                  >
                    <Image src={logo.src} alt="Streaming ecosystem partner" className="h-9 w-auto" />
                  </button>
                )),
              )}
            </motion.div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 text-[11px] text-zinc-500">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E]/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              </span>
              <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#22C55E]">
                WE ARE LIVE
              </span>
            </span>
            <span className="inline-flex h-4 w-4 items-center justify-center text-zinc-300">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[12px] font-normal leading-4 tracking-[0px] text-[#99A1AF]">
              Compatible with all major CTV environments
            </span>
          </div>

          {/* CTV environments carousel */}
          <div className="mt-4 overflow-hidden rounded-[20px] border border-zinc-100/80 bg-white/60 px-3 py-3">
            <motion.div
              className="flex gap-10"
              aria-hidden="true"
              initial={{ x: 0 }}
              animate={ctvControls}
            >
              {[CTV_LOGOS, CTV_LOGOS].map((row, pass) =>
                row.map((logo) => (
                  <button
                    key={`${logo.id}-${pass}`}
                    type="button"
                    className={`flex shrink-0 items-center justify-center transition ${hoveredCtvId && hoveredCtvId !== logo.id
                      ? "opacity-40 grayscale"
                      : "opacity-100 grayscale-0"
                      }`}
                    onMouseEnter={() => {
                      setHoveredCtvId(logo.id);
                      ctvControls.stop();
                    }}
                    onMouseLeave={() => {
                      setHoveredCtvId(null);
                      ctvControls.start({
                        x: ["0%", "-50%"],
                        transition: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 22,
                          ease: "linear",
                        },
                      });
                    }}
                    aria-label="CTV environment logo"
                  >
                    <Image src={logo.src} alt="CTV environment logo" className="h-9 w-auto" />
                  </button>
                )),
              )}
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="relative inline-block">
              {showSvtaConfetti ? (
                <canvas
                  aria-hidden
                  ref={svtaConfettiCanvasRef}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[260px] w-[560px] -translate-x-1/2 -translate-y-1/2"
                />
              ) : null}

              <div
                ref={svtaBadgeRef}
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#EAB308_0%,#FDA21E_50%,#FDB111_100%)] px-7 py-3 text-white shadow-[0_4px_24px_rgba(202,138,4,0.5)] ring-1 ring-[rgba(253,224,71,0.45)] brightness-110"
              >
                {/* Outer glow */}
                <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(234,179,8,0.4),transparent_60%)] blur-2xl" />
                {/* Border-top (0.56px) */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[0.56px] bg-[rgba(253,224,71,0.45)]" />
                {/* Inset highlight */}
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" />
                {/* Specular highlights */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.32),transparent_55%),radial-gradient(circle_at_78%_64%,rgba(255,255,255,0.18),transparent_58%)] opacity-60" />
                {/* Center sweep */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(0,0,0,0)_37.32%,rgba(253,224,71,0.22)_50%,rgba(0,0,0,0)_62.68%)] opacity-55" />

                {/* Right-side highlight dot */}
                <span className="pointer-events-none absolute right-3 h-3.5 w-3.5">
                  <span className="absolute inset-0 rounded-full bg-[#FDE047] opacity-70 animate-ping" />
                  <span className="absolute inset-[3px] rounded-full bg-[#FDE047]" />
                </span>

                <span className="relative -ml-2.5 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/20 ring-1 ring-white/25">
                  <Image src={svta} alt="SVTA" className="h-8 w-8" />
                </span>

                <div className="relative flex flex-col leading-tight">
                  <span className="text-[13px] font-extrabold leading-[16.25px] tracking-[0.39px] text-white">
                    SVTA Grant Recipient
                  </span>
                  <span className="text-[9px] font-semibold leading-[11.25px] tracking-[0.72px] text-black/80">
                    STREAMING VIDEO TECHNOLOGY ALLIANCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[28px] bg-white/90 px-6 py-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.14)] ring-1 ring-zinc-100/90 sm:px-10">
          <div className="pointer-events-none absolute -left-16 -top-16 h-[240px] w-[240px] rounded-full bg-[rgba(244,114,182,0.16)] blur-3xl" />
          <h3 className="text-[30px] font-extrabold tracking-tight text-center text-zinc-900 sm:text-[34px]">
            Run your first interactive CTV campaign
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-zinc-600">
            Join the streaming platforms and agencies already
            <br className="hidden sm:inline" /> using Canvas to turn passive impressions into measurable intent.
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

