/* ============================================================
   ZENXIAN — mega-menu.js
   Builds and controls the Solutions mega-menu dropdown
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var trigger  = document.getElementById('mega-menu-trigger');
  var panel    = document.getElementById('mega-menu-panel');
  var backdrop = document.getElementById('mega-menu-backdrop');

  if (!trigger || !panel) return;
  if (typeof ZENXIAN_SERVICES === 'undefined') return;

  /* ---- Build mega-menu columns from data ---- */
  var svgAttrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
  var columnsHtml = '';
  ZENXIAN_SERVICES.categories.forEach(function (cat) {
    var itemsHtml = cat.services.map(function (svc) {
      var iconSvg = svc.icon ? '<svg ' + svgAttrs + '>' + svc.icon + '</svg>' : '';
      return [
        '<a href="service.html?s=' + svc.slug + '" class="mega-menu__item">',
          '<div class="mega-menu__item-icon">' + iconSvg + '</div>',
          '<div class="mega-menu__item-text">',
            '<span class="mega-menu__item-title">' + svc.title + '</span>',
            '<span class="mega-menu__item-desc">' + (svc.desc || '') + '</span>',
          '</div>',
        '</a>'
      ].join('');
    }).join('');

    columnsHtml += [
      '<div class="mega-menu__col">',
        '<div class="mega-menu__col-header">',
          '<span class="mega-menu__col-icon">' + cat.icon + '</span>',
          '<span class="mega-menu__col-title">' + cat.title + '</span>',
        '</div>',
        '<div class="mega-menu__col-items">',
          itemsHtml,
        '</div>',
      '</div>'
    ].join('');
  });

  panel.querySelector('.mega-menu__columns').innerHTML = columnsHtml;

  /* Mobile accordion is handled by main.js */

  /* ---- Open / close ---- */
  var isOpen = false;

  function openMenu() {
    isOpen = true;
    trigger.classList.add('mega-menu-trigger--active');
    panel.classList.add('mega-menu-panel--open');
    if (backdrop) backdrop.classList.add('mega-menu-backdrop--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    trigger.classList.remove('mega-menu-trigger--active');
    panel.classList.remove('mega-menu-panel--open');
    if (backdrop) backdrop.classList.remove('mega-menu-backdrop--visible');
    /* Only restore scroll if mobile menu is also closed */
    var mobileMenuOpen = document.getElementById('mobile-menu');
    if (!mobileMenuOpen || !mobileMenuOpen.classList.contains('mobile-menu--open')) {
      document.body.style.overflow = '';
    }
  }

  /* Click trigger to toggle */
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });

  /* Click backdrop to close */
  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  /* Click outside to close */
  document.addEventListener('click', function (e) {
    if (isOpen && !panel.contains(e.target) && !trigger.contains(e.target)) {
      closeMenu();
    }
  });

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  /* Close when any menu item is clicked */
  panel.addEventListener('click', function (e) {
    if (e.target.closest('.mega-menu__item')) {
      closeMenu();
    }
  });

  /* Mobile Solutions toggle is handled by main.js */

});
