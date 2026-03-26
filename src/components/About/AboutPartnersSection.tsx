"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PartnerGroup = {
  title: string;
  color: string;
  description: string;
};

const PARTNER_GROUPS: PartnerGroup[] = [
  {
    title: "Streaming Platforms",
    color: "#F97316",
    description: "Enable interactive experiences across FAST channels and CTV apps.",
  },
  {
    title: "Demand-Side Platforms",
    color: "#6366F1",
    description: "Intent signals from Canvas campaigns enrich programmatic buying workflows.",
  },
  {
    title: "Ad Serving & Infrastructure",
    color: "#FACC15",
    description: "Works alongside existing ad servers and SSAI environments.",
  },
  {
    title: "Industry Organizations",
    color: "#A855F7",
    description: "Aligned with emerging standards from the streaming and ad-tech ecosystem.",
  },
];

export function AboutPartnersSection() {
  return (
    <section
      id="partners"
      className="relative -mt-6 overflow-hidden bg-gradient-to-b from-[#F4F3FF] via-white to-white pt-14 pb-10 sm:pt-18 sm:pb-14 lg:pt-20 lg:pb-16"
    >
      {/* top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,#A855F71C_0,#A855F70F_35%,transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        {/* header */}
        <motion.div
          className="relative mx-auto w-full max-w-3xl rounded-3xl border border-[#4F46E5]/10 bg-white/65 px-5 py-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.12)_0%,transparent_60%)]" />
          <motion.div
            className="relative inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#4F46E50F] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4F46E5] transition-all"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            whileHover={{ scale: 1.05, backgroundColor: "#4F46E51A" }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            The Canvas ecosystem
          </motion.div>

          <motion.h2
            className="relative mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Works across the{" "}
            <span className="bg-[linear-gradient(90deg,#4F46E5_0%,#7C3AED_55%,#A855F7_100%)] bg-clip-text text-transparent">
              video ecosystem
            </span>
          </motion.h2>
          <motion.p
            className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Canvas integrates with:
          </motion.p>
          <motion.ul
            className="relative mx-auto mt-3 w-fit space-y-1.5 text-left text-sm leading-relaxed text-slate-700 sm:text-[15px]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } },
            }}
          >
            {[
              "Ad infrastructure (SSAI, VAST)",
              "Streaming platforms (CTV apps, OTT)",
              "Demand platforms (DSPs, agencies)",
            ].map((item) => (
              <motion.li
                key={item}
                className="group flex items-center gap-2.5"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#4F46E5]/70 transition group-hover:bg-[#4F46E5]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            className="relative mx-auto mt-4 inline-flex max-w-xl items-center rounded-full border border-[#4F46E5]/15 bg-[#4F46E5]/6 px-4 py-2 text-center text-sm font-semibold leading-relaxed text-slate-800 sm:text-[15px]"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
          >
            One lightweight layer. No disruption to your existing stack.
          </motion.p>
        </motion.div>

        {/* grid + central connector */}
        <div className="relative">
          <motion.div
            className="grid gap-3 rounded-[32px] bg-[#FDFBFF] p-4 shadow-[0_26px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/80 sm:gap-5 sm:p-6 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {PARTNER_GROUPS.map((group, idx) => (
              <div key={group.title}>
                <motion.section
                  variants={{
                    hidden: { opacity: 0, y: 18, filter: "blur(14px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 24px 60px rgba(15,23,42,0.12)",
                    scale: 1.02,
                  }}
                  className="group flex flex-col gap-3 rounded-3xl bg-white px-4 py-4.5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/90 cursor-pointer transition-all"
                >
                  <div className="flex flex-col gap-2">
                    <motion.div className="flex items-center gap-2" whileHover={{ x: 4 }}>
                      <motion.span
                        className="inline-flex h-2.5 w-2.5 rounded-full transition-all"
                        style={{ backgroundColor: group.color }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.h3
                        className="text-[13px] font-semibold uppercase tracking-[0.14em] transition-all"
                        style={{ color: group.color }}
                        whileHover={{ letterSpacing: "0.2em" }}
                      >
                        {group.title}
                      </motion.h3>
                    </motion.div>
                    <motion.p
                      className="text-[10px] font-bold leading-[16px] tracking-[1.2px] uppercase text-black group-hover:text-slate-900 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      {group.description}
                    </motion.p>
                  </div>
                </motion.section>

                {idx < PARTNER_GROUPS.length - 1 ? (
                  <div className="-mt-2 -mb-6 flex items-center justify-center lg:hidden">
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_10px_20px_rgba(15,23,42,0.14)] ring-1 ring-[#4F46E5]/25">
                      <div className="relative h-4.5 w-4.5">
                        <Image src="/CanvasLogo.svg" alt="Canvas" fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </motion.div>

          {/* central Canvas logo and connecting lines (desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* horizontal connector */}
              <motion.div
                className="absolute h-[2px] w-[420px] bg-gradient-to-r from-transparent via-[#4F46E5]/50 to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.7)_0,transparent_70%)] opacity-70" />
              </motion.div>
              {/* vertical connector */}
              <motion.div
                className="absolute h-[260px] w-[2px] bg-gradient-to-b from-transparent via-[#4F46E5]/50 to-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.7)_0,transparent_70%)] opacity-70" />
              </motion.div>

              {/* Canvas logo node */}
              <motion.div
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.25)] ring-2 ring-[#4F46E5]/40"
                whileHover={{ scale: 1.15, boxShadow: "0 24px 60px rgba(79,70,229,0.3)" }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <motion.div className="pointer-events-none absolute inset-0 rounded-full border border-[#4F46E5]/40 animate-ping" />
                <motion.div className="relative h-9 w-9" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                  <Image src="/CanvasLogo.svg" alt="Canvas" fill className="object-contain" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

