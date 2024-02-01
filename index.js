const openMenu = document.getElementById("ham-menu");
const closeMenu = document.getElementById("ham-close");
const navMenu = document.getElementById("nav-bar");
openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  navMenu.style.display = "flex";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  navMenu.style.display = "none";
  openMenu.style.display = "block";
});

// Trying scroll effect
const scrollBtn = document.getElementById("scroll-to-top-btn");

scrollBtn.addEventListener("click", scrollWin);
function scrollWin() {
  window.scrollTo(0, 0);
}
