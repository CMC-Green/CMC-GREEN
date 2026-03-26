let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active-dot"));

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");

  currentSlideIndex = index;
}

function changeSlide(direction) {
  let newIndex = currentSlideIndex + direction;

  if (newIndex < 0) {
    newIndex = slides.length - 1;
  } else if (newIndex >= slides.length) {
    newIndex = 0;
  }

  showSlide(newIndex);
  resetAutoSlide();
}

function currentSlide(index) {
  showSlide(index);
  resetAutoSlide();
}

function autoSlide() {
  changeSlide(1);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  if (slides.length > 0) {
    showSlide(0);
    autoSlideInterval = setInterval(autoSlide, 5000);
  }
});

const sliderContainer = document.querySelector(".slider-container");
if (sliderContainer) {
  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(autoSlide, 5000);
  });
}
