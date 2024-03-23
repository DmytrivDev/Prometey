import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-banner', {
  direction: 'horizontal',
  speed: 1500,
  slidesPerView: 'auto',
  spaceBetween: 40,
});
