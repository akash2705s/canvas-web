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
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4F46E50F] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            The Canvas ecosystem
          </div>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            Built to work across the CTV advertising stack
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas integrates with the platforms, DSPs, measurement partners, and ad infrastructure you already run.
          </p>
        </div>

        {/* grid + central connector */}
        <div className="relative">
          <div className="grid gap-4 rounded-[32px] bg-[#FDFBFF] p-4 shadow-[0_26px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/80 sm:gap-5 sm:p-6 lg:grid-cols-2">
            {PARTNER_GROUPS.map((group, index) => (
              <motion.section
                key={group.title}
                initial={{ opacity: 0, y: 18, filter: "blur(14px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col gap-3 rounded-3xl bg-white px-4 py-4.5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/90"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    <h3
                      className="text-[13px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: group.color }}
                    >
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-[10px] font-bold leading-[16px] tracking-[1.2px] uppercase text-black">
                    {group.description}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>

          {/* central Canvas logo and connecting lines */}
          <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* horizontal connector */}
              <div className="absolute h-[2px] w-[420px] bg-gradient-to-r from-transparent via-[#4F46E5]/50 to-transparent">
                <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.7)_0,transparent_70%)] opacity-70" />
              </div>
              {/* vertical connector */}
              <div className="absolute h-[260px] w-[2px] bg-gradient-to-b from-transparent via-[#4F46E5]/50 to-transparent">
                <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.7)_0,transparent_70%)] opacity-70" />
              </div>

              {/* Canvas logo node */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.25)] ring-2 ring-[#4F46E5]/40">
                <div className="pointer-events-none absolute inset-0 rounded-full border border-[#4F46E5]/40 animate-ping" />
                <div className="relative h-9 w-9">
                  <Image src="/CanvasLogo.svg" alt="Canvas" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium shadow-[0_14px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#4F46E50D]"
            style={{ backgroundColor: "rgba(79,70,229,0.05)", color: "#364153" }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF2FF] text-[14px]">
              ⌘
            </span>
            <span>One integration. Compatible with your existing ad delivery stack. No disruption.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

