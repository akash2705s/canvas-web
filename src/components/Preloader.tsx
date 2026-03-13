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

      tl.from(".pre-screen", {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(".pre-static", {
          opacity: 0.9,
          duration: 0.5,
        })
        .to(".pre-screen", {
          borderRadius: 18,
          borderColor: "#0f172a",
          duration: 0.7,
          ease: "power2.inOut",
        })
        .to(".pre-static", {
          opacity: 0,
          duration: 0.4,
        })
        .from(".pre-video", {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        // L-banner rises from bottom first
        .from(".pre-lbanner", {
          y: 32,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        // Then Corner banner slides in
        .from(
          ".pre-corner",
          {
            x: 40,
            y: -40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        )
        .to(".pre-ui", {
          opacity: 1,
          duration: 0.3,
        })
        .from(".pre-tagline", {
          y: 8,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        })
        .to(".pre-root", {
          opacity: 0,
          duration: 0.6,
          delay: 0.6,
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
      <div className="relative flex flex-col items-center gap-8">
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(244,114,182,0.28),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.24),transparent_60%)] blur-3xl" />

        <div className="pre-screen relative w-[460px] rounded-[32px] border border-slate-800/80 bg-slate-900/95 p-4 shadow-[0_56px_180px_rgba(15,23,42,0.98)]">
          <div className="flex items-center justify-between gap-2 rounded-[20px] bg-slate-950/70 px-3.5 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex flex-1 justify-end">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-400/90" />
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-[24px] border border-slate-800/80 bg-gradient-to-b from-slate-950 to-slate-900">
            {/* CRT static layer */}
            <div
              className="pre-static pointer-events-none absolute inset-0 opacity-40 mix-blend-screen"
              style={{
                backgroundImage: "url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif)",
                backgroundSize: "cover",
              }}
            />

            {/* Modern interactive UI */}
            <div className="pre-ui relative flex h-[260px] flex-col items-center justify-center gap-6 px-8 py-7 opacity-0">
              {/* Video frame with animated placements */}
              <div className="pre-video relative w-full max-w-md overflow-hidden rounded-[26px] border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                {/* Faux video content */}
                <div className="h-[190px] bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.25),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.25),transparent_65%)]" />

                {/* Corner banner */}
                <div className="pre-corner pointer-events-none absolute right-5 top-5 h-[78px] w-[150px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#6366F1] via-[#A855F7] to-[#6366F1] shadow-[0_18px_50px_rgba(15,23,42,0.95)]">
                  <div className="absolute inset-[2px] rounded-[16px] bg-slate-950/90" />
                  <div className="relative flex h-full items-center justify-center gap-3 px-4">
                    <span className="h-7 w-7 rounded-full bg-[conic-gradient(from_210deg,#F97316,#22C55E,#38BDF8,#A855F7,#F97316)] opacity-80" />
                    <span className="h-[18px] w-[60px] rounded-full bg-white/10" />
                  </div>
                </div>

                {/* L-banner */}
                <div className="pre-lbanner pointer-events-none absolute inset-x-7 bottom-5 h-[34px] overflow-hidden rounded-full bg-gradient-to-r from-[#F97316] via-[#FACC15] to-[#F97316] shadow-[0_14px_44px_rgba(15,23,42,0.95)]">
                  <div className="absolute inset-[2px] rounded-full bg-slate-950/92" />
                  <div className="relative flex h-full items-center justify-between px-5">
                    <span className="h-2 w-20 rounded-full bg-gradient-to-r from-[#F97316] to-[#FACC15]" />
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] text-amber-200">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

