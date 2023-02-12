const base = 'https://www.flickr.com/services/rest/?';
const method = 'flickr.interestingness.getList';
const method2 = 'flickr.photos.search';
const key1 = '8975c69ce63942b0998582674c511b08';
const per_page = 15;
const per_page2 = 11;
const frame = document.querySelector('#list');
const loading = document.querySelector('.loading');
const input = document.querySelector('#search');
const btn = document.querySelector('.btnSearch');
const gal = document.querySelector('#galleryList');
//const url = `${base}method=${method}&api_key=${key1}&per_page=${per_page}&format=json&nojsoncallback=1`;
const url2 = `${base}method=${method2}&api_key=${key1}&per_page=${per_page}&format=json&nojsoncallback=1&tags=유럽&privacy_filter=1`;


callData(url2);

btn.addEventListener('click', () => {
	let tag = input.value;
	tag = tag.trim(); 
	const url = `${base}method=${method2}&api_key=${key1}&per_page=${per_page2}&format=json&nojsoncallback=1&tags=${tag}&privacy_filter=1`;

	if (tag != '') {
		callData(url);
	} else {
		alert('검색어를 입력하세요');
	}
});

input.addEventListener('keypress', (e) => {
	if (e.keyCode == 13) {
		let tag = input.value;
		tag = tag.trim(); 
		const url = `${base}method=${method2}&api_key=${key1}&per_page=${per_page2}&format=json&nojsoncallback=1&tags=${tag}&privacy_filter=1`;
		if (tag != '') {
			callData(url);
		} else {
			alert('검색어를 입력하세요');
		}
	}
});

frame.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target == frame) return;
	let target = e.target.closest('.item').querySelector('.thumb');

	if (e.target == target) {
		let imgSrc = target.closest('a').getAttribute('href'); 
		let pop = document.createElement('aside2');
		pop.classList.add('pop');
		let pops = `
		<img src="${imgSrc}">
		<span class="close">Close</span>
	`;
		pop.innerHTML = pops;
		gal.append(pop);
	} else {
		return;
	}
});

gal.addEventListener('click', (e) => {
	let pop = gal.querySelector('.pop');
	if (pop != null) {
		let close = pop.querySelector('.close');
		if (e.target == close) pop.remove();
	} 
});

function callData(url) {
	frame.innerHTML = '';
	loading.classList.remove('off');
	frame.classList.remove('on');

	fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((json) => {
			let items = json.photos.photo;
			console.log(items);

			if (items.length > 0) {
				createList(items);
				delayLoading();
			} else {
				alert('검색하신 이미지의 데이터가 없습니다');
			}
		});
}

function createList(items) {
	let htmls = '';

	items.map((el, index) => {
		let imgSrcBig = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`;

		let imgSrc = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_m.jpg`;

		htmls += `
        <li class="item">
          <div>
            <a href=${imgSrcBig}>
              <img class="thumb" src=${imgSrc}>
            </a>
            <p>${el.title}
            </p>
          </div>
        </li>
      `;
	});
	frame.innerHTML = htmls;
}

function delayLoading() {
	const imgs = frame.querySelectorAll('img');
	const len = imgs.length;

	let count = 0;
	for (let el of imgs) {
		el.addEventListener('load', () => {
			count++;
			if (count == len) isoLayout();
		});
	

		el.addEventListener('error', (e) => {
			e.currentTarget.closest('.item').querySelector('img').setAttribute('src', 'img/pic.jpg');
		});
	}
}

function isoLayout() {
	loading.classList.add('off');
	frame.classList.add('on');
	new Isotope('#list', {
		itemSelection: '.item',
		columnWidth: '.item',
		transitionDuration: '0.5s',
	});
}
