import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2500,
  slidesPerView: 1, // Один слайд и маленькая часть следующего
  spaceBetween: 40, // Расстояние между слайдами
});
