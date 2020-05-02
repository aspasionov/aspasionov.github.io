$(function(){
  // $('input[placeholder], textarea[placeholder]').placeholder();
  $(".mask-phone").mask("+7 (999) 999-99-99");

  // add-open-class
  $('.menu__icon').on('click', function() {
    $('body').addClass('open-menu');
  });

  // add-open-class
  $('.menu__close').on('click', function() {
    $('body').removeClass('open-menu');
  })

  $('.filter-open-btn').on('click', function() {
    $('.filter-wrapper').addClass('open-filter');
  });

  $(' .filter-close').on('click', function() {
    $('.filter-wrapper').removeClass('open-filter');
  });
  //jcf-custom-form
  jcf.replaceAll();

  //     jcf.setOptions('Scrollable', {
  //       alwaysPreventMouseWheel: true,
  //       alwaysShowScrollbars: true
  //     });
  // var mql = window.matchMedia('all and (min-width: 1200px)');
  //   if (mql.matches) {
  //       jcf.replaceAll();
  //   }

  //spoiler-text
  $('.spoiler-btn').click(function(){
    $('.text-wrap').toggleClass('hide');  
    if ($('.text-wrap').hasClass('hide')) {
      $('.spoiler-btn').html('Подробнее');
    } else {
      $('.spoiler-btn').html('Свернуть');
    }   
    return false;
  });
});
