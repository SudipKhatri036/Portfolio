const openMenu = document.getElementById("ham-menu");
const closeMenu = document.getElementById("ham-close");
const navMenu = document.getElementById("nav-bar");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  navMenu.style.display = "flex";
  closeMenu.style.display = "block";

  gsap.from(closeMenu, {
    y: -40,
    duration: 1,
    delay: 0.3,
    opacity: 0,
    ease: "bounce",
  });
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  navMenu.style.display = "none";
  openMenu.style.display = "block";

  gsap.from(openMenu, {
    y: -40,
    duration: 1,
    delay: 0.3,
    opacity: 0,
    ease: "bounce",
  });
});

//  scroll to top effect
const scrollBtn = document.getElementById("scroll-to-top-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click", scrollWin);
function scrollWin() {
  window.scrollTo(0, 0);
}

// GSAP Library uses
let tl = gsap.timeline();

tl.from("header>h2", {
  y: -15,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

tl.from("#nav-bar>h3", {
  y: -15,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from("#profile", {
  x: -15,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".hero-content>h1 , .title, .sub-title", {
  xPercent: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  delay: 1,
});
