"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CaseStudyLiveExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoInView = useInView(containerRef, { amount: 0.5, once: true });

  const shouldBlur = !videoInView;

  return (
    <section
      className="relative overflow-hidden py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}
      data-interaction-zone="case-study"
    >
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow top right */}
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(249, 168, 212, 0.25)" }} />
        {/* Yellow glow bottom left */}
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full blur-3xl" style={{ backgroundColor: "rgba(252, 211, 77, 0.25)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.7)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            <span>What Viewers Experienced</span>
          </motion.div>

          <motion.h2
            className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[40px] lg:text-[46px] [font-family:var(--font-display)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The live ad experience
          </motion.h2>

          <motion.p
            className="mt-4 text-base text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Viewers saw their regular streaming content paired with a
            <br />
            Canvas interactive overlay — and they engaged.
          </motion.p>
        </div>
      </div>

      {/* Video */}
      <motion.div
        className="relative z-10 flex justify-center px-6 sm:px-10"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        ref={containerRef}
      >
        <video
          src="/videos/case_study_livead.mov"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          className="h-full w-full object-contain"
          data-cursor="play"
          data-cursor-label="Play"
          style={{ filter: shouldBlur ? "blur(6px)" : "blur(0px)", transition: "filter 280ms ease" }}
        >
          <track kind="captions" srcLang="en" label="English" />
        </video>


        {/* Glow effect */}
        <div className="absolute -inset-6 rounded-3xl blur-2xl -z-10" />

      </motion.div>
    </section>
  );
}
