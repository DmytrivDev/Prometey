import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-card', {
  direction: 'horizontal',
  speed: 1500,
  slidesPerView: 3,
  spaceBetween: 40,
});
