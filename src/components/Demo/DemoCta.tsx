"use client";

import { motion } from "framer-motion";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

export function DemoCta() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute h-[260px] w-[260px] rounded-full blur-3xl" style={{ backgroundColor: "rgba(249, 168, 212, 0.55)", top: "-80px", right: "-120px" }} />
        <div className="absolute h-[200px] w-[200px] rounded-full" style={{ backgroundColor: "rgb(249, 168, 212)", opacity: 0.35, top: "-40px", right: "-80px" }} />
        <div className="absolute h-[190px] w-[190px] rounded-full blur-3xl" style={{ backgroundColor: "rgba(252, 211, 77, 0.55)", bottom: "-80px", left: "10px" }} />
        <div className="absolute h-[130px] w-[130px] rounded-full" style={{ backgroundColor: "rgb(252, 211, 77)", opacity: 0.4, bottom: "-20px", left: "141px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10">
        {/* Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4 inline-block">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#F97316] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#F97316]/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]"></span>
              </span>
              Ready to go live?
            </span>
          </div>

          <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[46px] [font-family:var(--font-display)]">
            Run your first interactive
            <br />
            CTV campaign
          </h2>

          <p className="mt-6 text-base text-slate-600 sm:text-lg">
            Join the streaming platforms and agencies already using Canvas to drive
            <br />
            measurable results.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RequestDemoTrigger className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md">
              <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">Request a Full Demo</span>
                <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <title>Arrow right</title>
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </RequestDemoTrigger>

            <a
              className="group inline-flex items-center gap-2 rounded-full bg-[rgb(192,192,192)] p-[3px] shadow-sm transition hover:shadow-md"
              href="/case-studies/"
            >
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">View Case Study</span>
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
                  >
                    <title>Arrow right</title>
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
