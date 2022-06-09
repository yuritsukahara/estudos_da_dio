const BASE_URL = 'http://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
	try {
		let data = await fetch(BASE_URL);
		let json = await data.json();

		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);
