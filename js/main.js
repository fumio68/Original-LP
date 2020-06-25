$(function() {

  // 全体のフェードイン
  $('body').fadeIn(1500);

  $('.nav-button').on('click', function() {
    $('html').toggleClass('open');
  });

  // 要素のスクロールイン
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            } else {
              $(this).css("opacity","0" );
            }
          if (scroll < elemPos - windowHeight + 100){
            $(this).removeClass('scrollin');
            } else {
              $(this).css("opacity","1" );
            }
        });
    });
});
