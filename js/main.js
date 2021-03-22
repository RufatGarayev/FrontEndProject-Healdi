$(document).ready(function () {
  // reload-img start
  $(window).on("load", function () {
    $(".pre-icon").fadeOut("slow");
  });
  // reload-img end

  // nav-sticky start
  let stickyNavTop = $(".navBar").offset().top;

  let stickyNav = function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".navBar").addClass("sticky");
    } else {
      $(".navBar").removeClass("sticky");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
  // nav-sticky end
});

// nav burger-button start
let navButton = document.querySelector(".nav-button");
let navMenu = document.querySelector("nav .menu");

navButton.addEventListener("click", function () {
  navMenu.classList.toggle("d-block");
  navButton.classList.toggle("fa-times");
});
// nav burger-button end

// banner-arrow start
let banner = document.getElementById("banner");
let arrowLeft = document.querySelector(".carousel-control-prev");
let arrowRight = document.querySelector(".carousel-control-next");

banner.addEventListener("mouseenter", function () {
  arrowLeft.style.left = "-70px";
  arrowLeft.style.transition = "0.3s";
  arrowRight.style.right = "-70px";
  arrowRight.style.transition = "0.3s";
});
banner.addEventListener("mouseleave", function () {
  arrowLeft.style.left = "-150px";
  arrowRight.style.right = "-150px";
});
// banner-arrow end

// play-box popup effect start
$(document).ready(function () {
  $(".play-btn").click(function () {
    $(".play-box").css("display", "flex");
  });

  $(".play-box").click(function (e) {
    if ($(this).hasClass("play-box")) {
      $(".play-box").css("display", "none");
    }
  });
});
// play-box popup effect end

// doctors-section tab start
let myBtn = document.querySelectorAll("#doctors .nav-link");

myBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".show").classList.remove("show");
    document.getElementById(this.dataset.targetSection).classList.add("show");
    document.getElementById(this.dataset.targetSection).classList.add("active");
  });
});
// doctors-section tab end

// consultation-section dropdown start
var selectedoptions = [...document.querySelectorAll(".selectedoption")];
var selectedli = document.querySelector(".selectedoption.selected");
var gender = document.querySelector("#gender");
var category = document.querySelector("#category");
var genderul = document.querySelector("#genderselection");
var categoryul = document.querySelector("#categoryselection");
var oldactive;
let inputArrow = document.querySelectorAll("#consultation form .form-group i");
let input = document.querySelectorAll(
  "#consultation form .form-group .selectboxinput"
);

$(".selectboxinput").click(function () {
  var oldrotate = document.querySelector(".down");
  oldactive = document.querySelector(".activeul");
  if (oldactive != null) {
    $(oldactive).fadeOut();
    oldactive.classList.remove("activeul");
  }
  if (oldrotate != null) {
    oldrotate.classList.remove("down");
  }
  this.previousElementSibling.classList.add("down");
  this.nextElementSibling.classList.add("activeul");
});

gender.addEventListener("click", function () {
  if (oldactive == this.nextElementSibling) {
    $(genderul).fadeOut(100);
    oldactive.classList.remove("activeul");
    this.previousElementSibling.classList.remove("down");
    return;
  }
  $(genderul).fadeToggle(100);
});

category.addEventListener("click", function () {
  if (oldactive == this.nextElementSibling) {
    $(categoryul).fadeOut(100);
    oldactive.classList.remove("activeul");
    this.previousElementSibling.classList.remove("down");

    return;
  }
  $(categoryul).fadeToggle(100);
});

selectedoptions.forEach((s) => {
  s.addEventListener("click", function (e) {
    var oldselected = this.parentElement.querySelector(".selected");
    oldselected.classList.remove("selected");
    this.classList.add("selected");
    this.parentElement.previousElementSibling.value = this.innerText;
    var parent = this.parentElement;
    $(parent).fadeOut();
  });
});
// consultation-section dropdown end



// ======= Owl Carousel Start ======= //

// home services-owlCarousel start
$(".owl-carousel.myservices").owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  dot: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
// home services-owlCarousel end

// about-us services-owlCarousel start
$(".owl-carousel.myservices-2").owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  dot: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
// about-us services-owlCarousel end

// about-us services-owlCarousel start
$(".owl-carousel.myservices-3").owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  dot: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});
// about-us services-owlCarousel end

// testomonials-owlCarousel start
$(".owl-carousel.myowl").owlCarousel({
  loop: true,
  margin: 30,
  dotsEach: 2,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2.6,
    },
  },
});
// testomonials-owlCarousel end

// testomonials-owlCarousel start
$(".owl-carousel.myowl2").owlCarousel({
  loop: true,
  margin: 30,
  dotsEach: 2,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2.6,
    },
  },
});
// testomonials-owlCarousel end

// ======= Owl Carousel End ======= //