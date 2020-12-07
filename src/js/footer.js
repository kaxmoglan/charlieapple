const footerYear = document.querySelectorAll(".footer-year");

const d = new Date();
const year = d.getFullYear();

footerYear.forEach((footer) => (footer.innerText = year));
