import Image from "next/image";
import Link from "next/link";

import heroImage from "@/assets/Blog/Image (Streaming TV interactive experience).svg";

const POSTS = [
  {
    slug: "turning-passive-ctv-ads-into-active-experiences",
    title: "Turning Passive CTV Ads into Active Experiences",
    excerpt:
      "CTV has scaled. Interactivity hasn’t. Here’s why Canvas Interactive Suite (CIS) is the runtime layer that activates engagement without disrupting your stack.",
    image: heroImage,
    tag: "CIS",
    date: "2026",
  },
] as const;

export default function BlogIndexPage() {
  return (
    <section className="relative overflow-hidden bg-[rgba(238,240,251,1)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-24 h-[260px] w-[260px] rounded-full bg-[rgba(252,211,77,0.35)] blur-3xl" />
        <div className="absolute -right-24 top-10 h-[320px] w-[320px] rounded-full bg-[rgba(244,114,182,0.18)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 sm:px-10 sm:pt-20 sm:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur">
          <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.7)]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
          </span>
          Blog
        </div>

        <h1 className="mt-5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[42px] [font-family:var(--font-display)]">
          Notes on interactive CTV infrastructure
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-[15px]">
          Product thinking, runtime mechanics, and real-world outcomes.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group relative overflow-hidden rounded-[24px] bg-white shadow-[0_20px_70px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-[0_26px_90px_rgba(15,23,42,0.18)]"
            >
              <div className="relative aspect-[16/9] w-full bg-[#F6F7FF]">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                  <span className="inline-flex items-center rounded-full bg-[rgba(79,70,229,0.10)] px-2.5 py-1 text-[11px] font-semibold text-[rgba(79,70,229,1)]">
                    {p.tag}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{p.date}</span>
                </div>

                <h2 className="mt-3 text-[18px] font-extrabold leading-snug text-slate-900">
                  {p.title}
                </h2>
                <p className="mt-2 text-[13px] leading-6 text-slate-600">
                  {p.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-slate-800">
                  Read post <span className="text-slate-400 transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

