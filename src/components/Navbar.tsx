"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import runtimeIcon from "@/assets/navbar/product/rt.svg";
import editorIcon from "@/assets/navbar/product/ce.svg";
import aiConversionIcon from "@/assets/navbar/product/aic.svg";
import publishersIcon from "@/assets/navbar/product/publisher.svg";
import agenciesIcon from "@/assets/navbar/product/ab.svg";
import measurementIcon from "@/assets/navbar/product/measure.svg";
import nabEventImage from "@/assets/navbar/product/img.png";

import csIconKm from "@/assets/navbar/case_studies/km.svg";
import csIconEngage from "@/assets/navbar/case_studies/engage.svg";
import csIconIt from "@/assets/navbar/case_studies/it.svg";
import csIconImplement from "@/assets/navbar/case_studies/implement.svg";
import csIconCt from "@/assets/navbar/case_studies/ct.svg";
import csIconInsights from "@/assets/navbar/case_studies/insights.svg";

type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; items: { label: string; href: string }[] };

const NAV: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "menu",
    label: "Product",
    items: [],
  },
  {
    kind: "menu",
    label: "Case Studies",
    items: [],
  },
  { kind: "link", label: "Demo", href: "/#demo" },
  { kind: "link", label: "About/Partners", href: "/#partners" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <title>Open</title>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <title>Close</title>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <title>Menu</title>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function Navbar() {
  const [bannerOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const desktopItems = useMemo(() => NAV, []);

  return (
    <header className="sticky top-0 z-30 bg-white">
      {bannerOpen ? (
        <div className="relative bg-[#4F46E5] px-4 py-2 text-center text-[13px] leading-[19px] font-normal text-white/80">
          <span>
            Introducing Canvas Interactive CTV — the future of connected TV advertising.
          </span>{" "}
          <Link
            href="/#learn-more"
            className="relative text-[13px] font-semibold text-white after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-white after:opacity-70 after:transition-all after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:opacity-100"
          >
            Learn more →
          </Link>
          {/*
          <button
            type="button"
            onClick={() => setBannerOpen(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/90 hover:bg-white/10"
            aria-label="Close announcement"
          >
            <XIcon />
          </button>
          */}
        </div>
      ) : null}

      <div className="relative border-b border-zinc-200/70">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
          {/* Left: brand */}
          <Link href="/" className="flex flex-col items-center gap-1">
            <Image src="/CanvasLogo.svg" alt="Canvas" width={40} height={40} priority />
            <span className="text-[12px] font-semibold leading-none text-zinc-900">Canvas</span>
          </Link>

          {/* Center: desktop nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex">
            {desktopItems.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link key={item.label} href={item.href} className="hover:text-zinc-900">
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 hover:text-zinc-900"
                    aria-haspopup="menu"
                    aria-expanded={openMenu === item.label}
                    onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                    onMouseEnter={() => setOpenMenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={[
                        "mt-[1px] opacity-70 transition-transform duration-200",
                        openMenu === item.label ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    />
                  </button>

                  {/* Small dropdown list removed; mega panels are rendered below header */}
                </div>
              );
            })}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
            >
              <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
                <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                  Request Demo
                </span>
                <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <title>Arrow right</title>
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </Link>

            <button
              type="button"
              className="ml-1 inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white p-2 text-zinc-700 hover:bg-zinc-50 md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {(openMenu === "Product" || openMenu === "Case Studies") && (
          <div
            className="fixed inset-x-0 bottom-0 z-20 bg-black/10 backdrop-blur-[2px] top-[360px] sm:top-[380px]"
            aria-hidden
          />
        )}

        {/* Desktop mega-panels */}
        <AnimatePresence>
          {openMenu === "Product" && (
            <motion.section
              key="product"
              className="absolute left-0 right-0 top-full z-30 hidden border-t border-zinc-200 bg-white md:block"
              onMouseEnter={() => setOpenMenu("Product")}
              onMouseLeave={() => setOpenMenu(null)}
              aria-label="Product navigation panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto flex max-w-[1280px] items-start gap-4 px-4 pt-9 pb-3 sm:px-6">
                <div className="flex h-[300px] w-[250px] flex-col justify-between rounded-[16px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 text-white shadow-xl">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50">
                    CANVAS PLATFORM
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Interactive CTV infrastructure for modern streaming
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    Enable interactive ads across streaming platforms without disrupting existing ad stacks.
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90"
                  >
                    <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-white after:opacity-70 after:transition-all after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:opacity-100">
                      Explore Canvas
                    </span>{" "}
                    <span aria-hidden>→</span>
                  </button>
                </div>

                <div className="flex flex-1 flex-col gap-6 text-sm text-zinc-800 sm:flex-row sm:gap-10">
                  <div className="min-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Platform
                    </p>
                    <div className="mt-3 space-y-4">
                      <div className="cursor-default">
                        <div className="flex items-start gap-2">
                          <Image src={runtimeIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Canvas Runtime</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Zero-disruption interactive playback.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={editorIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Canvas Editor</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Build interactive units visually.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-default">
                        <div className="flex items-start gap-2">
                          <Image src={aiConversionIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200 opacity-70" />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="font-semibold text-zinc-400">AI Conversion</p>
                              <span className="shrink-0 rounded-full bg-[rgba(139,92,246,0.2)] px-3 py-[2px] text-[9px] font-bold leading-[13.5px] uppercase tracking-[0.22px] text-[rgba(139,92,246,1)] opacity-90 blur-[0.4px]">
                                Coming soon
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-zinc-400">
                              Video to interactive in seconds
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-[220px] sm:mt-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      For teams
                    </p>
                    <div className="mt-3 space-y-4">
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={publishersIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Publishers</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Enable interactive inventory.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={agenciesIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Agencies &amp; Brands</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Convert existing creatives.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={measurementIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Measurement</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Track real viewer intent.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Event card (right-most) */}
                <div className="ml-auto hidden w-[230px] shrink-0 overflow-hidden rounded-[16px] border border-zinc-200 bg-white text-zinc-900 shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:flex sm:flex-col self-start">
                  <div className="relative h-[120px] w-full overflow-hidden">
                    <Image
                      src={nabEventImage}
                      alt="Canvas at NAB"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-500">
                      Join us at NAB
                    </p>
                    <p className="mt-2 text-[13px] font-medium leading-snug text-zinc-900">
                      See how Canvas turns CTV ads into measurable interactive experiences.
                    </p>
                    <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-violet-600 hover:text-violet-700"
                    >
                      <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-violet-500 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
                        Register now
                      </span>
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
                  <span className="text-sm font-medium text-[rgba(153,161,175,1)]">
                    Canvas — Interactive CTV advertising platform
                  </span>
                  <Link
                    href="/#product"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:text-zinc-950"
                  >
                    <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-zinc-900/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
                      View all
                    </span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.section>
          )}

          {openMenu === "Case Studies" && (
            <motion.section
              key="case-studies"
              className="absolute left-0 right-0 top-full z-30 hidden border-t border-zinc-200 bg-white md:block"
              onMouseEnter={() => setOpenMenu("Case Studies")}
              onMouseLeave={() => setOpenMenu(null)}
              aria-label="Case studies navigation panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto flex max-w-[1280px] gap-8 px-4 pt-9 pb-3 sm:px-6">
                <div className="flex h-[280px] w-[230px] flex-col justify-between rounded-[14px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-white shadow-xl">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50">
                    CASE STUDY
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    Proven results from real CTV campaigns
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    26.2% interaction rate, 14s+ average engagement. See the full data.
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90"
                  >
                    <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-white after:opacity-70 after:transition-all after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:opacity-100">
                      View campaign
                    </span>{" "}
                    <span aria-hidden>→</span>
                  </button>
                </div>

                <div className="flex flex-1 flex-col gap-6 text-sm text-zinc-800 sm:flex-row sm:gap-10">
                  <div className="min-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Campaign results
                    </p>
                    <div className="mt-3 space-y-4">
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={csIconKm} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Key Metrics</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              26.2% interaction rate achieved.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={csIconEngage} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Engagement</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              14s+ seconds average duration.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={csIconIt} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Interaction Types</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              QR, CTA, store locator &amp; more.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-[220px] sm:mt-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      By phase
                    </p>
                    <div className="mt-3 space-y-4">
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={csIconImplement} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Implementation</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              How Canvas powered the campaign.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={csIconCt} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Campaign timeline</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              4-week rollout breakdown.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={csIconInsights} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <div className="group min-w-0">
                            <p className="font-semibold">Insights</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Key learnings from the data.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
                  <span className="text-sm font-medium text-[rgba(153,161,175,1)]">
                    Canvas — Interactive CTV advertising platform
                  </span>
                  <Link
                    href="/#case-studies"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:text-zinc-950"
                  >
                    <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-zinc-900/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
                      View all
                    </span>
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        {mobileOpen ? (
          <div className="md:hidden">
            <div className="border-t border-zinc-200 bg-white">
              <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6">
                <div className="flex flex-col gap-2">
                  {NAV.map((item) => {
                    if (item.kind === "link") {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    return (
                      <details key={item.label} className="group rounded-lg px-3 py-2 hover:bg-zinc-50">
                        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-zinc-800">
                          {item.label}
                          <ChevronDown className="opacity-70 transition group-open:rotate-180" />
                        </summary>
                        <div className="mt-2 flex flex-col gap-1 pb-1">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

