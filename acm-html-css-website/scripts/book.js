const bookViewer = document.getElementById("bookViewer");
const pages = document.querySelectorAll(".book-page");
let currentPage = 0;

function openBookViewer() {
  bookViewer.style.display = "flex";
  showPage(currentPage);
}

function closeBookViewer() {
  bookViewer.style.display = "none";
}

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}