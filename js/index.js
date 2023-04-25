 // import Swiper bundle with all modules installed
 import Swiper from 'swiper';
 import 'swiper/swiper.scss';
 import 'swiper/modules/navigation/navigation.scss';
 import 'swiper/modules/effect-cube/effect-cube.scss';
 import $ from "jquery";



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

$(function(){
    함수이름();


})


function 함수이름(){}