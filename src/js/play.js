import Swiper from 'swiper';
import 'swiper/css/bundle';

const playLeftArrow = document.getElementById('playLeftArrow');
const playRightArrow = document.getElementById('playRightArrow');
const playDots = document.querySelectorAll('.play-dot');

const playSwiper = new Swiper('.play-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 12,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  on: {
    init: () => {
      document.querySelector('.play-swiper-container').classList.add('show');
    },
    slideChange: () => {
      updatePlayDots(playSwiper.realIndex);
      updatePlayArrows();
    },
  },
});

function updatePlayDots(index) {
  let startIndex;

  if (index === 0) {
    startIndex = 0;
  } else if (index === playSwiper.slides.length - 1) {
    startIndex = index - 2;
  } else {
    startIndex = index - 1;
  }

  playDots.forEach((dot, i) => {
    const slideIndex = startIndex + i;
    dot.classList.toggle('active', slideIndex === index);
    dot.style.display = 'inline-block';
    dot.dataset.slideIndex = slideIndex;
  });
}

function updatePlayArrows() {
  playLeftArrow.disabled = playSwiper.isBeginning;
  playRightArrow.disabled = playSwiper.isEnd;
}

updatePlayArrows();
updatePlayDots(playSwiper.realIndex);

playDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.dataset.slideIndex, 10);
    playSwiper.slideTo(slideIndex);
  });
});

playLeftArrow.addEventListener('click', () => {
  playSwiper.slidePrev();
});

playRightArrow.addEventListener('click', () => {
  playSwiper.slideNext();
});
