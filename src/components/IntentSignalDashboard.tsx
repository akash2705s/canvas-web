"use client";

import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";

const chartData = [
  { label: "W1", qr: 18, cta: 12, explore: 8 },
  { label: "W2", qr: 20, cta: 13, explore: 10 },
  { label: "W3", qr: 22, cta: 15, explore: 13 },
  { label: "W4", qr: 25, cta: 17, explore: 15 },
  { label: "W5", qr: 24, cta: 18, explore: 16 },
  { label: "W6", qr: 27, cta: 19, explore: 18 },
  { label: "W7", qr: 29, cta: 20, explore: 20 },
  { label: "W8", qr: 31, cta: 22, explore: 22 },
];

export function IntentSignalDashboard() {
  return (
    <motion.div
      className="relative w-full rounded-[28px] bg-white/95 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.45)] ring-1 ring-zinc-200/80"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold text-zinc-500">
            Intent Signal Dashboard
          </p>
          <p className="text-[11px] text-zinc-400">Campaign · Last 30 days</p>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </div>
      </div>

      {/* Top stats */}
      <div className="mt-4 grid grid-cols-3 gap-4 border-b border-zinc-200/70 pb-3 text-[11px]">
        <div>
          <p className="text-xl font-extrabold text-amber-500">26.2%</p>
          <p className="mt-0.5 text-[11px] text-zinc-500">Interaction Rate</p>
        </div>
        <div>
          <p className="text-xl font-extrabold text-sky-500">14s+</p>
          <p className="mt-0.5 text-[11px] text-zinc-500">Avg Duration</p>
        </div>
        <div>
          <p className="text-xl font-extrabold text-violet-500">3x</p>
          <p className="mt-0.5 text-[11px] text-zinc-500">Intent Signals</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <p className="text-[10px] font-medium tracking-[0.14em] text-zinc-400">
          INTERACTION EVENTS OVER TIME
        </p>
        <div
          className="mt-3 rounded-[18px] bg-gradient-to-b from-orange-50/60 via-white to-indigo-50/70 px-3 py-2 ring-1 ring-zinc-200/70"
          aria-hidden="true"
        >
          <AreaChart
            width={520}
            height={140}
            data={chartData}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
              <defs>
                <linearGradient id="qrArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F97316" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#F97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ctaArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" opacity={0.6} />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
              />
              <Tooltip
                cursor={{ stroke: "#CBD5F5", strokeWidth: 1 }}
                contentStyle={{
                  borderRadius: 10,
                  border: "1px solid #E5E7EB",
                  fontSize: 11,
                }}
              />
              <Area
                type="monotone"
                dataKey="qr"
                stroke="#F97316"
                strokeWidth={2}
                fill="url(#qrArea)"
                animationDuration={900}
              />
              <Area
                type="monotone"
                dataKey="cta"
                stroke="#6366F1"
                strokeWidth={2}
                fill="url(#ctaArea)"
                animationDuration={900}
                animationBegin={150}
              />
            </AreaChart>
        </div>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-[10px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#F97316]" />
            QR Scan
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
            CTA Click
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
            Explore
          </div>
        </div>
      </div>
    </motion.div>
  );
}

