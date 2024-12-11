// main.js
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", () => {
    const isOpen = navbar.classList.contains("hidden");
    if (isOpen) {
      navbar.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      navbar.classList.add("hidden");
      document.body.style.overflow = ""; // Enable scroll
    }
  });

  // Function to handle clicking on navigation links
  window.handleClick = function () {
    navbar.classList.add("hidden"); // Hide navbar on click
    document.body.style.overflow = ""; // Re-enable scroll
  };
});
