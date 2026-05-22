// ─── Parameters ───────────────────────────────────────────
const GRID_SIZE        = 54;
const DOT_RADIUS       = 1.5;
const INFLUENCE_RADIUS = 180;   // repulsion / displacement range
const GLOW_RADIUS      = 260;   // illumination range (larger than repulsion)
const REPULSION_FORCE  = 0.08;
const RETURN_SPEED     = 0.14;
const MAX_HALO_EXTRA   = 2;     // halo ring: extra px beyond DOT_RADIUS
const HALO_ALPHA_MAX   = 0.08;  // halo ring: peak alpha at closest dot

// ─── Theme-aware colors ───────────────────────────────────
function buildColors(isLight: boolean) {
  return {
    dot: isLight ? 'rgba(50, 60, 180, 0.28)' : 'rgba(108, 126, 255, 0.18)',
    glow: isLight
      ? (e: number) => {
          const r = (50  + e *  10) | 0;
          const g = (60  - e *  20) | 0;
          const b = (180 - e *  60) | 0;
          const a = +(0.28 + e * 0.62).toFixed(2);
          return `rgba(${r},${g},${b},${a})`;
        }
      : (e: number) => {
          const r = (108 + e * 107) | 0;
          const g = (126 + e *  94) | 0;
          const a = +(0.18 + e * 0.82).toFixed(2);
          return `rgba(${r},${g},255,${a})`;
        },
    halo: isLight
      ? (a: number) => `rgba(50,60,180,${a.toFixed(2)})`
      : (a: number) => `rgba(180,200,255,${a.toFixed(2)})`,
  };
}

interface Dot {
  bx: number; by: number;
  cx: number; cy: number;
}

// Pre-computed squared radii
const GLOW_R2  = GLOW_RADIUS      * GLOW_RADIUS;
const INF_R2   = INFLUENCE_RADIUS * INFLUENCE_RADIUS;
// Cap the rAF loop to ~60 fps for consistent physics across high-refresh displays
const FRAME_MIN = 1000 / 60;

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

export function initCanvas(): void {
  let isLight = document.documentElement.dataset.theme === 'light';
  let colors  = buildColors(isLight);

  const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  const ctx    = canvas.getContext('2d')!;

  let dots:   Dot[]   = [];
  let mouse   = { x: -9999, y: -9999 };
  let rafId   = 0;
  let running = false;
  let lastMs  = 0;

  // Reusable per-frame glow buffers — cleared by resetting .length
  const glowDots: Dot[]    = [];
  const glowEase: number[] = [];

  function buildGrid() {
    dots = [];
    const cols = Math.ceil(canvas.width  / GRID_SIZE) + 1;
    const rows = Math.ceil(canvas.height / GRID_SIZE) + 1;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          bx: col * GRID_SIZE, by: row * GRID_SIZE,
          cx: col * GRID_SIZE, cy: row * GRID_SIZE,
        });
      }
    }
  }

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    buildGrid();
    startLoop();
  }

  function draw(now: number): void {
    if (now - lastMs < FRAME_MIN * 0.9) {
      rafId = requestAnimationFrame(draw);
      return;
    }
    lastMs = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    glowDots.length = 0;
    glowEase.length = 0;
    let maxDisp2 = 0;

    // Phase 1: physics — separate resting vs glow dots
    ctx.beginPath();
    for (const dot of dots) {
      const dx    = dot.bx - mouse.x;
      const dy    = dot.by - mouse.y;
      const dist2 = dx * dx + dy * dy;

      if (dist2 >= GLOW_R2) {
        dot.cx += (dot.bx - dot.cx) * RETURN_SPEED;
        dot.cy += (dot.by - dot.cy) * RETURN_SPEED;
        ctx.moveTo(dot.cx + DOT_RADIUS, dot.cy);
        ctx.arc(dot.cx, dot.cy, DOT_RADIUS, 0, Math.PI * 2);
      } else {
        const dist = Math.sqrt(dist2);
        if (dist2 < INF_R2) {
          const force = (1 - dist / INFLUENCE_RADIUS) * REPULSION_FORCE;
          const angle = Math.atan2(dy, dx);
          dot.cx += (dot.bx + Math.cos(angle) * force * INFLUENCE_RADIUS - dot.cx) * RETURN_SPEED * 2;
          dot.cy += (dot.by + Math.sin(angle) * force * INFLUENCE_RADIUS - dot.cy) * RETURN_SPEED * 2;
        } else {
          dot.cx += (dot.bx - dot.cx) * RETURN_SPEED;
          dot.cy += (dot.by - dot.cy) * RETURN_SPEED;
        }
        glowDots.push(dot);
        glowEase.push(smoothstep(1 - dist / GLOW_RADIUS));
      }

      const ddx = dot.cx - dot.bx;
      const ddy = dot.cy - dot.by;
      const d2  = ddx * ddx + ddy * ddy;
      if (d2 > maxDisp2) maxDisp2 = d2;
    }

    // Phase 2a: single fill call for all resting dots
    ctx.fillStyle = colors.dot;
    ctx.fill();

    // Phase 2b: glow dots — halo ring + bright dot
    for (let i = 0; i < glowDots.length; i++) {
      const dot   = glowDots[i];
      const tEase = glowEase[i];
      if (tEase > 0.02) {
        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, DOT_RADIUS + tEase * MAX_HALO_EXTRA, 0, Math.PI * 2);
        ctx.fillStyle = colors.halo(tEase * HALO_ALPHA_MAX);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(dot.cx, dot.cy, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = colors.glow(tEase);
      ctx.fill();
    }

    // Idle detection: stop the loop when mouse is gone and all dots settled
    if (mouse.x < -100 && maxDisp2 < 0.01) {
      running = false;
      return;
    }
    rafId = requestAnimationFrame(draw);
  }

  function startLoop() {
    if (!running) {
      running = true;
      lastMs  = 0;
      rafId   = requestAnimationFrame(draw);
    }
  }

  // ─── Event listeners ──────────────────────────────────────
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    startLoop();
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener('touchstart', (e) => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
    startLoop();
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // ─── Theme observer ───────────────────────────────────────
  new MutationObserver(() => {
    const nowLight = document.documentElement.dataset.theme === 'light';
    if (nowLight !== isLight) {
      isLight = nowLight;
      colors  = buildColors(isLight);
      startLoop();
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // ─── Init ──────────────────────────────────────────────────
  const ro = new ResizeObserver(resize);
  ro.observe(document.documentElement);

  resize();
  running = true;
  rafId   = requestAnimationFrame(draw);
}
