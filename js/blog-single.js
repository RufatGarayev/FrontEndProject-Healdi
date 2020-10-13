// reload-img start
$(window).on("load", function() {
    $(".pre-icon").fadeOut("slow");
});
// reload-img end

// nav-sticky start
window.onscroll = function() {
    if ($(window).scrollTop() >= 80) {
      $(".navBar").addClass("sticky");
    } else {
      $(".navBar").removeClass("sticky");
    }
};
// nav-sticky end

// nav-links hover effects start
let navLinks = document.querySelectorAll("nav .menu li a");
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function() {
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

// nav burger-button start
let navButton = document.querySelector(".nav-button");
let navMenu = document.querySelector("nav .menu");

navButton.addEventListener("click", function(){
    navMenu.classList.toggle("d-block");
    navButton.classList.toggle("fa-times");
});
// nav burger-button end