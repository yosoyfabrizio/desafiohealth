const previewImages = document.querySelectorAll('.carousel__preview img');
const lightbox = document.querySelector('.carousel__lightbox');
const lightboxImg = document.querySelector('.carousel__lightbox__img');
const closeBtn = document.querySelector('.carousel__close');

let currentIndex = 0;

previewImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.keyCode === 27) {
      lightbox.style.display = 'none';
    } else if (e.keyCode === 37) {
      currentIndex = currentIndex === 0 ? previewImages.length - 1 : currentIndex - 1;
      lightboxImg.src = previewImages[currentIndex].src;
    } else if (e.keyCode === 39) {
      currentIndex = currentIndex === previewImages.length - 1 ? 0 : currentIndex + 1;
      lightboxImg.src = previewImages[currentIndex].src;
    }
  }
});