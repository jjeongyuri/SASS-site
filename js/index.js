 // import Swiper bundle with all modules installed
 import Swiper from 'swiper';
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
    direction: 'horizontal',
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
    let menWidth = $('.every>dl').outerWidth(true);
    console.log(menWidth);
    $('.every>dl:last-of-type').prependTo('.every');
    $('.every').css('margin-left','-'+menWidth+'px');

    // 버튼 누르면 이동
    // $('.Twoprev').on('click',function(e){
    //   $('.every').animate({marginLeft:'-=' + menWidth + 'px'},function(){
    //     // 클릭하면 li 첫번째 뒤로 이동+css수정
    //     $('.every>dl:first-child').appendTo('.every');
    //     $('.every').css('margin-left','-' + menWidth + 'px');
    //   });
    // });


    // let menWidth = $('.every>dl').outerWidth(true);
    // // console.log(menWidth)
    // $('.every>dl:last-of-type').prependTo('.every');
    // $('.every').css('margin-left','-'+menWidth+'px');

    // // // 버튼 누르면 이동
    // $('.Twoprev').on('click',function(e){
    //   $('.every').animate({marginLeft:'-=' + menWidth + 'px'},function(){
    //     // 클릭하면 li 첫번째 뒤로 이동+css수정
    //     $('.every>dl:first').appendTo('.every');
    //     // $('.every').css('margin-left','-' + menWidth + 'px');
    //     console.log(a)
    //   });
    // });
  }
  //
  

  // box06 갤러리 이동
  function WPic(){
    let Wwidth = $('.Wevery>ul>li').outerWidth(true);
    console.log(Wwidth);
    $('.Wevery>ul:last>li:last').prependTo('.Weveryx');
    $('.Wevery').css('margin-left','-'+ Wwidth+'px');

    // 버튼 클릭
    // $('.Wprev').on('click',function(e){
    //   $('.Wevery').animate({marginLeft:'-='+ Wwidth +'px'},function(){
    //     $('.Wevery>ul:first').appendTo('.Wevery');
    //     $('.Wevery').css('margin-left','-'+Wwidth+'px')
    //   })
    // });
    // $('.Wnext').on('click',function(e){
    //   $('.Wevery').animate({marginLeft:'+='+ Wwidth +'px'},function(){
    //     $('.Wevery>ul:last').prependTo('.Wevery');
    //     $('.Wevery').css('margin-left','-'+Wwidth+'px')
    //   })
    // });
    // $('.Wprev').on('click',function(e){
    //   $('.Wevery').animate({marginLeft:'-='+ Wwidth +'px'},function(){
    //     $('.Wevery>ul:first').appendTo('.Wevery');
    //     $('.Wevery').css('margin-left','-'+Wwidth+'px')
    //   })
    // });
    // $('.Wnext').on('click',function(e){
    //   $('.Wevery').animate({marginLeft:'+='+ Wwidth +'px'},function(){
    //     $('.Wevery>ul:last').prependTo('.Wevery');
    //     $('.Wevery').css('margin-left','-'+Wwidth+'px')
    //   })
    // });

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