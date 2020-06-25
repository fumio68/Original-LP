$(function() {

  // 全体のフェードイン
  $('body').fadeIn(1500);

  // 要素のスクロールイン
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 150){
              $(this).addClass('scrollin');
            } else {
              $(this).css("opacity","0" );
            }
          if (scroll < elemPos - windowHeight + 150){
            $(this).removeClass('scrollin');
            } else {
              $(this).css("opacity","1" );
            }
        });
    });

});
