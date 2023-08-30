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

// Function to handle the link click event
function handleLinkClick(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = "/"; // Redirect to the homepage
}

// Attach event listeners to phone number links
document.addEventListener("DOMContentLoaded", function () {
  var phoneLinks = document.querySelectorAll("a[href^='tel:']");
  phoneLinks.forEach(function (link) {
    link.addEventListener("click", handleLinkClick);
  });
});
