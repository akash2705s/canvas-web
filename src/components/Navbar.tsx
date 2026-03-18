"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

import runtimeIcon from "@/assets/navbar/product/rt.svg";
import editorIcon from "@/assets/navbar/product/ce.svg";
import aiConversionIcon from "@/assets/navbar/product/aic.svg";
import publishersIcon from "@/assets/navbar/product/publisher.svg";
import agenciesIcon from "@/assets/navbar/product/ab.svg";
import measurementIcon from "@/assets/navbar/product/measure.svg";
import nabEventImage from "@/assets/navbar/product/img.png";

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
    label: "Case Study",
    items: [],
  },
  { kind: "link", label: "Demo", href: "/demo" },
  { kind: "link", label: "About", href: "/about" },
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
  const pathname = usePathname();

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

  // Close any open desktop dropdown when route changes
  useEffect(() => {
    // Intentionally depend on pathname so we reset menus on navigation
    void pathname;
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const desktopItems = useMemo(() => NAV, []);

  const normalizePath = (p: string) => {
    if (!p) return "/";
    if (p === "/") return "/";
    return p.endsWith("/") ? p.slice(0, -1) : p;
  };

  const isActiveLink = (href: string) => {
    const [pathOnly, hash] = href.split("#");

    const current = normalizePath(pathname);
    const target = normalizePath(pathOnly || "/");

    // Do not mark hash-only links (like "/#demo") as active in the top nav.
    // But DO allow hash links to be active when they point to another page
    // (e.g. "/about#partners" should be active while on "/about").
    if (hash && target === "/") return false;

    if (target === "/") {
      return current === "/";
    }

    return current === target || current.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {bannerOpen ? (
        <div className="relative bg-[#4F46E5] px-4 py-2 text-center text-[13px] leading-[19px] font-normal text-white/80">
          <span>
            Introducing Canvas Interactive CTV: the future of connected TV advertising.
          </span>{" "}
          <Link
            href="/blog/turning-passive-ctv-ads-into-active-experiences"
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
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6">
          {/* Left: brand */}
          <Link href="/" className="flex flex-col items-center gap-1">
            <Image src="/CanvasLogo.svg" alt="Canvas" width={40} height={40} priority />
            <span className="text-[12px] font-semibold leading-none text-zinc-900">Canvas</span>
          </Link>

          {/* Center: desktop nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-600 md:flex">
            {desktopItems.map((item) => {
              if (item.kind === "link") {
                const isActive = isActiveLink(item.href);

                if (isActive) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="relative text-zinc-900"
                      onMouseEnter={() => setOpenMenu(null)}
                    >
                      <span className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[2px]">
                        <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-zinc-900">
                          {item.label}
                        </span>
                      </span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative pb-1 text-zinc-600 transition-colors hover:text-zinc-900"
                    onMouseEnter={() => setOpenMenu(null)}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative">
                  {(() => {
                    const isMenuActive =
                      (item.label === "Product" && pathname.startsWith("/product")) ||
                      (item.label === "Case Study" && pathname.startsWith("/case-studies"));

                    const buttonEl = (
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
                    );

                    if (!isMenuActive) return buttonEl;

                    return (
                      <span className="inline-flex items-center rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[2px]">
                        <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-zinc-900">
                          {buttonEl}
                        </span>
                      </span>
                    );
                  })()}

                  {/* Small dropdown list removed; mega panels are rendered below header */}
                </div>
              );
            })}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <RequestDemoTrigger
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
            </RequestDemoTrigger>

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

        {(openMenu === "Product" || openMenu === "Case Study") && (
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
                  <Link
                    href="/blog/turning-passive-ctv-ads-into-active-experiences"
                    onClick={() => setOpenMenu(null)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90"
                  >
                    <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-white after:opacity-70 after:transition-all after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:opacity-100">
                      Explore Canvas
                    </span>{" "}
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="flex flex-1 flex-col gap-6 text-sm text-zinc-800 sm:flex-row sm:gap-10">
                  <div className="min-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Platform
                    </p>
                    <div className="mt-3 space-y-4">
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={editorIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <Link href="/product" className="group min-w-0" onClick={() => setOpenMenu(null)}>
                            <p className="font-semibold">Canvas Editor</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Build interactive units visually.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={runtimeIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <Link href="/product#runtime" className="group min-w-0" onClick={() => setOpenMenu(null)}>
                            <p className="font-semibold">Canvas Runtime</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Zero-disruption interactive playback.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </Link>
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
                          <Link
                            href="/blog/turning-passive-ctv-ads-into-active-experiences"
                            className="group min-w-0"
                            onClick={() => setOpenMenu(null)}
                          >
                            <p className="font-semibold">Publishers</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Enable interactive inventory.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={agenciesIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <Link
                            href="/blog/turning-passive-ctv-ads-into-active-experiences"
                            className="group min-w-0"
                            onClick={() => setOpenMenu(null)}
                          >
                            <p className="font-semibold">Agencies &amp; Brands</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Convert existing creatives.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="flex items-start gap-2">
                          <Image src={measurementIcon} alt="" className="h-10 w-10 rounded-[10px] border border-zinc-200" />
                          <Link
                            href="/blog/turning-passive-ctv-ads-into-active-experiences"
                            className="group min-w-0"
                            onClick={() => setOpenMenu(null)}
                          >
                            <p className="font-semibold">Measurement</p>
                            <p className="mt-0.5 text-xs text-zinc-500">
                              Track real viewer intent.
                            </p>
                            <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-zinc-200/40">
                              <div className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#F97316_0%,#EAB308_32.21%,#16A34A_57.21%,#6366F1_100%)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right-side card: event */}
                <div className="ml-auto hidden h-[230px] w-[230px] shrink-0 overflow-hidden rounded-[16px] border border-zinc-200 bg-white text-zinc-900 shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:flex sm:flex-col self-start">
                  <div className="relative h-[120px] w-full overflow-hidden">
                    <Image
                      src={nabEventImage}
                      alt="Canvas at NAB"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-2.5">
                    <p className="text-[13px] font-semibold tracking-normal text-zinc-900">
                      Meet Canvas Team
                    </p>
                    <p className="mt-1 text-[13px] font-medium leading-snug text-[rgba(106,114,130,1)]">
                      See Canvas live at NAB Show, Las Vegas. April 5–9.
                    </p>
                    <button
                      type="button"
                      className="group mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-violet-600 hover:text-violet-700"
                    >
                      <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-violet-500 after:transition-transform after:duration-300 after:ease-out after:transform-gpu group-hover:after:scale-x-100">
                        Book a Demo
                      </span>
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 px-4 py-2.5 sm:px-6">
                  <span className="text-sm font-medium text-[rgba(153,161,175,1)]">
                    Canvas — Interactive CTV advertising platform
                  </span>
                </div>
              </div>
            </motion.section>
          )}

          {openMenu === "Case Study" && (
            <motion.section
              key="case-studies"
              className="absolute left-0 right-0 top-full z-30 hidden border-t border-zinc-200 bg-white md:block"
              onMouseEnter={() => setOpenMenu("Case Study")}
              onMouseLeave={() => setOpenMenu(null)}
              aria-label="Case studies navigation panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-auto flex max-w-[1280px] gap-8 px-4 pt-9 pb-3 sm:px-6">
                <div className="flex h-[280px] w-[440px] flex-col rounded-[14px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-7 text-white shadow-xl">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50">
                      CASE STUDY
                    </p>

                    <h3 className="mt-3 text-[19px] font-semibold leading-snug">
                      How OTT Studio Turned Standard CTV Ads into Interactive Experiences
                    </h3>

                    <ul className="mt-4 space-y-2 text-[13px] font-semibold text-white/85">
                      {["Interactive CTV in action", "26%+ interaction rate"].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/70" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/case-studies"
                    onClick={() => setOpenMenu(null)}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/90"
                  >
                    <span className="relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-white after:opacity-70 after:transition-all after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:opacity-100">
                      View Case Study
                    </span>{" "}
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="flex flex-1 flex-col gap-6 text-sm text-zinc-800 sm:flex-row sm:gap-10">
                  <div className="min-w-[220px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      Explore
                    </p>
                    <div className="mt-3 space-y-3">
                      {[
                        {
                          label: "Canvas Runtime",
                          href: "/product#runtime",
                          icon: (
                            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-zinc-200 bg-white shadow-sm">
                              <Image src={runtimeIcon} alt="" className="h-5 w-5" />
                            </span>
                          ),
                        },
                        {
                          label: "Interactive Demo",
                          href: "/product",
                          icon: (
                            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-zinc-200 bg-white shadow-sm text-zinc-800">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                              >
                                <path d="M10 8l6 4-6 4V8z" />
                                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                              </svg>
                            </span>
                          ),
                        },
                        {
                          label: "Request Demo",
                          href: "/#get-started",
                          icon: (
                            <span className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-zinc-200 bg-white shadow-sm text-zinc-800">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                              >
                                <path d="M22 2L11 13" />
                                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                              </svg>
                            </span>
                          ),
                        },
                      ].map((link) => (
                        link.label === "Request Demo" ? (
                          <RequestDemoTrigger
                            key={link.label}
                            onClick={() => setOpenMenu(null)}
                            className="group flex w-full items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              {link.icon}
                              <span className="truncate">{link.label}</span>
                            </span>
                            <span
                              className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-700"
                              aria-hidden
                            >
                              →
                            </span>
                          </RequestDemoTrigger>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpenMenu(null)}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200/70 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              {link.icon}
                              <span className="truncate">{link.label}</span>
                            </span>
                            <span
                              className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-700"
                              aria-hidden
                            >
                              →
                            </span>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                </div>


              </div>
              <div className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 px-4 py-2.5 sm:px-6">
                  <span className="text-sm font-medium text-[rgba(153,161,175,1)]">
                    Canvas — Interactive CTV advertising platform
                  </span>
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
                      const isActive = isActiveLink(item.href);
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={[
                            "rounded-lg px-3 py-2 text-sm font-semibold",
                            isActive
                              ? "bg-zinc-900 text-white"
                              : "text-zinc-800 hover:bg-zinc-50",
                          ].join(" ")}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    const mobileHref =
                      item.label === "Product"
                        ? "/product"
                        : item.label === "Case Study"
                          ? "/case-studies"
                          : item.label === "Demo"
                            ? "/demo"
                            : "/";

                    return (
                      <Link
                        key={item.label}
                        href={mobileHref}
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
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

