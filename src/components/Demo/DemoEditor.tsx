"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import uploadIcon from "@/assets/Demo/canvas_editor/upload.svg";
import dragIcon from "@/assets/Demo/canvas_editor/drag.svg";
import aiIcon from "@/assets/Demo/canvas_editor/ai-assited.svg";
import deployIcon from "@/assets/Demo/canvas_editor/one-click.svg";

export function DemoEditor() {
  const features = [
    {
      id: "upload",
      icon: uploadIcon,
      title: "Upload any video creative",
      description: "Works with existing video files or VAST-served creatives.",
    },
    {
      id: "dragdrop",
      icon: dragIcon,
      title: "Drag-and-drop interactions",
      description: "Add Overlay CTAs, QR codes, polls, and product cards visually.",
    },
    {
      id: "ai",
      icon: aiIcon,
      title: "AI-assisted conversion",
      description: "AI suggests optimal placement and timing for interaction elements.",
    },
    {
      id: "deploy",
      icon: deployIcon,
      title: "One-click deployment",
      description: "Publish across all CTV platforms without touching your ad stack.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
                Canvas Editor
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Create interactive ads
              <br />
              <span style={{ color: "rgba(79, 70, 229, 1)" }}>in seconds</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Upload your video ad and add interaction triggers with a visual editor. No rebuild required.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10">
                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-semibold text-zinc-900">{feature.title}</p>
                    <p className="text-sm text-zinc-600 mt-0.5">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              type="button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-slate-900">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  Request Editor Access
                </span>
                <span className="relative z-10 flex h-[28px] w-[28px] items-center justify-center rounded-[9px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <title>Arrow right</title>
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </motion.button>
          </motion.div>

          {/* Right: Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-black shadow-xl"
              data-interaction-zone="demo"
            >
              <video
                src="/videos/create_seconds_demo.mov"
                muted
                playsInline
                autoPlay
                loop
                preload="auto"
                className="w-full h-auto"
                data-cursor="play"
                data-cursor-label="Play"
              >
                <track kind="captions" srcLang="en" label="English" />
              </video>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
