$(function(){

  // $(".mask-phone").mask("+7 (999) 999-99-99");

  // add-open-class

  $('.menu-btn').click(function(){
   if($(this).parent().is('.menu-burger--opened')){
     $(this).parent().removeClass('menu-burger--opened');
     $('body').removeClass('menu-open-wrapper-page');
     $(".menu-btn__text").text("Меню");
   }else{
     $(this).parent().addClass('menu-burger--opened');
     $('body').addClass('menu-open-wrapper-page');
     $(".menu-btn__text").text("Закрыть");
   }
  });

  // add-open-class
  $('.menu-item__link--dd-open').click(function(){
   if($(this).parent().is('.menu-item--dd-opened')){
    $(this).parent().removeClass('menu-item--dd-opened');
   }else{
    $(this).parent().addClass('menu-item--dd-opened');
   }
  });

  //tabs
  $('ul.soft-tabs').on('click', 'li:not(.current)', function() {
    $(this).addClass('current').siblings().removeClass('current')
    .parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();
  })

  //modals
  $('.open-modal').magnificPopup();
  //animation-form
  $('input').focus(function(){
  $(this).parents('.form-group--animate-js').addClass('form-group--focused');
  });

  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('form-group--focused');  
    } else {
      $(this).addClass('filled');
    }
})  

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    rows: 0,
    arrows: false,
  });

  //flow-scroll up
  $("a.button-up").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
});
  //fullpage
  var mql = window.matchMedia('all and (min-width: 1200px)');
  if (mql.matches) {
    $('#wrapper').fullpage({
      responsiveWidth: 1200,
      responsiveHeight: 700,
      fixedElements: '.header-fixed, .fixed-footer, .message'
    });
  };
    
});
