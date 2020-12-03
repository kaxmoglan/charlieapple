const footerYearText = document.querySelector("#year");

const d = new Date();
const year = d.getFullYear();

footerYearText.innerText = year;
