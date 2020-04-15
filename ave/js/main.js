$(function(){
  // $('input[placeholder], textarea[placeholder]').placeholder();
  // $(".mask-phone").mask("+7 (999) 999-99-99");

  // add-open-class
  $('.burger-menu').click(function(){
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
  //product-info__slider
  $('.product-info__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0, //убирает оболочку(пустой div)
    // mobileFirst: true,
    nextArrow: `<div class="slide-arrow slide-prev">
                  <i class="fas fa-chevron-left"></i>
                </div>`,
    prevArrow: `<div class="slide-arrow slide-next">
                  <i class="fas fa-chevron-right"></i>
                </div>`

    // responsive: [
    //   {
    //     breakpoint: 599,
    //     settings: {
    //     arrows: true,
    //     dots: false
    //     }
    //   }
    // ]
  });
  //tabs
  $('ul.soft-tabs').on('click', 'li:not(.current)', function() {
    $(this).addClass('current').siblings().removeClass('current')
    .parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();
  })
  //js custom-form
    jcf.setOptions('Select', {
      wrapNative: false,
      maxVisibleItems: 14,
      useCustomScroll: false
    });

    jcf.replaceAll();

    //cart-dropdown
    let cart = document.querySelector('.header-top__cart');

    cart.addEventListener('click', function (event) {
      this.classList.toggle('show');
    });
    //menu
    let openMenu = document.querySelector('.header-menu__icon');
    let closeMenu = document.querySelector('.header-menu__icon-close');
    let bodyElement = document.getElementsByTagName('body')[0];

    openMenu.addEventListener('click', function(ev) {
      bodyElement.classList.add('open-menu');
    });

    closeMenu.addEventListener('click', function(ev) {
      bodyElement.classList.remove('open-menu');
    });
    //menu-dropdown
    let menuItem = document.querySelector('.header-menu__item');

    menuItem.addEventListener('click', function(ev) {
      this.classList.toggle('show-dropdown');
    });
    //remove-class body
    // let menuItemAll = document.querySelectorAll('.header-menu__item');
    // console.log(menuItemAll);
    // removeClassBody = function() {
    //   bodyElement.classList.remove('open-menu');
    // }
    // menuItemAll.addEventListener('click', function(ev) {
    //   bodyElement.classList.remove('open-menu');
    // });

    //popup
    $('.product__miniature-item').magnificPopup({
      type: 'image'
    });
});
