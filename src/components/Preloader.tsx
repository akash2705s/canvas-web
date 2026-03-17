"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type PreloaderProps = {
  onDone?: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);
  const latestOnDone = useRef<PreloaderProps["onDone"] | null>(null);

  useEffect(() => {
    latestOnDone.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".pre-tv", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .to(".pre-static", {
          opacity: 0.7,
          duration: 0.3,
        })
        .to(".pre-static", {
          opacity: 0,
          duration: 0.25,
        })
        .from(
          ".pre-video",
          {
            scale: 0.9,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1",
        )
        .from(".pre-overlay-pill", {
          y: 10,
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
          stagger: 0.06,
        })
        .from(
          ".pre-tagline",
          {
            y: 6,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.1",
        )
        .to(".pre-root", {
          opacity: 0,
          duration: 0.6,
          delay: 3.6,
          ease: "power2.inOut",
          onComplete: () => {
            setDone(true);
            latestOnDone.current?.();
          },
        });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="pre-root fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
    >
      <div className="relative flex flex-col items-center gap-7">
        <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_90%_10%,rgba(244,114,182,0.32),transparent_65%),radial-gradient(circle_at_50%_110%,rgba(249,115,22,0.32),transparent_70%)] blur-3xl" />

        <div className="pre-tv relative w-[88vw] max-w-[560px] rounded-[30px] border border-slate-800/80 bg-[radial-gradient(circle_at_10%_-10%,#0f172a,#020617_55%)] p-5 shadow-[0_50px_200px_rgba(15,23,42,1)]">
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950/90 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex flex-1 justify-end gap-1.5">
              <span className="h-[7px] w-[28px] rounded-full bg-slate-700" />
              <span className="h-[7px] w-[7px] rounded-full bg-emerald-400/90" />
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-[24px] border border-slate-800/80 bg-slate-950">
            <div
              className="pre-static pointer-events-none absolute inset-0 opacity-0 mix-blend-screen"
              style={{
                backgroundImage: "url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif)",
                backgroundSize: "cover",
              }}
            />

            <div className="relative h-[260px] w-full md:h-[300px]">
              <div className="pre-video absolute inset-0 overflow-hidden rounded-[22px]">
                <video
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.3)_55%),radial-gradient(circle_at_90%_0%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.35)_60%),linear-gradient(to_top,rgba(15,23,42,0.8),transparent_40%)]" />
              </div>

              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-between gap-3">
                <div className="flex flex-col gap-2.5">
                  <div className="pre-overlay-pill inline-flex items-center gap-2 rounded-full bg-slate-950/85 px-3.5 py-1.5 text-[12px] font-medium text-slate-100 shadow-[0_14px_38px_rgba(15,23,42,0.95)]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/90 text-[10px] text-slate-950">
                      ●
                    </span>
                    <span>QR Scan</span>
                  </div>
                  <div className="pre-overlay-pill inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3.5 py-1.5 text-[12px] font-medium text-slate-100 shadow-[0_14px_38px_rgba(15,23,42,0.95)]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/90 text-[10px] text-slate-950">
                      ⟳
                    </span>
                    <span>Explore</span>
                  </div>
                </div>

                <div className="pre-overlay-pill inline-flex items-center gap-2 self-end rounded-full bg-white/95 px-4 py-1.5 text-[12px] font-semibold text-slate-900 shadow-[0_16px_44px_rgba(15,23,42,0.98)]">
                  <span className="h-[16px] w-[64px] rounded-full bg-slate-900/5" />
                  <span>Learn more</span>
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900/90 text-[9px] text-white">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
            <p className="pre-tagline text-[12px] md:text-[13px] font-medium tracking-[0.18em] text-slate-200/90 uppercase">
              Activating interactive ads…
            </p>
            <p className="text-[11px] md:text-[12px] text-slate-500">
              TV spot → interactive overlay in under 2 seconds.
            </p>
          </div>

          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-24 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-full origin-left animate-[preloader-bar_1.8s_ease-out_forwards] bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

