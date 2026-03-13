"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import ceoPhoto from "@/assets/About/the_team/vignesh.png";
import ctoPhoto from "@/assets/About/the_team/brinda.jpg";

type TeamMember = {
  initials: string;
  name: string;
  description: string;
  accent: string;
  image?: StaticImageData;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: "CE",
    name: "Vignesh Ramaswamy (Founder & CEO)",
    description:
      "Engineer-turned media builder creating systems that reshape how people interact with content, building the infrastructure layer that makes video, streaming, and ads truly interactive.",
    accent: "#4F46E5",
    image: ceoPhoto,
  },
  {
    initials: "CT",
    name: "Brinda Nivas (CTO)",
    description:
      "Engineer and product architect building the infrastructure for interactive video. Designing systems that power contextual interactions across OTT, streaming, and digital media.",
    accent: "#F97316",
    image: ctoPhoto,
  },
  {
    initials: "HP",
    name: "Head of Product",
    description:
      "Product strategist with 8+ years in ad experiences, shipping viewer-first, measurable formats for agencies and publishers.",
    accent: "#A855F7",
  },
] as const;

export function AboutTeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#EEF0FB] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="pointer-events-none absolute top-[-40px] right-[-10%] h-[260px] w-1/3 bg-[radial-gradient(circle_at_top_right,#4F46E51F_0,#4F46E51F_20%,transparent_60%)] opacity-70" />
      <div className="pointer-events-none absolute top-[120px] left-[-15%] h-[260px] w-1/3 bg-[radial-gradient(circle_at_top_left,#F973161A_0,#F973161A_20%,transparent_60%)] opacity-60" />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="max-w-3xl sm:ml-4 lg:ml-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4F46E51A] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#4F46E5]/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F46E5]" />
            </span>
            The team
          </div>

          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-[32px]">
            Built by ad-tech and streaming veterans.
          </h2>
        </div>

        <div className="mt-10 grid gap-7 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.article
              key={member.initials}
              initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.99, y: -2 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative mx-auto flex w-full max-w-[360px] flex-col items-center overflow-hidden rounded-2xl bg-white/95 shadow-[0_26px_60px_rgba(15,23,42,0.09)] ring-[1.11px] ring-slate-200/80 backdrop-blur-sm"
            >
              <div className="flex h-full w-full flex-col items-center gap-3 px-6 pb-7 pt-7 text-center sm:text-left sm:items-stretch">
                <div
                  className="relative mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.35)] ring-2 sm:mx-0"
                  style={{ ringColor: member.accent, boxShadow: `0 18px 40px ${member.accent}40` }}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold uppercase text-[#111827]">
                      {member.initials}
                    </span>
                  )}
                </div>
                <div className="sm:mt-1">
                  <p className="text-[13px] font-semibold text-[#101828] sm:text-[14px]">
                    {member.name}
                  </p>
                  <p className="mt-2 text-[11px] font-normal leading-[1.7] text-[#6A7282]">{member.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

