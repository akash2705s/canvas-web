"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import step1Logo from "@/assets/Demo/vast/step1.svg";
import step2Logo from "@/assets/Demo/vast/step2.svg";
import step3Logo from "@/assets/Demo/vast/step3.svg";

const VAST_STEPS = [
  {
    id: "step1",
    number: "STEP 01",
    title: "Paste VAST Tag",
    description: "Drop your existing VAST URL or XML into Canvas. Any standard VAST 3.0 / 4.0 tag works.",
    logo: step1Logo,
  },
  {
    id: "step2",
    number: "STEP 02",
    title: "Add CTA / QR / Interaction",
    description: "Pick interaction triggers from the Canvas library — Overlay CTA, QR codes, Polls, Product card, and more.",
    logo: step2Logo,
  },
  {
    id: "step3",
    number: "STEP 03",
    title: "Publish Interactive VAST",
    description: "Deploy an interactive VAST tag across CTV platforms via your existing SSAI pipeline. No disruption to ad serving.",
    logo: step3Logo,
  },
];

const SUPPORTED_TAGS = ["VAST 3.0", "VAST 4.0", "VMAP", "OpenRTB", "Google DAI", "AWS MediaTailor"];

export function DemoVAST() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#F97316] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#F97316]/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]"></span>
              </span>
              VAST Conversion
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Convert any VAST tag into
            <br />
            an <span style={{ color: "rgba(249, 115, 22, 1)" }}>interactive ad</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
            Paste your existing VAST URL or XML. Add interaction triggers. Publish an interactive VAST tag — in seconds, not days. Your SSAI pipeline stays untouched.
          </p>

          {/* Supported Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SUPPORTED_TAGS.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#F97316]" style={{ backgroundColor: "rgba(249, 115, 22, 0.05)" }}>
                <span className="relative inline-flex h-2 w-2 shrink-0">
                  <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/70"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                </span>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Step 1 - Paste VAST Tag */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col p-6">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                  <Image src={step1Logo} alt="Step 1" width={24} height={24} className="object-contain" />
                </div>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wider">{VAST_STEPS[0].number}</p>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{VAST_STEPS[0].title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">{VAST_STEPS[0].description}</p>

              {/* Content Preview - Code Editor */}
              <div className="flex-1 bg-slate-900 rounded-lg overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-400 ml-2">vast-tag-input</span>
                  <span className="ml-auto text-xs font-semibold text-orange-500">VAST 4.0</span>
                </div>
                <div className="flex-1 p-3 text-xs font-mono text-slate-400 overflow-hidden">
                  <div className="text-slate-500">&lt;!-- Your existing VAST tag --&gt;</div>
                  <div className="text-green-400">&lt;VAST version="4.0"&gt;</div>
                  <div className="ml-3 text-green-400">&lt;Ad id="CMP-4821"&gt;</div>
                  <div className="ml-6 text-green-400">&lt;InLine&gt;</div>
                  <div className="ml-9 text-green-400">&lt;AdTitle&gt;</div>
                  <div className="text-slate-500 ml-9">Holiday Campaign&lt;/AdTitle&gt;</div>
                  <div className="ml-6 text-slate-500">&lt;MediaFiles&gt;...&lt;/MediaFiles&gt;</div>
                </div>
                <div className="px-3 py-2 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                    Canvas parsing...
                  </div>
                  <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 rounded-full transition text-xs">
                    Import VAST Tag
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 - Add Interactions */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col p-6">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <Image src={step2Logo} alt="Step 2" width={24} height={24} className="object-contain" />
                </div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">{VAST_STEPS[1].number}</p>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{VAST_STEPS[1].title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">{VAST_STEPS[1].description}</p>

              {/* Content Preview - Canvas Editor */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-slate-200">
                <div className="px-3 py-2.5 border-b border-slate-200 bg-slate-50">
                  <span className="text-xs font-semibold text-slate-800">Canvas Editor</span>
                </div>
                <div className="flex-1 p-3 flex flex-col gap-2.5">
                  <div className="flex gap-2">
                    <button type="button" className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100">Overlay</button>
                    <button type="button" className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full">QR</button>
                    <button type="button" className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full">Poll</button>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50 cursor-pointer border border-blue-200">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                      <span className="flex-1 text-xs font-semibold text-slate-900">Overlay CTA</span>
                      <span className="px-2 py-0.5 text-xs font-bold text-white bg-blue-600 rounded-full">ON</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-500"></span>
                      <span className="text-xs text-slate-600">QR Commerce</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                      <span className="text-xs text-slate-600">Save for Later</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 - Publish */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col p-6">
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                  <Image src={step3Logo} alt="Step 3" width={24} height={24} className="object-contain" />
                </div>
                <p className="text-xs font-bold text-purple-600 uppercase tracking-wider">{VAST_STEPS[2].number}</p>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{VAST_STEPS[2].title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">{VAST_STEPS[2].description}</p>

              {/* Content Preview - Deploy Status */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-slate-200">
                <div className="px-3 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                  <span className="text-xs font-semibold text-slate-800">Interactive VAST — Ready</span>
                  <span className="text-xs font-bold text-purple-600">SSAI-safe</span>
                </div>
                <div className="flex-1 p-2.5 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-slate-50">
                    <span className="text-xs font-semibold text-slate-800">Roku</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                      <span className="text-xs font-semibold text-purple-600">Live</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-slate-50">
                    <span className="text-xs font-semibold text-slate-800">Fire TV</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                      <span className="text-xs font-semibold text-purple-600">Live</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-slate-50">
                    <span className="text-xs font-semibold text-slate-800">Samsung</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                      <span className="text-xs font-semibold text-purple-600">Live</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-slate-50">
                    <span className="text-xs font-semibold text-slate-800">Apple TV</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                      <span className="text-xs font-semibold text-purple-600">Live</span>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <button type="button" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1.5 rounded-full transition text-xs">
                    Publish to All Platforms
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="flex items-center justify-center gap-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-zinc-700 rounded-lg px-4 py-3 flex items-center gap-3" style={{ border: "1px solid rgba(249, 115, 22, 0.15)" }}>
            <span className="h-2 w-2 rounded-full bg-green-500 shrink-0 animate-pulse"></span>
            <span>
              <span className="font-semibold">Your SSAI pipeline stays untouched.</span> Interactive VAST drops in alongside your existing ad delivery — zero disruption.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
