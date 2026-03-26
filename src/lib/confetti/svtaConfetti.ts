/**
 * Lightweight canvas confetti for the SVTA badge (no external library).
 * Single RAF loop; spawns match the previous 3× (0/333/666ms per second) cadence.
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  rot: number;
  vr: number;
  w: number;
  h: number;
  color: string;
  life: number;
};

const DEFAULT_COLORS = ["#F59E0B", "#A78BFA", "#34D399", "#FB7185", "#38BDF8"];

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
  ctx.fill();
}

function resizeCanvas(canvas: HTMLCanvasElement) {
  const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.floor(rect.width));
  const h = Math.max(1, Math.floor(rect.height));
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

function spawnSideBursts(
  particles: Particle[],
  leftX: number,
  rightX: number,
  originY: number,
  targetX: number,
  colors: string[],
) {
  const spawn = (originX: number, side: "left" | "right") => {
    for (let i = 0; i < 14; i++) {
      const dir = side === "left" ? 1 : -1;
      // We want a strong horizontal travel that converges to the badge center.
      // Keep vertical motion subtle so it reads as "inward fall", not "down rain".
      const vx = dir * (3.8 + Math.random() * 3.4);
      // Positive vy = downwards in canvas coordinates.
      const vy = 1.0 + Math.random() * 1.6;

      particles.push({
        x: originX,
        y: originY,
        vx,
        vy,
        targetX,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.55,
        w: 4 + Math.random() * 4,
        h: 2 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)] ?? DEFAULT_COLORS[0],
        life: 1,
      });
    }
  };

  spawn(leftX, "left");
  spawn(rightX, "right");
}

export type SvtaConfettiHandle = { cancel: () => void };

const OFFSETS_IN_CYCLE_MS = [0, 333, 666] as const;
const CYCLE_MS = 1000;
const MAX_DURATION_MS = 10_000;

export function playSvtaConfettiSequence(
  canvas: HTMLCanvasElement,
  anchorEl: HTMLElement,
  options?: { colors?: string[] },
): SvtaConfettiHandle {
  const colors = options?.colors ?? DEFAULT_COLORS;
  const particles: Particle[] = [];
  let cancelled = false;
  let raf = 0;
  const spawned = new Set<number>();
  let t0 = 0;
  let lastW = 0;
  let lastH = 0;
  let ctxRef: CanvasRenderingContext2D | null = null;
  let cssW = 1;
  let cssH = 1;

  const ensureContext = () => {
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.floor(rect.width));
    const h = Math.max(1, Math.floor(rect.height));
    if (w !== lastW || h !== lastH || !ctxRef) {
      const sized = resizeCanvas(canvas);
      ctxRef = sized.ctx;
      cssW = sized.w;
      cssH = sized.h;
      lastW = w;
      lastH = h;
    }
    return { ctx: ctxRef, w: cssW, h: cssH };
  };

  const step = (now: number) => {
    if (cancelled) return;
    if (!t0) t0 = now;
    const elapsed = now - t0;

    const { ctx, w, h } = ensureContext();
    if (!ctx) return;

    const badgeRect = anchorEl.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const badgeLeft = badgeRect.left - canvasRect.left;
    const badgeRight = badgeRect.right - canvasRect.left;
    const badgeCenterX = badgeLeft + badgeRect.width * 0.5;
    const outsideOffset = Math.max(34, badgeRect.width * 0.14);
    // Emit from outside edges of the badge: left-of-div and right-of-div.
    const leftX = Math.max(0, Math.min(w, badgeLeft - outsideOffset));
    const rightX = Math.max(0, Math.min(w, badgeRight + outsideOffset));
    // Start above the badge so the "falling" reads from the top.
    const originY = Math.max(
      0,
      Math.min(h, badgeRect.top - canvasRect.top - badgeRect.height * 0.55),
    );

    // Repeat the same 3-burst pattern every second for ~10 seconds.
    // This keeps both sides symmetric and guarantees the right side is visible.
    const maxCycles = Math.ceil(MAX_DURATION_MS / CYCLE_MS) + 1;
    for (let cycle = 0; cycle < maxCycles; cycle++) {
      for (const offset of OFFSETS_IN_CYCLE_MS) {
        const t = cycle * CYCLE_MS + offset;
        if (t > MAX_DURATION_MS) continue;
        if (elapsed >= t && !spawned.has(t)) {
          spawned.add(t);
          spawnSideBursts(particles, leftX, rightX, originY, badgeCenterX, colors);
        }
      }
    }

    const gravity = 0.16;
    const drag = 0.992;
    const pull = 0.018; // horizontal attraction strength toward badge center

    ctx.clearRect(0, 0, w, h);

    // Subtle shadow = more premium confetti feel
    ctx.shadowColor = "rgba(15,23,42,0.16)";
    ctx.shadowBlur = 8;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (!p) continue;
      // Pull inward horizontally toward the badge center line
      p.vx += (p.targetX - p.x) * pull * 0.01;
      // Keep a little gravity so pieces settle, but not a vertical rain.
      p.vy += gravity;
      p.vx *= drag;
      p.vy *= drag;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life -= 0.0042;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
      ctx.fillStyle = p.color;
      drawRoundedRect(ctx, -p.w / 2, -p.h / 2, p.w, p.h, 2);
      ctx.restore();
    }

    if (elapsed < MAX_DURATION_MS || particles.length > 0) {
      raf = requestAnimationFrame(step);
    }
  };

  raf = requestAnimationFrame(step);

  return {
    cancel: () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      const c = canvas.getContext("2d");
      if (c) {
        const rect = canvas.getBoundingClientRect();
        c.clearRect(0, 0, rect.width, rect.height);
      }
    },
  };
}
