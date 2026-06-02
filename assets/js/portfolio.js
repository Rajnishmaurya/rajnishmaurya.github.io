const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) root.dataset.theme = savedTheme;

document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", root.dataset.theme);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

/* ── Neural-network canvas ─────────────────────────────────── */
(function initNeural() {
  const canvas = document.getElementById("neural-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let nodes = [], W = 0, H = 0, raf;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function spawn() {
    nodes = Array.from({ length: 54 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 2.2 + 0.9,
    }));
  }

  function draw() {
    const dark = document.documentElement.dataset.theme === "dark";
    const nodeCol = dark ? "rgba(96,165,250,0.75)" : "rgba(37,99,235,0.55)";
    const lineBase = dark ? "rgba(96,165,250," : "rgba(37,99,235,";

    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath();
          ctx.strokeStyle = lineBase + (0.18 * (1 - d / 150)).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = nodeCol;
      ctx.fill();
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    raf = requestAnimationFrame(draw);
  }

  resize();
  spawn();
  draw();

  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      cancelAnimationFrame(raf);
      resize();
      spawn();
      draw();
    }, 220);
  });
})();

/* ── Typewriter role cycling ───────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const roles = [
    "AI Engineer",
    "LLM Researcher",
    "MLOps Practitioner",
    "Deep Learning Engineer",
    "LoRA Fine-tuner",
  ];
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];
    if (!deleting) {
      el.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) { deleting = true; setTimeout(tick, 1900); return; }
    } else {
      el.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 55 : 85);
  }
  tick();
})();

/* ── Counter animation on scroll ──────────────────────────── */
(function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const t0     = performance.now();
      const dur    = 1100;
      (function step(now) {
        const p = Math.min((now - t0) / dur, 1);
        const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach((el) => obs.observe(el));
})();
