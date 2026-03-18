"use client";

import Link from "next/link";
import Image from "next/image";
import authorImage from "@/assets/Blog/Hero/author.svg";
import saveIcon from "@/assets/Blog/Hero/save.svg";
import linkedinIcon from "@/assets/Blog/Hero/linkedin.svg";
import shareIcon from "@/assets/Blog/Hero/share.svg";
import xIcon from "@/assets/Blog/Hero/x.svg";
import dateIcon from "@/assets/Blog/Hero/date.svg";
import pastIcon from "@/assets/Blog/Hero/past.svg";
import bookIcon from "@/assets/Blog/Hero/book.svg";
import heroImage from "@/assets/Blog/Hero/hero_image.png";

export function CanvasBlogHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1120 0%, #1A0E2E 55%, #0F1535 100%)" }}>
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-40 right-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text content - left */}
          <div className="max-w-2xl lg:pl-32 pt-16">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300 transition"
              >
                <span>← Back to Canvas</span>
              </Link>
            </div>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-sm ring-1 ring-white/20 mb-6">
              <Image src={bookIcon} alt="" className="h-4 w-4" />
              CANVAS BLOG
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
              Canvas Is <br />
              Amazing
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255, 255, 255, 0.55)" }}>
              How one platform is rewriting the rules of connected TV advertising — turning passive impressions into declared first-party intent signals at scale.
            </p>

            {/* Meta info */}
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <Image src={authorImage} alt="Canvas Space" className="h-8 w-8 rounded-full" />
                <span className="font-medium text-slate-300">By Canvas Space</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={dateIcon} alt="" className="h-4 w-4" />
                <span>March 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={pastIcon} alt="" className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
              <span className="text-sm font-semibold" style={{ color: "rgba(255, 255, 255, 0.3)" }}>SHARE</span>
              <div className="flex items-center gap-1">
                <button type="button" className="p-1.5 rounded-lg transition hover:bg-white/15 hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} title="Share on X">
                  <Image src={xIcon} alt="X" className="h-5 w-5" />
                </button>
                <button type="button" className="p-1.5 rounded-lg transition hover:bg-white/15 hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} title="Share on LinkedIn">
                  <Image src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
                </button>
                <button type="button" className="p-1.5 rounded-lg transition hover:bg-white/15 hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} title="Save">
                  <Image src={saveIcon} alt="Save" className="h-5 w-5" />
                </button>
                <button type="button" className="p-1.5 rounded-lg transition hover:bg-white/15 hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }} title="Share">
                  <Image src={shareIcon} alt="Share" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Hero image - right */}
          <div className="relative mt-auto pt-12 flex items-center justify-center">
            <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-75" style={{ background: "radial-gradient(circle, rgba(79, 70, 229, 0.6) 0%, rgba(99, 102, 241, 0.2) 40%, transparent 70%)" }} />
            <Image
              src={heroImage}
              alt="Canvas Interactive Demo"
              className="w-full h-auto rounded-2xl object-cover relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
