const sliderContainer = document.getElementById('slider-container'); 
const sliderContent = document.getElementById('slider-content'); 
const prevButton = document.getElementById('prev-button'); 
const nextButton = document.getElementById('next-button'); 
 
let currentSlide = 0; 
const slideWidth = sliderContainer.offsetWidth; 
const totalSlides = sliderContent.children.length; 
 
prevButton.addEventListener('click', showPrevSlide); 
nextButton.addEventListener('click', showNextSlide); 
 
function showPrevSlide() { 
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
  updateSliderPosition(); 
} 
 
function showNextSlide() { 
  currentSlide = (currentSlide + 1) % totalSlides; 
  updateSliderPosition(); 
} 
 
function updateSliderPosition() { 
  const newPosition = -currentSlide * slideWidth; 
  sliderContent.style.setProperty('transform', `translateX(${newPosition}px)`); 
} 
 
window.addEventListener('resize', () => { 
  slideWidth = sliderContainer.offsetWidth; 
  updateSliderPosition(); 
});
