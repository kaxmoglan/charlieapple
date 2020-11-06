const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const mobileMenu = document.querySelector("#mobile-menu__menu");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    mobileMenu.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");

    showMenu = false;
  }
}
