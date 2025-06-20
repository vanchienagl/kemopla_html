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
  });
  
  const thumbs = document.querySelectorAll('.thumb-list img');
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      mainSwiper.slideToLoop(i);
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  thumbs[0].classList.add('active');

});