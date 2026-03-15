"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import productHeroCard from "@/assets/Product/Hero/inner_card.png";
import scriptIcon from "@/assets/Product/Hero/script.svg";
import interactRateIcon from "@/assets/Product/Hero/interact_rate.svg";
import avgEngageIcon from "@/assets/Product/Hero/avg_engage.svg";

export function ProductHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative -mt-6 overflow-hidden bg-[rgba(238,240,251,1)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -bottom-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute right-10 bottom-24 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[rgba(244,114,182,0.18)] blur-3xl" />
        <div
          className="absolute h-[180px] w-[180px] rounded-full bg-[rgba(249,168,212,0.5)]"
          style={{ top: 60, left: 1010 }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
        {/* Left column */}
        <div className="max-w-xl space-y-6 lg:pl-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.7)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            <span>The Canvas Platform</span>
          </div>

          {reduceMotion ? (
            <h1 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[52px] [font-family:var(--font-display)]">
              <span className="block">The runtime and</span>
              <span className="block">
                editor <span className="text-[#F97316]">powering</span> interactive CTV
              </span>
            </h1>
          ) : (
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[52px] [font-family:var(--font-display)]"
            >
              {[
                "The runtime and",
                <>
                  editor <span className="text-[#F97316]">powering</span> interactive CTV
                </>,
              ].map((line, index) => (
                <motion.span
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(16px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.9,
                        delay: 0.08 + index * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="block will-change-transform"
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          )}

          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            Install one lightweight script and convert any CTV ad into an interactive experience — capturing real
            viewer intent signals at scale.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md"
            >
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-slate-900">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  Request Demo
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
                    aria-hidden
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </Link>

            <Link
              href="/#demo"
              className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md"
            >
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-slate-900">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  View Case Study
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
                    aria-hidden
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </Link>
          </div>

          <div className="mt-8 flex w-full max-w-xl items-start justify-start gap-6 sm:gap-7">
            {/* 1 script */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(79,70,229,0.08)]">
                  <Image src={scriptIcon} alt="" className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-2 text-[22px] font-extrabold tracking-tight text-[#4F46E5] sm:text-[26px]">
                <span className="whitespace-nowrap">
                  1 <span className="font-extrabold">script</span>
                </span>
              </div>
              <div className="text-[13px] font-medium text-[#9CA3AF]">Integration</div>
            </div>

            {/* 26.2% */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FED7AA]/80">
                  <Image src={interactRateIcon} alt="" className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-2 text-[22px] font-extrabold tracking-tight text-[#F97316] sm:text-[26px]">
                <span className="whitespace-nowrap">26.2%</span>
              </div>
              <div className="text-[13px] font-medium text-[#9CA3AF]">Interaction rate</div>
            </div>

            {/* 14s+ */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDD6FE]/80">
                  <Image src={avgEngageIcon} alt="" className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-2 text-[22px] font-extrabold tracking-tight text-[#6366F1] sm:text-[26px]">
                <span className="whitespace-nowrap">
                  14<span className="font-extrabold">s+</span>
                </span>
              </div>
              <div className="text-[13px] font-medium text-[#9CA3AF]">Avg engagement</div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative w-full max-w-[580px]">
          <div className="relative overflow-hidden rounded-[32px] bg-white/90 shadow-[0_26px_80px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5 backdrop-blur">
            {/* Browser chrome */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] text-slate-500 shadow-inner">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>canvas.io/editor</span>
              </div>
              <div className="rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold text-white">
                Live
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-2.5 text-xs font-medium text-slate-500">
              <div className="rounded-full bg-slate-900 text-white px-3 py-1 text-[11px]">Canvas Editor</div>
              <button type="button" className="cursor-default text-[11px] text-slate-400">
                Analytics
              </button>
              <button type="button" className="cursor-default text-[11px] text-slate-400">
                Deploy
              </button>
            </div>

            {/* Main image */}
            <div className="relative w-full">
              <Image
                src={productHeroCard}
                alt="The Canvas runtime and editor powering interactive CTV"
                className="block h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

