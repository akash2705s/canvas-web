"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

import arrowRight from "@/assets/About/Hero/ArrowRight.svg";

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0D1120_8.49%,#130C28_54.15%,#0D1120_91.51%)] text-white">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        {/* Left copy */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#4F46E52E] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B3FF]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#A3B3FF]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3B3FF]" />
            </span>
            About Canvas
          </div>

          {reduceMotion ? (
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-[1.1]">
              Canvas is building
              <br />
              the <span className="font-extrabold text-[#818CF8]">interaction layer</span>
              <br />
              for video
            </h1>
          ) : (
            <motion.h1
              className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-[1.1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
            >
              {[
                { id: "about-hero-line-1", content: "Canvas is building" },
                {
                  id: "about-hero-line-2",
                  content: (
                    <>
                      the <span className="font-extrabold text-[#818CF8]">interaction layer</span>
                    </>
                  ),
                },
                {
                  id: "about-hero-line-3",
                  content: "for video",
                },
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
            <div className="mt-5 max-w-xl">
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                We turn video across CTV, web and mobile into measurable, interactive experiences by capturing
                real viewer intent in real time.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.4)] sm:text-base">
                What started as a simple idea &quot;what if viewers could respond inside the video?&quot; is now powering live
                campaigns across streaming platforms.
              </p>
            </div>
          ) : (
            <div className="mt-5 max-w-xl">
              <motion.p
                className="text-sm leading-relaxed text-slate-300 sm:text-base"
                aria-label="We turn video across CTV, web and mobile into measurable, interactive experiences by capturing real viewer intent in real time."
              >
                {(() => {
                  const text =
                    "We turn video across CTV, web and mobile into measurable, interactive experiences by capturing real viewer intent in real time.";
                  const words = text.split(" ");
                  return words.map((word, idx) => (
                    <motion.span
                      key={`${word}-${idx}-${words.length}`}
                      initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.75,
                        delay: 0.22 + idx * 0.02,
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
              <motion.p
                className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.4)] sm:text-base"
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.8 }}
              >
                What started as a simple idea &quot;what if viewers could respond inside the video?&quot; is now powering live
                campaigns across streaming platforms.
              </motion.p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {reduceMotion ? (
              <RequestDemoTrigger
                className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
              >
                <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
                  <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    Request Demo
                  </span>
                  <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
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
                      <title>Arrow right</title>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </RequestDemoTrigger>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <RequestDemoTrigger
                  className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
                >
                  <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
                    <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                      Request Demo
                    </span>
                    <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
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
                        <title>Arrow right</title>
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </RequestDemoTrigger>
              </motion.div>
            )}

            {reduceMotion ? (
              <Link
                href="/blog/turning-passive-ctv-ads-into-active-experiences"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-white/30"
              >
                See our partners
                <Image src={arrowRight} alt="" className="h-3.5 w-3.5 opacity-90" aria-hidden />
              </Link>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Link
                  href="/blog/turning-passive-ctv-ads-into-active-experiences"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-white/30"
                >
                  See our partners
                  <Image src={arrowRight} alt="" className="h-3.5 w-3.5 opacity-90" aria-hidden />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right stats grid */}
        <div className="grid w-full max-w-lg grid-cols-2 gap-4 text-sm sm:gap-5">
          <StatCard
            value="26.2%"
            label="Interaction Rate"
            sub="vs ~0% passive ads"
            valueColor="#F97316"
          />
          <StatCard
            value="14s+"
            label="Avg Engagement"
            sub="per interactive session"
            valueColor="#A78BFA"
          />
          <StatCard
            value="6s+"
            label="First Interaction"
            sub="declared viewer intent"
            valueColor="#818CF8"
          />
          <StatCard
            value="26x"
            label="Above CTV Benchmark"
            sub="industry-first result"
            valueColor="#EAB308"
          />
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  value: string;
  label: string;
  sub: string;
  valueColor: string;
};

function StatCard({ value, label, sub, valueColor }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 24, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl cursor-pointer"
    >
      {/* Animated glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${valueColor}15, transparent 70%)`,
        }}
      />

      <div className="relative flex h-full flex-col justify-between rounded-2xl bg-transparent px-4 py-4">
        <motion.div
          className="mt-1"
          whileHover={{ x: 4 }}
        >
          <motion.p
            className="font-extrabold text-[32px] leading-[32px] tracking-[0px] transition-all"
            style={{ color: valueColor }}
            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          >
            {value}
          </motion.p>
          <motion.p
            className="mt-2 font-semibold text-[13px] leading-[18px] tracking-[0px] text-white group-hover:text-opacity-100 transition-all"
            whileHover={{ x: 2 }}
          >
            {label}
          </motion.p>
        </motion.div>
        <motion.p
          className="mt-1 font-normal text-[11px] leading-[15px] tracking-[0px] text-[#FFFFFF4D] group-hover:text-[#FFFFFF80] transition-all"
          whileHover={{ x: 2 }}
        >
          {sub}
        </motion.p>
      </div>
    </motion.div>
  );
}

