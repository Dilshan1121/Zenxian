/* ============================================================
  ZENXIAN main.js
  Navbar, mobile menu, scroll animations, stat counters
  ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

 /* ---- SPLASH SCREEN (first visit only) ------------------ */
 var splash = document.getElementById('splash');
 if (splash) {
  if (sessionStorage.getItem('splashSeen')) {
   splash.remove();
  } else {
   sessionStorage.setItem('splashSeen', '1');
   document.body.style.overflow = 'hidden';
   setTimeout(function () {
    splash.classList.add('splash--hidden');
    setTimeout(function () {
     splash.remove();
     document.body.style.overflow = '';
    }, 700);
   }, 2400);
  }
 }

 /* ---- 0. ACTIVE NAV LINK -------------------------------- */
 (function () {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link[href]').forEach(function (link) {
   if (link.getAttribute('href') === current) {
    link.classList.add('navbar__link--active');
   }
  });
 })();

 /* ---- 1. NAVBAR SCROLL DETECTION ----------------------- */
 var navbar = document.getElementById('navbar');
 if (navbar) {
  window.addEventListener('scroll', function () {
   if (window.scrollY > 60) {
    navbar.classList.add('navbar--scrolled');
   } else {
    navbar.classList.remove('navbar--scrolled');
   }
  }, { passive: true });
 }

 /* ---- 2. MOBILE MENU ----------------------------------- */
 var menuWrapper  = document.getElementById('mobile-menu');
 var backdrop   = document.getElementById('mobile-menu-backdrop');
 var panel     = document.getElementById('mobile-menu-panel');
 var openBtn    = document.getElementById('hamburger-btn');
 var closeBtn   = document.getElementById('mobile-menu-close');
 var menuLinks   = document.querySelectorAll('.mobile-menu-nav a');

 function openMenu() {
  if (!menuWrapper) return;
  menuWrapper.classList.add('mobile-menu--open');
  if (openBtn) openBtn.classList.add('hamburger--open');
  document.body.style.overflow = 'hidden';
 }

 function closeMenu() {
  if (!menuWrapper) return;
  menuWrapper.classList.remove('mobile-menu--open');
  if (openBtn) openBtn.classList.remove('hamburger--open');
  document.body.style.overflow = '';
 }

 if (openBtn)  openBtn.addEventListener('click', openMenu);
 if (closeBtn) closeBtn.addEventListener('click', closeMenu);
 if (backdrop) backdrop.addEventListener('click', closeMenu);

 menuLinks.forEach(function (link) {
  link.addEventListener('click', closeMenu);
 });

 /* ---- MOBILE SOLUTIONS ACCORDION ---- */
 var mobileSolutionsBtn  = document.getElementById('mobile-solutions-btn');
 var mobileSolutionsPanel = document.getElementById('mobile-solutions-panel');
 var mobileAccordion   = document.getElementById('mobile-solutions-accordion');

 /* Build accordion from data if available */
 if (mobileAccordion && typeof ZENXIAN_SERVICES !== 'undefined') {
  var accHtml = '';
  ZENXIAN_SERVICES.categories.forEach(function (cat) {
   accHtml += '<div class="mobile-acc__group"><div class="mobile-acc__label">' + cat.title + '</div>';
   cat.services.forEach(function (svc) {
    accHtml += '<a href="service.html?s=' + svc.slug + '" class="mobile-acc__item">' + svc.title + '</a>';
   });
   accHtml += '</div>';
  });
  mobileAccordion.innerHTML = accHtml;

  /* Close mobile menu when a service link is clicked */
  mobileAccordion.querySelectorAll('a').forEach(function (a) {
   a.addEventListener('click', closeMenu);
  });
 }

 /* Toggle accordion panel */
 if (mobileSolutionsBtn && mobileSolutionsPanel) {
  mobileSolutionsBtn.addEventListener('click', function (e) {
   e.stopPropagation();
   var isExpanded = mobileSolutionsPanel.classList.toggle('mobile-solutions--open');
   mobileSolutionsBtn.classList.toggle('mobile-solutions--open-btn', isExpanded);
  });
 }

 /* ---- 3. HERO STAGGER ANIMATION ------------------------ */
 var heroItems = document.querySelectorAll('.hero-animate');
 heroItems.forEach(function (el, i) {
  setTimeout(function () {
   el.classList.add('is-visible');
  }, i * 100);
 });

 /* ---- 3b. WORD-BY-WORD BLUR-IN ANIMATION --------------- */
 document.querySelectorAll('.word-animate').forEach(function (word) {
  var delay = parseInt(word.getAttribute('data-delay')) || 0;
  setTimeout(function () {
   word.style.animation = 'word-appear 0.8s ease-out forwards';
  }, delay);
 });

 /* ---- 3c. MOUSE GRADIENT ------------------------------- */
 var mouseGradient = document.getElementById('hero-mouse-gradient');
 if (mouseGradient) {
  document.addEventListener('mousemove', function (e) {
   mouseGradient.style.left = e.clientX + 'px';
   mouseGradient.style.top = e.clientY + 'px';
   mouseGradient.style.opacity = '1';
  });
  document.addEventListener('mouseleave', function () {
   mouseGradient.style.opacity = '0';
  });
 }

 /* ---- 3d. CLICK RIPPLE --------------------------------- */
 document.addEventListener('click', function (e) {
  var ripple = document.createElement('div');
  ripple.className = 'hero-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  document.body.appendChild(ripple);
  setTimeout(function () { ripple.remove(); }, 1000);
 });

 /* ---- 3e. FLOATING PARTICLES (activate on scroll) ------ */
 var floatActivated = false;
 window.addEventListener('scroll', function () {
  if (!floatActivated) {
   floatActivated = true;
   document.querySelectorAll('.hero-float-dot').forEach(function (el) {
    el.style.animationPlayState = 'running';
   });
  }
 }, { passive: true });

 /* ---- 4. SCROLL ANIMATIONS (IntersectionObserver) ------ */
 var scrollObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
   if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    scrollObserver.unobserve(entry.target);
   }
  });
 }, { threshold: 0.15 });

 document.querySelectorAll('.anim-ready').forEach(function (el) {
  scrollObserver.observe(el);
 });

 /* ---- 5. STAT COUNTERS --------------------------------- */
 function animateCounter(el) {
  var target  = parseFloat(el.getAttribute('data-target'));
  var suffix  = el.getAttribute('data-suffix') || '';
  var prefix  = el.getAttribute('data-prefix') || '';
  var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
  var duration = 2000;
  var start  = performance.now();

  function step(now) {
   var elapsed = now - start;
   var progress = Math.min(elapsed / duration, 1);
   // Ease out quad
   var eased  = 1 - (1 - progress) * (1 - progress);
   var current = eased * target;
   el.textContent = prefix + current.toFixed(decimals) + suffix;
   if (progress < 1) {
    requestAnimationFrame(step);
   }
  }
  requestAnimationFrame(step);
 }

 var counterObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
   if (entry.isIntersecting) {
    animateCounter(entry.target);
    counterObserver.unobserve(entry.target);
   }
  });
 }, { threshold: 0.5 });

 document.querySelectorAll('.stat-counter').forEach(function (el) {
  counterObserver.observe(el);
 });

 /* ── Services Carousel ── */
 (function () {
  var track = document.getElementById('sc-track');
  var dots = document.querySelectorAll('.sc-dot');
  if (!track) return;

  var cards   = track.querySelectorAll('.sc-card');
  var cardCount = cards.length;
  var current  = 0;

  function getVisible() {
   var w = track.parentElement.offsetWidth;
   if (w < 600) return 1;
   if (w < 900) return 2;
   return 3;
  }

  function getCardWidth() {
   var gap = 24;
   var visible = getVisible();
   return (track.parentElement.offsetWidth - gap * (visible - 1)) / visible;
  }

  function goTo(index) {
   var max = cardCount - getVisible();
   current = Math.max(0, Math.min(index, max));
   var offset = current * (getCardWidth() + 24);
   track.style.transform = 'translateX(-' + offset + 'px)';
   dots.forEach(function (d, i) {
    d.classList.toggle('sc-dot--active', i === current);
   });
  }

  document.querySelector('.sc-arrow--prev').addEventListener('click', function () { goTo(current - 1); });
  document.querySelector('.sc-arrow--next').addEventListener('click', function () { goTo(current + 1); });

  dots.forEach(function (dot) {
   dot.addEventListener('click', function () {
    goTo(parseInt(dot.getAttribute('data-index')));
   });
  });

  /* Drag / swipe */
  var startX = 0, isDragging = false;
  track.addEventListener('mousedown', function (e) {
   startX = e.clientX; isDragging = true; track.classList.add('is-dragging');
  });
  document.addEventListener('mouseup', function (e) {
   if (!isDragging) return;
   isDragging = false;
   track.classList.remove('is-dragging');
   var diff = startX - e.clientX;
   if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });
  track.addEventListener('touchstart', function (e) {
   startX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', function (e) {
   var diff = startX - e.changedTouches[0].clientX;
   if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  window.addEventListener('resize', function () { goTo(current); });
 })();

 /* ── Text Parallax Scroll ── */
 (function () {
  var panels = document.querySelectorAll('[data-tpc-panel]');
  if (!panels.length) return;

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  function updatePanel(panel) {
   var zone  = panel.querySelector('[data-tpc-zone]');
   var img   = panel.querySelector('[data-tpc-img]');
   var overlay = panel.querySelector('[data-tpc-overlay]');
   var copy  = panel.querySelector('[data-tpc-copy]');
   if (!zone || !img || !copy) return;

   var vh  = window.innerHeight;
   var rect = zone.getBoundingClientRect();

   /* Image scale: end end → end start */
   var imgP = clamp(1 - rect.bottom / vh, 0, 1);
   var scale = 1 - 0.15 * imgP;
   img.style.transform = 'scale(' + scale.toFixed(4) + ')';
   if (overlay) overlay.style.opacity = imgP.toFixed(3);

   /* Copy parallax: start end → end start */
   var copyP  = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
   var y    = 250 - copyP * 500;
   var opacity;
   if   (copyP < 0.25) opacity = copyP / 0.25;
   else if (copyP < 0.5) opacity = 1;
   else if (copyP < 0.75) opacity = 1 - (copyP - 0.5) / 0.25;
   else          opacity = 0;

   copy.style.transform = 'translateY(' + y.toFixed(1) + 'px)';
   copy.style.opacity  = clamp(opacity, 0, 1).toFixed(3);
  }

  function onScroll() { panels.forEach(updatePanel); }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
 })();

 /* ── Footer SVG text hover effect ── */
 (function () {
  var svg   = document.getElementById('footer-svg');
  var drawText = document.getElementById('footer-text-draw');
  var outline = document.getElementById('footer-text-outline');
  var colored = document.getElementById('footer-text-color');
  var mask   = document.getElementById('footerRevealMask');
  if (!svg || !drawText) return;

  /* Looping draw animation: draw 7s → hold 2s → reset → repeat */
  function runDrawCycle() {
   /* reset instantly */
   drawText.style.transition = 'none';
   drawText.setAttribute('stroke-dashoffset', '1000');

   /* force reflow so the reset takes effect before re-animating */
   void drawText.getBoundingClientRect();

   /* draw in over 7s */
   drawText.style.transition = 'stroke-dashoffset 7s ease-in-out';
   drawText.setAttribute('stroke-dashoffset', '0');

   /* after draw (7s) + hold (2s) = 9s, start next cycle */
   setTimeout(runDrawCycle, 9000);
  }

  /* Start when footer becomes visible */
  var started = false;
  var drawObserver = new IntersectionObserver(function (entries) {
   if (entries[0].isIntersecting && !started) {
    started = true;
    runDrawCycle();
    drawObserver.disconnect();
   }
  }, { threshold: 0.3 });
  drawObserver.observe(svg);

  /* Mouse follow reveal colorful gradient */
  svg.addEventListener('mouseenter', function () {
   outline.style.opacity = '0.7';
   colored.style.opacity = '1';
  });
  svg.addEventListener('mouseleave', function () {
   outline.style.opacity = '0';
   colored.style.opacity = '0';
  });
  svg.addEventListener('mousemove', function (e) {
   var rect = svg.getBoundingClientRect();
   var cx = ((e.clientX - rect.left) / rect.width * 300).toFixed(1);
   var cy = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
   mask.setAttribute('cx', cx);
   mask.setAttribute('cy', cy);
  });
 })();

});
