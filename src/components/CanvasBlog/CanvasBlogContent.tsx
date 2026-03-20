"use client";

import Link from "next/link";
import Image from "next/image";
import ctvLogo from "@/assets/Blog/Content/ctv.svg";
import aicLogo from "@/assets/Blog/Content/aic.svg";
import numbersImage from "@/assets/Blog/Content/numbers.png";

export function CanvasBlogContent() {
  return (
    <section className="relative" style={{ backgroundColor: "rgba(248, 248, 252, 1)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main content - left */}
          <div className="lg:col-span-2 lg:pl-32">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-lg leading-8 text-slate-700">
                  When we started Canvas, the pitch was simple: streaming has eaten television, but advertising on
                  streaming still looks exactly like advertising on TV in 1997. A thirty-second clip plays, the viewer
                  stares at their phone, and the brand absolutely has no idea what just happened. Canvas exists to fix that
                  — and in the two years since launch, we've come to believe the platform we've built isn't just incrementally
                  better. It's a fundamentally different category.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { value: "26x", label: "more first-party signals vs passive formats", bgColor: "bg-indigo-50", textColor: "text-indigo-600" },
                  { value: "72%", label: "of viewers skip or ignore passive CTV ads", bgColor: "bg-orange-50", textColor: "text-orange-500" },
                  { value: "$32B", label: "CTV ad spend generating zero engagement data", bgColor: "bg-purple-50", textColor: "text-purple-600" },
                ].map((stat) => (
                  <div key={stat.value} className={`rounded-xl ${stat.bgColor} p-6`}>
                    <p className={`text-4xl font-bold ${stat.textColor}`}>{stat.value}</p>
                    <p className="mt-3 text-xs text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Section Heading */}
              <div className="mt-12">
                <h2 className="text-3xl font-extrabold text-slate-900">The Problem with &quot;Passive&quot; CTV</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Connected TV was supposed to be the Holy Grail. First-party login data, household-level targeting,
                  premium content environments, and viewability that outstrips every other screen. Brands poured $32
                  billion into CTV inventory in 2025 — and then... nothing. No click. No interaction. No signal that the
                  viewer did anything but stare at it. Or didn't. Because they were on their phone.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  The fundamental irony of CTV advertising is that the medium is{" "}
                  <span className="font-semibold italic">technically interactive</span> — every Roku, Fire TV, and Apple
                  TV in America has a remote with buttons, a network connection, and enough compute to run a small game —
                  yet we keep serving the exact same linear TV experience as if none of that infrastructure exists.
                </p>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-indigo-600 bg-indigo-50 py-6 pl-6 pr-6">
                <p className="text-base italic text-slate-700">
                  "Every Roku in America has a network connection and a D-pad. We're still treating it like a billboard."
                </p>
              </div>

              {/* Info Box */}
              <div className="mt-12 rounded-2xl bg-orange-50 p-6 flex gap-4">
                <div className="flex-shrink-0 mt-2 h-10 w-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <Image src={ctvLogo} alt="CTV" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">The CTV attention gap is real</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Nielsen data shows that viewers engaged with a second screen during 68% of streaming ad breaks. The ad plays. Nobody watches. The brand pays CPM rates that assume they did.
                  </p>
                </div>
              </div>

              {/* What Canvas Actually Does Section */}
              <div className="mt-16">
                <h2 className="text-3xl font-extrabold text-slate-900">What Canvas Actually Does</h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Canvas sits between the SSAI layer and the player — a thin SDK that intercepts standard VAST/VPAID ad calls and wraps them in an interactive experience layer. Publishers don't change their ad stack. Buyers don't change their media plans. The only difference is that the ad unit now has a living, breathing UI sitting on top of the video.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  That UI can be a QR commerce panel (scan to buy in seconds while the ad plays). A live poll (vote with the D-pad, see real-time results). A "Save for Later" wishlist card. A store locator powered by the viewer's ZIP code. All of it navigable with the remote. All of it generating first-party intent signals that flow back to the brand's DMP, CDP, or wherever else they live.
                </p>
                <div className="mt-8 rounded-2xl overflow-hidden bg-black h-80">
                  <video
                    src="/videos/hero_demo.mov"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-contain"
                  />
                </div>
            <p className="mt-4 text-xs text-slate-500">Canvas overlays an interactive UI on top of a standard CTV ad — no publisher SDK changes required.</p>
          </div>

          {/* The AI Conversion Layer Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900">The AI Conversion Layer</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The part of Canvas that makes people's jaws drop in demos is the AI Conversion engine. You paste in a standard 30-video creative. In under ten seconds, Canvas's AI watches the video, identifies product moments, maps the narrative arc, and auto-generates an interactive layer with the right widgets at the right timestamp. For UI at the emotional peak. QR at the product reveal. CTA at the end card.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We've run this on over 400 pieces of creative in beta. The AI-generated layouts consistently outperform hand-crafted ones on first interaction rate — because the model has seen thousands of interactions and learned exactly when the audience is paying attention.
            </p>

            {/* Info Box - AI Conversion */}
            <div className="mt-6 rounded-xl bg-purple-100 p-6 flex gap-4">
              <div className="flex-shrink-0 mt-2 h-10 w-10 bg-purple-200 rounded-full flex items-center justify-center">
                <Image src={aicLogo} alt="AI Conversion" className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">AI Conversion is in closed beta</h4>
                <p className="mt-1 text-xs text-slate-600">
                  We're onboarding brand and agency partners now. If you want early access, request a demo and mention AI Conversion — we'll prioritise you.
                </p>
              </div>
            </div>
          </div>

          {/* The Numbers Don't Lie Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900">The Numbers Don't Lie</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              In our first full production campaign — a national CTV brand running across Roku, Fire TV, and Samsung Smart TV — Canvas delivered a 26.2% interaction rate on ads that had previously measured exactly 0% interaction rate (because interaction wasn't possible). Average engagement duration was 14.3 seconds — compared to a skip-adjusted attention time of roughly 2 seconds for the equivalent passive spot.
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden h-80">
              <Image
                src={numbersImage}
                alt="CTV Campaign Results"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Most importantly, the QR-to-purchase conversion rate was 8.4x higher than the brand's benchmark for social video click-throughs — despite the fact that scanning a QR code from a TV requires physically picking up your phone. The intent signal was so strong that even with that friction, viewers converted at a rate the brand's performance marketing team ask us what we'd done differently.
            </p>

            {/* Quote Box */}
            <div className="mt-8 border-l-4 border-orange-500 bg-orange-50 py-6 pl-6 pr-6">
              <p className="text-sm italic text-slate-700">
                "26.2% interaction rate. 14+ seconds average engagement. QR-to-purchase 8.4x above benchmark. All from an ad that previously measured exactly zero."
              </p>
            </div>
          </div>

          {/* Why Now Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Why Now?</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Three converging forces make 2026 the inflection point for interactive CTV. First, CTV penetration has crossed the threshold where it's no longer "incremental reach" — it is reach. Over 80% of US households now stream on a connected TV device every month. Second, the deprecation of third-party cookies and device-level mobile identifiers has created a genuine first-party data emergency for brands. And third, CTV device manufacturers — Roku, Amazon, Samsung — have all shipped new SDKs in the last eighteen months that make overlay deployment faster, more stable, and more capable than it was even a year ago.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The window to be the default infrastructure layer for interactive CTV is open right now. In three years, someone will own that space. We intend for it to be Canvas.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900">What's Next</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The roadmap for 2026 has three pillars: shipping AI Conversion out of beta and into self-serve, launching the Canvas Measurement standard as an open framework that any MRC-accredited vendor can certify against, and expanding publisher inventory so that brands running Canvas campaigns can reach 90%+ of CTV households with a single unified buy.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We're also quietly building something that we think will be the most interesting Canvas product yet — but we're not ready to talk about it one. Stay tuned.
            </p>
          </div>

        </div>
          </div>

          {/* Sidebar - right */}
          <div className="lg:col-span-1 space-y-6">
            {/* In This Article */}
            <div className="rounded-3xl bg-slate-50 p-8">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-500">In This Article</h3>
              <ul className="space-y-3">
                {[
                  'The Problem with "Passive" CTV',
                  "What Canvas Actually Does",
                  "The AI Conversion Layer",
                  "The Numbers Don't Lie",
                  "Why Now?",
                  "What's Next",
                ].map((item, idx) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className={`text-sm transition flex items-center gap-2 ${idx === 0
                        ? "text-indigo-600 font-semibold"
                        : "text-slate-500 hover:text-slate-700"
                        }`}
                    >
                      <span className={`h-2 w-2 rounded-full flex-shrink-0 ${idx === 0 ? "bg-indigo-600" : "bg-slate-300"
                        }`} />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Stats */}
            <div className="rounded-3xl bg-gradient-to-b from-indigo-50 to-blue-50 p-8">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-indigo-600">Key Stats</h3>
              <div>
                {[
                  { label: "More first-party signals", value: "26x", color: "text-indigo-600" },
                  { label: "Interaction rate", value: "26.2%", color: "text-orange-500" },
                  { label: "Avg engagement time", value: "14.3s", color: "text-purple-600" },
                  { label: "QR-to-purchase vs benchmark", value: "8.4x", color: "text-amber-500" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-0.5">
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <p className="text-xs uppercase tracking-widest text-slate-500">Try Canvas</p>
              <h3 className="mt-4 text-xl font-bold">See your ad come to life in under 10 seconds</h3>
              <button type="button" className="mt-6 w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Request Demo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
