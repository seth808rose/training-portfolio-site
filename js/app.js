const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");
toggleBtn = document.querySelector(".toggle-btn");
closeBtn = document.querySelector(".close-btn");

// fixed navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

//toggle button
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
// close button
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
