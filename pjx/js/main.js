
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
//slider
  $('.connect__slider').slick({
    dots: true,
    arrows: false,
    slideToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.connect__slider-buttons',
    nextArrow: '.slide-next',
    prevArrow: '.slide-prev',
    mobileFirst: true,
        responsive: [{
                breakpoint: 599,
                settings: {
                    arrows: true,
                }
            }
        ]
  });

  $('.partners__slider').slick({
    dots: true,
    arrows: false
  });

  //magnific
   $('.connect__link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        image: {
            verticalFit: true
        }
    });
  //header
  $(window).scroll(function() {
  if ($(this).scrollTop() > ($('.header').height() + 100)){  
    $('.fixed-panel-nav').addClass("sticky");
  }
  else{
    $('.fixed-panel-nav').removeClass("sticky");
  }
  });
});
//radio
let radio = document.querySelectorAll('.pricing__item-bonus');
let check = document.querySelectorAll('.pricing__list-item .check img');
for(let i = 0;i < radio.length; i++) {
  radio[i].addEventListener('click' , function(ev) {
    for(let x = 0;x < check.length; x++)
        check[x].style.display = "block";
})
};

