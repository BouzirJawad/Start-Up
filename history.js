$(document).ready(function () {

    // Store the text and clear the element first
    const originalText = $('.sub-title').text();
    $('.sub-title').text(''); // Clear immediately
    let currentIndex = 0;
    
    function typeLetter() {
        if (currentIndex < originalText.length) {
            $('.sub-title').append(originalText[currentIndex]);
            currentIndex++;
            setTimeout(typeLetter, 150);
        } else {
            // Reset
            setTimeout(() => {
                $('.sub-title').text(''); 
                currentIndex = 0;
                typeLetter();
            }, 1000);
        }
    }
    
    typeLetter(); // Start the animation
    
    
    
      $(window).scroll(function(){
          $("scrollImage")
              .animate({width: "-=20%"},2000)
              //Cette animation se lance immédiatement
              .animate({fontSize: "20px"},{queue:false, duration:2000})
              .fadeTo(2000, 0.5);
      });

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