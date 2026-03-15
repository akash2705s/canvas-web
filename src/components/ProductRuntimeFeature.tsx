"use client";

import Image from "next/image";

import canvasRuntimeIcon from "../assets/Product/runtime/canvas_runtime.svg";
import interactOverlayIcon from "../assets/Product/runtime/interact_overlay.png";
import intentSignalIcon from "../assets/Product/runtime/intent_signal.png";
import ssaiIcon from "../assets/Product/runtime/ssai.png";
import streamIcon from "../assets/Product/runtime/stream.png";
import tickIcon from "../assets/Product/runtime/tick.svg";

export function ProductRuntimeFeature() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-start lg:gap-14 lg:py-20">
        {/* Left copy */}
        <div className="max-w-xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-[rgba(249,115,22,0.06)] px-3 py-1 text-xs font-semibold text-[rgba(249,115,22,1)]">
            01 · Runtime
          </p>
          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.15] tracking-[-0.04em] text-slate-900 sm:text-[36px] lg:text-[40px] [font-family:var(--font-display)]">
            Install a{" "}
            <span className="text-[#F97316]">
              lightweight script
            </span>
            , unlock interactivity
          </h2>
          <p className="mt-4 text-sm text-[rgba(106,114,130,1)] sm:text-base">
            Publishers add a lightweight Canvas runtime to their streaming apps. Minimal integration, maximum
            compatibility — it sits seamlessly alongside existing SSAI environments without disrupting a single
            impression.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-[3px]">
                <Image src={tickIcon} alt="" className="h-4 w-4" />
              </span>
              <span>
                <span className="font-semibold">Compatible with SSAI</span>
                <br />
                <span className="text-[13px] text-slate-500">
                  Google DAI, AWS MediaTailor, and all major ad servers
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px]">
                <Image src={tickIcon} alt="" className="h-4 w-4" />
              </span>
              <span>
                <span className="font-semibold">Works across major CTV platforms</span>
                <br />
                <span className="text-[13px] text-slate-500">Roku, Fire TV, Apple TV, Samsung, Android TV and more</span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px]">
                <Image src={tickIcon} alt="" className="h-4 w-4" />
              </span>
              <span>
                <span className="font-semibold">Minimal integration — 1 script tag</span>
                <br />
                <span className="text-[13px] text-slate-500">
                  No SDK, no rebuild, no changes to your ad stack
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[3px]">
                <Image src={tickIcon} alt="" className="h-4 w-4" />
              </span>
              <span>
                <span className="font-semibold">Playback-safe by design</span>
                <br />
                <span className="text-[13px] text-slate-500">
                  Non-destructive overlay — zero impact on all fill rates
                </span>
              </span>
            </li>
          </ul>

          {/* Code card */}
          <div className="mt-8 inline-flex flex-col gap-4">
            <div className="w-[520px] max-w-full overflow-hidden rounded-[18px] bg-[#050816] shadow-[0_26px_80px_rgba(15,23,42,0.7)] ring-1 ring-slate-900/60">
              <div className="flex items-center justify-between border-b border-white/5 bg-black/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium text-slate-300">index.html</span>
                <span className="h-2.5 w-[42px]" />
              </div>
              <div className="px-5 pb-4 pt-5 text-[13px] leading-relaxed text-slate-200">
                <p className="text-[12px] text-slate-500">
                  {"<!-- "}
                  <span className="text-sky-300">Step 1</span>
                  {": Add Canvas Runtime -->"}
                </p>
                <p className="mt-2">
                  <span className="text-emerald-300">&lt;script</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">src</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-amber-300">
                    &quot;https://cdn.canvas.io/runtime.js&quot;
                  </span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">data-key</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-amber-300">&quot;YOUR_PUBLISHER_KEY&quot;</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">data-env</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-amber-300">&quot;production&quot;</span>
                </p>
                <p className="text-emerald-300">&gt;&lt;/script&gt;</p>

                <p className="mt-4 text-[12px] text-slate-500">
                  {"<!-- "}
                  <span className="text-sky-300">Step 2</span>
                  {": That’s it. -->"}
                </p>
                <p className="mt-2 flex items-center gap-2 text-[12px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>&lt;50KB · Playback-safe · SSAI-compatible</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              className="group inline-flex items-center text-sm font-semibold text-slate-900 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md">
                <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 whitespace-nowrap">
                  <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    See the Runtime
                  </span>
                  <span className="relative z-10 flex h-[28px] w-[28px] items-center justify-center rounded-[9px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Right visual: runtime architecture card */}
        <div className="relative w-full max-w-xl">
          <div className="relative mt-8 overflow-hidden rounded-[32px] bg-white shadow-[0_26px_80px_rgba(15,23,42,0.22)] ring-1 ring-slate-100 px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-[11px] font-medium tracking-[0.18em] text-slate-400">
              <span>CANVAS RUNTIME ARCHITECTURE</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                SSAI-safe
              </span>
            </div>

            <div className="space-y-2.5 text-[13px]">
              {/* Streaming App */}
              <div className="flex items-center rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                  <Image src={streamIcon} alt="" className="h-8 w-6" />
                </span>
                <div className="ml-3 flex flex-col">
                  <p className="text-sm font-semibold text-slate-900">Streaming App</p>
                  <p className="text-[11px] text-slate-500">iOS / Android / Fire TV / Roku</p>
                </div>
              </div>

              {/* SSAI Layer */}
              <div className="flex items-center rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                  <Image src={ssaiIcon} alt="" className="h-6 w-6" />
                </span>
                <div className="ml-3 flex flex-col">
                  <p className="text-sm font-semibold text-slate-900">SSAI Layer</p>
                  <p className="text-[11px] text-slate-500">Google DAI · AWS MediaTailor</p>
                </div>
              </div>

              {/* Canvas Runtime */}
              <div className="flex items-center rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                  <Image src={canvasRuntimeIcon} alt="" className="h-4 w-4" />
                </span>
                <div className="ml-3 flex flex-col">
                  <p className="text-sm font-semibold text-slate-900">Canvas Runtime</p>
                  <p className="text-[11px] text-slate-500">&lt;50KB · Zero-config injection</p>
                </div>
              </div>

              {/* Interactive Overlay */}
              <div className="flex items-center rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                  <Image src={interactOverlayIcon} alt="" className="h-8 w-4" />
                </span>
                <div className="ml-3 flex flex-col">
                  <p className="text-sm font-semibold text-slate-900">Interactive Overlay</p>
                  <p className="text-[11px] text-slate-500">Viewer-facing surface · No UX break</p>
                </div>
              </div>

              {/* Intent Signals */}
              <div className="flex items-center rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100">
                  <Image src={intentSignalIcon} alt="" className="h-5 w-5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <p className="text-sm font-semibold text-slate-900">Intent Signals </p>
                  <p className="text-[11px] text-slate-500">Real-time data out · Dashboard + webhook</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-semibold">
              {["VAST / VMAP", "OpenRTB", "SSAI Passthrough", "Playback-safe"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[rgba(79,70,229,0.16)] bg-[rgba(79,70,229,0.07)] px-3 py-1 text-[rgba(79,70,229,1)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

