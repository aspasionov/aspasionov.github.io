$(function () {

	// $(".mask-phone").mask("+7 (999) 999-99-99");

	// add-open-class
	$('.burger-menu').on('click', function () {
		$(this).parent().addClass('menu-burger--opened');
		$('body').addClass('menu-open-wrapper-page');
	});

	$('.menu-close , .menu-item__link').on('click', function () {
		$('.head-menu').removeClass('menu-burger--opened');
		$('body').removeClass('menu-open-wrapper-page');
	});

	//seller
	$('.seller-item__tel').on('click', function () {
		$(this).toggleClass('active');
		$(this).siblings('.seller-contact').toggleClass('show');
	});
	//tabs
	$('ul.soft-tabs').on('click', 'li:not(.current)', function () {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();
	})

	$('.box-opener-mobile').on('click', function () {
		$(this).toggleClass('active');
		$(this).parent().toggleClass('visible');
	});
	//header-search
	$('.header-search__btn').on('click', function () {
		$(this).parent().toggleClass('active');
	});
	//directory
	$('.directory-opener').on('click', function () {
		$(this).toggleClass('active');
		$('.directory-list').slideToggle(300);
	});

	//filter
	$('.filter-header').on('click', function () {
		$('.filter-list').toggleClass('show');
	});

	$('.filter-list__item').on('click', function () {
		let filterItemText = $(this).text();
		$(this).parent().removeClass('show');
		$('.filter-header__value').text(filterItemText);
	});
	//header-fixed
	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.header').height()) {
			$('.site-wrapper').addClass("sticky");
		}
		else {
			$('.site-wrapper').removeClass("sticky");
		}
	});

	//flow-scroll up
	$("a.scroll-to").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
		return false;
	});
});
