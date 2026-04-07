/* ============================================================
  ZENXIAN contact-hero.js
  Aurora radial-gradient + star field for the contact hero.
  Mirrors the AuroraHero React component in vanilla JS.
  ============================================================ */

(function () {

 var section = document.querySelector('.contact-hero');
 if (!section) return;

 /* ── Inject canvas ── */
 var canvas = document.createElement('canvas');
 canvas.id = 'contact-stars-canvas';
 section.insertBefore(canvas, section.firstChild);
 var ctx = canvas.getContext('2d');

 /* ── Aurora colors (matches COLORS_TOP) ── */
 var COLORS = ['#1E67C6', '#0E7DA8', '#1F8DA6', '#0A4F8A'];
 var COLOR_DURATION = 2500; /* ms per step */

 /* ── Star data ── */
 var stars = [];
 var W = 0, H = 0;

 function resize() {
  W = canvas.width = section.offsetWidth;
  H = canvas.height = section.offsetHeight;
  buildStars();
 }

 function buildStars() {
  stars = [];
  var count = Math.floor((W * H) / 700);
  for (var i = 0; i < count; i++) {
   stars.push({
    x:   Math.random() * W,
    y:   Math.random() * H,
    r:   Math.random() * 1.1 + 0.25,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.8 + 0.3
   });
  }
 }

 /* ── Color helpers ── */
 function hexToRgb(hex) {
  return [
   parseInt(hex.slice(1, 3), 16),
   parseInt(hex.slice(3, 5), 16),
   parseInt(hex.slice(5, 7), 16)
  ];
 }

 function lerpRgb(a, b, t) {
  return [
   Math.round(a[0] + (b[0] - a[0]) * t),
   Math.round(a[1] + (b[1] - a[1]) * t),
   Math.round(a[2] + (b[2] - a[2]) * t)
  ];
 }

 /* Smooth ease-in-out */
 function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
 }

 function currentColor(ts) {
  var total = COLOR_DURATION * COLORS.length;
  var cycle = ts % total;
  var idx  = Math.floor(cycle / COLOR_DURATION);
  var raw  = (cycle % COLOR_DURATION) / COLOR_DURATION;
  var t   = easeInOut(raw);
  var from  = hexToRgb(COLORS[idx]);
  var to   = hexToRgb(COLORS[(idx + 1) % COLORS.length]);
  var c   = lerpRgb(from, to, t);
  return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')';
 }

 /* ── Draw loop ── */
 function draw(ts) {
  /* Stars */
  ctx.clearRect(0, 0, W, H);
  for (var i = 0; i < stars.length; i++) {
   var s = stars[i];
   var op = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(s.phase + ts * 0.001 * s.speed));
   ctx.beginPath();
   ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
   ctx.fillStyle = 'rgba(255,255,255,' + op.toFixed(3) + ')';
   ctx.fill();
  }

  /* Aurora gradient */
  var color = currentColor(ts);
  section.style.backgroundImage =
   'radial-gradient(125% 125% at 50% 0%, #020617 50%, ' + color + ')';

  requestAnimationFrame(draw);
 }

 /* ── Init ── */
 resize();
 window.addEventListener('resize', resize);
 requestAnimationFrame(draw);

})();
