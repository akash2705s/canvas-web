"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import tickIcon2 from "../assets/Product/runtime/tick2.png";

export function ProductEditorFeature() {
  return (
    <section className="relative overflow-hidden bg-[rgba(238,240,251,1)]">
      <div className="pointer-events-none absolute inset-0">
        {/* Bottom-left amber glow, matching hero */}
        <div className="absolute -left-40 -bottom-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        {/* Top-right violet/pink glows, matching hero */}
        <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute right-10 bottom-24 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[rgba(244,114,182,0.18)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:py-20">
        {/* Left: editor mock */}
        <div className="relative w-full lg:flex-[1.15] lg:-ml-2">
          <div className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.45)] ring-1 ring-slate-200/70">
            {/* Body video */}
            <div className="relative w-full overflow-hidden">
              <video
                className="block h-auto w-full object-contain"
                src="/videos/convert_ads_product.mov"
                muted
                playsInline
                preload="auto"
                autoPlay
                loop
              />
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="max-w-xl lg:flex-[0.9] lg:pl-10">
          <p className="mb-3 inline-flex items-center rounded-full bg-[rgba(129,140,248,0.09)] px-3 py-1 text-xs font-semibold text-[rgba(79,70,229,1)]">
            02 · Editor
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            <span className="block whitespace-normal md:whitespace-nowrap">Convert existing ads with</span>
            <span className="block whitespace-normal text-[rgba(79,70,229,1)] md:whitespace-nowrap">AI in seconds</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-sm text-[rgba(106,114,130,1)] sm:text-base">
            Agencies use the Canvas Editor or AI assistant to convert video creatives into interactive units — no rebuild
            required. Upload a video or VAST tag and AI suggests interaction points, overlays, and CTAs automatically.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {[
              {
                title: "Upload video / VAST",
                body: "Drop in any MP4 or VAST URL — AI handles the rest",
              },
              {
                title: "Add CTA / QR / overlays",
                body: "Drag-and-drop editor, no developer required",
              },
              {
                title: "Preview instantly",
                body: "See the interactive experience before publishing",
              },
              {
                title: "No rebuild required",
                body: "Convert your existing creatives without touching the video",
              },
            ].map((item, idx) => (
              <motion.li
                key={item.title}
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.8 }}
                whileHover={{ x: 8 }}
              >
                <span className="mt-[4px]">
                  <Image src={tickIcon2} alt="" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                  <span className="block text-[13px] text-[rgba(106,114,130,1)]">{item.body}</span>
                </span>
              </motion.li>
            ))}
          </ul>

          <Link
            href="/blog/turning-passive-ctv-ads-into-active-experiences"
            className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
          >
            <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 whitespace-nowrap">
              <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                Try the Editor
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
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

