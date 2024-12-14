// Select elements
const bookContainer = document.getElementById('book-container');
const closeBtn = document.getElementById('close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const papers = document.querySelectorAll('.paper');
let currentIndex = 0;

// Expand the flipbook on click
bookContainer.addEventListener('click', () => {
  bookContainer.classList.add('fullscreen');
  closeBtn.style.display = 'block';
  nextBtn.style.display = 'block';
  prevBtn.style.display = 'block';
});

// Close the flipbook
closeBtn.addEventListener('click', () => {
  bookContainer.classList.remove('fullscreen');
  closeBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';
});

// Flip page forward
nextBtn.addEventListener('click', () => {
  if (currentIndex < papers.length - 1) {
    papers[currentIndex].classList.add('flipped');
    currentIndex++;
  }
});

// Flip page backward
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    papers[currentIndex].classList.remove('flipped');
  }
});
