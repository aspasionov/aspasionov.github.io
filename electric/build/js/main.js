jQuery(function($){

  $('input[placeholder], textarea[placeholder]').placeholder();

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

  $('.js-slider-review-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.js-slider-review-img_nav',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      }
    }
  ]
  });

  $('.js-slider-review-img_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-slider-review-img',
    dots: true,
    focusOnSelect: true
  });

  $('.js-slider-review-video').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });

  $('.js-example-work').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });

  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none'
  });

  $('.scrollto').click(function(event) {
    event.preventDefault();
    $('body').removeClass('menu-open-wrapper-page');
    $('.head-menu').removeClass('menu-burger--opened');
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 1000);
  });

  $("form").submit(function() {
    var e = $(this);
    return $.ajax({
      type: e.attr("method"),
      url: e.attr("action"),
      data: e.serialize()
      }).done(function() {
      alert("Thank you!"), setTimeout(function() {
         e.trigger("reset");
      }, 1e3)
      }).fail(function() {
      alert("Ошибка отправки, попробуйте позже");
    }), !1
  });

  $(".js-mask_phone").mask("+7 (999) 999-99-99");

  $(window).on('load scroll',function(){
    if ($(this).scrollTop() >= '130') {
        $('.header').addClass("fix");
    }
    else  {$('.header').removeClass("fix");}
});

});
//mask-phone
//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);
