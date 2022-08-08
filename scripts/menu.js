// JavaScript Document

// Responsive Menu - Dropdown
const hamburgerBtn = document.getElementById("hamburger-btn");
const nav = document.getElementById("main-navigation");
let mediaQuery = window.matchMedia("(max-width:56.25em)");
hamburgerBtn.addEventListener("click", openMenu);
// Prevents the focus state from activating
hamburgerBtn.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

const checkQueries = () => {
  if (mediaQuery.matches) {
    nav.classList.add("hidden");
    nav.classList.remove("nav-animate");
    hamburgerBtn.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    hamburgerBtn.classList.add("hidden");
  }
};
checkQueries();
mediaQuery.addEventListener("change", checkQueries);

function openMenu() {
  nav.classList.toggle("hidden");
}
