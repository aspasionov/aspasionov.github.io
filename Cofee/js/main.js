
$(function () {
	$('.menu-icon').on('click', function () {
		let that = $(this);
		if (that.hasClass("is-open")) {
			that.removeClass("is-open").addClass("is-closed");
		} else {
			that.removeClass("is-closed").addClass("is-open");
		}
		$('.header-menu').toggleClass('visible');
		$('body').toggleClass('hidden');
	});

	$('.menu__item a').on('click', () => {
		$('.header-menu').removeClass('visible');
		$('.menu-icon').removeClass('is-open');
	});

	// var that = $(this);    

	//tabs
	$('ul.soft-tabs').on('click', 'li:not(.current)', function () {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.soft-tabs-wrap').find('div.box').eq($(this).index()).fadeIn(500).siblings('div.box').hide();
	})

	//modals
	$('.open-modal').magnificPopup();

	//header-fixed
	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.header').height()) {
			$('.site-wrapper').addClass("sticky");
		}
		else {
			$('.site-wrapper').removeClass("sticky");
		}
	});
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
	$("a.scroll-to").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
		return false;
	});

	new Swiper('.preparation', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 10,
		watchSlidesVisibility: true,
		pagination: {
			el: '.swiper-pagination',
			//Динамические буллеты
			dynamicBullets: true,

		},
		breakpoints: {
			768: {
				slidesPerColumn: 2,
				loop: true,
			},
			1000: {
				slidesPerColumn: 2,
				slidesPerView: 1.5,
			},
			1200: {
				slidesPerColumn: 2,
				slidesPerView: 2,
				pagination: false,
				navigation: {
					nextEl: '.slider-button-next',
					prevEl: '.slider-button-prev',
				},
			},
		},
	});

	new Swiper('.combo', {
		slidesPerView: 1,
		watchSlidesVisibility: true,
		loop: false,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			//Динамические буллеты
			dynamicBullets: true,

		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 3,
				navigation: {
					nextEl: '.slider-button-next',
					prevEl: '.slider-button-prev',
				},
				pagination: false,
			},
		},
	})
	//scrol--animation
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;//1/4 высоты блока

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		};
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			animOnScroll();
		}, 300);

	}
});


