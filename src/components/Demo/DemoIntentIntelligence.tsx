"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import dashboardIcon from "@/assets/Demo/Intent_Intelligence/intent_signal_dashboard.svg";
import ctaIcon from "@/assets/Demo/Intent_Intelligence/cta.svg";
import qrcIcon from "@/assets/Demo/Intent_Intelligence/qrc.svg";
import productIcon from "@/assets/Demo/Intent_Intelligence/product_explor.svg";
import saveLaterIcon from "@/assets/Demo/Intent_Intelligence/save_later.svg";

function useCountUp(target: number, inView: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!inView) {
      hasAnimatedRef.current = false;
      setValue(0);
      return;
    }

    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(target * progress);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, target, durationMs]);

  return inView ? value : 0;
}

const INTENT_SIGNALS = [
  {
    id: "cta",
    icon: ctaIcon,
    title: "CTA Click",
    label: "Highest intent",
    description: "Viewer tags your CTA — logged instantly with timestamp, creative ID, and platform.",
  },
  {
    id: "qr",
    icon: qrcIcon,
    title: "QR Scan",
    label: "Mobile bridge",
    description: "Viewer scans QR code with mobile — redirect tracked, scan-to-session path captured.",
  },
  {
    id: "product",
    icon: productIcon,
    title: "Product Explore",
    label: "Browse signal",
    description: "Viewer opens the expandable product card — dwell time and scroll depth recorded.",
  },
  {
    id: "save",
    icon: saveLaterIcon,
    title: "Save for Later",
    label: "Deferred signal",
    description: "Viewer saves to watch-list — deferred conversion signal tied to user session.",
  },
];

const SIGNAL_ROWS = [
  { icon: ctaIcon, title: "CTA Click", desc: "Highest intent CTA at overlay", target: 847, color: "text-orange-500", bgColor: "bg-white", label: "CTA" },
  { icon: qrcIcon, title: "QR Scan", desc: "Viewer scanned code with mobile device", target: 612, color: "text-blue-500", bgColor: "bg-white", label: "QR" },
  { icon: productIcon, title: "Product Explore", desc: "Viewer opened expandable product card", target: 439, color: "text-purple-500", bgColor: "bg-white", label: "Product" },
  { icon: saveLaterIcon, title: "Save for Later", desc: "Viewer saved items to their watch list", target: 291, color: "text-yellow-500", bgColor: "bg-white", label: "Save" },
] as const;

const MAX_SIGNAL = 847;

export function DemoIntentIntelligence() {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { amount: 0.45, once: true });
  const reveal = cardInView;

  const totalSignals = useCountUp(2189, reveal, 1100);
  const interactionRate = useCountUp(26.2, reveal, 1000);
  const avgEngagement = useCountUp(14, reveal, 1000);

  const ctaCount = useCountUp(847, reveal, 900);
  const qrCount = useCountUp(612, reveal, 950);
  const productCount = useCountUp(439, reveal, 1000);
  const saveCount = useCountUp(291, reveal, 1050);

  const rowCounts = [ctaCount, qrCount, productCount, saveCount];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left: Dashboard */}
          <div className="relative" style={{ marginTop: "120px" }}>
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 30px 80px rgba(0,0,0,0.15)" }}
              className="w-full rounded-3xl overflow-hidden text-left shadow-2xl border border-slate-200 bg-white transition-all"
            >
              <div className="p-6">
                <motion.div className="flex items-center justify-between mb-6" whileHover={{ x: 2 }}>
                  <motion.div className="flex items-center gap-2" whileHover={{ x: 4 }}>
                    <Image src={dashboardIcon} alt="Dashboard" width={32} height={32} />
                    <span className="text-sm font-semibold text-slate-900">Intent Signal Dashboard</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2">
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-all"
                      style={{ backgroundColor: "rgba(79, 70, 229, 0.08)" }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.15)" }}
                    >
                      <motion.span
                        className="h-2 w-2 rounded-full bg-purple-600"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      <span className="text-xs font-semibold text-purple-600">Live</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-all"
                      style={{ backgroundColor: "rgba(79, 70, 229, 0.08)" }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.15)" }}
                    >
                      <span className="text-xs font-semibold" style={{ color: "rgba(79, 70, 229, 1)" }}>
                        Campaign #4821
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  {/* Stats */}
                  <div className="flex items-start justify-between">
                    {[
                      {
                        label: "Total intent signals captured",
                        render: () => (
                          <span className="text-3xl font-bold text-slate-900 tabular-nums">
                            {Math.round(totalSignals).toLocaleString("en-US")}
                          </span>
                        ),
                      },
                      {
                        label: "Interaction rate",
                        render: () => (
                          <span className="text-3xl font-bold text-orange-500 tabular-nums">
                            {interactionRate.toFixed(1)}%
                          </span>
                        ),
                      },
                      {
                        label: "Avg engagement",
                        render: () => (
                          <span className="text-3xl font-bold text-blue-600 tabular-nums">
                            {Math.round(avgEngagement)}s+
                          </span>
                        ),
                      },
                    ].map((stat) => (
                      <motion.div
                        key={stat.label}
                        className="cursor-pointer"
                        whileHover={{ y: -4, scale: 1.05 }}
                      >
                        <p className="text-xs text-slate-500 font-medium mb-1">{stat.label}</p>
                        <motion.div whileHover={{ scale: 1.05 }}>{stat.render()}</motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Signal Breakdown */}
                  <div className="space-y-3">
                    {SIGNAL_ROWS.map((signal, idx) => {
                      const animated = rowCounts[idx] ?? 0;
                      const pct = MAX_SIGNAL > 0 ? (animated / MAX_SIGNAL) * 100 : 0;
                      return (
                        <motion.div
                          key={signal.label}
                          whileHover={{ x: 4, scale: 1.02 }}
                          className="cursor-pointer"
                        >
                          <div className="flex items-start gap-3 mb-1.5">
                            <motion.div className="shrink-0 mt-1.5" whileHover={{ scale: 1.15, rotate: 5 }}>
                              <motion.div className={`flex items-center justify-center h-8 w-8 rounded-lg ${signal.bgColor}`}>
                                <Image src={signal.icon} alt={signal.title} width={24} height={24} />
                              </motion.div>
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-3 mb-0.5">
                                <motion.span className="text-sm font-semibold text-slate-900 group-hover:text-slate-700" whileHover={{ x: 2 }}>
                                  {signal.title}
                                </motion.span>
                              </div>
                              <motion.div className="flex items-start justify-between gap-3 mb-1" whileHover={{ x: 2 }}>
                                <p className="text-xs text-slate-500">{signal.desc}</p>
                                <motion.span
                                  className={`text-sm font-bold ${signal.color} shrink-0 cursor-pointer tabular-nums`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {Math.round(animated)}
                                </motion.span>
                              </motion.div>
                              <motion.div
                                className="h-2 bg-slate-200 rounded-full overflow-hidden cursor-pointer"
                                whileHover={{ boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}
                              >
                                <div
                                  className={`h-full rounded-full ${signal.color.replace("text-", "bg-")}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div className="mb-6 inline-block" whileHover={{ scale: 1.05 }}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5 cursor-pointer transition-all hover:shadow-[0_15px_40px_-12px_rgba(79,70,229,0.35)]">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]"></span>
              </span>
              Intent Intelligence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Capture real
            <br />
            <span style={{ color: "rgba(167, 139, 250, 1)" }}>viewer intent</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-zinc-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Every viewer interaction is a first-party intent signal — captured live, not inferred. Here's exactly what Canvas records:
          </motion.p>

          {/* Signal Cards */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            {INTENT_SIGNALS.map((signal, idx) => {
              const colors = [
                { bg: "bg-orange-100", badge: "text-orange-600 bg-orange-50", label: "Highest intent" },
                { bg: "bg-blue-100", badge: "text-blue-600 bg-blue-50", label: "Mobile bridge" },
                { bg: "bg-purple-100", badge: "text-purple-600 bg-purple-50", label: "Browse signal" },
                { bg: "bg-yellow-100", badge: "text-yellow-600 bg-yellow-50", label: "Deferred signal" },
              ];
              const color = colors[idx];

              return (
                <motion.div
                  key={signal.id}
                  className="rounded-xl bg-white p-4 border border-slate-200 cursor-pointer transition-all group"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)", scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className={`flex items-center justify-center h-10 w-10 rounded-lg ${color.bg} shrink-0 mt-0.5 transition-all`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Image src={signal.icon} alt={signal.title} width={20} height={20} />
                    </motion.div>
                    <div className="flex-1">
                      <motion.div className="flex items-center gap-2 mb-2" whileHover={{ x: 4 }}>
                        <h4 className="text-sm font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">{signal.title}</h4>
                        <motion.p
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color.badge} cursor-pointer transition-all`}
                          whileHover={{ scale: 1.08 }}
                        >
                          {color.label}
                        </motion.p>
                      </motion.div>
                      <motion.p className="text-xs text-zinc-600 leading-relaxed group-hover:text-zinc-700 transition-colors" whileHover={{ x: 2 }}>
                        {signal.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}
