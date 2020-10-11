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