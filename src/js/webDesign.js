// TOP BANNER ICON ROLLOVERS ON CLICK FOR TOUCH SCREENS
const icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => {
      if (icon !== i) i.classList.remove("active");
    });
    icon.classList.toggle("active");
  });
});

// PORTFOLIO GSAP
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio-container",
    start: "center center",
    end: "+=3000px",
    scrub: true,
    pin: true,
  },
});

tl.to("#computer", {
  width: 700,
  height: "100%",
})

  .to("#turn-on", {
    opacity: 1,
  })

  .to("#laborjee", {
    opacity: 1,
  })

  .to("#laborjee", {
    y: "-461px",
  })

  .to("#olive", {
    x: "-359px",
  })

  .to("#azadi", {
    x: 0,
  })

  .to("#azadi", {
    y: "-233px",
  })

  .to("#creperie", {
    x: 0,
  })

  .to("#creperie", {
    y: "-344px",
  })

  .to("#turn-off", {
    opacity: 1,
  });
