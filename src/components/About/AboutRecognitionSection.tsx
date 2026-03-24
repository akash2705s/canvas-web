"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import svtaGrantIcon from "@/assets/About/recognition/svta_grand.svg";
import benchmark26xIcon from "@/assets/About/recognition/26x.svg";

type RecognitionCard = {
  id: string;
  title: string;
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
    <section className="relative overflow-hidden bg-[#F1F4FF] py-16 sm:py-20">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-[#E9E8FF] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D63E5]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6D63E5]/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6D63E5]" />
            </span>
            Recognition
          </motion.div>

          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Built on proof, not promises.
          </motion.h2>
        </motion.div>

        <motion.div
          className="mx-auto grid w-full max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {RECOGNITION_CARDS.map((card, index) => (
            <motion.article
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
              }}
              whileHover={{
                y: -2,
                boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
              }}
              className="group relative flex flex-col rounded-[18px] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] ring-1 ring-slate-100"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F8F7FF] text-slate-500">
                  <Image src={card.icon} alt="" className="h-7 w-7" aria-hidden />
                </div>
                {card.year && (
                  <span className="inline-flex items-center rounded-full bg-[#F7F4FF] px-2.5 py-0.5 text-[10px] font-semibold text-[#6D63E5]">
                    {card.year}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-[18px] font-bold leading-[27px] tracking-[0px] text-[rgba(16,24,40,1)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] font-normal leading-[22.75px] tracking-[0px] text-[rgba(106,114,130,1)]">
                  {card.body}
                </p>
              </div>

              <div
                className="mt-4 h-[2px] w-8 rounded-full"
                style={{ backgroundColor: card.accentColor }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

