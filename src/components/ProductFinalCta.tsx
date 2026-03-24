import Link from "next/link";
import { RequestDemoTrigger } from "@/components/RequestDemoTrigger";

export function ProductFinalCta() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "rgba(238, 240, 251, 1)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Top-right circle + glow */}
        <div
          className="absolute h-[260px] w-[260px] rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(249, 168, 212, 0.55)",
            top: -80,
            right: -120,
          }}
        />
        <div
          className="absolute h-[200px] w-[200px] rounded-full"
          style={{
            backgroundColor: "rgba(249, 168, 212, 1)",
            opacity: 0.35,
            top: -40,
            right: -80,
          }}
        />

        {/* Bottom-left (slightly right) circle + glow */}
        <div
          className="absolute h-[190px] w-[190px] rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(252, 211, 77, 0.55)",
            bottom: -80,
            left: 10,
          }}
        />
        <div
          className="absolute h-[130px] w-[130px] rounded-full"
          style={{
            backgroundColor: "rgba(252, 211, 77, 1)",
            opacity: 0.4,
            bottom: -20,
            left: 141,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <div className="inline-flex items-center justify-center rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur">
          <span className="relative mr-2 inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.55)]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
          </span>
          Get started
        </div>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Put Canvas to work for you
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-[15px]">
          Join the streaming platforms and agencies already running interactive CTV campaigns with Canvas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RequestDemoTrigger
            className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#F97316_0%,#EAB308_20%,#22C55E_40%,#06B6D4_60%,#3B82F6_80%,#8B5CF6_100%)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md"
          >
            <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-slate-900">
              <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                Request Demo
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
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </RequestDemoTrigger>

          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-[rgb(192,192,192)] p-[3px] text-sm font-semibold shadow-sm transition hover:shadow-md"
          >
            <span className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-black">
              <span className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                View Case Study
              </span>
              <span className="relative z-10 flex h-[28px] w-[28px] items-center justify-center rounded-[9px] bg-[rgb(192,192,192)] text-black transition group-hover:text-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

