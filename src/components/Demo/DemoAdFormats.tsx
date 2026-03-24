"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pointerById, setPointerById] = useState<Record<string, { x: number; y: number }>>({});
  const [pollVoteByCard, setPollVoteByCard] = useState<Record<string, string | null>>({});

  const isHovered = (id: string) => hoveredId === id;

  const renderMiniInteraction = (id: string) => {
    if (id === "overlay") {
      return (
        <>
          <motion.div
            className="absolute right-3 bottom-3 w-[176px] rounded-2xl border border-white/45 bg-slate-900/84 p-3.5 shadow-[0_18px_36px_rgba(0,0,0,0.34)]"
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-semibold leading-tight text-white">Brand interaction</p>
            <p className="mt-1.5 text-[10px] leading-tight text-white/80">Floats over playback without interruption.</p>
            <motion.button
              type="button"
              className="mt-3 inline-flex w-full items-center justify-between rounded-lg border border-white/30 bg-white/12 px-3 py-2 text-[10px] font-semibold text-white"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.22)" }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <span aria-hidden>→</span>
            </motion.button>
          </motion.div>
          <motion.div
            className="absolute top-4 right-4 h-2 w-2 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0.25, 0.8] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </>
      );
    }

    if (id === "lbar") {
      return (
        <>
          <motion.div
            className="absolute right-0 top-0 h-full w-10 bg-gradient-to-b from-amber-400/85 via-orange-400/80 to-rose-400/75"
            initial={{ x: 14, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 14, opacity: 0 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-r from-amber-400/85 via-orange-400/80 to-rose-400/75"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
          />
          <motion.div
            className="absolute right-12 bottom-12 rounded-md border border-white/40 bg-slate-900/78 px-2 py-1 text-[9px] font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            initial={{ x: 8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 8, opacity: 0 }}
          >
            L-Banner Active
          </motion.div>
        </>
      );
    }

    if (id === "qrcp") {
      return (
        <>
          <motion.div
            className="absolute left-1/2 top-1/2 w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/85 bg-white/95 px-3 py-3 shadow-[0_18px_38px_rgba(0,0,0,0.26)]"
            initial={{ scale: 0.72, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.72, opacity: 0, y: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <div className="mx-auto h-[64px] w-[64px] rounded-[12px] border border-slate-300 bg-white p-[5px]">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fcanvas-tv.com%2Fdemo"
                alt="QR commerce prompt"
                className="h-full w-full rounded-[4px]"
              />
            </div>
            <p className="mt-2 text-center text-[12px] font-semibold leading-none text-slate-600">Scan to Shop</p>
            <p className="mt-1.5 text-center text-[10px] leading-none text-slate-400">exclusive 20% off</p>
            <div className="mt-2 rounded-full bg-indigo-500 px-2 py-1.5 text-center text-[10px] font-semibold leading-none text-white">
              Mobile Offer
            </div>
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2 h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] border border-cyan-300/55"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [0.9, 1.22, 1.34], opacity: [0.55, 0.22, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.35, repeat: Infinity }}
          />
        </>
      );
    }

    if (id === "epc") {
      return (
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-t-xl border-t border-white/30 bg-slate-950/85 p-3"
          initial={{ y: 56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 56, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <p className="text-[10px] font-semibold text-white">Product Sheet</p>
          <p className="mt-1 text-[10px] text-white/70">Price, specs and quick actions</p>
          <motion.div className="mt-2 h-1.5 rounded bg-white/25" initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ delay: 0.05, duration: 0.28 }} />
          <motion.div className="mt-1.5 h-1.5 rounded bg-white/20" initial={{ width: 0 }} animate={{ width: "55%" }} transition={{ delay: 0.12, duration: 0.28 }} />
        </motion.div>
      );
    }

    if (id === "offer") {
      return (
        <motion.div
          className="absolute left-1/2 top-1/2 w-[128px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] border border-white/70 bg-white/95 p-3 shadow-[0_16px_36px_rgba(0,0,0,0.28)]"
          initial={{ rotateX: -70, opacity: 0, y: -6, scale: 0.92 }}
          animate={{ rotateX: 0, opacity: 1, y: 0, scale: 1 }}
          exit={{ rotateX: -70, opacity: 0, y: -6, scale: 0.92 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[9px] font-semibold tracking-[0.08em] text-slate-400 text-center">EXCLUSIVE OFFER</p>
          <p className="mt-1 text-center text-[38px] leading-none font-black text-pink-500">30%</p>
          <p className="mt-1 text-center text-[9px] text-slate-400">off your purchase</p>

          <div className="mt-2.5 rounded-full border border-pink-200 bg-pink-50 px-2 py-1 text-center text-[9px] font-bold tracking-[0.08em] text-pink-500">
            SAVE30
          </div>

          <motion.button
            type="button"
            className="mt-2.5 w-full rounded-full bg-pink-500 px-2 py-1.5 text-[10px] font-bold text-white shadow-[0_8px_16px_rgba(236,72,153,0.35)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Claim Now
          </motion.button>
        </motion.div>
      );
    }

    if (id === "poll") {
      const selected = pollVoteByCard[id];
      return (
        <motion.div
          className="absolute right-3 top-1/2 w-[176px] -translate-y-1/2 rounded-2xl border border-violet-200/45 bg-slate-900/90 p-3.5 shadow-[0_18px_36px_rgba(0,0,0,0.38)]"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
        >
          {!selected ? (
            <>
              <p className="text-[11px] font-semibold leading-tight text-violet-100">Which offer interests you the most?</p>
              <div className="mt-3 flex flex-col gap-2">
                <motion.button
                  type="button"
                  className="rounded-lg border border-violet-200/30 bg-violet-500/18 px-3 py-2 text-left text-[10px] font-medium text-violet-50"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(139,92,246,0.34)" }}
                  onClick={() => setPollVoteByCard((prev) => ({ ...prev, [id]: "Discount" }))}
                >
                  Discount
                </motion.button>
                <motion.button
                  type="button"
                  className="rounded-lg border border-violet-200/30 bg-violet-500/18 px-3 py-2 text-left text-[10px] font-medium text-violet-50"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(139,92,246,0.34)" }}
                  onClick={() => setPollVoteByCard((prev) => ({ ...prev, [id]: "Free trial" }))}
                >
                  Free trial
                </motion.button>
                <motion.button
                  type="button"
                  className="rounded-lg border border-violet-200/30 bg-violet-500/18 px-3 py-2 text-left text-[10px] font-medium text-violet-50"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(139,92,246,0.34)" }}
                  onClick={() => setPollVoteByCard((prev) => ({ ...prev, [id]: "Bundle" }))}
                >
                  Bundle
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-emerald-300/35 bg-emerald-400/15 px-3 py-2.5 text-[10px] text-emerald-100"
            >
              <p className="font-semibold">Thank you for voting.</p>
              <p className="mt-0.5 text-emerald-100/80">You selected: {selected}</p>
            </motion.div>
          )}
        </motion.div>
      );
    }

    return null;
  };

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      data-interaction-zone="formats"
      style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}
    >
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
            className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
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
          {AD_FORMATS.map((format) => (
            (() => {
              const point = pointerById[format.id] ?? { x: 50, y: 50 };
              const rotateX = isHovered(format.id) ? (50 - point.y) / 20 : 0;
              const rotateY = isHovered(format.id) ? (point.x - 50) / 20 : 0;
              return (
                <motion.div
                  key={format.id}
                  className="group rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-shadow duration-300 cursor-pointer [transform-style:preserve-3d]"
                  animate={{
                    y: isHovered(format.id) ? -6 : 0,
                    rotateX,
                    rotateY,
                    boxShadow: isHovered(format.id) ? "0 28px 90px rgba(0,0,0,0.2)" : "0 20px 60px rgba(0,0,0,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    setPointerById((prev) => ({ ...prev, [format.id]: { x, y } }));
                  }}
                  data-cursor="media"
                  data-format-id={format.id}
                  data-format-title={format.title}
                  data-format-label={format.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <motion.div
                    className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-transparent"
                    animate={isHovered(format.id) ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: `radial-gradient(180px circle at ${point.x}% ${point.y}%, rgba(99,102,241,0.20), rgba(99,102,241,0.06) 45%, rgba(255,255,255,0) 80%)`,
                    }}
                  />
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
                onHoverStart={() => setHoveredId(format.id)}
                onHoverEnd={() => {
                  setHoveredId((prev) => (prev === format.id ? null : prev));
                  setPointerById((prev) => ({ ...prev, [format.id]: { x: 50, y: 50 } }));
                }}
                  >
                    <motion.div
                      className="relative w-full h-auto overflow-hidden"
                  whileHover={{}}
                    >
                      <Image
                        src={format.image}
                        alt={format.title}
                        className="w-full h-auto transition-transform duration-300"
                      />
                      <motion.div
                        className="pointer-events-none absolute inset-0"
                        animate={isHovered(format.id) ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          background: "linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
                          transform: isHovered(format.id) ? "translateX(0%)" : "translateX(-120%)",
                        }}
                      />
                      <AnimatePresence>
                        {isHovered(format.id) ? (
                          <motion.div
                            className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent"
                            initial={{ opacity: 0, x: "-90%" }}
                            animate={{ opacity: 1, x: "90%" }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                          />
                        ) : null}
                      </AnimatePresence>
                      <AnimatePresence>
                        {isHovered(format.id) ? (
                          <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            {renderMiniInteraction(format.id)}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
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
              );
            })()
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
