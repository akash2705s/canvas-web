"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import qrIcon from "@/assets/case_Studies/results/qr.svg";
import ctaIcon from "@/assets/case_Studies/results/cta.svg";
import storeIcon from "@/assets/case_Studies/results/store_locator.svg";
import productIcon from "@/assets/case_Studies/results/product_browse.svg";
import tick3Icon from "@/assets/case_Studies/results/tick3.svg";

export function CaseStudyInteractionTypes() {
  const interactions = [
    { id: "qr", icon: qrIcon, label: "QR Code Scan", percentage: "38%", color: "rgba(79, 70, 229, 1)", bgColor: "rgba(79, 70, 229, 0.1)" },
    { id: "cta", icon: ctaIcon, label: "Learn More CTA", percentage: "29%", color: "rgba(249, 115, 22, 1)", bgColor: "rgba(249, 115, 22, 0.1)" },
    { id: "store", icon: storeIcon, label: "Store Locator", percentage: "22%", color: "rgba(147, 51, 234, 1)", bgColor: "rgba(147, 51, 234, 0.1)" },
    { id: "product", icon: productIcon, label: "Product Browse", percentage: "11%", color: "rgba(251, 191, 36, 1)", bgColor: "rgba(251, 191, 36, 0.1)" },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-600 w-fit">
              Interaction Types
            </div>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              <span style={{ color: "rgba(79, 70, 229, 1)" }}>Declared viewer intent</span>
              <br />
              Four types captured
            </h3>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Viewers didn't just click once — they explored. QR code scans, learn more CTAs, store locator views, and product browsing each captured a different signal of viewer intent.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { id: "qr-intent", text: "QR Code Scan was the most popular interaction" },
                { id: "store-intent", text: "Store Locator showed strong offline purchase intent" },
                { id: "product-intent", text: "Product Browse signaled high consideration-stage engagement" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <Image src={tick3Icon} alt="checkmark" width={20} height={20} />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interaction Breakdown */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
              className="rounded-2xl bg-slate-50 p-8 transition-shadow"
            >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-8">Interaction Breakdown</p>

            <div className="space-y-6">
              {interactions.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-lg transition-all"
                        style={{ backgroundColor: item.bgColor }}
                        whileHover={{ scale: 1.1, backgroundColor: item.color }}
                      >
                        <Image src={item.icon} alt={item.label} width={24} height={24} />
                      </motion.div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{item.label}</span>
                    </div>
                    <motion.span
                      className="text-sm font-bold"
                      style={{ color: item.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.percentage}
                    </motion.span>
                  </div>

                  <motion.div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: item.percentage }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + idx * 0.08 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                All 4 interaction types captured declared intent — going far beyond passive impression metrics.
              </p>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
