import Swiper from 'swiper';
import 'swiper/css/bundle';

const dots = document.querySelectorAll('.dot');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 12,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      spaceBetween: 24,
    },
  },
  on: {
    init: () => {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
    slideChange: () => {
      updateDots(gallerySwiper.realIndex);
      updateArrows();
    },
  },
});

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function updateArrows() {
  leftArrow.disabled = gallerySwiper.isBeginning;
  rightArrow.disabled = gallerySwiper.isEnd;
}

updateArrows();

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gallerySwiper.slideTo(index);
  });
});

leftArrow.addEventListener('click', () => {
  gallerySwiper.slidePrev();
});

rightArrow.addEventListener('click', () => {
  gallerySwiper.slideNext();
});
