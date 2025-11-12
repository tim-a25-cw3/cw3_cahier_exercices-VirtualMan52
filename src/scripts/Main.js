import Icons from './utils/Icons.js';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initializeCarousel();
  }

  initializeCarousel() {
    const swiper = new Swiper('.swiper-js', {
      // configure Swiper to use modules
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
