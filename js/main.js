/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── CUSTOM CURSOR (desktop) ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
if (window.matchMedia('(hover: hover)').matches && cursor) {
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx+'px'; cursor.style.top = my+'px';
  });
  (function animRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,.skill-card,.highlight-item,.industry-pill,.cert-card,.edu-card,.btn-primary,.btn-outline,.btn-dark').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform='translate(-50%,-50%) scale(2.2)'; ring.style.transform='translate(-50%,-50%) scale(1.4)'; ring.style.opacity='0.25'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform='translate(-50%,-50%) scale(1)'; ring.style.transform='translate(-50%,-50%) scale(1)'; ring.style.opacity='0.55'; });
  });
}

/* ── NAV SHRINK ON SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── SCROLL REVEAL ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => io.observe(el));

/* ── COUNTER ANIMATION ── */
function animateCount(el, target, duration) {
  let start = 0;
  const step = target / 60;
  const id = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(id); }
    else el.textContent = Math.floor(start);
  }, duration / 60);
}
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(el => animateCount(el, parseInt(el.dataset.count), 1200));
      countObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stats-band').forEach(el => countObs.observe(el));
