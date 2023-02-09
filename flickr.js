const base = 'https://www.flickr.com/services/rest/?';
const method = 'flickr.interestingness.getList';
//const method2 = 'flickr2.interesti2ngness.getLis2t';
const key1 = '8975c69ce63942b0998582674c511b08';
const per_page = 16;
const frame = document.querySelector('#list');

const url2 = `${base}method=${method}&api_key=${key1}&per_page=${per_page}&format=json&nojsoncallback=1`;

callData(url2);

function callData(url2) {
	fetch(url2)
		.then((data) => {
			return data.json();
		})
		.then((json) => {
			let items = json.photos.photo;
			createList(items);

			delayLoading();
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
              <img src=${imgSrc}>
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
	}
}

function isoLayout() {
	frame.classList.add('on');
	new Isotope('#list', {
		itemSelection: '.item',
		columnWidth: '.item',
		transitionDuration: '0.1s',
	});
}
