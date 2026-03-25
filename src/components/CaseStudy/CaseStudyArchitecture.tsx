"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import videoPlatformIcon from "@/assets/case_Studies/campaign/videoPlatform.svg";
import adDeliveryIcon from "@/assets/case_Studies/campaign/ad_delivery.svg";
import canvasRuntimeIcon from "@/assets/case_Studies/campaign/canvas_runtime.svg";
import interactiveExperienceIcon from "@/assets/case_Studies/campaign/interactive_exp.svg";
import intentSignalsIcon from "@/assets/case_Studies/campaign/intent_signal_cap.svg";

export function CaseStudyArchitecture() {
  const ENABLE_CASE_STUDY_ARCHITECTURE = true;
  if (!ENABLE_CASE_STUDY_ARCHITECTURE) return null;

  const steps = [
    {
      title: "Video Platform",
      subtitle: "CTV, Web, Mobile Apps",
      icon: videoPlatformIcon,
      accent: "rgba(79,70,229,1)",
      tint: "rgba(79,70,229,0.12)",
    },
    {
      title: "Ad Delivery",
      subtitle: "SSAI / VAST; existing setup",
      icon: adDeliveryIcon,
      accent: "rgba(234,179,8,1)",
      tint: "rgba(234,179,8,0.14)",
    },
    {
      title: "Canvas Runtime",
      subtitle: "Deployed in minutes, no changes to existing delivery",
      icon: canvasRuntimeIcon,
      accent: "rgba(249,115,22,1)",
      tint: "rgba(249,115,22,0.12)",
    },
    {
      title: "Interactive Experience",
      subtitle: "overlay, pause, QR, explore",
      icon: interactiveExperienceIcon,
      accent: "rgba(129,140,248,1)",
      tint: "rgba(129,140,248,0.14)",
    },
    {
      title: "Intent Signals Captured",
      subtitle: "clicks, scans, engagement in real time",
      icon: intentSignalsIcon,
      accent: "rgba(167,139,250,1)",
      tint: "rgba(167,139,250,0.14)",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1000);
    return () => window.clearInterval(id);
  }, [steps.length]);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFF] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(79,70,229,0.06)] px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)]">
            <span className="relative inline-flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.6)]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            Campaign at a Glance
          </span>
        </div>

        <h2 className="mt-5 text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          How Canvas plugs into video playback
        </h2>
        <p className="mt-3 text-center text-sm text-slate-600 sm:text-[15px]">
          From ad delivery to interaction to intent, here&apos;s how it works
        </p>

        <div className="mx-auto mt-10 w-full max-w-[720px] rounded-[28px] border border-slate-200/80 bg-white px-5 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-6">
          <div className="px-2 pb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Flow Architecture
          </div>
          <div className="space-y-3">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <motion.div
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border bg-white px-4 py-3.5 transition-all duration-300"
                  style={{
                    borderColor: isActive ? `${step.accent}` : "rgba(226,232,240,1)",
                    backgroundColor: "rgba(255,255,255,1)",
                    // Keep the outer border as the accent color.
                    // Use a subtle neutral shadow; apply accent only to the bottom edge.
                    boxShadow: isActive
                      ? `0 10px 28px rgba(15,23,42,0.06), inset 0 -2px 0 ${step.accent}55`
                      : "0 1px 0 rgba(226,232,240,0.65)",
                  }}
                  animate={{ y: isActive ? -1 : 0 }}
                  transition={{ duration: 0.25 }}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                      style={{
                        backgroundColor: step.tint,
                        borderColor: "rgba(226,232,240,1)",
                      }}
                    >
                      <Image src={step.icon} alt="" className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-[17px] font-semibold transition-colors duration-200"
                        style={{ color: isActive ? step.accent : "rgb(30 41 59)" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="mt-0.5 text-[14px] transition-colors duration-200"
                        style={{ color: "rgb(100 116 139)" }}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-[rgba(79,70,229,0.08)] px-4 py-2 text-xs font-semibold text-[rgba(79,70,229,1)]">
            <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-[rgba(79,70,229,1)]" />
            Live across OTT Studio apps, from integration to launch in ~4 weeks
          </div>
        </div>
      </div>
    </section>
  );
}

