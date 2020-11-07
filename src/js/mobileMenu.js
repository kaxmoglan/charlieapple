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
const originalMenu = document.querySelector(".secondary-nav__list");
let originalMenuId = originalMenu.id;
const menuContainer = document.querySelector(".mobile-menu__secondary-nav");

// Nav Buttons
const eventsBtn = document.querySelector("#main-menu__events");
const designBtn = document.querySelector("#main-menu__design");
const marketingBtn = document.querySelector("#main-menu__marketing");
const moreBtn = document.querySelector("#main-menu__more");

const allButtons = document.querySelectorAll(".main-nav__list-item");

let currentMenuId = originalMenuId;
let currentMenu = originalMenu;

let eventsMenu, designMenu, marketingMenu, moreMenu;

const handleEventsMenu = () => {
  if (currentMenuId !== "events-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    eventsBtn.classList.add("active");

    currentMenu.classList.remove("fade-in");
    currentMenu.classList.add("fade-out");
    setTimeout(() => currentMenu.classList.add("remove"), 350);

    if (originalMenuId !== "events-list") {
      if (eventsMenu) {
        setTimeout(() => eventsMenu.classList.remove("remove"), 350);
        setTimeout(() => {
          eventsMenu.classList.remove("fade-out");
          eventsMenu.classList.add("fade-in");
          currentMenuId = "events-list";
          currentMenu = eventsMenu;
        }, 400);
      } else {
        setTimeout(() => createEventsMenu(), 350);
        setTimeout(() => {
          eventsMenu = document.querySelector("#events-menu-overlay");
          eventsMenu.classList.remove("fade-out");
          eventsMenu.classList.add("fade-in");
          currentMenuId = "events-list";
          currentMenu = eventsMenu;
        }, 400);
      }
    }
  }
};

const handleMarketingMenu = () => {
  if (currentMenuId !== "marketing-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    marketingBtn.classList.add("active");

    currentMenu.classList.remove("fade-in");
    currentMenu.classList.add("fade-out");
    setTimeout(() => currentMenu.classList.add("remove"), 350);

    if (originalMenuId !== "marketing-list") {
      setTimeout(() => createMarketingMenu(), 350);
      setTimeout(() => {
        marketingMenu = document.querySelector("#marketing-menu-overlay");
        eventsMenu.classList.remove("fade-out");
        eventsMenu.classList.add("fade-in");
        currentMenuId = "marketing-list";
        currentMenu = marketingMenu;
      }, 400);
    } else {
      setTimeout(() => originalMenu.classList.remove("remove"), 350);
      setTimeout(() => {
        originalMenu.classList.remove("fade-out");
        originalMenu.classList.add("fade-in");
        currentMenuId = "marketing-list";
        currentMenu = originalMenu;
      }, 400);
    }
  }
};

eventsBtn.addEventListener("click", handleEventsMenu);
marketingBtn.addEventListener("click", handleMarketingMenu);

// Create Menus

function createEventsMenu() {
  const subItems = [
    { name: "Events", link: "/events.html" },
    { name: "Event Management", link: "/event-management.html" },
    { name: "Markets", link: "/markets.html" },
  ];
  const list = document.createElement("ul");
  list.classList.add("secondary-nav__list");
  list.id = "events-menu-overlay";
  list.classList.add("fade-out");
  subItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", item.link);
    link.innerText = item.name;

    listItem.appendChild(link);
    list.appendChild(listItem);
    menuContainer.appendChild(list);
  });
}

function createMarketingMenu() {
  const subItems = [
    { name: "Marketing", link: "/marketing.html" },
    { name: "Workshops", link: "/workshops.html" },
    { name: "Freelance", link: "/freelance-marketing.html" },
    { name: "Social Media", link: "/social-media.html" },
    { name: "Copywriting", link: "/copywriting-services.html" },
    { name: "Consultancy", link: "/consultancy.html" },
  ];
  const list = document.createElement("ul");
  list.classList.add("secondary-nav__list");
  list.id = "marketing-menu-overlay";
  list.classList.add("fade-out");
  subItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", item.link);
    link.innerText = item.name;

    listItem.appendChild(link);
    list.appendChild(listItem);
    menuContainer.appendChild(list);
  });
}
