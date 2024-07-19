const openMenu = document.getElementById("ham-menu");
const closeMenu = document.getElementById("ham-close");
const navMenu = document.getElementById("nav-bar");
const scrollBtn = document.getElementById("scroll-to-top-btn");

// Scroll to func
navMenu.addEventListener("click", (e) => {
  const href = e.target.getAttribute("href");

  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();
    navMenu
      .querySelectorAll("a")
      .forEach((aEl) => aEl.classList.remove("active"));
    e.target.classList.add("active");
  }
  if (!href) return;
  document.querySelector(`${href}`).scrollIntoView({ behavior: "smooth" });
});

// Menu open and close function starts

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

// Menu open and close function ends

//  scroll to top effect
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

window.addEventListener("scroll", scrollFunction);

scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// GSAP Library uses
let tl = gsap.timeline();

tl.from("header>h2", {
  y: -15,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});

tl.from("#nav-bar", {
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

// Scroll trigger
gsap.registerPlugin(ScrollTrigger);
// Scroll trigger for Skill section
gsap.from("#skill-container>h2,.skill-logo", {
  opacity: 0,
  scale: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#skill-container",
    scroller: "body",
    start: "top 20%",
    end: "-100%",
    scrub: 3,
  },
});

// Scroll trigger for Contact section

gsap.from("#contact h2, .detail-section , .media-icon", {
  x: -300,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#contact",
    scroller: "body",
    start: "top 10%",
    end: "-10%",
    scrub: 2,
  },
});

// Scroll trigger finished
