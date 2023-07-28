import $ from "jquery";


$(function () {

  // 함수실행 
  picTo();
  Wtab();
  Mtab();
  top();
  //  

  // box02->gallery
  function picTo() {
    // li Width 값 변수만들기
    let liWidth = $('#show>#all>ul>li').outerWidth(true);
    // console.log(liWidth);
    $('#show>#all>ul>li:last').prependTo('#all>ul');
    $('#all').css('margin-left', '-' + liWidth + 'px');

    // 버튼 누르면 이동
    $('#gallery>.prev').on('click', function (e) {
      $('#show>#all').animate({ marginLeft: '-=' + liWidth + 'px' }, function () {
        // 클릭하면 li 첫번째 뒤로 이동+css수정
        $('#show>#all>ul>li:first').appendTo('#show>#all>ul');
        $('#show>#all').css('margin-left', '-' + liWidth + 'px');
      });
    });

    $('#gallery>.next').on('click', function (e) {
      $('#show>#all').animate({ marginLeft: '+=' + liWidth + 'px' }, function () {
        $('#show>#all>ul>li:last').prependTo('#show>#all>ul');
        $('#show>#all').css('margin-left', '-' + liWidth + 'px');
      });
    });
  }
  // 


  // box04 탭메뉴
  function Mtab() {
    $('#men>ul>li:first>a').addClass('Mselect');
    $('.Mevery>ul:not(:first)').hide();

    $('#men>ul>li>a').on('click', function (e) {
      let Mhref = $(this).attr('href');
      $('.Mevery>ul').hide();
      $(Mhref).show();
      $('#men>ul>li>a').removeClass('Mselect');
      $(this).addClass('Mselect');

      return false;

    })
  }
  // 

  // box06 탭메뉴
  function Wtab() {
    $('#women>ul>li:first>a').addClass('Wselect');
    $('.Wevery>ul:not(:first)').hide();


    $('#women>ul>li>a').on('click', function (e) {
      let Whref = $(this).attr('href');
      console.log(Whref)
      $('.Wevery>ul').hide();
      $(Whref).show();
      $('#women>ul>li>a').removeClass('Wselect');
      $(this).addClass('Wselect');

      return false;

    })
  }


  // topmenu
  function top(){
    $( '#topmenu' ).on('click',function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      return false;
    } );
  }

})




// $(function(){
//     함수이름();


// })


// function 함수이름(){}