"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type PreloaderProps = {
  onDone?: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
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
          delay: 3.4,
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

  // Delay mounting the video so the empty screen + tagline are visible first
  useEffect(() => {
    const id = window.setTimeout(() => {
      setShowVideo(true);
    }, 800);
    return () => window.clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="pre-root fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(circle_at_top,#020617_0%,#020617_40%,#020617_70%,#020617_100%)]"
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="pointer-events-none absolute -inset-28 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.32),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(244,114,182,0.36),transparent_60%),radial-gradient(circle_at_50%_110%,rgba(249,115,22,0.34),transparent_70%)] blur-[72px]" />

        <div className="pre-tv relative w-[92vw] max-w-[520px] rounded-[34px] border border-slate-700/70 bg-[radial-gradient(circle_at_10%_-10%,#020617,#020617_55%)] p-4 shadow-[0_40px_160px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/60">
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

            <div className="relative h-[220px] w-full md:h-[260px]">
              <div className="pre-video absolute inset-0 overflow-hidden rounded-[22px] bg-black">
                {showVideo ? (
                  <video
                    src="/videos/preloader.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onEnded={(e) => e.currentTarget.play()}
                    className="h-full w-full object-contain"
                  />
                ) : null}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.3)_55%),radial-gradient(circle_at_90%_0%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.35)_60%)]" />
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

