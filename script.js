

let burgerMenu = document.querySelector('.header__burger');
let menuActive = document.querySelector('.header__list');


function menuToggle(variableTargetOnClick, joinClass) {
	variableTargetOnClick.classList.toggle(joinClass);
}
function scrollHidden() {
	document.body.classList.toggle('scroll-hidden');
	document.querySelector('html').classList.toggle('scroll-hidden');
}

burgerMenu.addEventListener('click', () => {
	menuToggle(menuActive, 'menuactive');
	scrollHidden()
});

burgerMenu.addEventListener('click', () => {
	menuToggle(burgerMenu, 'active_burger')
});

// Swiper

new Swiper('.slider__container', {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	autoHeight: false,
	slidesPerView: 2,
});

