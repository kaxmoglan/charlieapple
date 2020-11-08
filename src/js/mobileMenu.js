// SHOW | HIDE MENU

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const mobileMenu = document.querySelector(".mobile-menu__menu");

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

// MENU FUNCTIONALITY

// Get Page Menu
const originalMenu = document.getElementsByClassName(
  "secondary-nav__list original"
)[0];
let originalMenuId = originalMenu.id;
const menuContainer = document.querySelector(".mobile-menu__secondary-nav");

// Get Menus
const eventsMenu = document.querySelector("#events-list");
const designMenu = document.querySelector("#design-list");
const marketingMenu = document.querySelector("#marketing-list");
const moreMenu = document.querySelector("#more-list");

// Nav Buttons
const eventsBtn = document.querySelector("#main-menu__events");
const designBtn = document.querySelector("#main-menu__design");
const marketingBtn = document.querySelector("#main-menu__marketing");
const moreBtn = document.querySelector("#main-menu__more");
const allButtons = document.querySelectorAll(".main-nav__list-item");

// Current Menu
let currentMenuId = originalMenuId;
let currentMenu = originalMenu;

// Event Listeners
eventsBtn.addEventListener("click", handleEventsMenu);
designBtn.addEventListener("click", handleDesignMenu);
marketingBtn.addEventListener("click", handleMarketingMenu);
moreBtn.addEventListener("click", handleMoreMenu);

// Handlers
function handleEventsMenu() {
  if (currentMenuId !== "events-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    eventsBtn.classList.add("active");

    removeCurrentMenu();

    if (originalMenuId !== "events-list") {
      showSubMenu(eventsMenu, "events-list");
    } else {
      showOriginalMenu();
    }
  }
}
function handleDesignMenu() {
  if (currentMenuId !== "design-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    designBtn.classList.add("active");

    removeCurrentMenu();

    if (originalMenuId !== "design-list") {
      showSubMenu(designMenu, "design-list");
    } else {
      showOriginalMenu();
    }
  }
}
function handleMarketingMenu() {
  if (currentMenuId !== "marketing-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    marketingBtn.classList.add("active");

    removeCurrentMenu();

    if (originalMenuId !== "marketing-list") {
      showSubMenu(marketingMenu, "marketing-list");
    } else {
      showOriginalMenu();
    }
  }
}
function handleMoreMenu() {
  if (currentMenuId !== "more-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    moreBtn.classList.add("active");

    removeCurrentMenu();

    if (originalMenuId !== "more-list") {
      showSubMenu(moreMenu, "more-list");
    } else {
      showOriginalMenu();
    }
  }
}

// FUNCTIONS

function removeCurrentMenu() {
  currentMenu.classList.add("fade-out");
  setTimeout(() => currentMenu.classList.add("remove"), 350);
}

function showSubMenu(menu, menuId) {
  setTimeout(() => menu.classList.remove("remove"), 350);

  setTimeout(() => {
    menu.classList.remove("fade-out");
    currentMenuId = menuId;
    currentMenu = menu;
  }, 400);
}

function showOriginalMenu() {
  setTimeout(() => originalMenu.classList.remove("remove"), 350);
  setTimeout(() => {
    originalMenu.classList.remove("fade-out");
    currentMenuId = originalMenuId;
    currentMenu = originalMenu;
  }, 400);
}
