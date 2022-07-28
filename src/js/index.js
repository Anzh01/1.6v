import '../scss/style.scss';
import '../js/brands.js';
import '../js/side-menu.js';
import '../js/side-form.js';
import '../js/main__buttons.js'

import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);
window.onload =  () => { 
  if (window.matchMedia('(max-width: 767px)').matches) { 
    const swiper = new Swiper('.swiper-container', {  
      direction: 'horizontal', 
      loop: true,  
      spaceBetween: 20, 
      slidesPerView: 'auto', 
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true,
      },
      init: true,
      observer: true,  
    });
  }
}

// var swiper;
// var init = false;
// var pagination = document.querySelector('.swiper-pagination');

// function swiperMode() {
//     if(window.innerWidth < 768) {
//         if (!init) {
//             init = true;
//             swiper = new Swiper('.swiper-container', {
//                 Pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true,
//                     },
//                 slidesPerView: 'auto',
//                 direction: 'horizontal',
//                 spaceBetween: 16,
//                 centeredSlides: true,
//                 observer: true,
//             });
//             pagination.classList.remove('hidden');
//         }

//     }

//     else {
//         init = false;
//         swiper.destroy();
//         pagination.classList.add('hidden');
//     }
// }

// window.addEventListener('resize', swiperMode);