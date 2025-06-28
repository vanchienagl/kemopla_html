/*====================================
  FAQ List
======================================*/
$(function () {
  $('.js_list_faq .item .question').on('click', function () {
    const $item = $(this).closest('.item');
    const $answer = $item.find('.answer');
    
    $item.toggleClass('active');
    $answer.stop(true, true).slideToggle(300);
  });
});
