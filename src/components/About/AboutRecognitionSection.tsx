"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import svtaGrantIcon from "@/assets/About/recognition/svta_grand.svg";
import svtaPrincipalBandIcon from "@/assets/About/recognition/svta_principal2.svg";
import benchmark26xIcon from "@/assets/About/recognition/26x.svg";

type RecognitionCard = {
  id: string;
  title: string;
  badge?: string;
  year?: string;
  body: string;
  accentColor: string;
  icon: typeof svtaGrantIcon;
};

const RECOGNITION_CARDS: RecognitionCard[] = [
  {
    id: "svta-grant",
    title: "SVTA Grant Recipient",
    year: "2023",
    body: "Recognized by the Streaming Video Technology Alliance for innovation in interactive CTV infrastructure.",
    accentColor: "#F97316",
    icon: svtaGrantIcon,
  },
  {
    id: "benchmark",
    title: "26× Benchmark",
    year: "2024",
    body: "First documented 26.2% interaction rate on CTV — 26× the passive industry average. Recorded in live campaign.",
    accentColor: "#A855F7",
    icon: benchmark26xIcon,
  },
];

export function AboutRecognitionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F3FF] via-white to-white pt-14 pb-16 sm:pt-18 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,#A855F71A_0,#A855F70D_35%,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4F46E50F] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Recognition
          </div>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            Awards &amp; industry recognition
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas has been recognized by the streaming industry&apos;s leading organizations for innovation in interactive
            CTV infrastructure.
          </p>
        </div>

        {/* top cards */}
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {RECOGNITION_CARDS.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.16 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-3xl bg-white/95 px-5 py-5 shadow-[0_22px_55px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/90"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F5F3FF] text-slate-500">
                  <Image src={card.icon} alt="" className="h-10 w-10" aria-hidden />
                </div>
                {card.year && (
                  <span className="inline-flex items-center rounded-full bg-[#F9731610] px-2.5 py-0.5 text-[11px] font-semibold tracking-normal text-[#F97316]">
                    {card.year}
                  </span>
                )}
                {card.badge && !card.year && (
                  <span className="inline-flex items-center rounded-full bg-[#4F46E510] px-2.5 py-0.5 text-[11px] font-semibold tracking-normal text-[#4F46E5]">
                    {card.badge}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-[15px] font-semibold leading-[1.3] text-slate-900">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{card.body}</p>
              </div>

              <div className="mt-4 h-[2px] w-10 rounded-full" style={{ backgroundColor: `${card.accentColor}55` }} />
            </motion.article>
          ))}
        </div>

        {/* bottom band */}
        <motion.section
          initial={{ opacity: 0, y: 20, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 max-w-5xl mx-auto rounded-[26px] bg-[#F5F3FF] px-5 py-4 shadow-[0_22px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/80 sm:px-7 sm:py-4.5"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <Image src={svtaPrincipalBandIcon} alt="" className="h-12 w-12" aria-hidden />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-slate-900">SVTA: Grant Recipient</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                  Canvas received the Streaming Video Advertise Alliance Grant.
                  <br />
                  actively contributing to
                  open standards for interactive streaming infrastructure.
                </p>
              </div>
            </div>

            <div className="mt-1 flex flex-wrap gap-1.5 sm:mt-0">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#4F46E5] ring-1 ring-[#4F46E52B]">
                Industry Recognition
              </span>
              <span className="inline-flex items-center rounded-full bg-[#F9731610] px-3 py-1 text-[11px] font-semibold text-[#F97316] ring-1 ring-[#F9731624]">
                2026 Grant Recipient
              </span>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

