$(function () {

  // ______________________________________________________
  // ______________________________________________________
  // Slider Product Lineup
  const mainSwiper = new Swiper('.main-slider', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 34,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 25, // Tablet (≥768px)
      },
      0: {
        spaceBetween: 12, // Mobile (<768px)
      },
    },
  });
  
  const thumbs = document.querySelectorAll('.thumb-list .image');
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      mainSwiper.slideToLoop(i);
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  thumbs[0].classList.add('active');

});