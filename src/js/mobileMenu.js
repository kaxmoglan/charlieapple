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

// Original Menu
let currentMenuId = originalMenuId;
let currentMenu = originalMenu;

// REQUIRED VARIABLES
let eventsMenu, designMenu, marketingMenu, moreMenu, newMenu;

// EVENT LISTENERS
eventsBtn.addEventListener("click", handleEventsMenu);
designBtn.addEventListener("click", handleDesignMenu);
marketingBtn.addEventListener("click", handleMarketingMenu);
moreBtn.addEventListener("click", handleMoreMenu);

// HANDLERS
function handleEventsMenu() {
  if (currentMenuId !== "events-list") {
    allButtons.forEach((btn) => btn.classList.remove("active"));
    eventsBtn.classList.add("active");

    removeCurrentMenu();

    if (originalMenuId !== "events-list") {
      if (eventsMenu) {
        showCreatedMenu(eventsMenu, "events-list");
      } else {
        createAndShowMenu(
          createEventsMenu,
          "#events-menu-overlay",
          "events-list"
        );
      }
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
      if (designMenu) {
        showCreatedMenu(designMenu, "design-list");
      } else {
        createAndShowMenu(
          createDesignMenu,
          "#design-menu-overlay",
          "design-list"
        );
      }
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
      if (marketingMenu) {
        showCreatedMenu(marketingMenu, "marketing-list");
      } else {
        createAndShowMenu(
          createMarketingMenu,
          "#marketing-menu-overlay",
          "marketing-list"
        );
      }
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
      if (moreMenu) {
        showCreatedMenu(moreMenu, "more-list");
      } else {
        createAndShowMenu(createMoreMenu, "#more-menu-overlay", "more-list");
      }
    } else {
      showOriginalMenu();
    }
  }
}

// FUNCTIONS

function removeCurrentMenu() {
  currentMenu.classList.remove("fade-in");
  currentMenu.classList.add("fade-out");
  setTimeout(() => currentMenu.classList.add("remove"), 350);
}

function showCreatedMenu(menu, menuId) {
  setTimeout(() => menu.classList.remove("remove"), 350);

  setTimeout(() => {
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");
    currentMenuId = menuId;
    currentMenu = menu;
  }, 400);
}

function createAndShowMenu(cb, querySelector, menuId) {
  setTimeout(() => cb(), 350);

  setTimeout(() => {
    newMenu = document.querySelector(querySelector);
    newMenu.classList.remove("fade-out");
    newMenu.classList.add("fade-in");
    currentMenuId = menuId;
    currentMenu = newMenu;

    if (menuId === "events-list") eventsMenu = newMenu;
    if (menuId === "marketing-list") marketingMenu = newMenu;
    if (menuId === "design-list") designMenu = newMenu;
    if (menuId === "more-list") moreMenu = newMenu;
  }, 400);
}

function showOriginalMenu() {
  setTimeout(() => originalMenu.classList.remove("remove"), 350);
  setTimeout(() => {
    originalMenu.classList.remove("fade-out");
    originalMenu.classList.add("fade-in");
    currentMenuId = originalMenuId;
    currentMenu = originalMenu;
  }, 400);
}

// CREATE MENUS

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

function createDesignMenu() {
  const subItems = [
    { name: "Design", link: "/graphic-design.html" },
    { name: "Website Design", link: "/website-design.html" },
    { name: "Design for Print", link: "/design-for-print.html" },
    { name: "Logo Design", link: "/logo-design.html" },
  ];
  const list = document.createElement("ul");
  list.classList.add("secondary-nav__list");
  list.id = "design-menu-overlay";
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

function createMoreMenu() {
  const subItems = [
    { name: "Pricing", link: "/pricing.html" },
    { name: "Privacy", link: "/privacy.html" },
    { name: "Contact", link: "/contact-us.html" },
    { name: "Site Map", link: "/sitemap.html" },
    { name: "Testimonials", link: "/testimonials.html" },
  ];
  const list = document.createElement("ul");
  list.classList.add("secondary-nav__list");
  list.id = "more-menu-overlay";
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
