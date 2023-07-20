 // import Swiper bundle with all modules installed
//  import Swiper from 'swiper';
 import 'swiper/swiper.scss';
 import 'swiper/modules/navigation/navigation.scss';
 import 'swiper/modules/effect-cube/effect-cube.scss';
 import $ from "jquery";


 $(function(){

    // 함수실행 
       picTo();
       MPic();
       WPic();

    //  


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
  function picTo(){
    // li Width 값 변수만들기
    let liWidth = $('#show>#all>ul>li').outerWidth(true);
    // console.log(liWidth);
    $('#show>#all>ul>li:last').prependTo('#all>ul');
    $('#all').css('margin-left','-'+liWidth+'px');

    // 버튼 누르면 이동
    $('#gallery>.prev').on('click',function(e){
      $('#show>#all').animate({marginLeft:'-=' + liWidth + 'px'},function(){
        // 클릭하면 li 첫번째 뒤로 이동+css수정
        $('#show>#all>ul>li:first').appendTo('#show>#all>ul');
        $('#show>#all').css('margin-left','-' + liWidth + 'px');
      });
    });

    $('#gallery>.next').on('click',function(e){
      $('#show>#all').animate({marginLeft:'+=' + liWidth + 'px'},function(){
        $('#show>#all>ul>li:last').prependTo('#show>#all>ul');
        $('#show>#all').css('margin-left','-' + liWidth + 'px');
      });
    });
  } 
  // 



  // box04 갤러리 이동
  function MPic(){
    let menWidth = $('.every>.Mpic>dl').outerWidth(true);
    // console.log(menWidth)
    $('.every>.Mpic>dl:last').prependTo('.every>.Mpic');
    // $('.every').css('margin-left','-'+menWidth+'px');

    $('.Twoprev').on('click',function(e){
      $('.every').animate({marginLeft:'-='+menWidth+'px'},function(){
        $('.every>.Mpic>dl:first').appendTo('.every>.Mpic');
        $('.every').css('margin-left','-'+menWidth+'px')
      })
    });

    $('.Twonext').on('click',function(e){
      $('.every').animate({marginLeft:'+='+menWidth+'px'},function(){
        $('.every>.Mpic>dl:last').prependTo('.every>.Mpic');
        $('.every').css('margin-left','-'+menWidth+'px')
      })
    });
  }
  //
  
  // box06 갤러리 이동
  function WPic(){
    let WomenWidth = $('.every>.Wpic>dl').outerWidth(true);
    // console.log(WomenWidth);
    // $('.every>.Wpic>dl:last').prependTo('.every>.Wpic');
    // $('.every').css('margin-left','-'+WomenWidth+'px');
  }
   
  // 


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

  })




// $(function(){
//     함수이름();


// })


// function 함수이름(){}