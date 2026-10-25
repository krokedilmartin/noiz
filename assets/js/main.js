// Mobilmeny
(function () {
  var toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();

// Bildgalleri med lightbox
(function () {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.gallery button'));
  var box = document.querySelector('.lightbox');
  if (!buttons.length || !box || typeof box.showModal !== 'function') return;
  var img = box.querySelector('img');
  var index = 0;

  function show(i) {
    index = (i + buttons.length) % buttons.length;
    var source = buttons[index].querySelector('img');
    img.src = source.src;
    img.alt = source.alt;
  }

  buttons.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      show(i);
      box.showModal();
    });
  });
  box.querySelector('.lightbox__close').addEventListener('click', function () { box.close(); });
  box.querySelector('.lightbox__nav--prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lightbox__nav--next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
})();

document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
