"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Token = { text: string; className?: string };

const TS_KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "default",
  "const",
  "let",
  "var",
  "function",
  "return",
  "new",
  "class",
  "extends",
  "implements",
  "type",
  "interface",
  "as",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "try",
  "catch",
  "finally",
  "throw",
  "async",
  "await",
  "true",
  "false",
  "null",
  "undefined",
]);

function highlightTs(text: string): Token[] {
  const tokens: Token[] = [];
  const re =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b|[{}()[\].,;:+\-/*=<>!?|&^~%])/g;

  let last = 0;
  for (const m of text.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > last) tokens.push({ text: text.slice(last, i) });

    const t = m[0];
    if (t.startsWith("//") || t.startsWith("/*")) {
      tokens.push({ text: t, className: "text-white/35" });
    } else if (t.startsWith("\"") || t.startsWith("'") || t.startsWith("`")) {
      tokens.push({ text: t, className: "text-[#F97316]" });
    } else if (/^\d/.test(t)) {
      tokens.push({ text: t, className: "text-amber-200/90" });
    } else if (/^[A-Za-z_$]/.test(t)) {
      tokens.push({
        text: t,
        className: TS_KEYWORDS.has(t) ? "text-violet-300/95" : "text-sky-200/90",
      });
    } else {
      tokens.push({ text: t, className: "text-white/65" });
    }

    last = i + t.length;
  }
  if (last < text.length) tokens.push({ text: text.slice(last) });
  return tokens;
}

export type TypewriterCodeWindowProps = {
  title?: string;
  tabs?: string[];
  languageLabel?: string;
  footerLeft?: string;
  footerRight?: string;
  code: string;
  codeViewportHeightPx?: number;
  typingMsPerChar?: number;
  startDelayMs?: number;
  startOnVisible?: boolean;
  className?: string;
};

export function TypewriterCodeWindow({
  title = "canvas-runtime.ts",
  tabs = ["canvas-runtime.ts", "ssai.config.ts"],
  languageLabel = "TypeScript",
  footerLeft = "Canvas SDK v2.4.1",
  footerRight = "0 errors • 0 warnings",
  code,
  codeViewportHeightPx = 360,
  typingMsPerChar = 14,
  startDelayMs = 250,
  startOnVisible = true,
  className,
}: TypewriterCodeWindowProps) {
  const full = useMemo(() => code.replace(/\r\n/g, "\n"), [code]);
  const totalLines = useMemo(() => Math.max(1, full.split("\n").length), [full]);
  const [idx, setIdx] = useState(0);
  const [started, setStarted] = useState(!startOnVisible);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startOnVisible) return;
    if (started) return;
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnVisible, started]);

  useEffect(() => {
    if (!started) return;
    const t0 = window.setTimeout(() => {
      const t = window.setInterval(() => {
        setIdx((i) => (i >= full.length ? i : i + 1));
      }, typingMsPerChar);
      return () => window.clearInterval(t);
    }, startDelayMs);
    return () => window.clearTimeout(t0);
  }, [full.length, started, startDelayMs, typingMsPerChar]);

  const visible = full.slice(0, idx);
  const highlighted = useMemo(() => highlightTs(visible), [visible]);

  return (
    <div
      ref={rootRef}
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950/95 to-slate-900/95 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.85)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="min-w-0 text-xs font-semibold text-white/80">{title}</div>
        <div className="text-[10px] font-semibold text-emerald-400/90">READY</div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/40 px-3 py-2">
        {tabs.map((t) => {
          const active = t === title;
          return (
            <div
              key={t}
              className={[
                "rounded-lg px-2 py-1 text-[11px] font-medium",
                active ? "bg-white/10 text-white/90" : "text-white/50",
              ].join(" ")}
            >
              {t}
            </div>
          );
        })}
      </div>

      {/* Code */}
      <section
        className="overflow-hidden"
        style={{ height: codeViewportHeightPx }}
        aria-label="Code viewport"
      >
        <div className="grid grid-cols-[36px_1fr]">
          <div className="select-none border-r border-white/10 bg-slate-950/35 px-2 py-3 text-right text-[11px] leading-5 text-white/30">
            {Array.from({ length: totalLines }, (_, i) => (
              <div key={`ln-${i + 1}`}>{i + 1}</div>
            ))}
          </div>
          <pre className="relative px-4 py-3 text-[12px] leading-5">
            <code>
              {highlighted.map((t, i) => (
                <span key={`${i}-${t.text}`} className={t.className}>
                  {t.text}
                </span>
              ))}
              <span className="inline-block h-4 w-[8px] translate-y-[2px] animate-[caret_1s_steps(1)_infinite] bg-amber-300/90 align-baseline" />
            </code>
          </pre>
        </div>
      </section>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#F97316] px-4 py-2">
        <div className="text-[11px] font-semibold text-white/95">{footerLeft}</div>
        <div className="text-[11px] font-semibold text-white/95">{languageLabel}</div>
        <div className="text-[11px] font-semibold text-white/95">{footerRight}</div>
      </div>
    </div>
  );
}

