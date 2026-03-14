"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "infra-integration",
    question: "How does Canvas integrate with existing ad infrastructure?",
    answer:
      "Canvas Runtime installs as a lightweight (<50KB) script alongside your existing SSAI setup. It's fully compatible with Google DAI, AWS MediaTailor, and other major ad servers. No changes to your current ad stack required — Canvas runs in parallel, never disrupting ad fill or playback.",
  },
  {
    id: "platform-support",
    question: "Which CTV platforms does Canvas support?",
    answer:
      "Canvas is designed to work across leading OTT and CTV environments. We integrate at the player and app layer so publishers can enable interactivity without rebuilding their infrastructure.",
  },
  {
    id: "editor-agencies",
    question: "How does the Canvas Editor work for agencies?",
    answer:
      "Agencies use the Canvas Editor to add interactive overlays on top of existing video creatives — QR codes, CTAs, product reveals, and more — without needing engineering support.",
  },
  {
    id: "intent-signals",
    question: "What intent signals does Canvas capture?",
    answer:
      "Canvas captures declared viewer intent such as QR scans, button taps, product explores, save-for-later actions, and other interactive events, mapped back to campaigns and creatives.",
  },
  {
    id: "playback-safe",
    question: "Is Canvas playback-safe? Will it affect my ad fill rates?",
    answer:
      "Yes. Canvas runs alongside your existing SSAI and ad decisioning flows, and is designed not to interfere with ad serving, playback, or fill rates.",
  },
  {
    id: "pricing",
    question: "How is Canvas priced?",
    answer:
      "Canvas pricing is based on interactive impressions and usage of our tools. We work with publishers and agencies to align pricing with your existing deal structures.",
  },
];

export function ProductFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4FF] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#4F46E50F] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            Product &amp; Infrastructure FAQs
          </span>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Everything publishers, agencies, and infra teams need to know about Canvas.
          </p>
        </div>

        <div className="mt-8 space-y-3 sm:mt-10">
          {FAQ_ITEMS.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[18px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/90"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-4.5"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                    {item.question}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 ring-1 ring-slate-200"
                    aria-hidden
                  >
                    <svg
                      className={`h-3.5 w-3.5 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 8L10 12.5L14.5 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="border-t border-slate-100 px-5 py-4 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-[13px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

