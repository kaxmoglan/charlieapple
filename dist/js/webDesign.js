const icons=document.querySelectorAll(".icon");icons.forEach(t=>{t.addEventListener("click",()=>{icons.forEach(e=>{t!==e&&e.classList.remove("active")}),t.classList.toggle("active")})});let tl=gsap.timeline({scrollTrigger:{trigger:"#portfolio-container",start:"center center",end:"+=3000px",scrub:!0,pin:!0}});tl.to("#computer",{width:700,height:"100%"}).to("#turn-on",{opacity:1}).to("#laborjee",{opacity:1}).to("#laborjee",{y:"-461px"}).to("#olive",{x:"-359px"}).to("#azadi",{x:0}).to("#azadi",{y:"-233px"}).to("#creperie",{x:0}).to("#creperie",{y:"-344px"}).to("#turn-off",{opacity:1});