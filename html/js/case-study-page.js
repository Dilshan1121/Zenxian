/* ============================================================
   ZENXIAN — case-study-page.js
   Reads ?s=slug from URL and renders case study detail content
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  if (typeof ZENXIAN_CASES === 'undefined') return;

  var params = new URLSearchParams(window.location.search);
  var slug   = params.get('s');

  var cs = ZENXIAN_CASES.find(function (c) { return c.slug === slug; });

  /* ---- Not found ---- */
  if (!cs) {
    var t = document.getElementById('cs-title');
    if (t) t.textContent = 'Case Study Not Found';
    var d = document.getElementById('cs-desc');
    if (d) d.innerHTML = 'Please <a href="case-studies.html" style="color:#32C8D9;">return to Case Studies</a>.';
    return;
  }

  /* ---- <title> ---- */
  document.title = cs.title + ' — Zenxian';

  /* ---- Breadcrumb ---- */
  var elBread = document.getElementById('cs-breadcrumb-title');
  if (elBread) elBread.textContent = cs.title;

  /* ---- Hero ---- */
  document.getElementById('cs-tag').textContent          = cs.tag;
  document.getElementById('cs-title').textContent        = cs.title;
  document.getElementById('cs-metric-value').textContent = cs.metricValue;
  document.getElementById('cs-metric-label').textContent = cs.metricLabel;

  var heroBg = document.getElementById('cs-hero-bg');
  if (heroBg) heroBg.style.backgroundImage = 'url(' + cs.image + ')';

  /* ---- Body ---- */
  document.getElementById('cs-desc').textContent = cs.desc;

  var ul = document.getElementById('cs-highlights');
  if (ul) {
    ul.innerHTML = cs.highlights.map(function (h, i) {
      return '<li class="cs-highlight-item"><span class="cs-highlight-num">0' + (i + 1) + '</span><span>' + h + '</span></li>';
    }).join('');
  }

  /* ---- Product showcase ---- */
  var elShowcase = document.getElementById('cs-showcase');
  if (elShowcase && (cs.screenshot || cs.liveLink)) {
    elShowcase.style.display = '';
    var elScreenshot = document.getElementById('cs-screenshot');
    if (elScreenshot && cs.screenshot) elScreenshot.src = cs.screenshot;
    var elLiveLink = document.getElementById('cs-live-link');
    if (elLiveLink && cs.liveLink) elLiveLink.href = cs.liveLink;
    var elUrlBar = document.getElementById('cs-url-bar');
    if (elUrlBar && cs.liveLink && cs.liveLink !== '#') elUrlBar.textContent = cs.liveLink;
  }

  /* ---- Related case studies ---- */
  var elRelated = document.getElementById('cs-related');
  if (elRelated) {
    var others = ZENXIAN_CASES.filter(function (c) { return c.slug !== cs.slug; });
    elRelated.innerHTML = others.map(function (c) {
      return [
        '<a href="case-study.html?s=' + c.slug + '" class="cs-related-card">',
          '<div class="cs-related-card__img" style="background-image:url(' + c.image + ')"></div>',
          '<div class="cs-related-card__body">',
            '<div class="cs-related-card__tag">' + c.tag + '</div>',
            '<div class="cs-related-card__title">' + c.title + '</div>',
            '<div class="cs-related-card__metric">' + c.metricValue + '<span>' + c.metricLabel + '</span></div>',
          '</div>',
        '</a>'
      ].join('');
    }).join('');
  }

});

/* ============================================================
   Parallax scroll animation for .cs-parallax hero
   Mirrors the framer-motion TextParallaxContent component logic
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var track   = document.getElementById('cs-parallax-track');
  var img     = document.getElementById('cs-hero-bg');
  var overlay = document.getElementById('cs-img-overlay');
  var copy    = document.getElementById('cs-copy');

  if (!track || !img || !copy) return;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function lerp(a, b, t)    { return a + (b - a) * clamp(t, 0, 1); }
  function mapRange(v, i0, i1, o0, o1) { return lerp(o0, o1, (v - i0) / (i1 - i0)); }

  function onScroll() {
    var rect   = track.getBoundingClientRect();
    var trackH = track.offsetHeight;   /* 150vh */
    var vh     = window.innerHeight;

    /* Overall progress: 0 = section top at viewport bottom, 1 = section bottom at viewport top
       Mirrors framer-motion offset ["start end", "end start"] */
    var p = clamp((vh - rect.top) / (trackH + vh), 0, 1);

    /* Image: scale 1→0.85 and overlay fade 1→0, both triggered in last 40% of scroll
       Mirrors offset ["end end", "end start"] */
    var imgP = clamp((p - 0.6) / 0.4, 0, 1);
    img.style.transform = 'scale(' + (1 - 0.15 * imgP).toFixed(4) + ')';
    if (overlay) overlay.style.opacity = (1 - imgP).toFixed(3);

    /* Copy: y parallax 250px→-250px, opacity 0→1→0 at keypoints [0.25, 0.5, 0.75]
       Mirrors OverlayCopy transforms */
    var y  = lerp(250, -250, p);
    var op;
    if      (p < 0.25) op = 0;
    else if (p < 0.5)  op = mapRange(p, 0.25, 0.5,  0, 1);
    else if (p < 0.75) op = mapRange(p, 0.5,  0.75, 1, 0);
    else               op = 0;

    copy.style.transform = 'translateY(' + y.toFixed(2) + 'px)';
    copy.style.opacity   = op.toFixed(3);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
});
