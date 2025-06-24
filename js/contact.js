/*====================================
  Validate form client side
======================================*/
$(function () {
  $('.js_btn_submit').on('click', function (e) {
    e.preventDefault();

    let isValid = true;

    // Reset error: hide + delete content + remove .show + remove .has-error
    $('.error-message').removeClass('show').text('');
    $('.row-wrap').removeClass('has-error');

    // --- Validate select ---
    const $select = $('#type_inquiry');
    if (!$select.val()) {
      const labelText = $('label[for="type_inquiry"]').text().trim();
      const $rowWrap = $select.closest('.row-wrap');
      $rowWrap.find('.error-message')
        .html('<span>' + labelText + '</span>は入力必須項目です。')
        .addClass('show');
      $rowWrap.addClass('has-error');
      isValid = false;
    }

    // --- Validate required fields ---
    const requiredFields = ['full_name', 'email', 'email_confirm', 'inquiry_content'];
    requiredFields.forEach(function (fieldName) {
      const $field = $('[name="' + fieldName + '"]');
      const value = $field.val().trim();
      const $rowWrap = $field.closest('.row-wrap');
      if (!value) {
        const labelText = $('label[for="' + fieldName + '"]').text().trim();
        $rowWrap.find('.error-message')
          .html('<span>' + labelText + '</span>は入力必須項目です。')
          .addClass('show');
        $rowWrap.addClass('has-error');
        isValid = false;
      }
    });

    // --- Validate email format ---
    const email = $('#email').val().trim();
    const emailConfirm = $('#email_confirm').val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      const $rowWrap = $('#email').closest('.row-wrap');
      $rowWrap.find('.error-message')
        .text('有効なメールアドレスを入力してください。')
        .addClass('show');
      $rowWrap.addClass('has-error');
      isValid = false;
    }

    if (emailConfirm && !emailRegex.test(emailConfirm)) {
      const $rowWrap = $('#email_confirm').closest('.row-wrap');
      $rowWrap.find('.error-message')
        .text('有効なメールアドレスを入力してください。')
        .addClass('show');
      $rowWrap.addClass('has-error');
      isValid = false;
    }

    // --- Validate email match ---
    if (email && emailConfirm && email !== emailConfirm) {
      const $rowWrap = $('#email_confirm').closest('.row-wrap');
      $rowWrap.find('.error-message')
        .text('メールアドレスが一致しません。')
        .addClass('show');
      $rowWrap.addClass('has-error');
      isValid = false;
    }

    // --- Validate telephone if entered ---
    const telephone = $('#telephone').val().trim();
    const numberRegex = /^[0-9]+$/;
    if (telephone && !numberRegex.test(telephone)) {
      const $rowWrap = $('#telephone').closest('.row-wrap');
      $rowWrap.find('.error-message')
        .text('数字のみを入力してください。')
        .addClass('show');
      $rowWrap.addClass('has-error');
      isValid = false;
    }

    // --- Scroll to form if there is an error ---
    if (!isValid) {
      const formTop = document.getElementById('form_contact').getBoundingClientRect().top + window.scrollY;
      $('html, body').stop().animate({
        scrollTop: formTop
      }, 600);
      return;
    }

    // --- Submit if valid ---
    console.log("Submit Form...");
  });
});