$(function () {

	// $(".mask-phone").mask("+7 (999) 999-99-99");

	// add-open-class
	$('.burger-menu').click(function () {
		if ($(this).parent().is('.menu-burger--opened')) {
			$(this).parent().removeClass('menu-burger--opened');
			$('body').removeClass('menu-open-wrapper-page');
		} else {
			$(this).parent().addClass('menu-burger--opened');
			$('body').addClass('menu-open-wrapper-page');
		}
	});

	// dd menu
	$('.header-line-menu__link').on("click", function () {
		$(this).parent().toggleClass('active');
		if (!($('.header-line-menu__item').hasClass('active'))) {
			$('.header-line-menu-dd__item').removeClass('active');
		}
	})

	$('.header-line-menu-dd__link').on("click", function () {
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active');
	})
	// reset-form
	$('.search__btn-reset').on('click', function () {
		$(this).siblings('input').val("");
		return false;
	})
	//tabs
	$('ul.soft-tabs').on('click', 'li:not(.current)', function () {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();
	})
	//modals
	$('.open-modal').magnificPopup();

	//animation-form
	$('input').focus(function () {
		$(this).parents('.form-group--animate-js').addClass('form-group--focused');
	});

	$('input').blur(function () {
		var inputValue = $(this).val();
		if (inputValue == "") {
			$(this).removeClass('filled');
			$(this).parents('.form-group').removeClass('form-group--focused');
		} else {
			$(this).addClass('filled');
		}
	})
	//flow-scroll up
	$("a.button-up").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
		return false;
	});
	//filter-item
	$('.filter-item__list').slideUp();
	if ($('.filter-item').is(".active")) {
		$('.filter-item.active .filter-item__list').slideDown();
	}

	$('.filter-item__title').on('click', function () {
		$(this).parent().toggleClass('active');
		if (!($(this).parent().is('.active'))) {
			$(this).parent().find('.filter-item__list').slideUp(300);
		} else {
			$(this).parent().find('.filter-item__list').slideDown(300)
		}
	})

	// $('.filter-item__title').on('click', function () {
	// 	if ($(this).parent().is('.active')) {
	// 		$(this).parent().find('.filter-item__list').slideUp(300);
	// 	} else {

	// 		$(this).parent().addClass('active');
	// 		$('.filter-item__list').slideUp(300);
	// 		$(this).parent().find('.filter-item__list').slideDown(300);
	// 	}
	// });
	//slick-slider
	$('.slider-items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		rows: 0,
		mobileFirst: true,
		appendArrows: '.arrows-wrap',
		nextArrow: `<div class="slide-arrow slide-prev">
						<svg class="icon icon-next">
						  <use xlink:href="img/icons/svg-symbols.svg#icon-next"></use>
						</svg>
					 </div>`,
		prevArrow: `<div class="slide-arrow slide-next">
						  <svg class="icon arrow-prev">
							 <use xlink:href="img/icons/svg-symbols.svg#arrow-prev"></use>
						  </svg>
					</div>`,

		responsive: [
			{
				breakpoint: 599,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 3,
					dots: false,
					arrows: true
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					dots: false,
					arrows: true
				}
			}
		]
	});
});

