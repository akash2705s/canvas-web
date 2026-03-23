"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import apcIcon from "@/assets/About/our_mission/apc.svg";
import vaeIcon from "@/assets/About/our_mission/vae.svg";
import zdrIcon from "@/assets/About/our_mission/zdr.svg";

const FEATURE_CARDS = [
  {
    title: "Lightweight Runtime",
    body: "Works across CTV, web, and mobile without changing your stack.",
    icon: zdrIcon,
  },
  {
    title: "Visual Editor",
    body: "Create interactive layers on top of video in minutes.",
    icon: vaeIcon,
  },
  {
    title: "Intent Signals",
    body: "Capture real user actions, not inferred metrics.",
    icon: apcIcon,
  },
] as const;

export function AboutMissionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F9FAFB] to-[#EEF2FF] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,#EEF2FF_0,#EEF2FF_30%,transparent_70%)] opacity-80" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-14">
        {/* Left: mission copy */}
        <motion.div className="max-w-lg lg:flex-[0.9]" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-[#4F46E51A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5] cursor-pointer transition-all"
            whileHover={{ scale: 1.05, backgroundColor: "#4F46E52E" }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Our mission
          </motion.div>

          <motion.h2
            className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <motion.span className="block" whileHover={{ x: 4 }}>
              Video is the most powerful surface.
            </motion.span>
            <motion.span className="block text-[#4F46E5]" whileHover={{ x: 4 }}>
              It's just been passive.
            </motion.span>
          </motion.h2>

          <motion.div
            className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-[0_14px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-5"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="relative space-y-3 pl-6">
              <span className="pointer-events-none absolute left-[7px] top-1 h-[calc(100%-6px)] w-px bg-gradient-to-b from-[#4F46E5]/35 via-[#4F46E5]/25 to-transparent" />

              {[
                "Streaming scaled distribution.",
                "But interaction and real feedback never caught up.",
                "Canvas changes that.",
              ].map((line) => (
                <motion.div
                  key={line}
                  className="group relative"
                  whileHover={{ x: 2 }}
                >
                  <span className="absolute -left-6 top-[7px] inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#4F46E5]/30 bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]/70 transition group-hover:bg-[#4F46E5]" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-900 sm:text-[15px]">
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-4 rounded-xl border border-[#4F46E5]/20 bg-[#4F46E5]/6 px-4 py-2.5 text-sm leading-relaxed text-slate-700 sm:text-[15px]"
              whileHover={{ y: -1, boxShadow: "0 12px 26px rgba(79,70,229,0.12)" }}
            >
              We enable viewers to respond inside video, turning every impression into a measurable signal.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right: feature cards */}
        <motion.div
          className="space-y-3 mt-12 lg:mt-14 lg:flex-[1.1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {FEATURE_CARDS.map((card) => (
            <motion.article
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -4, boxShadow: "0 28px 60px rgba(15,23,42,0.15)" }}
              className="group flex items-start gap-4 rounded-2xl bg-white/90 px-6 lg:px-7 py-4 shadow-[0_22px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 backdrop-blur-sm cursor-pointer transition-all"
            >
              <motion.div className="mt-0.5 shrink-0" whileHover={{ scale: 1.15, rotate: 5 }}>
                <Image src={card.icon} alt="" className="h-10 w-10" aria-hidden />
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  className="text-[15px] font-semibold leading-[1.3] text-slate-900 group-hover:text-[#4F46E5] transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p className="mt-1 text-[13px] leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors" whileHover={{ x: 2 }}>
                  {card.body}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
