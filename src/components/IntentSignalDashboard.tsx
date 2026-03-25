"use client";

import { motion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";
import { useState } from "react";

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
  const [replayToken, setReplayToken] = useState(0);
  return (
    <motion.div
      className="relative w-full rounded-[28px] bg-white/95 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.45)] ring-1 ring-zinc-200/80"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      key={replayToken}
      onClick={() => setReplayToken((v) => v + 1)}
      data-cursor="hover"
      data-cursor-label="Click to interact"
      data-interaction-zone="custom-card"
    >
      {/* Header */}
      <motion.div className="flex items-start justify-between gap-4" whileHover={{ x: 2 }}>
        <motion.div className="space-y-1" whileHover={{ x: 4 }}>
          <p className="text-[11px] font-semibold text-zinc-500">
            Intent Signal Dashboard
          </p>
          <p className="text-[11px] text-zinc-400">Campaign · Last 30 days</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-1 text-[11px] text-emerald-500 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          Live
        </motion.div>
      </motion.div>

      {/* Top stats */}
      <motion.div
        className="mt-4 grid grid-cols-3 gap-4 border-b border-zinc-200/70 pb-3 text-[11px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
      >
        {[
          { value: "26.2%", label: "Interaction Rate", color: "text-amber-500" },
          { value: "14s+", label: "Avg Duration", color: "text-sky-500" },
          { value: "3x", label: "Intent Signals", color: "text-violet-500" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="cursor-pointer"
          >
            <motion.p className={`text-xl font-extrabold ${stat.color}`} whileHover={{ scale: 1.1 }}>
              {stat.value}
            </motion.p>
            <p className="mt-0.5 text-[11px] text-zinc-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div className="mt-4" whileHover={{ y: -2 }}>
        <motion.p className="text-[10px] font-medium tracking-[0.14em] text-zinc-400" whileHover={{ letterSpacing: "0.2em" }}>
          INTERACTION EVENTS OVER TIME
        </motion.p>
        <motion.div
          className="mt-3 rounded-[18px] bg-gradient-to-b from-orange-50/60 via-white to-indigo-50/70 px-3 py-2 ring-1 ring-zinc-200/70 transition-all cursor-pointer"
          aria-hidden="true"
          whileHover={{ boxShadow: "inset 0 0 20px rgba(249, 115, 22, 0.1)", scale: 1.01 }}
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
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-3 flex flex-wrap items-center gap-4 text-[10px] text-zinc-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
        >
          {[
            { color: "#F97316", label: "QR Scan" },
            { color: "#0EA5E9", label: "CTA Click" },
            { color: "#6366F1", label: "Explore" },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-1.5 cursor-pointer transition-all group"
              whileHover={{ x: 4 }}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <motion.span
                className="h-2 w-2 rounded-full group-hover:scale-125 transition-transform"
                style={{ backgroundColor: item.color }}
                whileHover={{ scale: 1.3 }}
              />
              <span className="group-hover:text-zinc-700 transition-colors">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

