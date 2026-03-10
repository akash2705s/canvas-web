"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import layoutPreview from "@/assets/works/layout.png";

type Step = {
  id: number;
  label: string;
};

const WORKFLOW_STEPS: Step[] = [
  { id: 1, label: "Upload video" },
  { id: 2, label: "AI analyzes" },
  { id: 3, label: "Points added" },
  { id: 4, label: "Ad ready" },
];

export function AiConvertWindow() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev >= WORKFLOW_STEPS.length ? 1 : prev + 1));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[820px] overflow-hidden rounded-[28px] bg-[#020012] pb-6 pt-5">
      {/* Top browser chrome */}
      <div className="flex items-center justify-between gap-3 px-7 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F97373]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FACC15]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
        </div>
        <div className="h-6 w-2/3 rounded-full bg-[#050018]/80 ring-1 ring-white/10" />
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-[#F97316] via-[#FB7185] to-[#6366F1] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_18px_55px_rgba(0,0,0,0.85)] ring-1 ring-white/20"
        >
          AI Convert
        </button>
      </div>

      <div className="grid gap-7 px-0 text-[10px] text-white/70 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.8fr)_minmax(0,1.1fr)]">
        {/* Left: AI suggestions */}
          <div className="space-y-4 pl-4 pr-4">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40">
            AI SUGGESTIONS
          </p>
          <div className="space-y-2.5">
            {[
              { label: "QR Code CTA", color: "#F97316", pct: "98%" },
              { label: "Learn More Btn", color: "#6366F1", pct: "94%" },
              { label: "Product Overlay ", color: "#8B5CF6", pct: "87%" },
              { label: "Store Locator", color: "#F59E0B", pct: "81%" },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="flex w-full max-w-[240px] items-center justify-between rounded-[14px] bg-gradient-to-r from-[#050018] via-[#05071b] to-[#020012] px-3 py-2.5 ring-1 ring-white/20"
                whileHover={{ scale: 1.02, translateX: 2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[9px] font-medium text-white/85">
                    {item.label}
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-white/80 whitespace-nowrap">
                  {item.pct}
                </span>
              </motion.div>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center rounded-[14px] bg-gradient-to-r from-[#F97316] via-[#FB7185] to-[#6366F1] px-4 py-2.5 text-[10px] font-semibold text-white shadow-[0_22px_70px_rgba(0,0,0,0.9)] ring-1 ring-white/15"
          >
            Apply All
          </button>
        </div>

        {/* Center: creative preview – exact image */}
        <div className="flex items-center justify-center px-0">
          <motion.div
            className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[32px]"
            animate={{ y: [0, -8, 0] }}
            whileHover={{ scale: 1.06 }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src={layoutPreview}
              alt="Interactive layout preview"
              className="h-auto w-full object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Right: workflow steps */}
        <div className="space-y-4 pr-7 pl-4">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40">
            WORKFLOW
          </p>
          <div className="space-y-3">
            {WORKFLOW_STEPS.map((step) => {
              const isActive = step.id === activeStep;
              return (
                <div key={step.id} className="flex items-center gap-3 text-[10px]">
                  <div
                    className={[
                      "flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold",
                      isActive
                        ? "border-[#F97316] bg-[#F97316]/10 text-[#F97316]"
                        : "border-white/10 bg-white/5 text-white/60",
                    ].join(" ")}
                  >
                    {step.id}
                  </div>
                  <p
                    className={[
                      "font-medium",
                      isActive ? "text-white/90" : "text-white/45",
                    ].join(" ")}
                  >
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

