"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type CursorMode = "default" | "hover" | "media" | "play" | "explore";

type PromptItem = {
  id: string;
  label: string;
};

type AnchorPoint = {
  x: number;
  y: number;
};

type InteractionPanel =
  | {
    type: "qr";
    title: string;
    description: string;
    imageUrl: string;
  }
  | {
    type: "poll";
    title: string;
    question: string;
    options: string[];
  }
  | {
    type: "explore-links";
    title: string;
    links: Array<{
      id: "macys" | "ourplace";
      label: string;
      url: string;
      iconLetter: string;
    }>;
  }
  | {
    type: "info";
    title: string;
    description: string;
    cta?: string;
  };

const CURSOR_MODES: CursorMode[] = ["default", "hover", "media", "play", "explore"];

function isCursorMode(value: unknown): value is CursorMode {
  return typeof value === "string" && (CURSOR_MODES as string[]).includes(value);
}

function getClosest<T extends Element>(el: Element | null, selector: string): T | null {
  if (!el) return null;
  const maybe = (el as Element).closest?.(selector) as T | null;
  return maybe ?? null;
}

function getInteractiveLabel(el: HTMLElement): string | null {
  // Optional override for specific elements.
  const override = el.getAttribute("data-cursor-label");
  if (override) return override;

  const tag = el.tagName.toLowerCase();
  if (tag === "a") return "Open";
  if (tag === "button") return "View";
  if (el.getAttribute("role") === "button") return "View";

  return "Explore";
}

export function CanvasCursor() {
  const cursorElRef = useRef<HTMLDivElement | null>(null);

  const [mode, setMode] = useState<CursorMode>("default");
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const [promptZone, setPromptZone] = useState<string | null>(null);
  const [promptItems, setPromptItems] = useState<PromptItem[]>([]);
  const [promptVisible, setPromptVisible] = useState(false);
  const [promptAnchor, setPromptAnchor] = useState<AnchorPoint | null>(null);
  const [activePanel, setActivePanel] = useState<InteractionPanel | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [panelAnchor, setPanelAnchor] = useState<AnchorPoint | null>(null);
  const [pollVote, setPollVote] = useState<string | null>(null);

  const rafIdRef = useRef<number | null>(null);
  const reduceMotionRef = useRef(false);

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const lastElementRef = useRef<Element | null>(null);
  const lastComputedElementRef = useRef<Element | null>(null);
  const lastCursorOverrideLabelRef = useRef<string | null>(null);
  const lastInteractiveOverrideLabelRef = useRef<string | null>(null);

  const prevRichZoneRef = useRef<string | null>(null);
  const suppressPromptRef = useRef(false);
  const promptTimeoutRef = useRef<number | null>(null);
  const promptCloseTimeoutRef = useRef<number | null>(null);
  const promptHoveringRef = useRef(false);
  const panelHoveringRef = useRef(false);
  const inRichZoneRef = useRef(false);

  const prompts = useMemo(() => {
    return {
      hero: [
        { id: "qr", label: "QR Scan" },
        { id: "explore", label: "Explore" },
        { id: "poll", label: "Poll" },
      ],
      demo: [
        { id: "qr", label: "QR" },
        { id: "product", label: "Product Card" },
        { id: "offer", label: "Offer Reveal" },
        { id: "poll", label: "Poll" },
      ],
      "case-study": [
        { id: "interaction", label: "See Interaction" },
        { id: "signals", label: "View Signals" },
        { id: "result", label: "Open Result" },
      ],
    } as const;
  }, []);

  const hidePrompt = useCallback(() => {
    if (promptHoveringRef.current || panelHoveringRef.current) return;
    setPromptVisible(false);
    if (promptCloseTimeoutRef.current) window.clearTimeout(promptCloseTimeoutRef.current);
    promptCloseTimeoutRef.current = window.setTimeout(() => {
      setPromptZone(null);
      setPromptItems([]);
    }, 220);
  }, []);

  const schedulePromptAutoHide = useCallback(() => {
    if (promptTimeoutRef.current) window.clearTimeout(promptTimeoutRef.current);
    promptTimeoutRef.current = window.setTimeout(() => {
      hidePrompt();
    }, 1800);
  }, [hidePrompt]);

  // Stable indirection so hook dependency arrays don't change length during HMR.
  const schedulePromptAutoHideRef = useRef(schedulePromptAutoHide);
  schedulePromptAutoHideRef.current = schedulePromptAutoHide;

  const showPromptForZone = useCallback(
    (zone: "hero" | "demo" | "case-study", zoneRect?: DOMRect) => {
      if (suppressPromptRef.current) return;

      const items = prompts[zone];
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Default anchor: follow cursor, clamped to viewport.
      let px = Math.min(Math.max(currentRef.current.x + 24, 24), vw - 220);
      let py = Math.min(Math.max(currentRef.current.y - 70, 24), vh - 140);

      // For hero video, keep the prompt inside the hovered media box (no overflow outside it).
      if (zoneRect && zone === "hero") {
        const margin = 8;
        // Conservative sizing for the prompt so we can clamp top/left safely.
        const promptW = 235;
        const promptH = 44;

        const minX = zoneRect.left + margin;
        const minY = zoneRect.top + margin;
        const maxX = zoneRect.right - promptW - margin;
        const maxY = zoneRect.bottom - promptH - margin;

        // If the zone is too small, fall back to the minimum anchor.
        px = maxX >= minX ? Math.min(Math.max(px, minX), maxX) : minX;
        py = maxY >= minY ? Math.min(Math.max(py, minY), maxY) : minY;
      }

      setPromptZone(zone);
      setPromptItems(items.slice(0, zone === "demo" ? 3 : 3));
      setPromptAnchor({ x: px, y: py });
      setPromptVisible(true);
      setPanelAnchor({ x: Math.min(px + 8, vw - 280), y: Math.min(py + 52, vh - 220) });

      if (promptCloseTimeoutRef.current) window.clearTimeout(promptCloseTimeoutRef.current);
      schedulePromptAutoHideRef.current();
    },
    [prompts],
  );

  const setCursorDomVariables = useCallback((x: number, y: number) => {
    const el = cursorElRef.current;
    if (!el) return;
    el.style.setProperty("--x", String(x));
    el.style.setProperty("--y", String(y));
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    reduceMotionRef.current = reduced;

    // Desktop-only: hide native cursor and render custom one.
    const mql = window.matchMedia?.("(pointer:fine) and (hover:hover)");
    if (!mql?.matches) return;

    // Gate native cursor hiding on our own mount (avoid "cursor: none" flashes).
    document.documentElement.dataset.canvasCursorEnabled = "true";

    // Show immediately (avoid "cursor none" until the first pointer move).
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    targetRef.current.x = x;
    targetRef.current.y = y;
    currentRef.current.x = x;
    currentRef.current.y = y;
    if (cursorElRef.current) {
      cursorElRef.current.style.setProperty("--x", String(x));
      cursorElRef.current.style.setProperty("--y", String(y));
    }
    setVisible(true);

    return () => {
      delete document.documentElement.dataset.canvasCursorEnabled;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia?.("(pointer:fine) and (hover:hover)");
    if (!mql?.matches) return;

    const onBlur = () => setVisible(false);
    const onScroll = () => {
      hidePrompt();
      setPanelVisible(false);
    };

    window.addEventListener("blur", onBlur);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onPointerMove = (event: PointerEvent) => {
      // pointerType is sometimes unreliable; we gate via matchMedia above.
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      lastElementRef.current = event.target as Element | null;
      setVisible(true);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const tick = () => {
      const el = cursorElRef.current;
      if (el) {
        const { x: tx, y: ty } = targetRef.current;
        const { x: cx, y: cy } = currentRef.current;
        const t = reduceMotionRef.current ? 1 : 0.18;
        const nx = cx + (tx - cx) * t;
        const ny = cy + (ty - cy) * t;
        currentRef.current.x = nx;
        currentRef.current.y = ny;
        setCursorDomVariables(nx, ny);
      }

      const nextEl = lastElementRef.current;
      const cursorOverrideEl = nextEl
        ? getClosest<HTMLElement>(nextEl, "[data-cursor]")
        : null;
      const cursorOverrideLabel = cursorOverrideEl?.dataset.cursorLabel ?? null;
      const interactiveElForOverride = nextEl
        ? getClosest<HTMLElement>(
          nextEl,
          "a[href], button, [role='button'], input, textarea, select, summary, [data-clickable='true']",
        )
        : null;
      const interactiveOverrideLabel = interactiveElForOverride?.getAttribute("data-cursor-label") ?? null;

      if (
        nextEl &&
        (nextEl !== lastComputedElementRef.current ||
          cursorOverrideLabel !== lastCursorOverrideLabelRef.current ||
          interactiveOverrideLabel !== lastInteractiveOverrideLabelRef.current)
      ) {
        lastComputedElementRef.current = nextEl;
        lastCursorOverrideLabelRef.current = cursorOverrideLabel;
        lastInteractiveOverrideLabelRef.current = interactiveOverrideLabel;

        const cursorOverride = getClosest<HTMLElement>(nextEl, "[data-cursor]");
        const zoneEl = getClosest<HTMLElement>(nextEl, "[data-interaction-zone]");
        const zone = zoneEl?.dataset.interactionZone ?? null;

        // Track whether the pointer is currently hovering our own floating UI.
        // This avoids relying on mouse events on non-interactive elements.
        const promptHoverNow = !!getClosest<HTMLElement>(nextEl, "[data-cursor-prompt]");
        const panelHoverNow = !!getClosest<HTMLElement>(nextEl, "[data-cursor-panel]");
        const promptHoverWas = promptHoveringRef.current;
        const panelHoverWas = panelHoveringRef.current;

        if ((promptHoverNow && !promptHoverWas) || (panelHoverNow && !panelHoverWas)) {
          if (promptTimeoutRef.current) window.clearTimeout(promptTimeoutRef.current);
        }

        promptHoveringRef.current = promptHoverNow;
        panelHoveringRef.current = panelHoverNow;

        let nextMode: CursorMode = "default";
        let nextLabel: string | null = null;

        // 1) Explicit cursor mode override.
        if (cursorOverride) {
          const override = cursorOverride.dataset.cursor;
          if (isCursorMode(override)) {
            nextMode = override;
            nextLabel = cursorOverride.dataset.cursorLabel ?? null;
          }
        } else if (zone) {
          // 2) Zone-based modes.
          switch (zone) {
            case "hero":
              nextMode = "media";
              break;
            case "demo":
              nextMode = "explore";
              break;
            case "formats":
              nextMode = "media";
              break;
            case "case-study":
              nextMode = "explore";
              break;
            case "play":
            case "play-grid":
              nextMode = "play";
              break;
            default:
              nextMode = "default";
          }
        } else {
          // 3) Clickable/interactive hover fallback.
          const interactiveEl = getClosest<HTMLElement>(nextEl, "a[href], button, [role='button'], input, textarea, select, summary, [data-clickable='true']");
          if (interactiveEl) {
            nextMode = "hover";
            nextLabel = getInteractiveLabel(interactiveEl);
          }
        }

        // No floating text labels for ad-format cards; keep visuals clean.
        if (zone === "formats") nextLabel = null;

        // Rich prompt triggers: show only on enter.
        let nextRichZone: string | null = null;
        if (zone === "hero" || zone === "demo" || zone === "case-study") nextRichZone = zone;
        inRichZoneRef.current = nextRichZone !== null || promptHoveringRef.current || panelHoveringRef.current;

        // If the prompt/panel was hovered and the pointer left it while still in the same rich zone,
        // restart the auto-hide timer (previously done via mouse events).
        if (
          nextRichZone &&
          promptVisible &&
          ((promptHoverWas && !promptHoverNow && !panelHoverNow) ||
            (panelHoverWas && !panelHoverNow && !promptHoverNow))
        ) {
          schedulePromptAutoHideRef.current();
        }

        if (nextRichZone !== prevRichZoneRef.current) {
          // Leaving a rich zone.
          if (!nextRichZone) {
            if (promptHoveringRef.current || panelHoveringRef.current) {
              rafIdRef.current = window.requestAnimationFrame(tick);
              return;
            }
            prevRichZoneRef.current = null;
            suppressPromptRef.current = false;
            hidePrompt();
            setPanelVisible(false);
          } else {
            // Entering a rich zone.
            prevRichZoneRef.current = nextRichZone;
            suppressPromptRef.current = false;
            hidePrompt();

            // Delay slightly so it feels like a "micro interaction", not a jumpy tooltip.
            const zoneRectSnapshot = zoneEl?.getBoundingClientRect();
            window.setTimeout(() => {
              if (!prevRichZoneRef.current) return;
              const z = nextRichZone as "hero" | "demo" | "case-study";
              if (prevRichZoneRef.current !== z) return;
              showPromptForZone(z, zoneRectSnapshot);
            }, 120);
          }
        } else if (nextRichZone && !promptVisible && !promptHoveringRef.current && !panelHoveringRef.current) {
          // Re-show prompt if user is still in a rich zone and it faded.
          showPromptForZone(
            nextRichZone as "hero" | "demo" | "case-study",
            zoneEl?.getBoundingClientRect(),
          );
        }

        // Only commit React state when it changes.
        setMode((prev) => (prev === nextMode ? prev : nextMode));
        setLabel((prev) => (prev === nextLabel ? prev : nextLabel));
      }

      rafIdRef.current = window.requestAnimationFrame(tick);
    };

    rafIdRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("blur", onBlur);
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
      if (promptTimeoutRef.current) window.clearTimeout(promptTimeoutRef.current);
      if (promptCloseTimeoutRef.current) window.clearTimeout(promptCloseTimeoutRef.current);
    };
  }, [hidePrompt, promptVisible, setCursorDomVariables, showPromptForZone]);

  useEffect(() => {
    if (!promptVisible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        suppressPromptRef.current = true;
        hidePrompt();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [promptVisible, hidePrompt]);

  const onPromptClick = (id: string) => {
    const zone = promptZone;
    if (!zone) return;

    const buildPanel = (): InteractionPanel => {
      if (id === "qr") {
        return {
          type: "qr",
          title: "Scan QR",
          description: zone === "demo" ? "Open demo offer on mobile." : "Open interactive experience on mobile.",
          imageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fcanvas-tv.com%2Fdemo",
        };
      }

      if (id === "poll") {
        return {
          type: "poll",
          title: "Quick Poll",
          question: "Which interaction would you use first?",
          options: ["QR Scan", "Product Explore", "Offer Reveal", "Save for Later"],
        };
      }

      if (id === "offer") {
        return {
          type: "info",
          title: "Offer Reveal",
          description: "Exclusive 20% launch promo unlocked for this session.",
          cta: "Apply Offer",
        };
      }

      if (id === "product") {
        return {
          type: "info",
          title: "Product Card",
          description: "View specs, pricing, and key differentiators inline.",
          cta: "Open Card",
        };
      }

      if (id === "signals") {
        return {
          type: "info",
          title: "View Signals",
          description: "QR, CTA, and dwell interactions captured in real time.",
          cta: "Open Signals",
        };
      }

      if (id === "result") {
        return {
          type: "info",
          title: "Open Result",
          description: "See full campaign outcomes and conversion lift details.",
          cta: "Open Results",
        };
      }

      if (id === "explore") {
        return {
          type: "explore-links",
          title: "Explore",
          links: [
            {
              id: "macys",
              label: "Macy's",
              url: "https://www.macys.com/",
              iconLetter: "M",
            },
            {
              id: "ourplace",
              label: "Our Place",
              url: "https://fromourplace.com/",
              iconLetter: "O",
            },
          ],
        };
      }

      return {
        type: "info",
        title: id === "interaction" ? "See Interaction" : "Explore",
        description: "Dive deeper into this interactive touchpoint.",
        cta: "Explore",
      };
    };

    setActivePanel(buildPanel());
    setPollVote(null);
    setPanelVisible(true);
    // For the Explore destination picker, keep the prompt buttons out of the way.
    setPromptVisible(id !== "explore");
    schedulePromptAutoHideRef.current();
  };

  return (
    <>
      <div
        ref={cursorElRef}
        className="canvas-cursor"
        data-visible={visible ? "true" : "false"}
        data-mode={mode}
        aria-hidden="true"
      >
        <div className="canvas-cursor__dot" />
        <div className="canvas-cursor__ring" />

        {label && !promptVisible && (mode === "hover" || mode === "media") && (
          <div className="canvas-cursor__label">
            <span>{label}</span>
          </div>
        )}
      </div>

      {promptZone && promptAnchor && (
        <section
          className={`canvas-cursor__prompt canvas-cursor__prompt--${promptZone}`}
          data-cursor-prompt="true"
          data-visible={promptVisible ? "true" : "false"}
          style={{ left: promptAnchor.x, top: promptAnchor.y }}
        >
          <div className="canvas-cursor__promptInner">
            {promptItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="canvas-cursor__promptBtn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPromptClick(item.id);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {activePanel && panelAnchor && (
        <section
          className={`canvas-cursor__panel canvas-cursor__panel--${activePanel.type}`}
          data-cursor-panel="true"
          data-visible={panelVisible ? "true" : "false"}
          style={{ left: panelAnchor.x, top: panelAnchor.y }}
        >
          <div className="canvas-cursor__panelInner">
            {activePanel.type === "qr" ? (
              <>
                <p className="canvas-cursor__panelTitle">{activePanel.title}</p>
                <p className="canvas-cursor__panelText">{activePanel.description}</p>
                <img src={activePanel.imageUrl} alt="QR code" className="canvas-cursor__qrImage" />
              </>
            ) : null}

            {activePanel.type === "poll" ? (
              <>
                <p className="canvas-cursor__panelTitle">{activePanel.title}</p>
                {pollVote ? (
                  <p className="canvas-cursor__panelText">
                    Thanks for voting. You picked <strong>{pollVote}</strong> — this helps us tune the interactive flow.
                  </p>
                ) : (
                  <>
                    <p className="canvas-cursor__panelText">{activePanel.question}</p>
                    <div className="canvas-cursor__pollActions">
                      {activePanel.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className="canvas-cursor__pollBtn"
                          onClick={() => setPollVote(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : null}

            {activePanel.type === "explore-links" ? (
              <>
                <p className="canvas-cursor__panelTitle">{activePanel.title}</p>
                <p className="canvas-cursor__panelText">Choose a destination</p>
                <div className="canvas-cursor__pollActions">
                  {activePanel.links.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      className="canvas-cursor__pollBtn"
                      aria-label={`Open ${link.label}`}
                      onClick={() => {
                        window.open(link.url, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
                          <defs>
                            <linearGradient id={`g-${link.id}`} x1="0" y1="0" x2="32" y2="32">
                              <stop offset="0" stopColor="rgba(129, 140, 248, 0.9)" />
                              <stop offset="1" stopColor="rgba(249, 115, 22, 0.85)" />
                            </linearGradient>
                          </defs>
                          <circle cx="16" cy="16" r="14" fill="url(#g-${link.id})" opacity="0.18" />
                          <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(255,255,255,0.35)" />
                          <text
                            x="16"
                            y="20.5"
                            textAnchor="middle"
                            fontSize="14"
                            fontWeight="800"
                            fill="rgba(255, 255, 255, 0.92)"
                            fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
                          >
                            {link.iconLetter}
                          </text>
                        </svg>
                        <span>{link.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </>
            ) : null}

            {activePanel.type === "info" ? (
              <>
                <p className="canvas-cursor__panelTitle">{activePanel.title}</p>
                <p className="canvas-cursor__panelText">{activePanel.description}</p>
                {activePanel.cta ? (
                  <button type="button" className="canvas-cursor__pollBtn">
                    {activePanel.cta}
                  </button>
                ) : null}
              </>
            ) : null}
          </div>
        </section>
      )}
    </>
  );
}

