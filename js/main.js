let navLinks = document.querySelectorAll("nav .menu li a");

// nav-links hover effects
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    link.style.transition = "0.2s linear";
    if (link.lastChild.classList.contains("fa-angle-down")) {
      link.lastChild.classList.remove("fa-angle-down");
      link.lastChild.classList.add("fa-angle-up");
    }
  });

  link.addEventListener("mouseleave", function () {
    link.lastChild.classList.add("fa-angle-down");
    link.lastChild.classList.remove("fa-angle-up");
  });
});

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
