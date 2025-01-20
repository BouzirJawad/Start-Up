
$(document).ready(function () {
    
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });


    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

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