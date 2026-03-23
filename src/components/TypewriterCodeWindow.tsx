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
  showTooltip?: boolean;
  tooltipText?: string;
  codeFontSize?: number;
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
  showTooltip = false,
  tooltipText = "Click to view code",
  codeFontSize = 12,
}: TypewriterCodeWindowProps) {
  const full = useMemo(() => code.replace(/\r\n/g, "\n"), [code]);
  const totalLines = useMemo(() => Math.max(1, full.split("\n").length), [full]);
  const [idx, setIdx] = useState(0);
  const [started, setStarted] = useState(!startOnVisible && !showTooltip);
  const [showingTooltip, setShowingTooltip] = useState(showTooltip);
  const [codeComplete, setCodeComplete] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!startOnVisible && !showTooltip) return;
    if (started && !showTooltip) return;
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          if (!showTooltip) {
            setStarted(true);
          }
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [startOnVisible, started, showTooltip]);

  useEffect(() => {
    if (!started) return;
    const t0 = window.setTimeout(() => {
      const t = window.setInterval(() => {
        setIdx((i) => {
          if (i >= full.length) {
            clearInterval(t);
            setCodeComplete(true);
            // Show code for 6 seconds then return to tooltip
            if (showTooltip) {
              timeoutRef.current = setTimeout(() => {
                setShowingTooltip(true);
                setIdx(0);
                setCodeComplete(false);
                setStarted(false);
              }, 6000);
            }
            return i;
          }
          return i + 1;
        });
      }, typingMsPerChar);
      return () => window.clearInterval(t);
    }, startDelayMs);
    return () => {
      window.clearTimeout(t0);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [full.length, started, startDelayMs, typingMsPerChar, showTooltip]);

  const visible = full.slice(0, idx);
  const highlighted = useMemo(() => highlightTs(visible), [visible]);

  const handleClick = () => {
    if (showingTooltip) {
      setShowingTooltip(false);
      setStarted(true);
    }
  };

  return (
    <div
      ref={rootRef}
      onClick={handleClick}
      className={[
        "relative overflow-hidden rounded-2xl border border-white/8 bg-slate-950 shadow-lg",
        showTooltip ? "cursor-pointer" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Tooltip Overlay */}
      {showingTooltip && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-2xl">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-0.5 group-hover:scale-110 transition-transform">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white/90">{tooltipText}</p>
          </div>
        </div>
      )}

      {/* Title bar */}
      <div className="flex items-center justify-between gap-3 border-b border-white/8 bg-slate-950/40 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-500/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="text-xs font-semibold text-white/60">{title}</div>
        <div className="flex items-center gap-1.5 text-[9px] font-semibold text-emerald-400/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          READY
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-slate-950/20 px-3 py-1.5">
        {tabs.map((t) => {
          const active = t === title;
          return (
            <div
              key={t}
              className={[
                "rounded-md px-2 py-1 text-[10px] font-medium transition-colors",
                active ? "bg-white/8 text-white/80" : "text-white/40",
              ].join(" ")}
            >
              {t}
            </div>
          );
        })}
      </div>

      {/* Code */}
      <section
        className="overflow-hidden bg-slate-950/50"
        style={{ height: codeViewportHeightPx }}
        aria-label="Code viewport"
      >
        <div className="flex h-full">
          <div className="select-none border-r border-white/5 bg-slate-950/70 px-3 text-right text-[9px] font-mono leading-[1.6] text-white/25" style={{ paddingTop: '12px', paddingBottom: '12px', minWidth: '40px' }}>
            {Array.from({ length: totalLines }, (_, i) => (
              <div key={`ln-${i + 1}`} style={{ height: `${codeFontSize * 1.6}px` }}>{i + 1}</div>
            ))}
          </div>
          <pre className="flex-1 m-0 px-4 font-mono" style={{ fontSize: `${codeFontSize}px`, lineHeight: 1.6, paddingTop: '12px', paddingBottom: '12px', backgroundColor: 'transparent' }}>
            <code className="text-white/80">
              {highlighted.map((t, i) => (
                <span key={`${i}-${t.text}`} className={t.className}>
                  {t.text}
                </span>
              ))}
              {!codeComplete && (
                <span className="inline-block w-[7px] animate-[caret_1s_steps(1)_infinite] bg-amber-300/90" style={{ height: `${codeFontSize}px` }} />
              )}
            </code>
          </pre>
        </div>
      </section>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 border-t border-white/8 bg-[#F97316] px-4 py-2 text-[10px] font-semibold text-white/90">
        <div>{footerLeft}</div>
        <div>{languageLabel}</div>
        <div>{footerRight}</div>
      </div>
    </div>
  );
}

