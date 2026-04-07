/* ============================================================
  ZENXIAN service-page.js
  Reads ?s=slug from URL and renders service detail content
  ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

 if (typeof ZENXIAN_SERVICES === 'undefined') return;

 /* Find slug from URL param */
 var params = new URLSearchParams(window.location.search);
 var slug  = params.get('s');

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
 document.title = svc.title + ' Zenxian';

 /* ---- Hero ---- */
 var elTag  = document.getElementById('svc-category-tag');
 var elTitle = document.getElementById('svc-title');
 var elTagline = document.getElementById('svc-tagline');
 var elHeroBg = document.getElementById('svc-hero-bg');

 if (elTag)  elTag.textContent = cat.title;
 if (elTitle) {
  var headingText = svc.heroHeading || svc.title;
  var words = headingText.trim().split(' ');
  var last = words.pop();
  elTitle.innerHTML = words.join(' ') + ' <span class="svc-hero__h1-accent">' + last + '</span>';
 }
 if (elTagline) elTagline.textContent = svc.tagline;
 if (elHeroBg) elHeroBg.style.backgroundImage = 'url(' + svc.image + ')';

 /* ---- Hero highlights (right panel) ---- */
 var elHighlights = document.getElementById('svc-hero-highlights');
 if (elHighlights && svc.featureCards) {
  elHighlights.innerHTML = svc.featureCards.slice(0, 3).map(function (f) {
   return '<div class="svc-hero-hl">'
    + '<span class="svc-hero-hl__icon">' + f.icon + '</span>'
    + '<div><span class="svc-hero-hl__title">' + f.title + '</span>'
    + '<span class="svc-hero-hl__desc">' + f.desc + '</span></div>'
    + '</div>';
  }).join('');
 }

 /* ---- Overview heading + desc ---- */
 var elOvHead = document.getElementById('svc-overview-heading');
 var elOvDesc = document.getElementById('svc-overview-desc');
 if (elOvHead && svc.overviewHeading) elOvHead.textContent = svc.overviewHeading;
 if (elOvDesc && svc.shortText)    elOvDesc.textContent = svc.shortText;

 /* ---- Body ---- */
 var elDesc = document.getElementById('svc-description');
 var elFeats = document.getElementById('svc-features');

 if (elDesc) elDesc.textContent = svc.description;

 if (elFeats) {
  elFeats.innerHTML = svc.features.map(function (f) {
   return '<li class="svc-feature-item"><span class="svc-feature-check">✓</span>' + f + '</li>';
  }).join('');
 }

 /* ---- Intro ---- */
 var elIntro = document.getElementById('svc-intro');
 if (elIntro && svc.intro) elIntro.textContent = svc.intro;

 /* ---- Short text ---- */
 var elShort = document.getElementById('svc-short-text');
 if (elShort && svc.shortText) elShort.textContent = svc.shortText;

 /* ---- Benefits ---- */
 var elBenefits = document.getElementById('svc-benefits');
 if (elBenefits && svc.benefits) {
  elBenefits.innerHTML = svc.benefits.map(function (b) {
   return '<li class="svc-benefit-item"><span class="svc-benefit-title">' + b.title + '</span><span class="svc-benefit-desc">' + b.desc + '</span></li>';
  }).join('');
 }

 /* ---- Feature cards ---- */
 var elCards = document.getElementById('svc-feature-cards');
 if (elCards && svc.featureCards) {
  elCards.innerHTML = svc.featureCards.map(function (f) {
   return '<div class="svc-fcard"><span class="svc-fcard__icon">' + f.icon + '</span><h3 class="svc-fcard__title">' + f.title + '</h3><p class="svc-fcard__desc">' + f.desc + '</p></div>';
  }).join('');
 }

 /* ---- Modern features ---- */
 var elModern = document.getElementById('svc-modern-features');
 if (elModern && svc.modernFeatures) {
  elModern.innerHTML = svc.modernFeatures.map(function (m) {
   return '<div class="svc-mfeat"><span class="svc-mfeat__check">✓</span><div><span class="svc-mfeat__title">' + m.title + '</span><span class="svc-mfeat__desc">' + m.desc + '</span></div></div>';
  }).join('');
 }

 /* ---- Sub-products ---- */
 var elSubSection = document.getElementById('svc-subproducts-section');
 var elSubGrid  = document.getElementById('svc-subproducts');
 if (elSubSection && elSubGrid && svc.subProducts && svc.subProducts.length) {
  elSubSection.style.display = '';
  elSubGrid.innerHTML = svc.subProducts.map(function (sp) {
   var feats = sp.features.map(function (f) {
    return '<div class="svc-sp-feat"><span class="svc-sp-feat__title">' + f.title + '</span><span class="svc-sp-feat__desc">' + f.desc + '</span></div>';
   }).join('');
   var bens = sp.benefits.map(function (b) {
    return '<li class="svc-sp-ben"><span class="svc-sp-ben__check">✓</span>' + b + '</li>';
   }).join('');
   return '<div class="svc-subproduct">'
    + '<div class="svc-sp-header">'
    + '<h3 class="svc-sp-title">' + sp.title + '</h3>'
    + '<p class="svc-sp-headline">' + sp.headline + '</p>'
    + '<p class="svc-sp-desc">' + sp.desc + '</p>'
    + '</div>'
    + '<div class="svc-sp-features">' + feats + '</div>'
    + '<ul class="svc-sp-benefits">' + bens + '</ul>'
    + '<p class="svc-sp-closing">' + sp.closingLine + '</p>'
    + '</div>';
  }).join('');
 }

 /* ---- Process flow ---- */
 var elProcessSection = document.getElementById('svc-process-section');
 var elProcessFlow  = document.getElementById('svc-process-flow');
 if (elProcessSection && elProcessFlow && svc.process && svc.process.length) {
  elProcessSection.style.display = '';
  elProcessFlow.innerHTML = svc.process.map(function (step, i) {
   var html = '<div class="svc-process-step">'
    + '<span class="svc-process-step__num">0' + (i + 1) + '</span>'
    + '<span class="svc-process-step__label">' + step + '</span>'
    + '</div>';
   if (i < svc.process.length - 1) {
    html += '<span class="svc-process-arrow" aria-hidden="true">→</span>';
   }
   return html;
  }).join('');
 }

 /* ---- Closing line ---- */
 var elClosing = document.getElementById('svc-closing');
 if (elClosing && svc.closingLine) elClosing.textContent = svc.closingLine;

 /* ---- Breadcrumb ---- */
 var elBreadCat  = document.getElementById('svc-breadcrumb-cat');
 var elBreadTitle = document.getElementById('svc-breadcrumb-title');
 if (elBreadCat)  elBreadCat.textContent  = cat.title;
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
      '<div class="related-card__img" style="background-image:url(' + s.image + ')"></div>',
      '<div class="related-card__overlay"></div>',
      '<div class="related-card__body">',
       '<span class="related-card__cat">' + cat.title + '</span>',
       '<span class="related-card__title">' + s.title + '</span>',
       '<span class="related-card__desc">' + s.desc + '</span>',
      '</div>',
      '<span class="related-card__arrow">→</span>',
     '</a>'
    ].join('');
   }).join('');
  }
 }

});
