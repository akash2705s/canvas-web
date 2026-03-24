"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

function GradientButton({ label }: { label: string }) {
  return (
    <RequestDemoTrigger
      className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_18%,#22C55E_36%,#06B6D4_54%,#3B82F6_72%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
    >
      <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900">
        <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
        <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
          {label}
        </span>
        <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_18%,#22C55E_36%,#06B6D4_54%,#3B82F6_72%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </span>
      </span>
    </RequestDemoTrigger>
  );
}

export function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[320px] w-[480px] rounded-[999px] bg-[radial-gradient(55.9%_111.8%_at_50%_50%,rgba(79,70,229,0.3)_0%,rgba(0,0,0,0)_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-200/80">
          Get started
        </p>

        <motion.h2
          className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to make video interactive?
        </motion.h2>

        <motion.p
          className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]"
          initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Run your first interactive campaign with Canvas.
        </motion.p>

        <motion.div
          className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <GradientButton label="Request Demo" />

          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-[rgb(192,192,192)] p-[3px] shadow-sm transition hover:shadow-md"
          >
            <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
              <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">View Demo</span>
              <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[rgb(192,192,192)] text-black transition group-hover:text-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <title>Arrow right</title>
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

