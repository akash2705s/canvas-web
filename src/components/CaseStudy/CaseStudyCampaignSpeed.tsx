"use client";

import { motion } from "framer-motion";
import tick4Icon from "@/assets/case_Studies/results/tick4.svg";
import Image from "next/image";

export function CaseStudyCampaignSpeed() {
  const weeks = [
    {
      id: "week1",
      week: "Week 1",
      title: "Integration",
      description: "Canvas runtime deployed across streaming apps",
      color: "rgba(249, 115, 22, 1)",
      position: "0%",
    },
    {
      id: "week2",
      week: "Week 2",
      title: "Creative Dev",
      description: "Interactive units built with Canvas Editor",
      color: "rgba(251, 191, 36, 1)",
      position: "33%",
    },
    {
      id: "week3",
      week: "Week 3",
      title: "Go Live",
      description: "Interactive ads running across CTV devices",
      color: "rgba(147, 51, 234, 1)",
      position: "66%",
    },
    {
      id: "week4",
      week: "Week 4",
      title: "Analytics",
      description: "Intent signals analyzed and reported",
      color: "rgba(79, 70, 229, 1)",
      position: "100%",
    },
  ];

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
          {/* Left: Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-6">Campaign Timeline — 4 Weeks</p>

            {/* Timeline line with dots */}
            <div className="relative mb-12">
              {/* Background line */}
              <div className="absolute top-2 left-0 right-0 h-1 bg-slate-200 rounded-full" />

              {/* Gradient line */}
              <motion.div
                className="absolute top-2 left-0 h-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, rgba(249,115,22,1) 0%, rgba(251,191,36,1) 33%, rgba(147,51,234,1) 66%, rgba(79,70,229,1) 100%)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              {/* Dots */}
              {weeks.map((item) => (
                <motion.div
                  key={item.id}
                  className="absolute top-0 w-5 h-5 rounded-full border-2 border-white"
                  style={{
                    left: item.position,
                    backgroundColor: item.color,
                    transform: "translateX(-50%)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                />
              ))}
            </div>

            {/* Week cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {weeks.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="rounded-lg p-4"
                  style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <p className="text-[10px] font-semibold text-slate-500">{item.week}</p>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold w-fit" style={{ backgroundColor: "rgba(234, 179, 8, 0.06)", color: "rgba(234, 179, 8, 1)" }}>
              Campaign Speed
            </div>

            <h3 className="mt-6 text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-slate-900 sm:text-[32px]">
              From kickoff to live campaign
              <br />
              in <span style={{ color: "rgba(251, 191, 36, 1)" }}>just 4 weeks</span>
            </h3>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Canvas was integrated, the creative was built, and the campaign went live — all in a four-week window. No disruption to existing infrastructure, no complex development work.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { id: "zero-ssai", text: "Week 1 integration with zero SSAI disruption" },
                { id: "canvas-editor", text: "Interactive units built in Canvas Editor, not code" },
                { id: "analytics", text: "Campaign analytics live from day one" },
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
                    <div className="flex-shrink-0">
                      <Image src={tick4Icon} alt="checkmark" width={20} height={20} />
                    </div>
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
