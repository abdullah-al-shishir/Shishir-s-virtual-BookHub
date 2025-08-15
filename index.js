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

    const newSection = catagorySection();
    mainBody.appendChild(newSection);

    console.log("Catagory Button is clicked");
  });
  // -------Blog Button------//
  // -------About Button------//
}
function catagorySection() {
  const catagoryContainer = document.createElement("div");
  catagoryContainer.classList.add("catagory-container");

  // First div
  const fictionDiv = document.createElement("div");
  const fictionHeading = document.createElement("h1");
  fictionHeading.innerText = "wh";
  const fictionList = document.createElement("p");
  fictionList.innerText = "a book wegfuwf wwfbwriug wbfuwf ubuwibfw wbfwvf fw";

  fictionDiv.appendChild(fictionHeading);
  fictionDiv.appendChild(fictionList);

  // Pushing all divs in the catagoryContainer div
  catagoryContainer.appendChild(fictionDiv);
  return catagoryContainer;
}

window.onload = () => {
  createBio();
};
