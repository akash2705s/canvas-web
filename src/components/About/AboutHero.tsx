"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

import arrowRight from "@/assets/About/Hero/ArrowRight.svg";
import founderVideoPoster from "@/assets/About/Hero/founder_video_poster.png";

function FounderVideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  return (
    <div className="w-full overflow-hidden rounded-[28px] bg-[#1a1530] ring-1 ring-white/10">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-[28px] bg-[#0a0614]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          preload="auto"
          poster={founderVideoPoster.src}
          src="/videos/founder_video.mp4"
          data-cursor={playing ? "media" : undefined}
          data-cursor-label={playing ? "Pause" : undefined}
          aria-label={playing ? "Pause the founder video" : undefined}
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            data-cursor="media"
            data-cursor-label="Play"
            className="group absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/35 via-black/5 to-transparent p-4 transition hover:from-black/45 sm:p-5"
            aria-label="Play the founder video"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#818CF8] to-[#6366F1] text-white shadow-lg shadow-indigo-950/50 ring-1 ring-white/25 transition group-hover:scale-105 sm:h-12 sm:w-12">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="border-t border-white/10 px-5 py-3.5 sm:px-6 sm:py-4">
        <p className="text-base font-semibold text-white">Founder Video</p>
        <p className="mt-0.5 text-sm text-white/55">A message from the team behind Canvas.</p>
      </div>
    </div>
  );
}

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0D1120_8.49%,#130C28_54.15%,#0D1120_91.51%)] text-white">
      <div className="relative mx-auto flex max-w-[76rem] flex-col gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        {/* Left copy */}
        <div className="max-w-xl shrink-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#4F46E52E] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#A3B3FF]">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
              <span className="absolute left-1/2 top-1/2 inline-flex h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#A3B3FF]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3B3FF]" />
            </span>
            About Canvas
          </div>

          {reduceMotion ? (
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-[1.1]">
              Canvas is building
              <br />
              the <span className="font-extrabold text-[#818CF8]">interaction layer</span>
              <br />
              for video
            </h1>
          ) : (
            <motion.h1
              className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl sm:leading-[1.1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
            >
              {[
                { id: "about-hero-line-1", content: "Canvas is building" },
                {
                  id: "about-hero-line-2",
                  content: (
                    <>
                      the <span className="font-extrabold text-[#818CF8]">interaction layer</span>
                    </>
                  ),
                },
                {
                  id: "about-hero-line-3",
                  content: "for video",
                },
              ].map((line, idx) => (
                <motion.span
                  key={line.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(16px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.9,
                        delay: 0.08 + idx * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  className="block will-change-transform"
                >
                  {line.content}
                </motion.span>
              ))}
            </motion.h1>
          )}

          {reduceMotion ? (
            <div className="mt-5 max-w-xl">
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                We turn video across CTV, web and mobile into measurable, interactive experiences by capturing
                real viewer intent in real time.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.4)] sm:text-base">
                What started as a simple idea &quot;what if viewers could respond inside the video?&quot; is now powering live
                campaigns across streaming platforms.
              </p>
            </div>
          ) : (
            <div className="mt-5 max-w-xl">
              <motion.p
                className="text-sm leading-relaxed text-slate-300 sm:text-base"
                aria-label="We turn video across CTV, web and mobile into measurable, interactive experiences by capturing real viewer intent in real time."
              >
                {(() => {
                  const text =
                    "We turn video across CTV, web and mobile into measurable, interactive experiences by capturing real viewer intent in real time.";
                  const words = text.split(" ");
                  return words.map((word, idx) => (
                    <motion.span
                      key={`${word}-${idx}-${words.length}`}
                      initial={{ opacity: 0, y: 14, filter: "blur(12px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.75,
                        delay: 0.22 + idx * 0.02,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true, amount: 0.8 }}
                      className="inline-block align-baseline will-change-transform"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ));
                })()}
              </motion.p>
              <motion.p
                className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.4)] sm:text-base"
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.8 }}
              >
                What started as a simple idea &quot;what if viewers could respond inside the video?&quot; is now powering live
                campaigns across streaming platforms.
              </motion.p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {reduceMotion ? (
              <RequestDemoTrigger
                className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
              >
                <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
                  <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                    Request Demo
                  </span>
                  <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
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
                      <title>Arrow right</title>
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </RequestDemoTrigger>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <RequestDemoTrigger
                  className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] shadow-sm transition hover:shadow-md"
                >
                  <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">
                    <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                      Request Demo
                    </span>
                    <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] text-white transition group-hover:opacity-90">
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
                        <title>Arrow right</title>
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </RequestDemoTrigger>
              </motion.div>
            )}

            {reduceMotion ? (
              <Link
                href="/blog/turning-passive-ctv-ads-into-active-experiences"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-white/30"
              >
                See our partners
                <Image src={arrowRight} alt="" className="h-3.5 w-3.5 opacity-90" aria-hidden />
              </Link>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Link
                  href="/blog/turning-passive-ctv-ads-into-active-experiences"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-transparent px-5 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-white/30"
                >
                  See our partners
                  <Image src={arrowRight} alt="" className="h-3.5 w-3.5 opacity-90" aria-hidden />
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1 lg:flex-[1.32] lg:min-w-[min(100%,20rem)] xl:min-w-[min(100%,26rem)]">
          <FounderVideoCard />
        </div>
      </div>
    </section>
  );
}