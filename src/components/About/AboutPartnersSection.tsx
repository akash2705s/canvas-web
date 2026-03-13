"use client";

import { motion } from "framer-motion";

type PartnerGroup = {
  title: string;
  color: string;
  pills: { label: string; initials: string }[];
};

const PARTNER_GROUPS: PartnerGroup[] = [
  {
    title: "Streaming Platforms",
    color: "#F97316",
    pills: [
      { label: "Tubi", initials: "TU" },
      { label: "Xumo", initials: "XU" },
      { label: "Pluto TV", initials: "PL" },
      { label: "Peacock", initials: "PC" },
      { label: "Paramount+", initials: "PA" },
    ],
  },
  {
    title: "Demand-Side Platforms",
    color: "#6366F1",
    pills: [
      { label: "The Trade Desk", initials: "TT" },
      { label: "DV360", initials: "DV" },
      { label: "Amazon DSP", initials: "AD" },
      { label: "Magnite", initials: "MG" },
      { label: "PubMatic", initials: "PM" },
    ],
  },
  {
    title: "Ad Serving & Infrastructure",
    color: "#FACC15",
    pills: [
      { label: "FreeWheel", initials: "FW" },
      { label: "Innovid", initials: "IN" },
      { label: "SpringServe", initials: "SS" },
      { label: "Beachfront", initials: "BF" },
    ],
  },
  {
    title: "Industry Organizations",
    color: "#A855F7",
    pills: [
      { label: "SVTA", initials: "SV" },
      { label: "IAB Tech Lab", initials: "IA" },
      { label: "CTV Alliance", initials: "CA" },
      { label: "Streaming Video Alliance", initials: "SA" },
    ],
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
            Partners &amp; Ecosystem
          </div>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            Built for the streaming ecosystem.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Canvas integrates with the platforms, DSPs, measurement partners, and ad infrastructure you already run.
          </p>
        </div>

        {/* grid */}
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
              className={[
                "flex flex-col gap-3 rounded-3xl bg-white px-4 py-4.5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] ring-1 ring-slate-100/90",
                index === 0 ? "lg:col-span-1" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-3">
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
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.pills.map((pill) => {
                  const gradient =
                    group.color === "#F97316"
                      ? "linear-gradient(135deg,#FDBA74,#F97316)"
                      : group.color === "#6366F1"
                        ? "linear-gradient(135deg,#A5B4FC,#6366F1)"
                        : group.color === "#FACC15"
                          ? "linear-gradient(135deg,#FDE68A,#FACC15)"
                          : "linear-gradient(135deg,#E9D5FF,#A855F7)";

                  const softBg =
                    group.color === "#F97316"
                      ? "#F9731618"
                      : group.color === "#6366F1"
                        ? "#6366F118"
                        : group.color === "#FACC15"
                          ? "#FACC1518"
                          : "#A855F718";

                  return (
                    <div
                      key={pill.label}
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-slate-900 shadow-sm ring-1 ring-black/5"
                      style={{ backgroundColor: softBg }}
                    >
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white shadow-sm"
                        style={{ background: gradient }}
                      >
                        {pill.initials}
                      </span>
                      <span className="text-slate-900">
                        {pill.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
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

