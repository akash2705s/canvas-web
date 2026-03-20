"use client";

import { motion } from "framer-motion";

export function DemoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20" style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}>
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Pink glow top left corner */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(249, 168, 212, 0.3)" }} />
        {/* Yellow glow top right corner */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(252, 211, 77, 0.3)" }} />
      </div>
      
      <div className="w-full max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, y: 10, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#4F46E5] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
              <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
                <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/70"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]"></span>
              </span>
              Live Interactive Demo
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            {[
              { key: "line-1", content: "Experience an" },
              {
                key: "line-2",
                content: <span style={{ color: "rgba(79, 70, 229, 1)" }}>interactive</span>,
              },
              { key: "line-3", content: <span className="text-orange-500">CTV ad</span> },
            ].map((line, index) => (
              <motion.span
                key={line.key}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(16px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.9,
                      delay: 0.1 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="block will-change-transform"
              >
                {line.content}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.75,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            Click the interaction elements on the player to see how viewers engage and how every signal appears in real time.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border-4 border-blue-200 shadow-2xl bg-black"
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <video
            src="/videos/hero_demo.mov"
            autoPlay
            loop
            muted
            className="w-full h-auto"
          />
        </motion.div>

        {/* Info Section Below */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-zinc-700"><strong>QR scans</strong> tracked instantly</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-orange-500" />
            <span className="text-zinc-700"><strong>CTA clicks</strong> as intent signals</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            <span className="text-zinc-700"><strong>Every interaction</strong> measured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="text-zinc-700"><strong>Save for later</strong> captured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
