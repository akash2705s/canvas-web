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
          <motion.div className="mb-4 inline-block" whileHover={{ scale: 1.05 }}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#F97316] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5 cursor-pointer transition-all hover:shadow-[0_15px_40px_-12px_rgba(249,115,22,0.35)]">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#F97316]/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]"></span>
              </span>
              VAST Conversion
            </span>
          </motion.div>
          <motion.h2
            className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Convert any VAST tag into
            <br />
            an <span style={{ color: "rgba(249, 115, 22, 1)" }}>interactive ad</span>
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Paste your existing VAST URL or XML. Add interaction triggers. Publish an interactive VAST tag — in seconds, not days. Your SSAI pipeline stays untouched.
          </motion.p>

          {/* Supported Tags */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
          >
            {SUPPORTED_TAGS.map((tag) => (
              <motion.span
                key={tag}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#F97316] cursor-pointer transition-all"
                style={{ backgroundColor: "rgba(249, 115, 22, 0.05)" }}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(249, 115, 22, 0.12)" }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <span className="relative inline-flex h-2 w-2 shrink-0">
                  <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/70"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F97316]"></span>
                </span>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          {/* Step 1 - Paste VAST Tag */}
          <motion.div
            className="relative group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 h-full flex flex-col p-6 cursor-pointer"
              whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              {/* Header with icon */}
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image src={step1Logo} alt="Step 1" width={24} height={24} className="object-contain" />
                </motion.div>
                <motion.p
                  className="text-xs font-bold text-orange-600 uppercase tracking-wider"
                  whileHover={{ letterSpacing: "0.2em" }}
                >
                  {VAST_STEPS[0].number}
                </motion.p>
              </motion.div>

              {/* Title and Description */}
              <motion.h3
                className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors"
                whileHover={{ x: 2 }}
              >
                {VAST_STEPS[0].title}
              </motion.h3>
              <motion.p
                className="text-xs text-zinc-600 leading-relaxed mb-4 group-hover:text-zinc-700 transition-colors"
                whileHover={{ x: 2 }}
              >
                {VAST_STEPS[0].description}
              </motion.p>

              {/* Content Preview - Code Editor */}
              <motion.div
                className="flex-1 bg-slate-900 rounded-lg overflow-hidden flex flex-col group-hover:shadow-lg transition-shadow"
                whileHover={{ boxShadow: "inset 0 0 20px rgba(249, 115, 22, 0.1)" }}
              >
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
                  <div className="ml-6 text-slate-500">&lt;MediaFiles&gt;...&lt;/MediaFiles&gt;                  </div>
                </div>
                <motion.div className="px-3 py-2 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-orange-500 text-xs font-semibold mb-2">
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-orange-500"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    Canvas parsing...
                  </div>
                  <motion.button
                    type="button"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 rounded-full transition text-xs cursor-pointer"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(249, 115, 22, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Import VAST Tag
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Step 2 - Add Interactions */}
          <motion.div
            className="relative group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 h-full flex flex-col p-6 cursor-pointer"
              whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              {/* Header with icon */}
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image src={step2Logo} alt="Step 2" width={24} height={24} className="object-contain" />
                </motion.div>
                <motion.p
                  className="text-xs font-bold text-blue-600 uppercase tracking-wider"
                  whileHover={{ letterSpacing: "0.2em" }}
                >
                  {VAST_STEPS[1].number}
                </motion.p>
              </motion.div>

              {/* Title and Description */}
              <motion.h3
                className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors"
                whileHover={{ x: 2 }}
              >
                {VAST_STEPS[1].title}
              </motion.h3>
              <motion.p
                className="text-xs text-zinc-600 leading-relaxed mb-4 group-hover:text-zinc-700 transition-colors"
                whileHover={{ x: 2 }}
              >
                {VAST_STEPS[1].description}
              </motion.p>

              {/* Content Preview - Canvas Editor */}
              <motion.div
                className="flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-slate-200"
                whileHover={{ boxShadow: "inset 0 0 20px rgba(79, 70, 229, 0.1)" }}
              >
                <div className="px-3 py-2.5 border-b border-slate-200 bg-slate-50">
                  <span className="text-xs font-semibold text-slate-800">Canvas Editor</span>
                </div>
                <div className="flex-1 p-3 flex flex-col gap-2.5">
                  <div className="flex gap-2">
                    <motion.button
                      type="button"
                      className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 cursor-pointer transition-all"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                    >
                      Overlay
                    </motion.button>
                    <motion.button
                      type="button"
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer transition-all"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                    >
                      QR
                    </motion.button>
                    <motion.button
                      type="button"
                      className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer transition-all"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                    >
                      Poll
                    </motion.button>
                  </div>
                  <div className="space-y-2.5">
                    <motion.div
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50 cursor-pointer border border-blue-200 transition-all"
                      whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)" }}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                      <span className="flex-1 text-xs font-semibold text-slate-900">Overlay CTA</span>
                      <span className="px-2 py-0.5 text-xs font-bold text-white bg-blue-600 rounded-full">ON</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-all"
                      whileHover={{ scale: 1.02, x: 2 }}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-purple-500"></span>
                      <span className="text-xs text-slate-600">QR Commerce</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer transition-all"
                      whileHover={{ scale: 1.02, x: 2 }}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                      <span className="text-xs text-slate-600">Save for Later</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Step 3 - Publish */}
          <motion.div
            className="relative group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 h-full flex flex-col p-6 cursor-pointer"
              whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              {/* Header with icon */}
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image src={step3Logo} alt="Step 3" width={24} height={24} className="object-contain" />
                </motion.div>
                <motion.p
                  className="text-xs font-bold text-purple-600 uppercase tracking-wider"
                  whileHover={{ letterSpacing: "0.2em" }}
                >
                  {VAST_STEPS[2].number}
                </motion.p>
              </motion.div>

              {/* Title and Description */}
              <motion.h3
                className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-purple-600 transition-colors"
                whileHover={{ x: 2 }}
              >
                {VAST_STEPS[2].title}
              </motion.h3>
              <motion.p
                className="text-xs text-zinc-600 leading-relaxed mb-4 group-hover:text-zinc-700 transition-colors"
                whileHover={{ x: 2 }}
              >
                {VAST_STEPS[2].description}
              </motion.p>

              {/* Content Preview - Deploy Status */}
              <motion.div
                className="flex-1 bg-white rounded-lg overflow-hidden flex flex-col border border-slate-200"
                whileHover={{ boxShadow: "inset 0 0 20px rgba(147, 51, 234, 0.1)" }}
              >
                <div className="px-3 py-2.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                  <span className="text-xs font-semibold text-slate-800">Interactive VAST — Ready</span>
                  <span className="text-xs font-bold text-purple-600">SSAI-safe</span>
                </div>
                <div className="flex-1 p-2.5 flex flex-col gap-1.5">
                  {[
                    { name: "Roku" },
                    { name: "Fire TV" },
                    { name: "Samsung" },
                    { name: "Apple TV" },
                  ].map((platform, idx) => (
                    <motion.div
                      key={platform.name}
                      className="flex items-center justify-between p-1.5 rounded hover:bg-slate-50 cursor-pointer transition-all"
                      whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.02)" }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <span className="text-xs font-semibold text-slate-800">{platform.name}</span>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-purple-500"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                        />
                        <span className="text-xs font-semibold text-purple-600">Live</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                <motion.div className="px-3 pb-3">
                  <motion.button
                    type="button"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1.5 rounded-full transition text-xs cursor-pointer"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(147, 51, 234, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Publish to All Platforms
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="flex items-center justify-center gap-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            className="text-sm text-zinc-700 rounded-lg px-4 py-3 flex items-center gap-3 cursor-pointer transition-all hover:bg-green-50"
            style={{ border: "1px solid rgba(249, 115, 22, 0.15)" }}
            whileHover={{ borderColor: "rgba(16, 185, 129, 0.4)", boxShadow: "0 8px 16px rgba(16, 185, 129, 0.1)" }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-green-500 shrink-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span>
              <span className="font-semibold">Your SSAI pipeline stays untouched.</span> Interactive VAST drops in alongside your existing ad delivery — zero disruption.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
