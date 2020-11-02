const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => {
      if (icon !== i) i.classList.remove("active");
    });
    icon.classList.toggle("active");
  });
});
