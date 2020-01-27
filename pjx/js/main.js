"use strict"
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
    appendDots: '.connect__slider-dots',
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

});
//checkbox
// let checkbox = document.querySelectorAll('.pricing__item-bonus');
// let checkedImg = document.querySelectorAll('.checked-img');

// for(let i = 0;i < checkbox.length; i++) {
//   checkbox[i].checked, function(ev) {
//     for(let x = 0;x < checkedImg.length; x++)
//   checkedImg[x].style.display = "block";
// }
// };

