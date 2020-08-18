$(function(){
  // $(".mask-phone").mask("+7 (999) 999-99-99");
  // add-open-class
 

  $('.menu-btn').click(function(){
   if($(this).parent().is('.menu-burger--opened')){
     $(this).parent().removeClass('menu-burger--opened');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parent().addClass('menu-burger--opened');
     $('body').addClass('menu-open-wrapper-page');
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

  $('.menu-item__link').on('click', function() {
    $('body').removeClass('menu-open-wrapper-page');
    $('.head-menu').removeClass('menu-burger--opened');
  })
  //modals
  //modal-gallery
  $('.open-img-in-modal').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.open-modal').magnificPopup();
  //modal-video
  $('.open-video').magnificPopup({
    type: 'iframe'
  });
  //slider

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    rows: 0,
    arrows: false,
  });

  
  //fullpage
     if (window.matchMedia("(min-width: 1200px)").matches) {
        $('.footer').addClass('fixed-footer');
      } 

    $('#wrapper').fullpage({
      responsiveWidth: 1200,
      scrollingSpeed: 700,
      anchors:['banner', 'company', 'client', 'service', 'review', 'advantages', 'gallery','vacancies', 'contact-bl'],
      fixedElements: '.header-fixed, .fixed-footer, .message'
    });
    
});
