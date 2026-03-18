"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import tickIcon from "@/assets/case_Studies/results/tick1.svg";

export function CaseStudyResults() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="text-center">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Results
          </motion.div>

          <motion.h2
            className="mt-6 text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[52px] [font-family:var(--font-display)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">The results weren't</span>
            <span className="block">just good.</span>
            <span className="block" style={{ color: "rgba(167, 139, 250, 1)" }}>
              They were historic.
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            For the first time on CTV, viewers actively engaged with an ad —
            <br />
            scanning QR codes, exploring products, and signaling intent directly
            <br />
            from their TV screen.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-600 w-fit">
              Interaction Rate
            </div>

            <h3 className="mt-6 text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-slate-900 sm:text-[32px]">
              A <span style={{ color: "rgba(249,115,22,1)" }}>26.2%</span> interaction rate :
              <br />
              26x above benchmark
            </h3>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              More than one in four viewers actively engaged with the interactive ad unit.
              The passive CTV average sits below 1%. This wasn't a fluke — it was a
              structural shift in how audiences engage with streaming ads.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { id: "viewers", text: "26.2% of viewers clicked or interacted" },
                { id: "higher", text: "26x higher than passive CTV norms" },
                { id: "consistent", text: "Consistent across all platforms and device types" },
              ].map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <Image src={tickIcon} alt="checkmark" width={20} height={20} />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual chart */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/20 space-y-5" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)" }}>
              {/* Header */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Key Metric</p>
              </div>

              {/* Main gauge chart */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-40 w-40">
                  <svg className="h-full w-full" viewBox="0 0 200 200" style={{ filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))" }} aria-label="Interaction rate gauge">
                    <title>Interaction rate gauge chart</title>
                    {/* Center circle - white background */}
                    <circle cx="100" cy="100" r="70" fill="white" />

                    {/* Outer ring - black background */}
                    <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="2" />

                    {/* Tick marks around circle */}
                    {Array.from({ length: 13 }).map((_, i) => {
                      const angle = (i / 12) * 180 - 90;
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 100 + 88 * Math.cos(rad);
                      const y1 = 100 + 88 * Math.sin(rad);
                      const x2 = 100 + 98 * Math.cos(rad);
                      const y2 = 100 + 98 * Math.sin(rad);
                      return <line key={`tick-${i}-${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(30, 30, 30, 0.4)" strokeWidth="2" />;
                    })}

                    {/* Orange segments */}
                    {[0, 1, 2, 3, 4].map((i) => {
                      const angle = (i / 12) * 180 - 90;
                      const rad = (angle * Math.PI) / 180;
                      const x = 100 + 80 * Math.cos(rad);
                      const y = 100 + 80 * Math.sin(rad);
                      return (
                        <g key={`segment-orange-${i}-${x}-${y}`}>
                          <circle cx={x} cy={y} r="8" fill="rgba(249,115,22,1)" />
                          <circle cx={x} cy={y} r="5" fill="white" />
                        </g>
                      );
                    })}

                    {/* White segments on right */}
                    {[8, 9, 10, 11, 12].map((i) => {
                      const angle = (i / 12) * 180 - 90;
                      const rad = (angle * Math.PI) / 180;
                      const x = 100 + 80 * Math.cos(rad);
                      const y = 100 + 80 * Math.sin(rad);
                      return (
                        <circle key={`segment-white-${i}-${x}-${y}`} cx={x} cy={y} r="8" fill="white" opacity="0.9" />
                      );
                    })}
                  </svg>

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-3xl font-extrabold text-slate-900">26.2%</p>
                    <p className="mt-0.5 text-[9px] font-medium text-slate-600">Interaction Rate</p>
                  </div>
                </div>
              </motion.div>

              {/* Comparison bars */}
              <div className="space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">VS. INDUSTRY BENCHMARK</p>

                <div className="grid grid-cols-2 gap-5">
                  {/* Canvas bar */}
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="mb-2 h-24 w-full rounded-lg"
                      style={{ background: "linear-gradient(0deg, #F97316 0%, #FBBF24 100%)" }}
                      whileHover={{ boxShadow: "0 12px 24px rgba(249, 115, 22, 0.3)" }}
                    />
                    <p className="text-[11px] font-semibold text-slate-700">Canvas</p>
                    <p className="mt-0.5 text-[10px] font-bold" style={{ color: "rgba(249,115,22,1)" }}>26.2%</p>
                  </motion.div>

                  {/* Industry bar */}
                  <div className="flex flex-col items-center">
                    <div className="mb-2 h-24 w-full rounded-lg bg-slate-200" />
                    <p className="text-[11px] font-semibold text-slate-700">Industry avg</p>
                    <p className="mt-0.5 text-[10px] font-bold text-slate-500">&lt;1%</p>
                  </div>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="rounded-lg bg-orange-50 border border-orange-200 px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 flex items-center justify-center font-bold text-white" style={{ width: "40px", height: "40px", borderRadius: "14px", background: "linear-gradient(0deg, #F97316 0%, #FBBF24 100%)", opacity: 1 }}>
                    26x
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-900">26x above CTV benchmark</p>
                    <p className="mt-0.5 text-[9px] text-slate-600">vs. &lt;1% passive industry average</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
