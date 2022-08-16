//hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Pagi";
} else if (time < 20) {
  greeting = "Siang";
} else {
  greeting = "Malam";
}
document.getElementById("demo").innerHTML = greeting;
