$(document).ready(function () {


    const text = $('.sub-title').text(); 
    let currentIndex = 0;
    function typeLetter() {
        if (currentIndex < text.length) {
            $('.sub-title').append(text[currentIndex]); // Add one letter by one
            currentIndex++;
            setTimeout(typeLetter, 150); 
        } else {
            // Reset
            setTimeout(() => {
                $('.sub-title').text(''); //clear
                currentIndex = 0;            
                typeLetter();                
            }, 1000); 
        }
    }
  
    typeLetter(); // Start the animation
  
  
  //   $(window).scroll(function() {
  //     var scrollPosition = $(this).scrollTop();
  //     var rotation = scrollPosition / 10; // Adjust the divisor to control the rotation speed
  //     $('#scrollImage').css({
  //         'transform': 'rotate(' + rotation + 'deg)'
  //     });
  // });
  
  
  });