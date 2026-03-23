"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
  accentColor: string;
  videoColor: string;
  codeSnippet?: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Install Runtime Script",
    description: "Install a lightweight script across streaming players or apps.",
    details: [
      "The Canvas runtime sits seamlessly alongside existing SSAI environments",
      "Compatible with every major CTV platform",
      "Zero disruption to current ad delivery",
    ],
    accentColor: "from-amber-500 to-orange-500",
    videoColor: "from-amber-900/20 to-orange-900/20",
    codeSnippet: "canvas-runtime.ts",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <title>Install Runtime Script</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Convert Ads",
    description: "Upload your existing video ad and add interactive triggers in seconds.",
    details: [
      "The Canvas Editor or AI assistant converts any video creative",
      "Add interactive triggers without video rebuild",
      "Deploy in seconds with no creative rework required",
    ],
    accentColor: "from-blue-500 to-cyan-500",
    videoColor: "from-blue-900/20 to-cyan-900/20",
    codeSnippet: "editor.config.ts",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <title>Convert Ads</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Capture Signals",
    description: "Every viewer interaction becomes measurable first-party intent data.",
    details: [
      "QR scans, CTA clicks, product exploration — all tracked",
      "Captured as declared intent signals beyond passive impressions",
      "Real-time analytics and actionable insights",
    ],
    accentColor: "from-violet-500 to-purple-500",
    videoColor: "from-violet-900/20 to-purple-900/20",
    codeSnippet: "signals.analytics.ts",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <title>Capture Signals</title>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function HowCanvasWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  // (scroll-based transforms removed to keep build/lint clean)

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-zinc-950 py-32">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        <motion.div
          className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-3xl pointer-events-none"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 backdrop-blur-sm"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
          >
            ✨ Our Process
          </motion.span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white tracking-tight">
            Three steps from{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              passive to interactive
            </span>
          </h2>

          <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Canvas integrates seamlessly into existing streaming infrastructure, with no disruption to
            current ad delivery.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="space-y-48">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <motion.div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                onViewportEnter={() => setActiveStep(idx)}
              >
                {/* Content Side */}
                <motion.div
                  className={idx % 2 === 1 ? "lg:order-2" : ""}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {/* Step Number */}
                  <div className="flex items-baseline gap-4 mb-8">
                    <motion.span
                      className={`text-7xl md:text-8xl font-black bg-gradient-to-br ${step.accentColor} bg-clip-text text-transparent`}
                      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.span>
                    <div className="flex-1">
                      <motion.p
                        className="text-white/40 text-sm font-medium tracking-widest uppercase"
                        animate={isActive ? { color: "rgba(255,255,255,0.6)" } : { color: "rgba(255,255,255,0.4)" }}
                      >
                        Step {parseInt(step.number)}
                      </motion.p>
                    </div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                    animate={isActive ? { color: "#ffffff" } : { color: "#e5e7eb" }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-lg text-white/60 mb-8 leading-relaxed">{step.description}</p>

                  {/* Details List */}
                  <ul className="space-y-4 mb-10">
                    {step.details.map((detail, didx) => (
                      <motion.li
                        key={detail}
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 + didx * 0.1 }}
                      >
                        <motion.div
                          className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${step.accentColor} shrink-0`}
                          animate={isActive ? { scale: 1.5 } : { scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="text-white/70 group-hover:text-white/90 transition-colors">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`group relative inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.accentColor} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className={`absolute inset-0 border border-gradient-to-r ${step.accentColor}`} style={{
                      backgroundImage: `linear-gradient(90deg, var(--tw-gradient-stops))`,
                      WebkitBackgroundClip: 'text',
                    }} />
                    <span className="relative text-white flex items-center gap-2">
                      Learn more
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <title>Arrow right</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Video Side */}
                <motion.div
                  className={idx % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${step.videoColor}`}
                    whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
                    animate={isActive ? { y: -8 } : { y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Glass effect border accent */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none">
                      <div className="absolute top-0 left-1/4 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </div>

                    {/* Video Container */}
                    <div className="aspect-video bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                      {/* Animated background elements */}
                      <div className="absolute inset-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.videoColor} opacity-20`} />
                        <motion.div
                          className={`absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none`}
                          style={{
                            backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </div>

                      {/* Play button overlay */}
                      <motion.button
                        className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.svg
                          className="w-7 h-7 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <title>Play</title>
                          <path d="M8 5v14l11-7z" />
                        </motion.svg>
                      </motion.button>

                      {/* Code snippet label */}
                      <motion.div
                        className="absolute bottom-6 left-6 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/60 font-mono"
                        animate={isActive ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {step.codeSnippet}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Decorative glow */}
                  <motion.div
                    className={`absolute -inset-4 rounded-2xl bg-gradient-to-r ${step.accentColor} opacity-0 blur-2xl pointer-events-none -z-10`}
                    animate={isActive ? { opacity: 0.15 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-48 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get started?</h3>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto">
            See how Canvas can transform your streaming advertising with interactive, intent-driven experiences.
          </p>

          <motion.button
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Start Building Canvas Today
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <title>Arrow right</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
