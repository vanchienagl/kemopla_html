/*====================================
  Clear Button
======================================*/
$(function () {
  const clearBtn = document.querySelector('.js_btn_clear');
  const form = document.querySelector('.js_form_filter');

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Textbox
    form.querySelectorAll('input[type="text"]').forEach(el => {
      el.value = '';
    });

    // Checkbox
    form.querySelectorAll('input[type="checkbox"]').forEach(el => {
      el.checked = false;
    });

    // Scroll to Form
    $('html, body').animate({
      scrollTop: $('.js_form_filter').offset().top - 30,
      behavior: 'smooth'
    }, 200);
  });
});