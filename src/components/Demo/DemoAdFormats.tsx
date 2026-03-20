"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import overlay from "@/assets/Demo/ad_formats/overlay.png";
import lbar from "@/assets/Demo/ad_formats/lbar.png";
import qrcp from "@/assets/Demo/ad_formats/qrcp.png";
import epc from "@/assets/Demo/ad_formats/epc.png";
import offerReveal from "@/assets/Demo/ad_formats/offer_reveal.png";
import pollInteract from "@/assets/Demo/ad_formats/poll_interact.png";

type AdFormat = {
  id: string;
  title: string;
  label: string;
  sublabel: string;
  image: typeof overlay;
  description: string;
  textColor: string;
  bgColor: string;
};

const AD_FORMATS: AdFormat[] = [
  {
    id: "overlay",
    title: "Overlay CTA",
    label: "Overlay CTA",
    sublabel: "Most Used",
    image: overlay,
    description: "Expandable brand interaction — floats over the video without interrupting playback",
    textColor: "rgba(79, 70, 229, 1)",
    bgColor: "rgba(79, 70, 229, 0.07)",
  },
  {
    id: "lbar",
    title: "L-Bar Unit",
    label: "L-Bar Unit",
    sublabel: "Always-On",
    image: lbar,
    description: "Persistent brand panel — sidebar and bottom strip maintain constant brand presence",
    textColor: "rgba(249, 115, 22, 1)",
    bgColor: "rgba(249, 115, 22, 0.07)",
  },
  {
    id: "qrcp",
    title: "QR Commerce Prompt",
    label: "QR Commerce Prompt",
    sublabel: "Mobile Conversion",
    image: qrcp,
    description: "Viewers scan to shop on their phone — zero friction mobile purchase path",
    textColor: "rgba(167, 139, 250, 1)",
    bgColor: "rgba(167, 139, 250, 0.07)",
  },
  {
    id: "epc",
    title: "Expandable Product Card",
    label: "Expandable Product Card",
    sublabel: "High Intent",
    image: epc,
    description: "Expandable product card — viewers explore full product details inside the ad",
    textColor: "rgba(234, 179, 8, 1)",
    bgColor: "rgba(234, 179, 8, 0.07)",
  },
  {
    id: "offer",
    title: "Offer Reveal",
    label: "Offer Reveal",
    sublabel: "Promo",
    image: offerReveal,
    description: "Coupon / promo reveal — viewers unlock exclusive brand deals in real time",
    textColor: "rgba(236, 72, 153, 1)",
    bgColor: "rgba(236, 72, 153, 0.07)",
  },
  {
    id: "poll",
    title: "Poll Interaction",
    label: "Poll Interaction",
    sublabel: "Engagement",
    image: pollInteract,
    description: "Viewer participation — real-time polling drives intent and brand preference data",
    textColor: "rgba(16, 185, 129, 1)",
    bgColor: "rgba(16, 185, 129, 0.07)",
  },
];

export function DemoAdFormats() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow top right */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(236, 72, 153, 0.15)" }} />
        {/* Indigo glow bottom left */}
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(79, 70, 229, 0.09)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5 cursor-pointer transition-all hover:shadow-[0_15px_40px_-12px_rgba(79,70,229,0.35)]">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]"></span>
              </span>
              Ad Formats
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Interactive CTV formats brands can deploy
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Every format runs inside the viewer's existing streaming experience — no separate app, no creative rebuild required.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {AD_FORMATS.map((format, idx) => (
            <motion.div
              key={format.id}
              className="group rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -4, boxShadow: "0 25px 80px rgba(0,0,0,0.16)" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {/* Badge and Title */}
              <motion.div
                className="mb-2"
                whileHover={{ x: 2 }}
              >
                <div className="inline-flex items-center gap-2">
                  <motion.span
                    className="px-3 py-1 text-xs font-semibold rounded-full transition-all"
                    style={{ color: format.textColor, backgroundColor: format.bgColor }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {format.label}
                  </motion.span>
                  <motion.span
                    className="px-3 py-1 text-xs font-semibold text-zinc-500 bg-zinc-100 rounded-full transition-all"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                  >
                    {format.sublabel}
                  </motion.span>
                </div>
              </motion.div>

              {/* Image Container */}
              <motion.div
                className="relative w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="relative w-full h-auto overflow-hidden"
                  whileHover={{ filter: "brightness(1.1)" }}
                >
                  <Image
                    src={format.image}
                    alt={format.title}
                    className="w-full h-auto transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-sm text-zinc-700 leading-relaxed group-hover:text-zinc-900 transition-colors"
                whileHover={{ x: 2 }}
              >
                {format.description}
              </motion.p>

              {/* Accent line on hover */}
              <motion.div
                className="mt-4 h-0.5 w-0 rounded-full transition-all duration-300"
                style={{ backgroundColor: format.textColor }}
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="text-center text-sm text-zinc-600 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          All formats work across <span className="font-semibold">Roku, Fire TV, Apple TV, Samsung Tizen, Android TV</span> and browser-based CTV players.
        </motion.p>
      </div>
    </section>
  );
}
