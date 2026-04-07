/* ============================================================
   ZENXIAN — case-studies.js
   Renders gradient cards from data; click navigates to detail page.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var grid = document.getElementById('cs-card-grid');
  if (!grid || typeof ZENXIAN_CASES === 'undefined') return;

  var ctaCell = grid.querySelector('.case-study-cta-cell');

  ZENXIAN_CASES.forEach(function (cs) {
    var card = document.createElement('article');
    card.className = 'gc-card gc-card--' + cs.gradient;
    card.dataset.slug = cs.slug;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'View case study: ' + cs.title);

    card.innerHTML = [
      '<img class="gc-card__deco" src="' + cs.image + '" alt="" aria-hidden="true" loading="lazy" />',
      '<div class="gc-card__body">',
        '<div class="gc-card__badge">',
          '<span class="gc-card__dot" style="background:' + cs.dotColor + '"></span>',
          cs.tag,
        '</div>',
        '<div class="gc-card__main">',
          '<h3 class="gc-card__title">' + cs.title + '</h3>',
          '<dl class="gc-card__csr">',
            '<div class="gc-card__csr-row">',
              '<dt class="gc-card__csr-label">Challenge</dt>',
              '<dd class="gc-card__csr-value">' + cs.challenge + '</dd>',
            '</div>',
            '<div class="gc-card__csr-row">',
              '<dt class="gc-card__csr-label">Solution</dt>',
              '<dd class="gc-card__csr-value">' + cs.solution + '</dd>',
            '</div>',
            '<div class="gc-card__csr-row gc-card__csr-row--result">',
              '<dt class="gc-card__csr-label">Result</dt>',
              '<dd class="gc-card__csr-value">' + cs.result + '</dd>',
            '</div>',
          '</dl>',
        '</div>',
        cs.liveLink
          ? [
              '<span class="gc-card__cta">',
                'Visit Website ',
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
                  '<line x1="5" y1="12" x2="19" y2="12"/>',
                  '<polyline points="12 5 19 12 12 19"/>',
                '</svg>',
              '</span>'
            ].join('')
          : '<span class="gc-card__cta gc-card__cta--soon">Link Coming Soon</span>',
      '</div>'
    ].join('');

    if (cs.liveLink) {
      card.addEventListener('click', function () {
        window.open(cs.liveLink, '_blank', 'noopener,noreferrer');
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(cs.liveLink, '_blank', 'noopener,noreferrer');
        }
      });
    } else {
      card.style.cursor = 'default';
      card.querySelector('.gc-card__cta').style.opacity = '0.35';
    }

    grid.insertBefore(card, ctaCell);
  });

  /* ---- Count-up animation ---- */
  var countups = document.querySelectorAll('.countup');
  if (countups.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        animateCount(entry.target);
      });
    }, { threshold: 0.5 });

    countups.forEach(function (el) { observer.observe(el); });
  }

  function animateCount(el) {
    var target   = parseFloat(el.dataset.target);
    var decimals = parseInt(el.dataset.decimals) || 0;
    var suffix   = el.dataset.suffix  || '';
    var prefix   = el.dataset.prefix  || '';
    var duration = 1800;
    var start    = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // ease out cubic
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = ease * target;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

});
