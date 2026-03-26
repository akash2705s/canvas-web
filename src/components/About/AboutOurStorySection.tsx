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

const STORY_PILLS: StoryPill[] = [
  { label: "Clear gap, rapid execution", icon: teamIcon },
  { label: "Built with platform partners", icon: builtIcon },
];

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2023",
    title: "First campaign \u2192 26.2% interaction rate",
    body: "Our debut live campaign delivered a 26.2% interaction rate \u2014 26\u00d7 above the CTV industry benchmark.",
    accentColor: "#F97316",
  },
  {
    year: "2024",
    title: "Deployed across OTT apps",
    body: "Powering live campaigns through OTT Studio via Cineverse and expanding across streaming platforms.",
    accentColor: "#38BDF8",
  },
  {
    year: "2025",
    title: "Now expanding across streaming, web, and mobile",
    body: "We are building this in real time alongside platforms, publishers, and demand partners.",
    accentColor: "#6366F1",
  },
];

const timelineLineVariants = {
  hidden: { scaleY: 0, opacity: 0, filter: "blur(10px)" },
  visible: (custom: {
    scaleValues: number[];
    times: number[];
    delay: number;
    duration: number;
  }) => ({
    scaleY: custom.scaleValues,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      times: custom.times,
    },
  }),
} as const;

export function AboutOurStorySection() {
  const ENABLE_ABOUT_OUR_STORY_SECTION = true;
  if (!ENABLE_ABOUT_OUR_STORY_SECTION) return null;

  const total = TIMELINE_ITEMS.length;
  const lastIndex = Math.max(total - 1, 1);

  // Must match the per-item delay math below:
  // delay = 0.05 + position * 1.8 + 0.08
  const cardDelays = TIMELINE_ITEMS.map((_, index) => 0.05 + (index / lastIndex) * 1.8 + 0.08);
  const lineDelay = cardDelays[0] ?? 0;
  const lineDuration = Math.max((cardDelays[cardDelays.length - 1] ?? 0) - lineDelay, 0.01);

  // Line should grow stepwise with each card.
  const scaleValues = TIMELINE_ITEMS.map((_, index) => index / lastIndex);
  const times = TIMELINE_ITEMS.map((_, index) => (cardDelays[index] - lineDelay) / lineDuration);

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

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            <span className="block">Built fast.</span>
            <span className="block text-[#F97316]">Proven faster.</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas didn&apos;t come from years of iteration. It came from a clear gap and rapid execution.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            We are building this in real time alongside platforms, publishers and demand partners.
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
          <div className="pointer-events-none absolute bottom-6 left-[22px] top-3 z-0 sm:left-[24px]">
            <motion.div
              className="origin-top h-full w-[2px] bg-gradient-to-b from-[#F97316] via-[#4F46E5] to-[#8B5CF6]"
              variants={timelineLineVariants}
              custom={{
                scaleValues,
                times,
                delay: lineDelay,
                duration: lineDuration,
              }}
            />
          </div>
          <div className="space-y-3.5 sm:space-y-4">
            {TIMELINE_ITEMS.map((item, index) => {
              const total = TIMELINE_ITEMS.length;
              const clampedTotal = Math.max(total - 1, 1);
              const position = index / clampedTotal;
              const delay = 0.05 + position * 1.8 + 0.08;

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{
                    duration: 0.75,
                    delay,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
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

