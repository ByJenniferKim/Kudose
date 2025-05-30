// Promotional Ad
const carousel = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.carousel-btn.left');
const rightArrow = document.querySelector('.carousel-btn.right');

function scrollCarousel(direction) {
  const tileWidth = 200 + 16; // tile + gap
  const scrollDistance = tileWidth * 4;

  carousel.scrollBy({
    left: direction * scrollDistance,
    behavior: 'smooth'
  });

  // Wait a bit to check new position after scrolling
  setTimeout(checkArrows, 300);
}

// Check if we should disable arrows
function checkArrows() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  const currentScroll = carousel.scrollLeft;

  if (currentScroll <= 0) {
    leftArrow.classList.add('disabled');
  } else {
    leftArrow.classList.remove('disabled');
  }

  if (currentScroll >= maxScrollLeft - 5) {
    rightArrow.classList.add('disabled');
  } else {
    rightArrow.classList.remove('disabled');
  }
}

// Initial check (when page loads)
window.addEventListener('load', checkArrows);

// Feed Area

function toggleLike(button) {
  const icon = button.querySelector("i");
  const countSpan = button.querySelector(".like-count");

  let count = parseInt(countSpan.textContent);

  if (icon.classList.contains("fa-solid")) {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    countSpan.textContent = count - 1;
  } else {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    countSpan.textContent = count + 1;
  }
}

// Tab logic
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tc => tc.classList.remove('active'));

      // Activate clicked tab and corresponding content
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab') + '-tab';
      document.getElementById(target).classList.add('active');
    });
  });

  // Default to "Feed" tab
  document.getElementById('feed-tab').classList.add('active');
});
