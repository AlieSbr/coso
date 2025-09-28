const menuActive = document.querySelector(".ham-menu");
const sideMenu   = document.querySelector(".off-screen-menu");
const menuClose  = document.querySelector(".close-menu");

menuActive.addEventListener("click", () => {
  menuActive.classList.toggle("active");
  sideMenu.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
  menuActive.classList.remove("active");
  sideMenu.classList.remove("active");
});
