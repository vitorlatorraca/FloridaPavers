let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', function() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
});

document.getElementById('prev').addEventListener('click', function() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  images[currentIndex].classList.add('active');
});
