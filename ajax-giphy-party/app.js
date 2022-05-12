const searchButton = document.querySelector('#searchBtn');
const removeButton = document.querySelector('#clearGifs');

async function getGiphyData() {
	let res = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
}

getGiphyData();

async function getGif(searchTerm) {
	try {
		const gifURL = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
		const res = await axios.get(gifURL);
		const length = res.data.data.length;
		const randomIdx = Math.floor(Math.random(length) * length);
		const url = res.data.data[randomIdx].images.original.url;
		let section = document.querySelector('#gifSection');
		let newGif = document.createElement('img');
		newGif.classList.add('gif');
		newGif.src = `${url}`;
		section.append(newGif);
	} catch (e) {
		alert('GIF not Found!');
	}
}

const form = document.querySelector('#gifForm');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	const searchTerm = document.querySelector('#search');
	getGif(searchTerm.value);
});

removeButton.addEventListener('click', function() {
	let gifs = document.querySelectorAll('.gif');
	for (let gif of gifs) {
		gif.remove();
	}
});
