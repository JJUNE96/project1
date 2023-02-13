//9803233033f5f84ff58ce3c4e59df255
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const branch_btns = document.querySelectorAll('.branch li');
const t_on = document.querySelectorAll('.traffic li')[0];
const t_off = document.querySelectorAll('.traffic li')[1];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.1631139, 129.1635509), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

	var map = new kakao.maps.Map(mapContainer, mapOption); 

	var markerPosition  = new kakao.maps.LatLng(35.1631139, 129.1635509); 


/// 마커를 생성
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정
marker.setMap(map);


window.addEventListener('resize', () => {
	let active_btn = document.querySelector('.branch li.on');

	map.setCenter(active_btn[index].latlng);
});



t_on.addEventListener('click', (e) => {
	e.preventDefault();
	if (t_on.classList.contains('on')) return;
	// 지도에 교통정보를 표시하도록 지도타입을 추가
	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	t_on.classList.add('on');
	t_off.classList.remove('on');
});

t_off.addEventListener('click', (e) => {
	e.preventDefault();
	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	t_off.classList.add('on');
	t_on.classList.remove('on');
});


var mapTypeControl = new kakao.maps.MapTypeControl();


map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
