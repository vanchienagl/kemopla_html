/*====================================
  Button Back To Top
======================================*/
$(function () {
  const $backToTopBtn = $(".js_page_to_top");
  $backToTopBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });
});