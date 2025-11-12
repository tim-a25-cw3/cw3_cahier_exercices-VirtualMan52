import Icons from './utils/Icons.js';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initializeCarousel();
  }

  initializeCarousel() {
    const target = document.querySelector('.js-swiper');
    if (target) {
      const swiper = new Swiper(target, {
        // configure Swiper to use modules
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
