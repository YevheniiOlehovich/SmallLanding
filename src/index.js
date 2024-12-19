import "@babel/polyfill";
import './index.html';
import './index.scss';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { highlights } from "./helpers";

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

const list = document.querySelector('.highlights__list');

highlights.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('highlights__item');
    
    const name = document.createElement('div');
    name.classList.add('highlights__item-name');
    name.textContent = item.name;

    const event = document.createElement('div');
    event.classList.add('highlights__item-event');
    event.textContent = item.event;

    const time = document.createElement('div');
    time.classList.add('highlights__item-time');
    time.textContent = item.date;

    li.appendChild(name);
    li.appendChild(event);
    li.appendChild(time);

    list.appendChild(li);
});