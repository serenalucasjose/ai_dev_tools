// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function slide() {
  currentIndex = (currentIndex + 1) % slides.length;
  const translateX = currentIndex * -100;
  slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(slide, 5000); // Auto slide every 5 seconds
