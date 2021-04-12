// Menu

let burgerMenu = document.querySelector('.header__burger');
let menuActive = document.querySelector('.header__list');


function menuToggle(variableTargetOnClick, joinClass) {
	variableTargetOnClick.classList.toggle(joinClass);
	dropDownTel.classList.remove('pop-open');
}
function scrollHidden() {
	document.body.classList.toggle('scroll-hidden');
	document.querySelector('html').classList.toggle('scroll-hidden');
}

burgerMenu.addEventListener('click', () => {
	menuToggle(menuActive, 'menuactive');

	scrollHidden();
});

burgerMenu.addEventListener('click', () => {
	menuToggle(burgerMenu, 'active_burger');
});

// Hide menu text

if (getWindowSize() < 500) {
	burgerMenu.innerHTML = '';
}

window.addEventListener('resize', function () {
	if (getWindowSize() < 500) {
		burgerMenu.innerHTML = '';
	} else if (getWindowSize() > 500) {
		burgerMenu.innerHTML = 'menu';
	}
	console.log(getWindowSize());
});

function getWindowSize() {
	return document.documentElement.clientWidth;
}


// Popup tel

let popIcon = document.querySelector('.header__tel');
let dropDownTel = document.querySelector('.popup__container');

popIcon.addEventListener('click', function () {
	dropDownTel.classList.toggle('pop-open');
});


// Swiper

new Swiper('.slider__container', {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	autoHeight: false,
	slidesPerView: 2,
	spaceBetween: 150,
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 60
		},
		// when window width is >= 480px
		500: {
		  slidesPerView: 1,
		  spaceBetween: 60
		},
		// when window width is >= 640px
		640: {
		  slidesPerView: 2,
		  spaceBetween: 100
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 100
		  }
	  }
});

