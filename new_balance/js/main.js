$(function() {

  // zoom img
  $('.zoom').zoom();

  // card choose city
  $('.card-del-choose-city-btn').on('click', function () {
    $(this)
      .parents('.card-del')
      .find('.card-del-current-city')
        .click();
  });

  // mask phone
  $(".mask-phone").mask("+7 (999) 999-99-99");

  // open mobile menu
  $('.burger-menu-mobile').click(function() {
    $('body').toggleClass('menu_opened');
    toggleDocumentScrollBlocker();
  });
  
  $('.burger-menu-desktop').click(function() {
    $(this).toggleClass('burger-menu-desktop_opened');
    $('.catalog-nav-list')
      .slideToggle(250)
      .toggleClass('catalog-nav-list_opened');
  });
  
  $('.h-search__btn').click(function() {
    $(this).parent().toggleClass('h-search_open');
  });

  $('.btn-close-h-search').click(function() {
    $(this).parents('.h-search').removeClass('h-search_open');
  });

  $(document).click(function (e) {
    if ($(e.target).parents('.h-search').length) {
      return;
    } else {
      $('.h-search').removeClass('h-search_open');
    }
  });

  // modals
  $('[data-open-modal]').click(function() {
    var modalId = $(this).data("open-modal");
    toggleDocumentScrollBlocker();
    $(modalId).fadeIn();
  });

  $('.modal-close').click(modalClose);

  $('.st-modal-wrapp').click(function(e) {
    if (e.target !== this) return;
    modalClose();
  });

  function modalClose() {
    toggleDocumentScrollBlocker();
    $('.st-modal-wrapp').fadeOut();
  }


  // owl carousel
  $('.reviews-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    autoplay: false,
    autoplayTimeout: 7000,
    mouseDrag: false,
    responsive:{
      0:{
        items: 1
      },
      768:{
          items: 2
      },
      1000:{
          items: 2
      },
      1200:{
          items: 2
      }
    }
  });

  //----------------------------------------------------
  // owl carousel thumb
  //

  var sync1 = $(".owl-slider-main");
  var sync2 = $(".owl-thumbs");
  var slidesPerPage = 5;
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    autoHeight: false,
    slideBy: slidesPerPage,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {

    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);

    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  $('.owl-slider-thumb-wrapp').on('mouseenter', '.owl-item',  function () {
    $(this).click();
  });


  // slow href scroll
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });

  // add sticky body class
  (function(){
    var scrollTimer;
    var targetHeightPos = 100;
    var $body = $('body');

    $(window).scroll(function() {
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(function() {
        if ($(window).scrollTop() > targetHeightPos) {
          $body.addClass('sticky-aside-elems');
        } else {
          $body.removeClass('sticky-aside-elems');
        }
      }, 100);
    });
  })();

  // plus/minus value
  $('.minus-input').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  
  $('.plus-input').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  

  // sticky header
  function stickyHeader() {
    var $header = $('#header');
    var $body = $('body');
    var headerStickyTimer = null;
  
    if($header.length) {
      headerStickyCalc();
  
      $(window).on('scroll', function() {
        headerStickyCalc();
      });
    }
  
    function headerStickyCalc() {
      clearTimeout(headerStickyTimer);
  
      headerStickyTimer = setTimeout(function() {
        var headerHeight = $header.outerHeight();
        var headerOffsetTop = $header.offset().top;
        var scroll = $(window).scrollTop();
  
        if (scroll >= headerOffsetTop + headerHeight) {
          $body.addClass('sticky');
        }
        else {
          $body.removeClass('sticky');
        }
      }, 10);
    }
  }

  stickyHeader();

  // page scroll blocker
  function toggleDocumentScrollBlocker() {
    document.body.classList.toggle('document-scroll-blocker');
  }

});