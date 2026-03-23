"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import tickIcon from "@/assets/case_Studies/results/tick1.svg";

export function CaseStudyResults() {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { amount: 0.5, once: true });
  const shouldBlur = !cardInView;
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
                  className="flex items-start gap-3 group cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div className="mt-1 flex-shrink-0" whileHover={{ scale: 1.15 }}>
                    <Image src={tickIcon} alt="checkmark" width={20} height={20} />
                  </motion.div>
                  <span className="text-sm text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual chart */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={cardRef}
          >
            <motion.div
              className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/20 space-y-5 transition-shadow"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)" }}
              whileHover={!shouldBlur ? { y: -4, boxShadow: "0 30px 70px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)" } : {}}
            >
              {/* Header */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Key Metric</p>
              </div>

              {/* Main gauge chart */}
              <motion.div
                className="flex justify-center"
                whileHover={!shouldBlur ? { scale: 1.08, y: -8 } : {}}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="relative h-40 w-40"
                  animate={cardInView ? { rotateZ: [0, 2, -2, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.svg
                    className="h-full w-full"
                    viewBox="0 0 200 200"
                    style={{ filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3))" }}
                    aria-label="Interaction rate gauge"
                  >
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
                      return (
                        <motion.line
                          key={`tick-${i}-${x1}-${y1}`}
                          x1={x1} y1={y1} x2={x2} y2={y2}
                          stroke="rgba(30, 30, 30, 0.4)"
                          strokeWidth="2"
                          initial={{ opacity: 0 }}
                          animate={cardInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.02 }}
                        />
                      );
                    })}

                    {/* Orange segments */}
                    {[0, 1, 2, 3, 4].map((i) => {
                      const angle = (i / 12) * 180 - 90;
                      const rad = (angle * Math.PI) / 180;
                      const x = 100 + 80 * Math.cos(rad);
                      const y = 100 + 80 * Math.sin(rad);
                      return (
                        <g key={`segment-orange-${i}-${x}-${y}`}>
                          <motion.circle
                            cx={x} cy={y} r="8"
                            initial={{ fill: "rgba(249,115,22,0.3)", scale: 0 }}
                            animate={cardInView ? { fill: "rgba(249,115,22,1)", scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                          />
                          <motion.circle
                            cx={x} cy={y} r="5"
                            fill="white"
                            initial={{ scale: 0 }}
                            animate={cardInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                          />
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
                        <motion.circle
                          key={`segment-white-${i}-${x}-${y}`}
                          cx={x} cy={y} r="8"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={cardInView ? { opacity: 0.9, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                          fill="white"
                        />
                      );
                    })}
                  </motion.svg>

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.p 
                      className="text-3xl font-extrabold text-slate-900"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      26.2%
                    </motion.p>
                    <motion.p 
                      className="mt-0.5 text-[9px] font-medium text-slate-600"
                      initial={{ opacity: 0 }}
                      animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      Interaction Rate
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Comparison bars */}
              <div className="space-y-2">
                <motion.p 
                  className="text-[10px] font-semibold uppercase tracking-wider text-slate-500"
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  VS. INDUSTRY BENCHMARK
                </motion.p>

                <div className="grid grid-cols-2 gap-5">
                  {/* Canvas bar */}
                  <motion.div
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={!shouldBlur ? { scale: 1.05, y: -4 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="mb-2 h-24 w-full rounded-lg transition-shadow"
                      style={{ background: "linear-gradient(0deg, #F97316 0%, #FBBF24 100%)" }}
                      whileHover={!shouldBlur ? { boxShadow: "0 16px 32px rgba(249, 115, 22, 0.4)" } : {}}
                      initial={{ height: 0 }}
                      animate={cardInView ? { height: "6rem" } : { height: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    />
                    <motion.p 
                      className="text-[11px] font-semibold text-slate-700"
                      initial={{ opacity: 0 }}
                      animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      Canvas
                    </motion.p>
                    <motion.p 
                      className="mt-0.5 text-[10px] font-bold" 
                      style={{ color: "rgba(249,115,22,1)" }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      26.2%
                    </motion.p>
                  </motion.div>

                  {/* Industry bar */}
                  <motion.div
                    className="flex flex-col items-center cursor-pointer pt-20"
                    whileHover={!shouldBlur ? { scale: 1.05, y: -4 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.65, type: "spring", stiffness: 300, damping: 20 }}
                  >
                  
                    <motion.div
                      className="mb-2 h-24 w-full rounded-lg bg-slate-200 transition-shadow"
                      whileHover={!shouldBlur ? { boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" } : {}}
                      initial={{ height: "1.2rem" }}
                      animate={{ height: "1.2rem" }}
                      transition={{ duration: 0.6, delay: 0.68, ease: "easeOut" }}
                    />
                    <motion.p 
                      className="text-[11px] font-semibold text-slate-700"
                      initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.85 }}
                    >
                      Industry avg
                    </motion.p>
                    <motion.p 
                      className="mt-0.5 text-[10px] font-bold text-slate-500"
                      initial={{ opacity: 0, scale: 0.5 }}
                    animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4, delay: 0.95 }}
                    >
                      &lt;1%
                    </motion.p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom badge */}
              <motion.div
                className="rounded-lg bg-orange-50 border border-orange-200 px-3 py-2.5 cursor-pointer"
                whileHover={!shouldBlur ? { scale: 1.02, boxShadow: "0 8px 16px rgba(249, 115, 22, 0.2)" } : {}}
                initial={{ opacity: 0, y: 10 }}
              animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <div className="flex items-center gap-2.5">
                  <motion.div
                    className="flex-shrink-0 flex items-center justify-center font-bold text-white transition-all"
                    style={{ width: "40px", height: "40px", borderRadius: "14px", background: "linear-gradient(0deg, #F97316 0%, #FBBF24 100%)", opacity: 1 }}
                    whileHover={!shouldBlur ? { scale: 1.1 } : {}}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={cardInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.5, delay: 1.05, type: "spring", stiffness: 300 }}
                  >
                    26x
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    <p className="text-[11px] font-semibold text-slate-900">26x above CTV benchmark</p>
                    <p className="mt-0.5 text-[9px] text-slate-600">vs. &lt;1% passive industry average</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
