"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import ceoPhoto from "@/assets/About/the_team/vignesh.png";
import ctoPhoto from "@/assets/About/the_team/brinda.jpg";

type TeamMember = {
  initials: string;
  role: string;
  detail: string;
  accent: string;
  image?: StaticImageData;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: "CE",
    role: "Founder & CEO",
    detail: "Product + storytelling + media systems",
    accent: "#4F46E5",
    image: ceoPhoto,
  },
  {
    initials: "EN",
    role: "Engineering",
    detail: "Scalable video + data infrastructure",
    accent: "#F97316",
    image: ctoPhoto,
  },
  {
    initials: "PR",
    role: "Product",
    detail: "Interaction + UX systems",
    accent: "#A855F7",
  },
  {
    initials: "PA",
    role: "Partnerships",
    detail: "Streaming + ad ecosystem",
    accent: "#D97706",
  },
] as const;

export function AboutTeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[rgba(255,255,255,1)] pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20">
      <div className="pointer-events-none absolute right-[-12%] top-[-80px] h-[380px] w-[54%] bg-[radial-gradient(circle_at_top_right,rgba(244,114,182,0.18)_0%,rgba(244,114,182,0.11)_26%,transparent_66%)]" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            The team
          </div>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built by people from streaming and ad-tech.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            We've worked across video platforms, creator tools and ad infrastructure,
            bringing together product, engineering and media experience.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            (() => {
              const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
              return (
            <motion.article
              key={member.initials}
              data-cursor="hover"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={isDimmed ? undefined : { y: -5, scale: 1.01 }}
              whileTap={isDimmed ? undefined : { scale: 0.99, y: -2 }}
              animate={{
                filter: isDimmed ? "blur(6px)" : "blur(0px)",
                opacity: isDimmed ? 0.6 : 1,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: 0.08 + index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={[
                "group relative flex min-h-[140px] w-full flex-col rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all",
              ].join(" ")}
              onPointerEnter={() => setHoveredIndex(index)}
              onPointerLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
            >
              <div className="flex h-full w-full flex-col">
                <div
                  className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[16px] border bg-slate-100"
                  style={{ backgroundColor: member.accent, borderColor: `${member.accent}55` }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.role}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.02)_55%,rgba(0,0,0,0.08)_100%)]" />
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-[13px] font-semibold leading-[1.2] text-[#101828]">
                    {member.role}
                  </p>
                  <p className="mt-2 text-[11px] leading-[1.7] text-[#6A7282]">{member.detail}</p>
                </div>
              </div>
            </motion.article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}

