// JavaScript for the mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const mainMenu = document.getElementById("main-menu");

mobileMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
});
// Creating underline when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove the 'active' class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add the 'active' class to the clicked link
      this.classList.add("active");
    });
  });
});

// JavaScript for the menu buttons
const bioSection = document.getElementById("bio");
const mainBody = document.getElementById("main-booklist-id");
const logoButton = document.getElementById("logo-btn");
const menuBooksBtn = document.getElementById("menu-books-btn");
const menuCatagoryBtn = document.getElementById("menu-catagory-btn");
const menuBlogBtn = document.getElementById("menu-blog-btn");
const menuAboutBtn = document.getElementById("menu-about-btn");

let originalMainBodyContent = "";
// -Dynamically created Bio here- //

function createBio() {
  const headingBio = document.createElement("h1");
  headingBio.innerHTML =
    "Welcome To <br> Shishir's Virtual BookHub. <br> Pamper Yourself with the best gift ever.";
  headingBio.classList.add("bio-text");
  bioSection.appendChild(headingBio);

  originalMainBodyContent = mainBody.innerHTML;

  // ------Logo Button------//
  logoButton.addEventListener("click", () => {
    headingBio.innerHTML =
      "Welcome To <br> Shishir's Virtual Bookshelf. <br> Pamper Yourself with the best gift ever.";
    mainBody.innerHTML = originalMainBodyContent;
  });
  // -------Books Button------//
  menuBooksBtn.addEventListener("click", () => {
    headingBio.innerHTML = "Enjoy all of my favourite books.";
    mainBody.innerHTML = originalMainBodyContent;
  });
  // -------Catagories Button------//
  menuCatagoryBtn.addEventListener("click", () => {
    headingBio.innerHTML = "You can easily find all the books here! ";
    mainBody.innerHTML = ``;

    console.log("clicked");
  });
  // -------Blog Button------//
  // -------About Button------//
}
window.onload = () => {
  createBio();
};
