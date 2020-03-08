$(function(){
  // $('input[placeholder], textarea[placeholder]').placeholder();
  $(".mask-phone").mask("+7 (999) 999-99-99");
  // menu
  $('.burger-menu').on('click', function(){
      $('.head-menu').addClass('menu-burger--opened');
      $('body').addClass('menu-open-wrapper-page');
    });

  $('.menu_close').on('click', function(){
      $('.head-menu').removeClass('menu-burger--opened');
      $('body').removeClass('menu-open-wrapper-page');
  });
  $('.menu .menu-item__link').on('click', function(){
      $('.head-menu').removeClass('menu-burger--opened');
      $('body').removeClass('menu-open-wrapper-page');
  });

  //banner-slider
  $('.sell__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    nextArrow: `<div class="slide-arrow slide-prev">
                <svg>
                  <use xlink:href="img/svg/sprite.svg#slide-prev-icon"></use>
                </svg>
              </div>`,
    prevArrow: `<div class="slide-arrow slide-next">
                  <svg>
                    <use xlink:href="img/svg/sprite.svg#slide-next-icon"></use>
                  </svg>
             </div>`,
    responsive: [
      {
        breakpoint: 599,
        settings: {
        arrows: true,
        dots: false
        }
      }
    ]
  });
  //project-box__slider
  $('.project-box__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    nextArrow: `<div class="slide-arrow slide-next_red">
                <span class="txt">Следующий проект</span>
                <span class="icon">
                <svg>
                  <use xlink:href="img/svg/sprite.svg#slide-next-icon"></use>
                </svg>
                </span>
              </div>`,
    prevArrow: ''
  });
//project-box__slider-inner
  $('.project-box__slider-inner').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    dots: true,
    arrows: false,
    mobileFirst: true,
    nextArrow: `<div class="slide-arrow slide-prev">
                <svg>
                  <use xlink:href="img/svg/sprite.svg#slide-prev-icon"></use>
                </svg>
              </div>`,
    prevArrow: `<div class="slide-arrow slide-next">
                  <svg>
                    <use xlink:href="img/svg/sprite.svg#slide-next-icon"></use>
                  </svg>
             </div>`,
    responsive: [
       {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true
        }
      }
    ]
  });
 
  //fabrication__slider
    $('.fabrication__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    nextArrow: `<div class="slide-arrow slide-prev">
                <svg>
                  <use xlink:href="img/svg/sprite.svg#slide-prev-icon"></use>
                </svg>
              </div>`,
    prevArrow: `<div class="slide-arrow slide-next">
                  <svg>
                    <use xlink:href="img/svg/sprite.svg#slide-next-icon"></use>
                  </svg>
             </div>`,
    responsive: [
       {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true
        }
      }
    ]
  });
  
  //review__slider
  $('.review__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    nextArrow: `<div class="slide-arrow slide-prev">
                <svg>
                  <use xlink:href="img/svg/sprite.svg#slide-prev-icon"></use>
                </svg>
              </div>`,
    prevArrow: `<div class="slide-arrow slide-next">
                  <svg>
                    <use xlink:href="img/svg/sprite.svg#slide-next-icon"></use>
                  </svg>
             </div>`,
    responsive: [
       {
        breakpoint: 479,
        settings: {
          dots: false,
          arrows: true
        }
      }
    ]
  });
  //fullpage
    $('#wrapper').fullpage({
      fixedElements: '.header-fixed, .fixed-aside',
      scrollingSpeed: 900,
      responsiveWidth: 1000,
      verticalCentered: true,
      anchors:['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7'],
      navigation: true,
      navigationPosition: 'left'
    });


  
  //tabs
  $('ul.project-tabs').on('click', 'li:not(.current)', function() {
  $(this).addClass('current').siblings().removeClass('current')
    .parents('.project-tabs-wrap').find('.project-box')
    .addClass('visible')
    .eq($(this).index()).siblings(".project-box").removeClass('visible');
});
  //project-filter-in-tabs
  $('.project-box__filter-item_img').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.project-box__slider-inner').removeClass('show-video').addClass('show-img');
  });
  $('.project-box__filter-item_video').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.project-box__slider-inner').removeClass('show-img').addClass('show-video');
  });
  // refresh magnific-in slider
  $('.project-tabs').on('click', 'li:not(.current)', function() {
    $('.project-box.visible .open-img-in-modal').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
 });
//--------------------------

//tabs-fabrication
  $('.fabrication-tabs').on('click', 'li:not(.current)', function() {
  $(this).addClass('current').siblings().removeClass('current')
    .parents('.fabrication__wrap').find('.fabrication-box')
    .addClass('visible')
    .eq($(this).index()).siblings(".fabrication-box").removeClass('visible');
});
 $('.fabrication-tabs').on('click', 'li:not(.current)', function() {
    $('.fabrication-box.visible .fabrication__slider').slick('refresh');
    $('.fabrication-box.visible .open-fabrication-img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
 });
//magnific-popup
  $('.open-video-in-modal').magnificPopup({
    type: 'iframe'
  });

  $('.open-modal').magnificPopup();

  $('.open-modal-info').magnificPopup({
    callbacks: {
      beforeOpen: function() {
          moreText();
      },
      beforeClose: function() {
        $('.info-modal__txt').removeClass('opener');
      },
    }
  });


  $('.project-box.visible .open-img-in-modal').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.fabrication-box.visible .open-fabrication-img').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  //flow-scroll
$("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
});
//show-more-text-in modal
  function moreText() {
   $('.more-btn').click( function() {
      $('.info-modal__txt').addClass('opener');
      $(this).hide();
  });
 };
});

