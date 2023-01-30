////// tab menu /////

const btns = document.querySelectorAll('#gallery .inner #tab main  nav ul li');
const boxes = document.querySelectorAll('#gallery .inner #tab main section article');

btns.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		for (let btn of btns) {
			btn.classList.remove('on');
		}
		btns[index].classList.add('on');

		for (let box of boxes) {
			box.classList.remove('on');
		}
		boxes[index].classList.add('on');
	});
});




////////news swiper///////

let swiper = new Swiper (".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });


let btnCall = document.querySelector('.btnCall');
let nav_mo = document.querySelector('.nav_mo');

btnCall.onclick = function (e) {
	e.preventDefault();

	btnCall.classList.toggle('on');
	nav_mo.classList.toggle('on');
};



//////// board swiper///////
 let swiper1 = new Swiper(".swiper1", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

