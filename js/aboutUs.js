// about-us services-owlCarousel start
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
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
  // about-us services-owlCarousel end

  // testomonials-owlCarousel start
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
// testomonials-owlCarousel end