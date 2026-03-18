"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import step1Icon from "@/assets/Demo/vast/step1.svg";
import step2Icon from "@/assets/Demo/vast/step2.svg";
import step3Icon from "@/assets/Demo/vast/step3.svg";

const STEPS = [
  {
    id: "step1",
    number: "STEP 01",
    title: "Paste VAST Tag",
    description: "Drop your existing VAST URL or XML into Canvas. Any standard VAST 3.0 / 4.0 tag works.",
    icon: step1Icon,
    numberColor: "text-orange-500",
    badgeColor: "bg-orange-100 text-orange-600",
  },
  {
    id: "step2",
    number: "STEP 02",
    title: "Add CTA / QR / Interaction",
    description: "Pick interaction triggers from the Canvas library — Overlay CTA, QR codes, Polls, Product card, and more.",
    icon: step2Icon,
    numberColor: "text-violet-500",
    badgeColor: "bg-violet-100 text-violet-600",
  },
  {
    id: "step3",
    number: "STEP 03",
    title: "Publish Interactive VAST",
    description: "Deploy an interactive VAST tag across CTV platforms via your existing SSAI pipeline. No disruption to ad serving.",
    icon: step3Icon,
    numberColor: "text-violet-500",
    badgeColor: "bg-violet-100 text-violet-600",
  },
];

export function DemoVastConversion() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
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
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
              VAST Conversion
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Convert any VAST tag into
            <br />
            an <span className="text-orange-500">interactive ad</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Paste your existing VAST URL or XML. Add interaction triggers. Publish an interactive VAST tag — in seconds, not days. Your SSAI pipeline stays untouched.
          </p>
        </motion.div>

        {/* Tag support */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center items-center gap-4 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["VAST 3.0", "VAST 4.0", "VMAP", "OpenRTB", "Google DAI", "AWS MediaTailor"].map((tag) => (
            <span key={tag} className="inline-flex items-center gap-2 text-orange-600 font-semibold">
              <span className="text-orange-500">•</span>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden hover:shadow-[0_20px_80px_rgba(0,0,0,0.16)] transition-shadow duration-300 border border-zinc-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Step number badge */}
              <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${step.badgeColor}`}>
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: step.numberColor.replace("text-", "").replace("-500", "") }} />
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 mb-8 leading-relaxed">
                {step.description}
              </p>

              {/* Icon/Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-zinc-50">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 border border-green-200">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Your SSAI pipeline stays untouched. Interactive VAST drops in alongside your existing ad delivery — zero disruption.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
