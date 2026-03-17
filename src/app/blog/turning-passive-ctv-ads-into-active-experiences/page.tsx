import Link from "next/link";

export default function BlogPostTurningPassiveCtvAdsPage() {
  return (
    <article className="relative overflow-hidden bg-[rgba(238,240,251,1)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-[280px] w-[280px] rounded-full bg-[rgba(252,211,77,0.38)] blur-3xl" />
        <div className="absolute -right-28 top-0 h-[340px] w-[340px] rounded-full bg-[rgba(244,114,182,0.18)] blur-3xl" />
        <div className="absolute right-24 bottom-10 h-[240px] w-[240px] rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <header className="relative mx-auto max-w-3xl px-6 pt-14 pb-8 sm:px-10 sm:pt-18">
        <Link
          href="/"
          className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-[12px] font-semibold text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white sm:left-10"
        >
          <span className="text-slate-400" aria-hidden>
            ←
          </span>
          Back to home
        </Link>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)] shadow-sm ring-1 ring-black/5 backdrop-blur">
          <span className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center align-middle">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.7)]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(79,70,229,1)]" />
          </span>
          CIS
        </div>

        <h1 className="mt-5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-900 sm:text-[44px] [font-family:var(--font-display)]">
          Turning Passive CTV Ads into Active Experiences
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
          Connected TV has scaled. Interactivity hasn’t. Today’s CTV stack is still built for passive viewing,
          even though the audience is ready to engage. Brands want performance. Publishers want higher yield.
          But most ad formats still behave like traditional video.
        </p>

        <div className="mt-6 overflow-hidden rounded-[22px] bg-white shadow-[0_22px_80px_rgba(15,23,42,0.14)] ring-1 ring-slate-900/5">
          <div className="relative aspect-[16/9] w-full bg-[#F6F7FF]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/hero_product.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-3xl px-6 pb-16 sm:px-10">
        <div className="rounded-[24px] bg-white/85 p-7 shadow-[0_22px_80px_rgba(15,23,42,0.10)] ring-1 ring-slate-900/5 backdrop-blur sm:p-9">
          <p className="text-[15px] leading-7 text-slate-700">
            That’s where <span className="font-semibold text-slate-900">Canvas Interactive Suite (CIS)</span>{" "}
            comes in.
          </p>

          <h2 className="mt-7 text-[20px] font-extrabold tracking-tight text-slate-900">
            What is CIS?
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            CIS is a lightweight runtime that transforms standard video ads into interactive, dynamic experiences
            without changing your existing ad stack.
          </p>

          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-700">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(79,70,229,1)]" />
              <span>No new players.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(79,70,229,1)]" />
              <span>No disruption to SSAI or programmatic flows.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(79,70,229,1)]" />
              <span>One runtime layer that activates interaction on top of any video.</span>
            </li>
          </ul>

          <h2 className="mt-9 text-[20px] font-extrabold tracking-tight text-slate-900">
            Built for every screen
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            CIS is designed to work everywhere video exists. It adapts to the playback environment and hooks into
            player events: making it player-agnostic and deployment-friendly.
          </p>

          <div className="mt-5 grid gap-4 rounded-[18px] bg-[#F6F7FF] p-5 ring-1 ring-slate-900/5 sm:grid-cols-3">
            <div className="rounded-[14px] bg-white p-4 ring-1 ring-slate-900/5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">CTV OEM’s</p>
              <p className="mt-2 text-[14px] leading-6 text-slate-700">
                Samsung (Tizen), LG (webOS), Roku, Vizio, Android TV, Fire TV
              </p>
            </div>
            <div className="rounded-[14px] bg-white p-4 ring-1 ring-slate-900/5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">web players</p>
              <p className="mt-2 text-[14px] leading-6 text-slate-700">Any JS-based video environment</p>
            </div>
            <div className="rounded-[14px] bg-white p-4 ring-1 ring-slate-900/5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-500">mobile</p>
              <p className="mt-2 text-[14px] leading-6 text-slate-700">iOS and Android apps</p>
            </div>
          </div>

          <h2 className="mt-10 text-[20px] font-extrabold tracking-tight text-slate-900">
            What changes with CIS?
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Nothing in your infrastructure. Everything in your outcomes.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A standard VAST-driven ad becomes:
          </p>

          <ul className="mt-4 grid gap-2 text-[15px] leading-7 text-slate-700 sm:grid-cols-2">
            {["Clickable", "Shoppable", "Exploratory", "Measurable beyond impressions"].map((item) => (
              <li key={item} className="flex gap-2 rounded-[14px] bg-white/70 px-4 py-3 ring-1 ring-slate-900/5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-[15px] leading-7 text-slate-700">
            This unlocks a new layer of intent and engagement signals directly from the viewer.
          </p>

          <h2 className="mt-10 text-[20px] font-extrabold tracking-tight text-slate-900">
            Performance that actually moves the needle
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Across early deployments, CIS has shown:
          </p>

          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-700">
            {[
              "20–30% uplift in engagement rates",
              "Higher completion + interaction overlap",
              "Increased CPM potential through richer formats",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-[15px] leading-7 text-slate-700">
            Instead of guessing intent, you now capture it in real time.
          </p>

          <h2 className="mt-10 text-[20px] font-extrabold tracking-tight text-slate-900">
            Built for each stakeholder
          </h2>

          <div className="mt-4 space-y-4">
            {[
              {
                title: "For Publishers",
                body:
                  "CIS turns existing inventory into interactive inventory without disrupting your stack. Increase yield, retain viewers, and unlock monetization layers on top of your current ad slots.",
                accent: "bg-[rgba(79,70,229,0.10)] text-[rgba(79,70,229,1)]",
              },
              {
                title: "For Ad-Tech Platforms",
                body:
                  "CIS enhances existing demand by adding an interaction layer on top of VAST flows. Same demand, higher value—new formats without rebuilding infrastructure.",
                accent: "bg-[rgba(249,115,22,0.10)] text-[rgba(249,115,22,1)]",
              },
              {
                title: "For Brands & Agencies",
                body:
                  "Convert existing video creatives into performance-driven experiences. Add QR, product exploration, and engagement triggers—without producing new assets from scratch.",
                accent: "bg-[rgba(34,197,94,0.10)] text-[rgba(34,197,94,1)]",
              },
              {
                title: "For Product & Engineering Teams",
                body:
                  "Integration is lightweight. CIS runs as a runtime layer mapped to player events, compatible across OEMs, web, and mobile without major architectural changes.",
                accent: "bg-[rgba(99,102,241,0.10)] text-[rgba(99,102,241,1)]",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[18px] bg-white/70 p-5 ring-1 ring-slate-900/5"
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold ${card.accent}`}>
                    {card.title}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-7 text-slate-700">{card.body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-[20px] font-extrabold tracking-tight text-slate-900">
            The shift ahead
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            CTV doesn’t need more ads. It needs better ones. CIS bridges the gap between reach and interaction,
            turning video into a two-way experience.
          </p>

          <h2 className="mt-10 text-[20px] font-extrabold tracking-tight text-slate-900">
            Final thought
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The infrastructure for streaming is already built. What’s missing is the layer that makes it
            interactive. That’s what Canvas is solving.
          </p>
        </div>
      </section>
    </article>
  );
}

