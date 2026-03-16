"use client";

export function CaseStudyArchitecture() {
  const leftSteps = [
    {
      title: "OTT Streaming Partner",
      subtitle: "Integration kickoff",
      active: false,
    },
    {
      title: "SSAI Ad Server",
      subtitle: "Existing infrastructure",
      active: false,
    },
    {
      title: "Canvas Runtime",
      subtitle: "Lightweight injection",
      active: true,
      pill: "Campaign at a Glance",
    },
    {
      title: "Interactive Overlay",
      subtitle: "Viewer-facing surface",
      active: false,
    },
    {
      title: "Intent Signals Captured",
      subtitle: "Measurable engagement",
      active: false,
    },
  ];

  const rightCards = [
    {
      label: "Partner",
      value: "Major OTT streaming platform",
    },
    {
      label: "Campaign",
      value: "Christmas Holiday Campaign 2024",
    },
    {
      label: "Duration",
      value: "4-week rollout (integration to results)",
    },
    {
      label: "Format",
      value: "Interactive overlay on standard CTV video",
    },
    {
      label: "Interactions",
      value: "QR Code, Learn More, Store Locator, Browse",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(79,70,229,0.06)] px-4 py-1.5 text-xs font-semibold text-[rgba(79,70,229,1)]">
            <span className="relative inline-flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(79,70,229,0.6)]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgba(79,70,229,1)]" />
            </span>
            Campaign at a Glance
          </span>
        </div>

        <h2 className="mt-5 text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.04em] text-slate-900 sm:text-[32px] lg:text-[36px] [font-family:var(--font-display)]">
          How the campaign was built
        </h2>
        <p className="mt-3 text-center text-sm text-slate-600 sm:text-[15px]">
          From integration to live campaign in 4 weeks — here&apos;s how Canvas powered it.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-stretch">
          {/* Left: campaign architecture stack */}
          <div className="rounded-[28px] border border-slate-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
            <div className="border-b border-slate-100 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Campaign Architecture
            </div>
            <div className="divide-y divide-slate-100">
              {leftSteps.map((step) => (
                <div
                  key={step.title}
                  className="relative px-6 py-4.5 sm:px-7 sm:py-5 bg-white"
                >
                  <div className="relative flex flex-col items-center text-center">
                    <p className="text-[13px] font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-0.5 text-[12px] text-slate-500">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: campaign metadata */}
          <div className="space-y-3">
            {rightCards.map((card, index) => (
              <div
                key={card.label}
                className="rounded-[20px] border border-slate-100 bg-white px-5 py-3.5 shadow-[0_18px_45px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        index === 0
                          ? "rgba(79,70,229,1)"
                          : index === 1
                            ? "rgba(129,140,248,1)"
                            : index === 2
                              ? "rgba(56,189,248,1)"
                              : index === 3
                                ? "rgba(245,158,11,1)"
                                : "rgba(34,197,94,1)",
                    }}
                  />
                  <span className="text-[12px] font-medium text-slate-500">
                    {card.label}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] font-medium text-slate-800 sm:text-[14px]">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

