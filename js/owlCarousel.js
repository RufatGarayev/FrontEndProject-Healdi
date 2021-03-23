$(document).ready(function () {
    // home - services-owlCarousel start
    $(".owl-carousel.myservices").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    // home - services-owlCarousel end

    // about-us - services-owlCarousel start
    $(".owl-carousel.myservices-2").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // about-us - services-owlCarousel end

    // testimonials - services-owlCarousel start
    $(".owl-carousel.myservices-3").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dot: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
    // testimonials - services-owlCarousel end

    // home - testomonials-owlCarousel start
    $(".owl-carousel.myowl").owlCarousel({
        loop: true,
        margin: 30,
        dotsEach: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2.6
            }
        }
    });
    // home - testomonials-owlCarousel end

    // about-us - testomonials-owlCarousel start
    $(".owl-carousel.myowl2").owlCarousel({
        loop: true,
        margin: 30,
        dotsEach: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2.6
            }
        }
    });
    // about-us - testomonials-owlCarousel end
});