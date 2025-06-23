/*====================================
  Tab Content
======================================*/
$(function () {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active from all
      buttons.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      // Add to clicked
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
});

/*====================================
  Movie Popup
======================================*/
$(function () {
  const thumbnails = document.querySelectorAll('.js_movie_thumb');
  const popups = document.querySelectorAll('.js_video_popup');
  const closeBtns = document.querySelectorAll('.js_close_btn');
  const cFollowUs = document.querySelector('.c-follow-us');

  thumbnails.forEach((thumbnail, index) => {
    const popup = popups[index];
    const closeBtn = closeBtns[index];
    const iframe = popup.querySelector('.js_video_popup iframe');

    thumbnail.addEventListener('click', () => {
      popup.classList.add('active');
      cFollowUs.style.zIndex = '0';

      if (iframe.dataset.src) {
        iframe.src = iframe.dataset.src + "?autoplay=1";
      }
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
      cFollowUs.style.zIndex = '11';

      if (iframe) {
        iframe.src = iframe.src;
      }
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
        cFollowUs.style.zIndex = '11';
      }
    });
  });
});

/*====================================
  Popup Gallery
======================================*/
$(function () {
  const items = document.querySelectorAll('.js_gallery_list img');
  const popup = document.getElementById('popupCharacter');
  const popupImg = document.querySelector('#popupImage img');
  const nextBtn = document.getElementById('nextButton');
  const prevBtn = document.getElementById('prevButton');
  const closeBtn = document.getElementById('popupClose');
  const cFollowUs = document.querySelector('.c-follow-us');

  let currentIndex = 0;
  const imageSources = Array.from(items).map(img => img.src);

  items.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showPopup(imageSources[currentIndex]);
    });
  });

  function showPopup(src) {
    popupImg.src = src;
    popup.classList.add('active');
    cFollowUs.style.zIndex = '0';
  }

  function closePopup() {
    popup.classList.remove('active');
    cFollowUs.style.zIndex = '11';
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    showPopup(imageSources[currentIndex]);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    showPopup(imageSources[currentIndex]);
  });

  closeBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', e => {
    if (e.target === popup) closePopup();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePopup();
  });
});