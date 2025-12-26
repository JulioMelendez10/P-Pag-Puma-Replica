// js/carousels.js

function initTrendingCarousel(root) {
  const track   = root.querySelector('.trending-track');
  const cards   = root.querySelectorAll('.trend-card');
  const prev    = root.querySelector('.arrow-left');
  const next    = root.querySelector('.arrow-right');
  const wrapper = root.querySelector('.trending-wrapper');

  if (!track || cards.length === 0 || !prev || !next || !wrapper) return;

  let index   = 0;
  let visible = 4;

  function calculateVisible() {
    const cardWidth    = cards[0].getBoundingClientRect().width;
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    visible = Math.round(wrapperWidth / cardWidth) || 1;
  }

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  function clampIndex() {
    const maxIndex = cards.length - visible;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
  }

  next.addEventListener('click', () => {
    calculateVisible();
    index++;
    clampIndex();
    updateCarousel();
  });

  prev.addEventListener('click', () => {
    calculateVisible();
    index--;
    clampIndex();
    updateCarousel();
  });

  window.addEventListener('resize', () => {
    calculateVisible();
    clampIndex();
    updateCarousel();
  });

  // Inicial
  calculateVisible();
  clampIndex();
  updateCarousel();
}

// Inicializar todos los carruseles al cargar la página
window.addEventListener('load', () => {
  document
    .querySelectorAll('.trending-carousel')
    .forEach(initTrendingCarousel);
});


// js/logosCarousel.js

function initLogosCarousel(root) {
  const track   = root.querySelector('.logos-track');
  const items   = root.querySelectorAll('.logos-item');
  const prev    = root.querySelector('.logos-left');
  const next    = root.querySelector('.logos-right');
  const wrapper = root.querySelector('.logos-wrapper');

  if (!track || items.length === 0 || !prev || !next || !wrapper) return;

  let index   = 0;
  let visible = 6;

  function calculateVisible() {
    const itemWidth    = items[0].getBoundingClientRect().width;
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    visible = Math.round(wrapperWidth / itemWidth) || 1;
  }

  function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  function clampIndex() {
    const maxIndex = items.length - visible;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
  }

  next.addEventListener('click', () => {
    calculateVisible();
    index++;
    clampIndex();
    updateCarousel();
  });

  prev.addEventListener('click', () => {
    calculateVisible();
    index--;
    clampIndex();
    updateCarousel();
  });

  window.addEventListener('resize', () => {
    calculateVisible();
    clampIndex();
    updateCarousel();
  });

  // Inicial
  calculateVisible();
  clampIndex();
  updateCarousel();
}

// Si solo tienes un carrusel de este tipo:
window.addEventListener('load', () => {
  const root = document.querySelector('.logos-carousel');
  if (root) initLogosCarousel(root);
});


// js/footerAccordion.js  (por ejemplo)

document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.footer-column');

  columns.forEach(col => {
    const btn = col.querySelector('[data-footer-toggle]');
    if (!btn) return;

    btn.addEventListener('click', () => {
      // Solo activar comportamiento acordeón en móvil
      if (window.innerWidth > 768) return;
      col.classList.toggle('open');
    });
  });
});
