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
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// JavaScript for the menu buttons
const bioSection = document.getElementById("bio");
const booksContent = document.getElementById("booksContent");
const mainBody = document.getElementById("main-booklist-id");
const logoButton = document.getElementById("logo-btn");
const menuBooksBtn = document.getElementById("menu-books-btn");
const menuCatagoryBtn = document.getElementById("menu-catagory-btn");
const menuBlogBtn = document.getElementById("menu-blog-btn");
const menuAboutBtn = document.getElementById("menu-about-btn");
const footerPosition = document.getElementById("footer-positon");

let originalMainBodyContent = "";
const headingBio = document.createElement("h1");

function bookHub() {
  headingBio.innerHTML =
    "Welcome To <br> Shishir's Virtual BookHub. <br> Pamper Yourself with the best gift ever.";
  headingBio.classList.add("bio-text");
  bioSection.appendChild(headingBio);

  originalMainBodyContent = mainBody.innerHTML;

  // ------Logo Button------//
  logoButton.addEventListener("click", () => {
    bioSection.style.display = "block";
    headingBio.innerHTML =
      "Welcome To <br> Shishir's Virtual BookHub. <br> Pamper Yourself with the best gift ever.";
    mainBody.innerHTML = originalMainBodyContent;
    booksContent.innerHTML = "";
    footerPosition.classList.remove("footer-fixed");
  });

  // -------Books Button------//
  menuBooksBtn.addEventListener("click", () => {
    bioSection.style.display = "block";
    headingBio.innerHTML = "Enjoy all of my favourite books.";

    if (!booksContent.querySelector("p")) {
      const booksContentDetails = document.createElement("p");
      booksContentDetails.innerText = "Click on the books to see the details";
      booksContent.appendChild(booksContentDetails);
    }
    mainBody.innerHTML = originalMainBodyContent;
    footerPosition.classList.remove("footer-fixed");
    console.log("Books button is clicked");
  });

  // -------Catagories Button------//
  menuCatagoryBtn.addEventListener("click", () => {
    bioSection.style.display = "block";
    headingBio.innerHTML = "You can easily find all the books here! ";
    mainBody.innerHTML = "";
    booksContent.innerHTML = "";
    const newSection = catagorySection();
    mainBody.appendChild(newSection);

    footerPosition.classList.remove("footer-fixed");
    console.log("Catagory button is clicked");
  });

  // -------Blog Button------//
  menuBlogBtn.addEventListener("click", () => {
    blogSection();

    console.log("Blog button is clicked");
  });

  // -------About Button------//
  menuAboutBtn.addEventListener("click", () => {
    aboutSection();
    console.log("About button is clicked");
  });
}

function catagorySection() {
  const catagoryContainer = document.createElement("div");
  catagoryContainer.classList.add("catagory-container");

  const categories = [
    {
      title: "Fiction",
      list: [
        "1. Create Your Own Business",
        "2. ইহযৌবন",
        "3. প্রেক্ষাপটের দাসদাসী",
        "4. জলেশ্বরী : উপন্যাস ও গল্প সংগ্রহ খণ্ড ১",
        "5. আবুল মনসুর আহমদের শ্রেষ্ঠ গল্প (পেপারব্যাক)",
        "6. কার্ল মার্ক্সের সমাধিতে হুমায়ূন আহমেদ",
      ],
    },
    {
      title: "Action",
      list: [
        "1. Pumkin Juice",
        "2. শহীদুল জহির গল্পসমগ্র",
        "3. Until August: The Lost Novel",
      ],
    },
    {
      title: "Slice Of Life",
      list: [
        "1. Celebrate The Day of Forest",
        "2. আগুনের খেলা ও অন্যান্য গল্প",
        "3. চাষাঢে গল্প",
        "4. Still Me (Penguin)",
      ],
    },
    {
      title: "Non-Fiction",
      list: [
        "1. Taxi Wallah and Other Stories",
        "2. The Living Mountain: A Fable For Our Times",
      ],
    },
    { title: "Academic", list: ["1. Anatomy of Silence"] },
  ];

  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("common-div-style");
    const heading = document.createElement("h1");
    heading.classList.add("common-heading-style");
    heading.innerText = category.title;
    const list = document.createElement("p");
    list.innerHTML = category.list.join("<br>");
    categoryDiv.appendChild(heading);
    categoryDiv.appendChild(list);
    catagoryContainer.appendChild(categoryDiv);
  });

  return catagoryContainer;
}

function blogSection() {
  bioSection.style.display = "none";
  booksContent.innerHTML = "";
  mainBody.innerHTML = "";
  const blogDetails = document.createElement("h2");
  blogDetails.innerHTML = "Coming Soon!";
  blogDetails.classList.add("blog-details");
  mainBody.appendChild(blogDetails);
  footerPosition.classList.add("footer-fixed");
  console.log("About button is clicked");
}

function aboutSection() {
  bioSection.style.display = "none";
  headingBio.innerHTML = "About Shishir's Virtual BookHub";
  mainBody.innerHTML = `<div class="about-me-container">
        <h2 class="about-me-heading">
            About Me
        </h2>
        <p class="about-me-paragraph">
            As the creator of <span class="highlight">Shishir’s Virtual BookHub</span>, I’m <span class="highlight">Abdullah Al Shishir</span>, a passionate bibliophile. This website is a personal project born from my love for books and a desire to share that passion with others.
        </p>
        <p class="about-me-paragraph">
            I built this platform to blend my technical skills with my appreciation for the written word. My goal is to offer a simple, engaging space for discovering new books and organizing your reading journey.
        </p>
        <p class="about-me-paragraph">
            Thank you for visiting. I hope this hub helps you find your next favorite story. Happy reading!
        </p>
    </div>`;
  booksContent.innerHTML = "";
  footerPosition.classList.add("footer-fixed");
}

window.onload = () => {
  bookHub();
};
