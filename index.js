// JavaScript for the mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const mainMenu = document.getElementById("main-menu");

mobileMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
});
