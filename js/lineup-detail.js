/*====================================
  Slider Product Detail Lineup
======================================*/
$(function () {
  const thumbs = document.querySelectorAll('.js_thumb_list .image');

  const mainSwiper = new Swiper('.js_main_slider', {
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
        spaceBetween: 25,
      },
      0: {
        spaceBetween: 12,
      },
    },
    on: {
      slideChange: function () {
        const realIndex = this.realIndex;
        thumbs.forEach((t, i) => {
          t.classList.toggle('active', i === realIndex);
        });
      },
    },
  });

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      mainSwiper.slideToLoop(i);
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  thumbs[0].classList.add('active');
});