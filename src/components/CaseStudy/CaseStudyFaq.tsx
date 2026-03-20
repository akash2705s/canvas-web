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
    id: "integration-time",
    question: "How long did it take to integrate Canvas for this campaign?",
    answer:
      "Canvas was fully integrated in just one week with zero disruption to existing SSAI infrastructure. The lightweight runtime installed alongside the current ad stack, and the campaign went live within four weeks from kickoff.",
  },
  {
    id: "platforms-included",
    question: "What streaming platforms were included in the campaign?",
    answer:
      "The campaign ran across multiple OTT and CTV platforms, with Canvas Runtime deployed at the player and app layer. This ensured consistent interactive ad delivery across all streaming environments without requiring platform-specific builds.",
  },
  {
    id: "intent-tracking",
    question: "How were the intent signals tracked and reported?",
    answer:
      "Canvas captured and tracked all viewer interactions in real-time — QR scans, learn more clicks, store locator views, and product browses. Intent signals were analyzed and dashboards were live from day one, providing actionable metrics beyond traditional impressions.",
  },
  {
    id: "existing-creative",
    question: "Was the campaign live with existing video creative?",
    answer:
      "Yes. The interactive overlays were built in the Canvas Editor on top of existing video creatives — no need to re-produce or re-upload content. This allowed rapid deployment without lengthy creative production cycles.",
  },
  {
    id: "replicate-model",
    question: "Can my brand replicate this campaign model?",
    answer:
      "Absolutely. This campaign proves the viability of the Canvas interactive CTV model for any brand. With the Canvas Editor, agencies can build interactive overlays in hours, not weeks. Integration takes days, not months. The 26.2% interaction rate demonstrates a new playbook for CTV advertising that's now available to any brand.",
  },
];

export function CaseStudyFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <div className="mt-6 text-center">
          <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Everything you need to know about running interactive CTV campaigns with Canvas.
          </p>
        </div>

        <motion.div
          className="mt-8 space-y-3 sm:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = item.id === openId;
            return (
              <motion.div
                key={item.id}
                className="overflow-hidden rounded-[18px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/90 cursor-pointer transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                whileHover={{
                  boxShadow: "0 24px 70px rgba(79,70,229,0.12)",
                  scale: 1.01,
                }}
                whileTap={{ scale: 0.99 }}
              >
                <motion.button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-4.5"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  whileHover={{ backgroundColor: "rgba(249,115,22,0.02)" }}
                >
                  <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                    {item.question}
                  </span>
                  <motion.span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 ring-1 ring-slate-200"
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        d="M5.5 8L10 12.5L14.5 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </motion.button>
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
