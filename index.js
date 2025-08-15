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

  // Fiction div
  const fictionDiv = document.createElement("div");
  fictionDiv.classList.add("common-div-style");
  const fictionHeading = document.createElement("h1");
  fictionHeading.classList.add("common-heading-style");
  fictionHeading.innerText = "Fiction";
  const fictionList = document.createElement("p");
  fictionList.innerHTML = `1. Create Your Own Business <br> 2. ইহযৌবন <br> 3. প্রেক্ষাপটের দাসদাসী <br> 4. জলেশ্বরী : উপন্যাস ও গল্প সংগ্রহ খণ্ড ১ <br> 5. আবুল মনসুর আহমদের শ্রেষ্ঠ গল্প (পেপারব্যাক) <br> 6. কার্ল মার্ক্সের সমাধিতে হুমায়ূন আহমেদ`;

  fictionDiv.appendChild(fictionHeading);
  fictionDiv.appendChild(fictionList);

  // Action Div
  const actionDiv = document.createElement("div");
  actionDiv.classList.add("common-div-style");
  const actionHeading = document.createElement("h1");
  actionHeading.classList.add("common-heading-style");
  actionHeading.innerText = "Action";
  const actionList = document.createElement("p");
  actionList.innerHTML = `1. Pumkin Juice <br> 2. শহীদুল জহির গল্পসমগ্র <br> 3. Until August: The Lost Novel`;

  actionDiv.appendChild(actionHeading);
  actionDiv.appendChild(actionList);

  // Slice of life div
  const sliceOfLifeDiv = document.createElement("div");
  sliceOfLifeDiv.classList.add("common-div-style");
  const sliceOfLifeHeading = document.createElement("h1");
  sliceOfLifeHeading.classList.add("common-heading-style");
  sliceOfLifeHeading.innerText = "Slice Of Life";
  const sliceOfLifeList = document.createElement("p");
  sliceOfLifeList.innerHTML = `1. Celebrate The Day of Forest <br> 2. আগুনের খেলা ও অন্যান্য গল্প <br> 3. চাষাঢে গল্প <br> 4. Still Me (Penguin)`;

  sliceOfLifeDiv.appendChild(sliceOfLifeHeading);
  sliceOfLifeDiv.appendChild(sliceOfLifeList);

  //Non-Fiction div
  const nonFictionDiv = document.createElement("div");
  nonFictionDiv.classList.add("common-div-style");
  const nonFictionHeading = document.createElement("h1");
  nonFictionHeading.classList.add("common-heading-style");
  nonFictionHeading.innerText = "Non-Fiction";
  const nonFictionList = document.createElement("p");
  nonFictionList.innerHTML = `1. Taxi Wallah and Other Stories <br> 2. The Living Mountain: A Fable For Our Times`;

  nonFictionDiv.appendChild(nonFictionHeading);
  nonFictionDiv.appendChild(nonFictionList);

  // Academic div
  const academicDiv = document.createElement("div");
  academicDiv.classList.add("common-div-style");
  const academicHeading = document.createElement("h1");
  academicHeading.classList.add("common-heading-style");
  academicHeading.innerText = "Academic";
  const academicList = document.createElement("p");
  academicList.innerHTML = `1. Anatomy of Silence`;

  academicDiv.appendChild(academicHeading);
  academicDiv.appendChild(academicList);

  // Pushing all divs in the catagoryContainer div
  catagoryContainer.appendChild(fictionDiv);
  catagoryContainer.appendChild(actionDiv);
  catagoryContainer.appendChild(sliceOfLifeDiv);
  catagoryContainer.appendChild(nonFictionDiv);
  catagoryContainer.appendChild(academicDiv);
  return catagoryContainer;
}

window.onload = () => {
  createBio();
};
