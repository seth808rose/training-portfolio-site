const navbar = document.querySelector(".nav");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// fixed navabr

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// toggle button

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

// close sidebar button

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

