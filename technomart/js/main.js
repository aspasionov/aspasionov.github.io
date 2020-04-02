$(function(){
  // $('input[placeholder], textarea[placeholder]').placeholder();
  // $(".mask-phone").mask("+7 (999) 999-99-99");

  // menu
  $('.menu__btn').on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('show-menu')
  });

  // tabs
  $('ul.delivery-list').on('click', 'li:not(.delivery-list__item--active)', function() {
    $(this).addClass('delivery-list__item--active')
    .siblings().removeClass('delivery-list__item--active')
    .parents('div.delivery-tabs-wrap')
    .find('div.delivery-tabs-box')
    .eq($(this).index()).fadeIn(500)
    .siblings('div.delivery-tabs-box').hide();
  });
  //slider
  $('.category-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    rows: 0, //убирает оболочку(пустой div)
    arrows: false,
    mobileFirst: true,
    nextArrow: `<div class="slide-arrow slide-prev">
              </div>`,
    prevArrow: `<div class="slide-arrow slide-next">
             </div>`,
    responsive: [
      {
        breakpoint: 599,
        settings: {
        arrows: true,
        }
      }
    ]
  });

  //price-filter
  // slider price
//
  var sliderPriceOne = document.getElementById('sliderPriceOne');
  var oneinput0 = document.getElementById('input-with-sliderPriceOne-0');
  var oneinput1 = document.getElementById('input-with-sliderPriceOne-1');
  var oneinputs = [oneinput0, oneinput1];
  // alert(Math.round(oneinput0.value));
  noUiSlider.create(sliderPriceOne, {
    start: [0, 30000],
    connect: true,
    step: 100,
    tooltips: false,
    behaviour: 'tap',
    range: {
      'min': 0,
      'max': 40000,
    }
  });
  sliderPriceOne.noUiSlider.on('update', function( values, handle ) {
   oneinputs[handle].value =  Math.round(values[handle]);
  });

  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderPriceOne.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  oneinputs.forEach(function(input, handle) {
    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });
  });

});
