/* ============================================================
   ZENXIAN — service-page.js
   Reads ?s=slug from URL and renders service detail content
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  if (typeof ZENXIAN_SERVICES === 'undefined') return;

  /* Find slug from URL param */
  var params = new URLSearchParams(window.location.search);
  var slug   = params.get('s');

  /* Flatten all services */
  var allServices = [];
  ZENXIAN_SERVICES.categories.forEach(function (cat) {
    cat.services.forEach(function (svc) {
      allServices.push({ category: cat, service: svc });
    });
  });

  var match = allServices.find(function (entry) {
    return entry.service.slug === slug;
  });

  /* ---- Render not-found state ---- */
  if (!match) {
    var heroTitle = document.getElementById('svc-title');
    if (heroTitle) heroTitle.textContent = 'Service Not Found';
    var heroDesc = document.getElementById('svc-tagline');
    if (heroDesc) heroDesc.textContent = 'The service you are looking for does not exist.';
    var body = document.getElementById('svc-body');
    if (body) body.innerHTML = '<p style="color:rgba(255,255,255,0.5);">Please return to the <a href="index.html" style="color:#32C8D9;">homepage</a> or use the Solutions menu to find what you need.</p>';
    return;
  }

  var cat = match.category;
  var svc = match.service;

  /* ---- Update <title> ---- */
  document.title = svc.title + ' — Zenxian';

  /* ---- Hero ---- */
  var elTag   = document.getElementById('svc-category-tag');
  var elTitle = document.getElementById('svc-title');
  var elTagline = document.getElementById('svc-tagline');
  var elImage = document.getElementById('svc-hero-image');

  if (elTag)    elTag.textContent = cat.title;
  if (elTitle)  elTitle.textContent = svc.title;
  if (elTagline) elTagline.textContent = svc.tagline;
  if (elImage)  {
    elImage.src = svc.image;
    elImage.alt = svc.title;
  }

  /* ---- Body ---- */
  var elDesc  = document.getElementById('svc-description');
  var elFeats = document.getElementById('svc-features');

  if (elDesc)  elDesc.textContent = svc.description;

  if (elFeats) {
    elFeats.innerHTML = svc.features.map(function (f) {
      return '<li class="svc-feature-item"><span class="svc-feature-check">✓</span>' + f + '</li>';
    }).join('');
  }

  /* ---- Breadcrumb ---- */
  var elBreadCat   = document.getElementById('svc-breadcrumb-cat');
  var elBreadTitle = document.getElementById('svc-breadcrumb-title');
  if (elBreadCat)   elBreadCat.textContent   = cat.title;
  if (elBreadTitle) elBreadTitle.textContent = svc.title;

  /* ---- Related services (others in same category) ---- */
  var elRelated = document.getElementById('svc-related');
  if (elRelated) {
    var others = cat.services.filter(function (s) { return s.slug !== svc.slug; });
    if (others.length === 0) {
      elRelated.closest('section').style.display = 'none';
    } else {
      elRelated.innerHTML = others.map(function (s) {
        return [
          '<a href="service.html?s=' + s.slug + '" class="related-card">',
            '<div class="related-card__cat">' + cat.title + '</div>',
            '<div class="related-card__title">' + s.title + '</div>',
            '<div class="related-card__arrow">→</div>',
          '</a>'
        ].join('');
      }).join('');
    }
  }

});
