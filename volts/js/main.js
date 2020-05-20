$(function() {
  // $(".mask-phone").mask("+7 (999) 999-99-99");

  // add-open-class
  $('.burger-menu').click(function() {
    $('body').addClass('menu-burger--opened');
  });

  $('.icon-close').click(function() {
    $('body').removeClass('menu-burger--opened');
  });

  //lang
  $('.lang').on('click', function() {
    $(this).toggleClass('lang-ru');
  });
  //tabs
  $('.hoarder').on('click', function () {
    $(this).addClass('current')
    $('.panel').removeClass('current')
    $('.variant__item--hoarder').addClass('active');
    $('.variant__item--panel').removeClass('active');
  });
  $('.panel').on('click', function () {
    $(this).addClass('current')
    $('.hoarder').removeClass('current')
    $('.variant__item--panel').addClass('active');
    $('.variant__item--hoarder').removeClass('active');
  });
  //modals
  $('.open-modal').magnificPopup();

  //header-fixed
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.header').height()) {
      $('#wrapper').addClass("sticky");
    } else {
      $('#wrapper').removeClass("sticky");
    }
  });
  //flow-scroll up
  $("a.button-up").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
    return false;
  });
  //wow.js
  var wow = new WOW({
    mobile: false
  })
  wow.init();
  //slider
  $('.home__slider').slick({
    rows: 0, //убирает оболочку(пустой div)
    arrows: false,
    fade: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
     pauseOnHover: false
  });
  //form-question
  $('.open-form').on('click', () => {
    $('.form-wrapper').addClass('form-wrapper--open');
    $('body').addClass('form--opener');
  });
  $('.form__close').on('click', () => {
    $('.form-wrapper').removeClass('form-wrapper--open');
    $('body').removeClass('form--opener');
  });
  //scroll-to anim
  //  $(window).scroll(function(){
  //     if ( $(this).scrollTop() > $('.connect__items').offset().top - 600 ) {
  //         $('.connect-line').addClass('animation');
  //         $('.connect-line').addClass('animation');
  //     }
  // });
  //  console.log($('.connect__items').offset().top - 50);
  //  console.log($(window).scrollTop());
});