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

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".rightToLeft").forEach((element) => {
  gsap.from(element, {
    x: "50vh",
    opacity: 0.5,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "top 20%",  
        toggleActions: "play none play none",
        scrub: 3,
        once: true
    }
  });
});

gsap.utils.toArray(".leftToRight").forEach((element) => {
  gsap.from(element, {
    x: "-50vh",
    opacity: 0.5,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "top 20%",  
        toggleActions: "play none play none",
        scrub: 3,
        once: true
    }
  });
});

gsap.utils.toArray(".bottomToTop").forEach((element) => {
  gsap.from(element, {
    y: "30vh",
    opacity: 0.5,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: element,
        start: "top 120%",
        end: "top 100%",  
        toggleActions: "play none play none",
        scrub: 3,
        once: true
    }
  });
});