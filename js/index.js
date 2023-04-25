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

  // box02->gallery
  $(function(){
    // li Width 값 변수만들기
    let liWidth = $('#show li').width();
    // console.log(liWidth);
    $('#gallery>.prev').on('click',function(e){
      $('#show>#all>ul').animate({marginLeft:'-=' + liWidth + 'px'},function(){
        // 클릭하면 li 첫번째 뒤로 이동+css수정
        $('#show>#all>ul>li:first-child').appendTo('#show>#all>ul');
        $('#show>#all>ul').css('margin-left','-' + liWidth + 'px');
      });
    });
    $('#gallery>.next').on('click',function(e){
      $('#show>#all>ul').animate({marginLeft:'+=' + liWidth + 'px'});
      $('#show>#all>ul>li:last-child').prependTo('#show>#all>ul');
      $('#show>#all>ul').css('margin-left','+' + liWidth + 'px');
    });
  });

  $(function(){
    $('#men>ul>li:first-child>a').addClass('.selected');
    $('#men>ul>li>a').on('click',function(e){
      let aName = $(this).attr('href');
      let Wide = $('.see').width();
      // console.log(Wide);
      $(aName).show();
      $('#men>ul>li>a').removeClass('selected');
      $(this).addClass('selected');
    })
    })






// $(function(){
//     함수이름();


// })


// function 함수이름(){}