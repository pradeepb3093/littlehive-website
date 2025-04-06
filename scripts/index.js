document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  const hamburgerIcon = hamburger.querySelector("i");

  // Add click event listener to the hamburger menu
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle the 'active' class on the navbar

    // Toggle the icon between 'fa-bars' and 'fa-times'
    if (navbar.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    } else {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    }
  });

  // Optional: Close the menu when a menu item is clicked
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navbar.classList.remove("active"); // Remove 'active' class
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars"); // Reset to 'fa-bars'
    });
  });
});
