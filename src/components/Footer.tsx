"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const [showConfetti, setShowConfetti] = useState(false);
  const grantBadgeRef = useRef<HTMLButtonElement | null>(null);
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = grantBadgeRef.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let stopped = false;
    let active = false;
    let intervalId: number | null = null;
    let obs: IntersectionObserver | null = null;
    let onResize: (() => void) | null = null;

    const stopLoop = () => {
      active = false;
      if (intervalId != null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
      if (onResize) {
        window.removeEventListener("resize", onResize);
        onResize = null;
      }
      setShowConfetti(false);
    };

    const startLoop = () => {
      active = true;
      if (intervalId != null) return;
      setShowConfetti(true);

      void import("canvas-confetti").then(({ default: confetti }) => {
        if (stopped || !active) return;
        const canvas = confettiCanvasRef.current;
        if (!canvas) return;

        // Use main-thread rendering here; worker/offscreen can throw if the canvas is
        // resized after transfer. For this small badge canvas, main-thread is fine.
        const fire = confetti.create(canvas, { resize: true, useWorker: false });
        const colors = ["#F59E0B", "#A78BFA", "#34D399", "#FB7185", "#38BDF8"];

        const pass = () => {
          // From left + right, aligned to the SVTA badge so it "lands" on it (even though
          // the canvas is bigger and can render outside the badge).
          const badge = grantBadgeRef.current;
          const canvasRect = canvas.getBoundingClientRect();
          const badgeRect = badge?.getBoundingClientRect();

          const y = badgeRect
            ? Math.min(
                0.9,
                Math.max(0.05, (badgeRect.top - canvasRect.top + badgeRect.height * 0.1) / canvasRect.height),
              )
            : 0.18;

          fire({
            particleCount: 18,
            angle: 40,
            spread: 18,
            startVelocity: 14,
            ticks: 120,
            decay: 0.94,
            gravity: 1.0,
            scalar: 0.7,
            origin: { x: 0, y },
            colors,
          });
          fire({
            particleCount: 18,
            angle: 140,
            spread: 18,
            startVelocity: 14,
            ticks: 120,
            decay: 0.94,
            gravity: 1.0,
            scalar: 0.7,
            origin: { x: 1, y },
            colors,
          });
        };

        let cyclesRun = 0;

        const cycle = () => {
          if (stopped || !active) return;
          // Three passes over ~1s.
          pass();
          window.setTimeout(() => {
            if (stopped || !active) return;
            pass();
          }, 333);
          window.setTimeout(() => {
            if (stopped || !active) return;
            pass();
          }, 666);

          cyclesRun += 1;
          // Run for ~3 seconds total (3 cycles), then stop.
          if (cyclesRun >= 3) {
            window.setTimeout(() => {
              if (!stopped && active) {
                stopLoop();
              }
            }, 1000);
          } else {
            window.setTimeout(cycle, 1000);
          }
        };

        cycle();
      });
    };

    obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(el);

    // If the badge is already visible on initial load (e.g. user refreshed while scrolled down),
    // manually trigger the confetti loop once so it behaves consistently in production.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startLoop();
    }
    return () => {
      stopped = true;
      obs?.disconnect();
      stopLoop();
    };
  }, []);

  return (
    <footer className="mt-20 bg-[#f4f3fb]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-10 pb-8 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Left: logo + copy */}
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/CanvasLogo.svg" alt="Canvas logo" width={28} height={28} />
            <span className="text-sm font-semibold text-zinc-900">Canvas</span>
          </div>
          <p className="text-sm leading-6 text-zinc-600">
            The runtime and editor infrastructure enabling interactive CTV ads across streaming
            platforms.
          </p>
          <div className="relative inline-block">
            {showConfetti ? (
              <canvas
                aria-hidden
                ref={confettiCanvasRef}
                className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[260px] w-[560px] -translate-x-1/2 -translate-y-1/2"
              />
            ) : null}

            <button
              type="button"
              className="relative inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 shadow-sm ring-1 ring-zinc-200"
              ref={grantBadgeRef}
            >
              <span className="relative inline-flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300/80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              SVTA Grant Recipient
            </button>
          </div>
        </div>

        {/* Right: columns */}
        <div className="grid flex-1 grid-cols-2 gap-10 text-sm text-zinc-700 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Product</p>
            <div className="mt-3 space-y-2">
              <Link href="/#product" className="block hover:text-zinc-900">
                Canvas Runtime
              </Link>
              <Link href="/#product" className="block hover:text-zinc-900">
                Canvas Editor
              </Link>
              <Link href="/#product" className="block hover:text-zinc-900">
                AI Conversion
              </Link>
              <Link href="/#demo" className="block hover:text-zinc-900">
                Interactive Demo
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Company</p>
            <div className="mt-3 space-y-2">
              <Link href="/#case-studies" className="block hover:text-zinc-900">
                Case Studies
              </Link>
              <Link href="/#partners" className="block hover:text-zinc-900">
                Partners
              </Link>
              <Link href="/#demo" className="block hover:text-zinc-900">
                Request Demo
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Resources</p>
            <div className="mt-3 space-y-2">
              <Link href="/#how-it-works" className="block hover:text-zinc-900">
                How It Works
              </Link>
              <Link href="/#docs" className="block hover:text-zinc-900">
                Documentation
              </Link>
              <Link href="/#svta" className="block hover:text-zinc-900">
                SVTA Grant
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Canvas. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-800">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-800">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center pb-8 text-[112px] font-extrabold tracking-tight text-[#e4e1f5]">
        <span className="leading-none" style={{ letterSpacing: "-0.06em" }}>
          Canvas
        </span>
      </div>

    </footer>
  );
}

