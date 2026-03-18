"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import dashboardIcon from "@/assets/Demo/Intent_Intelligence/intent_signal_dashboard.svg";
import ctaIcon from "@/assets/Demo/Intent_Intelligence/cta.svg";
import qrcIcon from "@/assets/Demo/Intent_Intelligence/qrc.svg";
import productIcon from "@/assets/Demo/Intent_Intelligence/product_explor.svg";
import saveLaterIcon from "@/assets/Demo/Intent_Intelligence/save_later.svg";

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

export function DemoIntentIntelligence() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left: Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginTop: "120px" }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Image src={dashboardIcon} alt="Dashboard" width={32} height={32} />
                    <span className="text-sm font-semibold text-slate-900">Intent Signal Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                      <span className="h-2 w-2 rounded-full bg-purple-600"></span>
                      <span className="text-xs font-semibold text-purple-600">Live</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                      <span className="text-xs font-semibold" style={{ color: "rgba(79, 70, 229, 1)" }}>Campaign #4821</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Stats */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-1">Total intent signals captured</p>
                      <p className="text-4xl font-bold text-slate-900">2,189</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-medium mb-1">Interaction rate</p>
                      <p className="text-3xl font-bold text-orange-500">26.2%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-medium mb-1">Avg engagement</p>
                      <p className="text-2xl font-bold text-blue-600">14s+</p>
                    </div>
                  </div>

                  {/* Signal Breakdown */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-start gap-3 mb-1.5">
                        <div className="shrink-0 mt-1.5">
                          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-orange-100">
                            <Image src={ctaIcon} alt="CTA" width={24} height={24} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-0.5">
                            <span className="text-sm font-semibold text-slate-900">CTA Click</span>
                          </div>
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <p className="text-xs text-slate-500">Highest intent CTA at overlay</p>
                            <span className="text-sm font-bold text-orange-500 shrink-0">847</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-orange-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3 mb-1.5">
                        <div className="shrink-0 mt-1.5">
                          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100">
                            <Image src={qrcIcon} alt="QR" width={24} height={24} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-0.5">
                            <span className="text-sm font-semibold text-slate-900">QR Scan</span>
                          </div>
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <p className="text-xs text-slate-500">Viewer scanned code with mobile device</p>
                            <span className="text-sm font-bold text-blue-500 shrink-0">612</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full w-3/5 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3 mb-1.5">
                        <div className="shrink-0 mt-1.5">
                          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-purple-100">
                            <Image src={productIcon} alt="Product" width={24} height={24} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-0.5">
                            <span className="text-sm font-semibold text-slate-900">Product Explore</span>
                          </div>
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <p className="text-xs text-slate-500">Viewer opened expandable product card</p>
                            <span className="text-sm font-bold text-purple-500 shrink-0">439</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full w-2/5 bg-purple-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3 mb-1.5">
                        <div className="shrink-0 mt-1.5">
                          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-yellow-100">
                            <Image src={saveLaterIcon} alt="Save" width={24} height={24} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-3 mb-0.5">
                            <span className="text-sm font-semibold text-slate-900">Save for Later</span>
                          </div>
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <p className="text-xs text-slate-500">Viewer saved items to their watch list</p>
                            <span className="text-sm font-bold text-yellow-500 shrink-0">291</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/3 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                  <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]"></span>
                </span>
                Intent Intelligence
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 leading-tight">
              Capture real
              <br />
              <span style={{ color: "rgba(167, 139, 250, 1)" }}>viewer intent</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Every viewer interaction is a first-party intent signal — captured live, not inferred. Here's exactly what Canvas records:
            </p>

            {/* Signal Cards */}
            <div className="space-y-4">
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
                    className="rounded-xl bg-white p-4 border border-slate-200 hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex items-center justify-center h-10 w-10 rounded-lg ${color.bg} shrink-0 mt-0.5`}>
                        <Image src={signal.icon} alt={signal.title} width={20} height={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-sm font-bold text-zinc-900">{signal.title}</h4>
                          <p className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color.badge}`}>
                            {color.label}
                          </p>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed">{signal.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
