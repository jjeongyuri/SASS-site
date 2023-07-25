 import $ from "jquery";


 $(function(){

    // 함수실행 
       picTo();
       MPic();
       WPic();
    //  

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
    let menWidth = $('.Mevery>dl').outerWidth(true);
    // console.log(menWidth);
    $('.Mevery>dl:last-of-type').prependTo('.Mevery');
    $('.Mevery').css('margin-left','-'+menWidth+'px');

    // 버튼 누르면 이동 
    $('.Twoprev').on('click',function(e){
      $('.Mevery').animate({marginLeft:'-=' + menWidth + 'px'},function(){
        // 클릭하면 li 첫번째 뒤로 이동+css수정
        $('.Mevery>dl:first-child').appendTo('.Mevery');
        $('.Mevery').css('margin-left','-' + menWidth + 'px');
      });
    });
    
    $('.Twonext').on('click',function(e){
      $('.Mevery').animate({marginLeft:'+=' + menWidth + 'px'},function(){
        // 클릭하면 li 첫번째 뒤로 이동+css수정
        $('.Mevery>dl:last-child').prependTo('.Mevery');
        $('.Mevery').css('margin-left','-' + menWidth + 'px');
      });
    });
  }
  //
  

  // box06 갤러리 이동
  function WPic(){
    let Wwidth = $('.Wevery>ul').outerWidth(true);
    console.log(Wwidth);
    $('.Wevery>ul:last').prependTo('.Wevery');
    $('.Wevery').css('margin-left','-'+ Wwidth+'px');

    // 버튼 클릭
    $('.Wprev').on('click',function(e){
      $('.Wevery').animate({marginLeft:'-='+ Wwidth +'px'},function(){
        $('.Wevery>ul:first').appendTo('.Wevery');
        $('.Wevery').css('margin-left','-'+Wwidth+'px')
      })
    });
    $('.Wnext').on('click',function(e){
      $('.Wevery').animate({marginLeft:'+='+ Wwidth +'px'},function(){
        $('.Wevery>ul:last').prependTo('.Wevery');
        $('.Wevery').css('margin-left','-'+Wwidth+'px')
      })
    });
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