"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";

import bitmovin from "@/assets/Eco/bitmovin.svg";
import iab from "@/assets/Eco/iab.svg";
import infillion from "@/assets/Eco/infillion.svg";
import svta from "@/assets/Eco/svta.svg";

export type HeroLogo = { src: string | typeof svta; alt: string };

const ECO_LOGO: HeroLogo[] = [
  { src: svta, alt: "SVTA" },
  { src: bitmovin, alt: "Bitmovin" },
  { src: iab, alt: "iab" },
  { src: infillion, alt: "Infillion" },
];

const STAT_CARDS = [
  {
    value: "26.2%",
    label: "Interaction rate",
    sub: "+12% vs industry avg",
    color: "text-amber-500",
    icon: CursorIcon,
  },
  {
    value: "14+s",
    label: "Avg engagement",
    sub: "+8s vs passive ads",
    color: "text-violet-400",
    icon: WaveIcon,
  },
  {
    value: "6+s",
    label: "Time to first action",
    sub: "2x faster response",
    color: "text-emerald-400",
    icon: PlayIcon,
  },
  {
    value: "3x",
    label: "Intent signals vs passive",
    sub: "+200% signal lift",
    color: "text-amber-500",
    icon: ArrowIcon,
  },
];

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <title>Cursor</title>
      <path d="M5 3l4 4-2 6 5-5 4 4" />
      <path d="M12 19l3 3" />
    </svg>
  );
}

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <title>Wave</title>
      <path d="M2 12c2 2 4 4 6 4s4-2 6-4 4-4 6-4 4 2 6 4" />
      <path d="M2 17c2 2 4 4 6 4s4-2 6-4 4-4 6-4 4 2 6 4" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <title>Play</title>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <title>Arrow</title>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export function Hero({ logos }: { logos?: HeroLogo[] }) {
  const reduceMotion = useReducedMotion();
  const blobARef = useRef<HTMLDivElement | null>(null);
  const blobBRef = useRef<HTMLDivElement | null>(null);
  const blobCRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      const a = blobARef.current;
      const b = blobBRef.current;
      const c = blobCRef.current;
      if (!a || !b || !c) return;

      gsap.to(a, { y: 18, x: -10, duration: 7.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(b, { y: -14, x: 12, duration: 9.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(c, { y: 12, x: 8, duration: 8.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });
    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf8fc] via-[#f5f0f9] to-[#f0e8f4]">
      {/* Abstract shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div ref={blobARef} className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl will-change-transform" />
        <div ref={blobBRef} className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl will-change-transform" />
        <div ref={blobCRef} className="absolute bottom-1/4 left-1/3 h-48 w-48 rounded-full bg-violet-200/40 blur-3xl will-change-transform" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Top: two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left content */}
          <div className="flex flex-col">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
              </span>
              Interactive CTV Platform
            </span>
            <h1 className="text-zinc-900 font-extrabold tracking-[-1.4px] leading-[1.12] text-[36px] sm:text-[44px] sm:leading-[1.12] lg:text-[56px] lg:leading-[61.6px] [font-family:var(--font-display)]">
              <span className="block">Turn CTV Ads</span>
              <span className="block">
                into <span className="text-[#4F46E5]">Measurable</span>
              </span>
              <span className="block">Interactive</span>
              <span className="block">Experiences</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-zinc-600 sm:text-lg">
              <span className="block">Convert CTV ads into interactive experiences—capture</span>
              <span className="block">intent signals without changing your streaming stack.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
              >
                <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900">
                  <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    Try Interactive Demo
                  </span>
                  <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <title>Arrow right</title>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </Link>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 bg-transparent px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                View Case Study
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200">
                  <ArrowIcon className="h-3.5 w-3.5 text-zinc-700" />
                </span>
              </Link>
            </div>
            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-zinc-400">
              Trusted by the Streaming Ecosystem
            </p>
            <div className="mt-4 grid grid-cols-2 place-items-center gap-x-2 gap-y-3 opacity-80 sm:grid-cols-4 sm:gap-x-3 sm:gap-y-3">
              {(logos ?? ECO_LOGO).map((logo, idx) => (
                <div
                  key={logo.alt}
                  className={`relative w-full transition-opacity hover:opacity-100 ${idx === 1 ? "h-10 max-w-[160px]" : "h-8 max-w-[120px]"
                    }`}
                >
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain object-center" />
                </div>
              ))}
            </div>
          </div>

          {/* Right column intentionally left empty for now */}
          <div className="relative flex flex-col items-center lg:items-end" />
        </div>

        {/* Bottom: 4 stat cards */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {STAT_CARDS.map((card) => (
            <div
              key={card.label}
              className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200/80 transition hover:shadow-md sm:p-6"
            >
              <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-600" aria-hidden>
                  <title>Up trend</title>
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </span>
              <card.icon className={`${card.color} mb-3`} />
              <p className={`text-2xl font-bold sm:text-3xl ${card.color}`}>{card.value}</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">{card.label}</p>
              <p className="mt-1 text-sm text-emerald-600">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
