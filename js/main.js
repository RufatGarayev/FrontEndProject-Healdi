$(document).ready(function () {
  // loader - start
  $(window).on("load", function () {
    $(".pre-icon").fadeOut("slow");
  });
  // loader - end


  // nav-sticky - start
  let stickyNavTop = $(".navbar").offset().top;

  let stickyNav = function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
  // nav-sticky - end


  // changing navbar li icon - start
  $(".navbar .blog").hover(function () {
    $(".navbar .blog i").toggleClass("fa-angle-up");
  });
  // changing navbar li icon - end


  // changing navbar button - start
  $(document).on("click", ".navbar button i", () => {
    $(".navbar button i").toggleClass("fa-times");
  });
  // changing navbar button - end 


  // play-box popup effect - start
  $(".play-btn").click(function () {
    $(".play-box").css("display", "flex");
  });

  $(".play-box").click(function (e) {
    if ($(this).hasClass("play-box")) {
      $(".play-box").css("display", "none");
    }
  });
  // play-box popup effect - end


  // counter-up - start
  $(".counter-up").counterUp({
    delay: 50,
    time: 5000,
  });
  // counter-up - end
});


// doctors section > tab - start
let myBtn = document.querySelectorAll("#doctors .nav-link");

myBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".show").classList.remove("show");
    document.getElementById(this.dataset.targetSection).classList.add("show");
    document.getElementById(this.dataset.targetSection).classList.add("active");
  });
});
// doctors section > tab - end


// === consultation section > dropdown - start === //
// taking the elements
let selectedoptions = [...document.querySelectorAll(".selectedoption")];
let selectedli = document.querySelector(".selectedoption.selected");
let gender = document.querySelector("#gender");
let category = document.querySelector("#category");
let genderul = document.querySelector("#genderselection");
let categoryul = document.querySelector("#categoryselection");
let oldactive;
let inputArrow = document.querySelectorAll("#consultation form .form-group i");
let input = document.querySelectorAll(
  "#consultation form .form-group .selectboxinput"
);

// processes that happen when clicking on the input
$(".selectboxinput").click(function () {
  let oldrotate = document.querySelector(".down");
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

// processes that happen when clicking on the gender input
gender.addEventListener("click", function () {
  if (oldactive == this.nextElementSibling) {
    $(genderul).fadeOut(100);
    oldactive.classList.remove("activeul");
    this.previousElementSibling.classList.remove("down");
    return;
  }
  $(genderul).fadeToggle(100);
});

// processes that happen when clicking on the category input
category.addEventListener("click", function () {
  if (oldactive == this.nextElementSibling) {
    $(categoryul).fadeOut(100);
    oldactive.classList.remove("activeul");
    this.previousElementSibling.classList.remove("down");
    return;
  }
  $(categoryul).fadeToggle(100);
});

// processes that happen when clicking on the dropdown_li
selectedoptions.forEach((s) => {
  s.addEventListener("click", function (e) {
    let oldselected = this.parentElement.querySelector(".selected");
    let parent = this.parentElement;
    oldselected.classList.remove("selected");
    this.classList.add("selected");
    this.parentElement.previousElementSibling.value = this.innerText;
    this.parentElement.parentElement.firstElementChild.classList.remove("down");
    $(parent).fadeOut();
  });
});
// === consultation section > dropdown - end === //