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


  //board callback
   const btnOpen = document.querySelector('.btnOpen');
   const board = document.querySelector('#board');
   const aside = document.querySelector('aside');


	const _top = aside.querySelector('.top');
	const _right = aside.querySelector('.right');
	const _bottom = aside.querySelector('.bottom');
	const _left = aside.querySelector('.left');
	const _container = aside.querySelector('.container');

	const btnClose = document.querySelector('.btnClose');

	let speed = 500;

	btnOpen.addEventListener('click',(e) => {
		e.preventDefault();
		aside.style.display = 'block';
		board.classList.add('off');

		new Anim(_top, {
			prop: 'width',
			value: '100%',
			duration: speed,
			callback: () => {
				new Anim(_right, {
					prop: 'height',
					value: '100%',
					duration: speed,
					callback: () => {
						new Anim(_bottom, {
							prop: 'width',
							value: '100%',
							duration: speed,
							callback: () => {
								new Anim(_left, {
									prop: 'height',
									value: '100%',
									duration: speed,
									callback: () => {
										new Anim(_container, {
											prop: 'opacity',
											value: 1,
											duration: speed,
										});
									},
								});
							},
						});
					},
				});
			},
		});

	});

	btnClose.addEventListener('click',(e)=>{
		e.preventDefault();
		new Anim(_container, {
			prop: 'opacity',
			value: 0,
			duration: speed,
			callback: () => {
				new Anim(_top, {
					prop: 'width',
					value: '0%',
					duration: speed,
				});
				new Anim(_right, {
					prop: 'height',
					value: '0%',
					duration: speed,
				});
				new Anim(_bottom, {
					prop: 'width',
					value: '0%',
					duration: speed,
				});
				new Anim(_left, {
					prop: 'height',
					value: '0%',
					duration: speed,
					callback: () => {
						aside.style.display = 'none';
						board.classList.remove('off');
					},
				});
			},
		});
	})


