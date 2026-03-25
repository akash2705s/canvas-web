"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import tick2Icon from "@/assets/case_Studies/results/tick2.svg";
import { useState } from "react";

export function CaseStudyEngagementDuration() {
  const [replayToken, setReplayToken] = useState(0);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow top right */}
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(249, 168, 212, 0.25)" }} />
        {/* Yellow glow bottom left */}
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full blur-3xl" style={{ backgroundColor: "rgba(252, 211, 77, 0.25)" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Timeline Chart Card */}
          <div className="relative">
            <motion.div
              key={replayToken}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              className="relative rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow"
              onClick={() => setReplayToken((v) => v + 1)}
              data-cursor="hover"
              data-cursor-label="Click to interact"
              data-interaction-zone="custom-card"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-6">Viewer Engagement Timeline</p>

            {/* Timeline */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-[10px] font-semibold text-slate-500">
                <span>0s</span>
                <span>6s</span>
                <span>14s</span>
                <span>20s</span>
                <span>30s</span>
              </div>

              <div className="relative">
                <div className="h-6 bg-slate-200 rounded-full overflow-hidden flex items-center relative">
                  <div className="absolute left-0 h-full w-1/5 bg-slate-200" />

                  {/* 6s marker line */}
                  <div
                    className="absolute h-full w-1.5 top-0"
                    style={{ left: "calc(20% + 16px)", backgroundColor: "rgb(79, 70, 229)" }}
                  />

                  <motion.div
                    className="h-full rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(90deg, #A78BFA 0%, #C4B5FD 100%)", marginLeft: "calc(20% + 18px)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <span className="text-xs font-semibold whitespace-nowrap text-white drop-shadow-sm" style={{ color: "white" }}>
                      14s+ average engagement
                    </span>
                  </motion.div>
                </div>

                {/* First interaction pointer */}
                <div
                  className="absolute mt-1 flex flex-col items-center"
                  style={{ left: "calc(20% + 16px)", transform: "translateX(-50%)" }}
                >
                  <div className="text-xs font-bold text-violet-600">↑</div>
                  <span className="text-xs font-semibold text-violet-600 whitespace-nowrap">First interaction at 6s</span>
                </div>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "6s+", label: "Time to first", color: "rgba(79, 70, 229, 1)" },
                { value: "14s+", label: "Avg engagement", color: "rgba(79, 70, 229, 1)" },
                { value: "26.2%", label: "Interacted", color: "rgba(249, 115, 22, 1)" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="rounded-lg bg-slate-50 p-4 text-center cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
                >
                  <p className="text-xl font-extrabold" style={{ color: item.color }}>{item.value}</p>
                  <p className="mt-1 text-[10px] text-slate-600 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Chart bars */}
            <div className="mt-8 flex items-end justify-center gap-2 h-32">
              {[
                { id: "bar-1", height: 65 },
                { id: "bar-2", height: 72 },
                { id: "bar-3", height: 58 },
                { id: "bar-4", height: 78 },
                { id: "bar-5", height: 68 },
                { id: "bar-6", height: 82 },
                { id: "bar-7", height: 76 },
                { id: "bar-8", height: 88 },
                { id: "bar-9", height: 82 },
                { id: "bar-10", height: 68 },
                { id: "bar-11", height: 54 },
                { id: "bar-12", height: 42 },
                { id: "bar-13", height: 28 },
                { id: "bar-14", height: 18 },
                { id: "bar-15", height: 12 },
              ].map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-500 to-violet-300"
                  style={{ height: `${item.height}%` }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${item.height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.03 }}
                />
              ))}
            </div>
          </motion.div>
          </div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-600 w-fit">
              Engagement Duration
            </div>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Viewers engaged for
              <br />
              <span style={{ color: "rgba(167, 139, 250, 1)" }}>14+ seconds</span> per session
            </h3>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              The average viewer who interacted spent over 14 seconds actively engaging — exploring products, scanning QR codes, and browsing options. First interactions happened at just 5 seconds in.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { id: "avg14", text: "14s+ average engagement per interactive session" },
                { id: "first6", text: "First interaction triggered at 6s average" },
                { id: "multistep", text: "Multi-step engagement across multiple interaction types" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <Image src={tick2Icon} alt="checkmark" width={20} height={20} />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
