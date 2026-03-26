
import confetti from "canvas-confetti";

export type SvtaConfettiHandle = { cancel: () => void };

const DEFAULT_COLORS = ["#F59E0B", "#A78BFA", "#34D399", "#FB7185", "#38BDF8"];

const DURATION_MS = 4000;
const INTERVAL_MS = 260; // minimal cadence

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function playSvtaConfettiSequence(
  canvas: HTMLCanvasElement,
  anchorEl: HTMLElement,
  options?: { colors?: string[] },
): SvtaConfettiHandle {
  const colors = options?.colors ?? DEFAULT_COLORS;
  const instance = confetti.create(canvas, { resize: true, useWorker: true });

  const canvasRect = canvas.getBoundingClientRect();
  const badgeRect = anchorEl.getBoundingClientRect();

  // Origins are normalized (0..1) in canvas-confetti.
  const badgeLeftX = (badgeRect.left - canvasRect.left) / canvasRect.width;
  const badgeRightX = (badgeRect.right - canvasRect.left) / canvasRect.width;
  const badgeTopY = (badgeRect.top - canvasRect.top) / canvasRect.height;
  const badgeH = badgeRect.height / canvasRect.height;

  // Slightly down from the badge top on both sides.
  const originY = clamp01(badgeTopY + badgeH * 0.15);

  const originLeftX = clamp01(badgeLeftX - 0.05);
  const originRightX = clamp01(badgeRightX + 0.05);

  const endAt = performance.now() + DURATION_MS;
  const timer = window.setInterval(() => {
    const now = performance.now();
    if (now >= endAt) {
      window.clearInterval(timer);
      instance.reset();
      return;
    }

    // Minimal particles, inward angles from both sides.
    instance({
      particleCount: 5,
      spread: 55,
      startVelocity: 22,
      gravity: 0.9,
      ticks: 140,
      scalar: 0.9,
      colors,
      origin: { x: originLeftX, y: originY },
      angle: 60,
    });

    instance({
      particleCount: 5,
      spread: 55,
      startVelocity: 22,
      gravity: 0.9,
      ticks: 140,
      scalar: 0.9,
      colors,
      origin: { x: originRightX, y: originY },
      angle: 120,
    });
  }, INTERVAL_MS);

  return {
    cancel: () => {
      window.clearInterval(timer);
      instance.reset();
    },
  };
}
