"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hveIcon from "@/assets/case_Studies/results/hve.svg";
import acsIcon from "@/assets/case_Studies/results/acs.svg";
import npctvIcon from "@/assets/case_Studies/results/npctv.svg";

export function CaseStudyBrandPlaybook() {
  const benefits = [
    {
      id: "engagement",
      icon: hveIcon,
      title: "Higher Viewer Engagement",
      description: "14+ seconds of active engagement versus passive viewing. Interactive overlays turn ad breaks into two-way conversations with your audience.",
      bgColor: "rgba(249, 115, 22, 0.06)",
    },
    {
      id: "signals",
      icon: acsIcon,
      title: "Actionable Campaign Signals",
      description: "QR scans, learn more clicks, and product exploration as measurable KPIs. Move beyond impressions to declared viewer intent.",
      bgColor: "rgba(147, 51, 234, 0.06)",
    },
    {
      id: "inventory",
      icon: npctvIcon,
      title: "New Premium CTV Inventory",
      description: "Differentiated interactive ad inventory that commands premium CPMs. Give brands an ad format worthy of the streaming era.",
      bgColor: "rgba(79, 70, 229, 0.06)",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-xs font-semibold w-fit shadow-sm ring-1 ring-slate-200/50"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "rgba(79, 70, 229, 1)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ backgroundColor: "rgba(79, 70, 229, 0.7)" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(79, 70, 229, 1)" }} />
            </span>
            <span>What This Means for Brands</span>
          </motion.div>

          <motion.h2
            className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A new playbook for CTV advertising
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl mx-auto text-base text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            These results prove a new model for how brands can engage viewers on streaming TV.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              data-cursor="hover"
              className="rounded-2xl p-5.5 flex flex-col bg-white border border-slate-100"
              style={{ boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 30px 80px rgba(15, 23, 42, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)" }}
            >
              <motion.div
                className="mb-3.5 w-9.5 h-9.5 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ backgroundColor: benefit.bgColor }}
                whileHover={{ scale: 1.1 }}
              >
                <Image src={benefit.icon} alt={benefit.title} width={26} height={26} />
              </motion.div>

              <h3 className="text-sm font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
