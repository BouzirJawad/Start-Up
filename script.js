$(document).ready(function () {
    const backToTop = $("#backToTop");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        backToTop.fadeIn();
      } else {
        backToTop.fadeOut();
      }
    });

    backToTop.click(function () {
      $("html, body").animate({ scrollTop: 0 }, 100);
      return false; 
    });
});
