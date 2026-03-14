"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";

import bitmovin from "@/assets/proof/ecosystems/movin.svg";

import svta from "@/assets/proof/ecosystems/svta.svg";
import ottStudio from "@/assets/proof/ecosystems/ott_studio.svg";
import heroCard from "@/assets/Hero/card.png";


export type HeroLogo = { src: string | typeof svta; alt: string };

type StatCardConfig = {
  value: string;
  number: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sub: string;
  color: string;
  icon: typeof CursorIcon;
};

const ECO_LOGO: HeroLogo[] = [
  { src: svta, alt: "SVTA" },
  { src: bitmovin, alt: "Bitmovin" },
  { src: ottStudio, alt: "OTT Studio" },
];

const STAT_CARDS: StatCardConfig[] = [
  {
    value: "26.2%",
    number: 26.2,
    decimals: 1,
    suffix: "%",
    label: "Interaction rate",
    sub: "+12% vs industry avg",
    color: "text-amber-500",
    icon: CursorIcon,
  },
  {
    value: "14+s",
    number: 14,
    suffix: "s+",
    label: "Avg engagement",
    sub: "+8s vs passive ads",
    color: "text-violet-400",
    icon: WaveIcon,
  },
  {
    value: "6+s",
    number: 6,
    suffix: "s",
    label: "Time to first action",
    sub: "2x faster response",
    color: "text-emerald-400",
    icon: PlayIcon,
  },
  {
    value: "3x",
    number: 3,
    suffix: "x",
    label: "Intent signals vs passive",
    sub: "+200% signal lift",
    color: "text-amber-500",
    icon: ArrowIcon,
  },
];

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  delay?: number;
  reducedMotion?: boolean;
};

function AnimatedNumber({ value, decimals = 0, suffix = "", className, delay = 0, reducedMotion }: AnimatedNumberProps) {
  const [display, setDisplay] = useState<number>(reducedMotion ? value : 0);

  useEffect(() => {
    if (reducedMotion === true) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      delay,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });

    return () => controls.stop();
  }, [value, delay, reducedMotion]);

  const formatted =
    decimals > 0 ? display.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) :
      Math.round(display).toLocaleString();

  return (
    <span className={className}>
      {formatted}
      {suffix}
    </span>
  );
}

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
  const orbitLeftRef = useRef<HTMLDivElement | null>(null);
  const orbitRightRef = useRef<HTMLDivElement | null>(null);

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

      const orbitL = orbitLeftRef.current;
      const orbitR = orbitRightRef.current;

      if (orbitL) {
        gsap.to(orbitL, {
          x: -45,
          y: -35,
          rotate: 10,
          duration: 7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      if (orbitR) {
        gsap.to(orbitR, {
          x: 45,
          y: 35,
          rotate: -10,
          duration: 7.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
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

      <div className="relative mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 lg:pt-12 lg:pb-24">
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
            {reduceMotion ? (
              <h1 className="text-zinc-900 font-extrabold tracking-[-1.4px] leading-[1.12] text-[36px] sm:text-[44px] sm:leading-[1.12] lg:text-[56px] lg:leading-[61.6px] [font-family:var(--font-display)]">
                <span className="block">Turn CTV Ads</span>
                <span className="block">
                  Into <span className="text-[#4F46E5]">Measurable</span>
                </span>
                <span className="block">Interactive</span>
                <span className="block">Experiences</span>
              </h1>
            ) : (
              <motion.h1
                className="text-zinc-900 font-extrabold tracking-[-1.4px] leading-[1.12] text-[36px] sm:text-[44px] sm:leading-[1.12] lg:text-[56px] lg:leading-[61.6px] [font-family:var(--font-display)]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
              >
                {[
                  { id: "line-cta-1", content: "Turn CTV Ads" },
                  {
                    id: "line-cta-2",
                    content: (
                      <>
                        Into <span className="text-[#4F46E5]">Measurable</span>
                      </>
                    ),
                  },
                  { id: "line-cta-3", content: "Interactive" },
                  { id: "line-cta-4", content: "Experiences" },
                ].map((line, idx) => (
                  <motion.span
                    key={line.id}
                    variants={{
                      hidden: { opacity: 0, y: 20, filter: "blur(16px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.9,
                          delay: 0.08 + idx * 0.1,
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
            )}
            {reduceMotion ? (
              <p className="mt-4 max-w-xl text-base text-zinc-600 sm:text-lg">
                Convert CTV ads into interactive experiences—capture intent signals without changing your streaming
                stack.
              </p>
            ) : (
              <motion.p className="mt-4 max-w-xl text-base text-zinc-600 sm:text-lg" aria-label="Convert CTV ads into interactive experiences—capture intent signals without changing your streaming stack.">
                {(() => {
                  const text =
                    "Convert CTV ads into interactive experiences—capture intent signals without changing your streaming stack.";
                  const words = text.split(" ");
                  return words.map((word, idx) => (
                    <motion.span
                      key={`${word}-${idx}-${words.length}`}
                      initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.75,
                        delay: 0.32 + idx * 0.035,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="inline-block align-baseline will-change-transform"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ));
                })()}
              </motion.p>
            )}
            {reduceMotion ? (
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
            ) : (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.7 }}
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <Link
                    href="/#demo"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 bg-transparent px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    View Case Study
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200">
                      <ArrowIcon className="h-3.5 w-3.5 text-zinc-700" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            )}
            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-zinc-400">
              Trusted by the Streaming Ecosystem
            </p>
            <div className="mt-3 grid grid-cols-3 place-items-center gap-x-2 gap-y-2 sm:grid-cols-5 sm:gap-x-2 sm:gap-y-2">
              {(logos ?? ECO_LOGO).map((logo, idx) => (
                <div
                  key={logo.alt}
                  className={`relative w-full ${idx === 0 ? "h-9 max-w-[110px]" : idx === 1 ? "h-11 max-w-[160px]" : "h-11 max-w-[160px]"} ${idx === 2 ? "-ml-6" : ""}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain object-center contrast-[1.08] brightness-[0.97]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero visual with intersecting circles */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative flex h-[460px] w-full max-w-2xl items-center justify-center">
              {/* Intersecting circles backdrop */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative h-[420px] w-[420px]">
                  {/* Big middle circle */}
                  <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/90 mix-blend-multiply shadow-[0_50px_130px_rgba(167,139,250,0.8)]" />
                  {/* Small bottom-left */}
                  <div
                    ref={orbitLeftRef}
                    className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-amber-200/90 mix-blend-multiply shadow-[0_22px_55px_rgba(248,180,75,0.6)]"
                  />
                  {/* Small top-right */}
                  <div
                    ref={orbitRightRef}
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-200/90 mix-blend-multiply shadow-[0_22px_55px_rgba(244,114,182,0.6)]"
                  />
                </div>
              </div>

              {/* Central hero image card (fixed height, wider) */}
              <motion.div
                className="relative flex h-[290px] w-[320px] max-w-full flex-col overflow-hidden rounded-[24px] bg-[#050816]/95 shadow-2xl ring-1 ring-black/40 sm:w-[380px]"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 32px 80px rgba(15,23,42,0.38)",
                }}
                whileTap={{ scale: 0.99, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                {/* Image fills the top, slightly taller for better fit */}
                <div className="relative w-full flex-[1.25] overflow-hidden rounded-t-[24px]">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.03, rotate: -0.25 }}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  >
                    <Image
                      src={heroCard}
                      alt="Interactive CTV ad experience"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Metrics bar inside the card (bottom), centered text */}
                <div className="grid h-[82px] w-full grid-cols-3 gap-0 border-t border-zinc-200/70 bg-white/98 px-5 py-3 text-[13px] text-zinc-900">
                  <div className="flex flex-col items-center justify-center px-2">
                    <AnimatedNumber
                      value={26.2}
                      decimals={1}
                      suffix="%"
                      className="text-base font-bold text-amber-500"
                      delay={0.1}
                      reducedMotion={!!reduceMotion}
                    />
                    <p className="mt-0.5 text-[12px] font-medium text-zinc-700 text-center">Interaction Rate</p>
                  </div>
                  <div className="flex flex-col items-center justify-center border-x border-zinc-200/70 px-2">
                    <AnimatedNumber
                      value={14}
                      suffix="s+"
                      className="text-base font-bold text-violet-500"
                      delay={0.16}
                      reducedMotion={!!reduceMotion}
                    />
                    <p className="mt-0.5 text-[12px] font-medium text-zinc-700 text-center">Avg Duration</p>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2">
                    <AnimatedNumber
                      value={3}
                      suffix="x"
                      className="text-base font-bold text-emerald-500"
                      delay={0.22}
                      reducedMotion={!!reduceMotion}
                    />
                    <p className="mt-0.5 text-[12px] font-medium text-zinc-700 text-center">QR Scans</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Bottom: 4 stat cards */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {STAT_CARDS.map((card) => (
            <motion.div
              key={card.label}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 24px 60px rgba(15,23,42,0.18)" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-violet-50 p-[1px] shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <div className="relative flex h-full flex-col justify-start rounded-[22px] bg-white/98 px-4 py-4 sm:px-5 sm:py-5">
                  <div>
                    <AnimatedNumber
                      value={card.number}
                      decimals={card.decimals}
                      suffix={card.suffix}
                      className={`text-2xl font-bold sm:text-3xl ${card.color}`}
                      delay={0.12}
                    />
                    <p className="mt-1 text-sm font-medium text-zinc-800">{card.label}</p>
                    <p className="mt-1 text-xs font-medium text-emerald-600">{card.sub}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
