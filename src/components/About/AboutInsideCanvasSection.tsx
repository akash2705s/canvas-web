"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type MediaItem = {
  id: string;
  title: string;
  videoSrc: string;
};

const MEDIA_ITEMS: MediaItem[] = [
  { id: "minds-behind-micro", title: "Minds Behind Micro", videoSrc: "/videos/hero_demo.mov" },
  { id: "product-demos", title: "Product demos", videoSrc: "/videos/create_seconds_demo.mov" },
  { id: "founder-clips", title: "Founder clips", videoSrc: "/videos/convert_ads_product.mov" },
  { id: "behind-the-scenes", title: "Behind-the-scenes", videoSrc: "/videos/case_study_livead.mov" },
];

function MediaCard({ item, idx }: { item: MediaItem; idx: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => {
    setIsHovering(true);
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.currentTime = 0;
    void video.play().catch(() => { });
  };

  const handleLeave = () => {
    setIsHovering(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
      data-cursor="play"
      data-cursor-label="Play"
    >
      <div className="relative aspect-[16/10]">
        <video
          ref={videoRef}
          src={item.videoSrc}
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        >
          <track kind="captions" srcLang="en" label="English" />
        </video>

        {!isHovering && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/22">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-slate-900/75 px-4 py-2 text-xs font-semibold text-white">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <title>Play</title>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Hover to play
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
        <span className="text-xs text-slate-400">Series</span>
      </div>
    </motion.div>
  );
}

export function AboutInsideCanvasSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0D1120_8.49%,#130C28_54.15%,#0D1120_91.51%)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6 }}
        >
          Inside Canvas
        </motion.h2>

        <motion.p
          className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          A look at how we think, build, and explore interaction in video.
        </motion.p>

        <motion.p
          className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We are documenting the journey from ideas to execution as we build Canvas in real time.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {MEDIA_ITEMS.map((item, idx) => (
            <MediaCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

