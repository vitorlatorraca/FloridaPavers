const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${index * width}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

window.addEventListener('resize', () => {
    showImage(currentIndex);
});
