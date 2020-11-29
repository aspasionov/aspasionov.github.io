'use strict'
window.onload = function () {
	document.querySelector('.menu-btn').addEventListener('click', function () {
		document.querySelector('body').classList.add('open-menu');
	}, false)
	document.querySelector('.menu-close').addEventListener('click', function () {
		document.querySelector('body').classList.remove('open-menu');
	}, false)

	let menuLinks = document.querySelectorAll('.menu-link')
	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', function () {
			document.querySelector('body').classList.remove('open-menu');
		}, false)
	}
	//swiper-carousel
	new Swiper(".swiper-container", {
		effect: "coverflow",
		grabCursor: true,
		// centeredSlides: true,
		loop: true,
		slidesPerView: 1,
		coverflowEffect: {
			rotate: -2,
			stretch: "-90%",
			depth: 200,
			modifier: -1,
			slideShadows: false
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		pagination: {
			el: '.swiper-pagination',
		}
	});
	//accardion
	let accordionBtn = document.querySelectorAll('.accordion__header');

	for (let i = 0; i < accordionBtn.length; i++) {
		accordionBtn[i].addEventListener("click", function () {

			let parent = accordionBtn[i].parentElement;
			let content = parent.querySelector('.accordion__content');
			let accordionContainer = parent.parentElement;
			let accordionChildrens = accordionContainer.children;

			for (let x = 0; x < accordionChildrens.length; x++) {
				if (accordionChildrens[x].classList.contains('open')) {
					accordionChildrens[x].classList.remove('open')
				}
			}
			if (parent.classList.contains('open')) {
				parent.classList.remove('open')
			} else (
				parent.classList.add('open')
			)
		})
	};

};