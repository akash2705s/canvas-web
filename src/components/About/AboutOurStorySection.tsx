"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StoryPill = {
  label: string;
  icon: typeof import("@/assets/About/our_story/team.svg");
};

type TimelineItem = {
  year: string;
  title: string;
  body: string;
  accentColor: string;
};

import teamIcon from "@/assets/About/our_story/team.svg";
import builtIcon from "@/assets/About/our_story/built.svg";
import zeroIcon from "@/assets/About/our_story/zero.svg";

const STORY_PILLS: StoryPill[] = [
  { label: "Team of streaming & ad-tech veterans", icon: teamIcon },
  { label: "Built for the open streaming ecosystem", icon: builtIcon },
  { label: "Zero-disruption, publisher-first design", icon: zeroIcon },
];

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2022",
    title: "Founded",
    body: "Incorporated with a clear goal: make CTV ads genuinely interactive.",
    accentColor: "#F97316",
  },
  {
    year: "2023",
    title: "SVTA Grant",
    body: "Awarded an SVTA innovation grant and joined as a Principal Member.",
    accentColor: "#EAB308",
  },
  {
    year: "2023",
    title: "First Campaign",
    body: "Launched our first live interactive CTV campaign with an OTT partner.",
    accentColor: "#38BDF8",
  },
  {
    year: "2024",
    title: "26.2%",
    body: "Holiday campaign hit a 26.2% interaction rate — 26× the CTV benchmark.",
    accentColor: "#6366F1",
  },
  {
    year: "2025",
    title: "Platform Launch",
    body: "Released the full Canvas platform for publishers and agencies.",
    accentColor: "#8B5CF6",
  },
];

const timelineLineVariants = {
  hidden: { scaleY: 0, opacity: 0, filter: "blur(10px)" },
  visible: {
    scaleY: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const timelineCardVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
  visible: (custom: { index: number; total: number }) => {
    const { index, total } = custom;
    const clampedTotal = Math.max(total - 1, 1);
    const position = index / clampedTotal; // 0 -> 1 along the line

    return {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        // cards reveal just after the line passes each dot over the 1.8s draw
        // line: delay 0.05, duration 1.8 -> reaches dot at ~0.05 + position * 1.8
        delay: 0.05 + position * 1.8 + 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    };
  },
} as const;

export function AboutOurStorySection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF0FB] py-14 sm:py-18 lg:py-22">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-[radial-gradient(circle_at_bottom_left,#FBBF241F_0,#FBBF241F_18%,transparent_60%)] opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-[radial-gradient(circle_at_top_right,#F472B626_0,#F472B626_18%,transparent_60%)] opacity-70" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-16">
        {/* Left: copy */}
        <div className="max-w-xl lg:flex-[0.9]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4F46E51A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Our story
          </div>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            <span className="block">From a live campaign</span>
            <span className="block text-[#F97316]">to a platform for the industry.</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas started with a simple hypothesis: if you could give viewers something to do during an ad — scan a QR
            code, explore a product, save for later — they would. The data proved it. A 26.2% interaction rate on a live
            holiday campaign changed everything.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            That first campaign wasn&apos;t a proof of concept. It was proof that interactive CTV at scale was already
            possible — with existing video creatives, existing ad infrastructure, and a single lightweight script. Now
            we&apos;re building the platform that makes it repeatable for every publisher and agency in the ecosystem.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {STORY_PILLS.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                  <Image src={pill.icon} alt="" className="h-3.5 w-3.5" aria-hidden />
                </span>
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: timeline */}
        <motion.div
          className="relative lg:flex-[1.1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* animated vertical timeline line */}
          <div className="pointer-events-none absolute left-[24px] top-3 bottom-6 hidden sm:block z-0">
            <motion.div
              className="origin-top h-full w-[2px] bg-gradient-to-b from-[#F97316] via-[#4F46E5] to-[#8B5CF6]"
              variants={timelineLineVariants}
            />
          </div>
          <div className="space-y-3.5 sm:space-y-4">
            {TIMELINE_ITEMS.map((item, index) => {
              const total = TIMELINE_ITEMS.length;
              const isOrange = index === 0;
              const isIndigo = index === 2 || index === 4;
              const isPurple = index === 3;

              const yearBg = isOrange
                ? "#F9731612"
                : isIndigo
                  ? "#4F46E512"
                  : isPurple
                    ? "#A78BFA12"
                    : "#EAB30812";

              const yearText = isOrange
                ? "#F97316"
                : isIndigo
                  ? "#4F46E5"
                  : isPurple
                    ? "#A78BFA"
                    : "#EAB308";

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  variants={timelineCardVariants}
                  custom={{ index, total }}
                  className="relative flex gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_18px_35px_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 sm:gap-4 sm:px-5 sm:py-4.5"
                >
                  <div className="relative mt-1 shrink-0 z-10">
                    <div
                      className="relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-900/70 bg-white"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <span className="absolute inset-0 rounded-full bg-white/0" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div
                        className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-bold leading-4 tracking-[0px]"
                        style={{ backgroundColor: yearBg, color: yearText }}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-[15px] font-semibold leading-[1.3] text-slate-900 sm:text-sm">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

