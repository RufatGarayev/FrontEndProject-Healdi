let navLinks = document.querySelectorAll("nav .menu li a");
let banner = document.getElementById("banner");
let arrowLeft = document.querySelector(".carousel-control-prev");
let arrowRight = document.querySelector(".carousel-control-next");
var navbar = document.getElementsByTagName("nav");

// nav-sticky start
window.onscroll = function() {
  if($(window).scrollTop()  >= 80 ){
    $(navbar).addClass("sticky");
  }
  else{
    $(navbar).removeClass("sticky")
  }
};
// nav-sticky end

// nav-links hover effects start
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function() {
    link.style.transition = "0.2s linear";
    if (link.lastChild.classList.contains("fa-angle-down")) {
      link.lastChild.classList.remove("fa-angle-down");
      link.lastChild.classList.add("fa-angle-up");
    }
  });

  link.addEventListener("mouseleave", function() {
    link.lastChild.classList.add("fa-angle-down");
    link.lastChild.classList.remove("fa-angle-up");
  });
});
// nav-links hover effects end

// banner arrow
    banner.addEventListener("mouseenter", function(){
      arrowLeft.style.left = "-70px";    
      arrowLeft.style.transition = "0.3s";    
      arrowRight.style.right = "-70px";
      arrowRight.style.transition = "0.3s"; 
    });
    banner.addEventListener("mouseleave", function(){
      arrowLeft.style.left = "-150px";
      arrowRight.style.right = "-150px";
    });
// banner arrow

// play-box popup effect start
$(document).ready(function() {
  $(".play-btn").click(function() {
    $(".play-box").css("display", "flex");
  });

  $(".play-box").click(function(e) {
    if ($(this).hasClass("play-box")) {
      $(".play-box").css("display", "none");
    }
  });
});
// play-box popup effect end

// services-owlCarousel start
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
      items: 2
    },
    1000: {
      items: 3
    }
  }
});
// services-owlCarousel end

// doctors-section tab start
let myBtn = document.querySelectorAll(".nav-link");

myBtn.forEach((btn) => {
  btn.addEventListener("click", function() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".show").classList.remove("show");
    document.getElementById(this.dataset.targetSection).classList.add("show");
    document.getElementById(this.dataset.targetSection).classList.add("active");
  });
});
// doctors-section tab end

// testomonials-owlCarousel start
$(".owl-carousel.myowl").owlCarousel({
  loop: true,
  margin: 30,
  dotsEach:2,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2.6,
    }
  }
});
// testomonials-owlCarousel end
