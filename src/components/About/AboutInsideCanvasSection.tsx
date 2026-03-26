"use client";

import { motion } from "framer-motion";

type MediaItem = {
  id: string;
  category: "Series" | "Demo" | "Founder" | "BTS";
  title: string;
};

const MEDIA_ITEMS: MediaItem[] = [
  { id: "minds-behind-micro", category: "Series", title: "Minds Behind Micro" },
  { id: "product-demos", category: "Demo", title: "Product Demos" },
  { id: "founder-clips", category: "Founder", title: "Founder Clips" },
  { id: "behind-the-scenes", category: "BTS", title: "Behind the Scenes" },
];

function MediaCard({ item, idx }: { item: MediaItem; idx: number }) {
  const tint =
    item.category === "Series"
      ? "from-[#FFEDE3] via-white to-white"
      : item.category === "Demo"
        ? "from-[#EEF2FF] via-white to-white"
        : item.category === "Founder"
          ? "from-[#F3E8FF] via-white to-white"
          : "from-[#FFF7E6] via-white to-white";
  const labelColor =
    item.category === "Series"
      ? "text-[#F97316]"
      : item.category === "Demo"
        ? "text-[#4F46E5]"
        : item.category === "Founder"
          ? "text-[#7C3AED]"
          : "text-[#D97706]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, boxShadow: "0 22px 55px rgba(15,23,42,0.10)" }}
      whileTap={{ scale: 0.99 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
      data-cursor="hover"
    >
      <div className={["h-[110px] w-full bg-gradient-to-b", tint].join(" ")} />
      <div className="px-5 pb-4 pt-3">
        <p className={["text-[11px] font-semibold tracking-tight", labelColor].join(" ")}>
          {item.category}
        </p>
        <p className="mt-1 text-[13px] font-semibold text-slate-900">{item.title}</p>
      </div>
    </motion.div>
  );
}

export function AboutInsideCanvasSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute right-[-10%] top-[-90px] h-[380px] w-[46%] bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.12)_0%,rgba(244,114,182,0.06)_28%,transparent_68%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F46E5]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Content
            </motion.div>

            <motion.h2
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Inside Canvas
            </motion.h2>
            <motion.p
              className="mt-3 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              A look at how we think, build, and explore interaction in video.
            </motion.p>
          </div>

          <motion.p
            className="max-w-md text-[12px] leading-relaxed text-slate-400 lg:pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We are documenting the journey from ideas to execution as we build Canvas in real time.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEDIA_ITEMS.map((item, idx) => (
            <MediaCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

