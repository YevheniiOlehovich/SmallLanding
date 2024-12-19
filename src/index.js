import "@babel/polyfill";
import './index.html';
import './index.scss';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation], 
        loop: true, 
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 'auto', 
        spaceBetween: 20,  
    });
});
