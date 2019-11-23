//const randomWords = require('words.json').words;

const randomWords = ["ant", "fish","pie","bat","frog","seal","bear","goat","ship","bus",
		"gold","sky","car","hat","star","cat","lake","stop","cow","leaf","sun","day","night",
		"lion","dog","map","tree","duck","nest","truck"];
var letterElements = [], letterImgElements = [];

function generateWord(scrambled = false){
	let i = Math.floor(Math.random()*randomWords.length);
	let word = randomWords[i];

	console.log(word);

	let letterListElement = document.getElementById(scrambled ? "skills-letter-list" : "letter-list");

	//let letterWidth = parseInt(letterListElement.style.width) / word.length;
	let letterWidth = (window.innerWidth*0.85) / word.length;
	let letterHeight = 1.313 * letterWidth;

	for (letter of word){
		let el = document.createElement("p");
		let imEl = document.createElement("img");

		el.id = letter;
		el.innerHTML = letter;
		imEl.id = letter + "im";
		//imEl.src=getSign(letter);
		imEl.src="https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvdGhpbmdfaW1hZ2VzL2UxNzBjMWNjLWUwNzMtNDJjOC1hOTUyLThhMzEwZDZkMGFjYmY0ZWI5ZGJhMWI1YzNiYjJhMl9QZWFudXRzYW5kQ29rZV9TYW1PQnJpZW4uanBnIl0sWyJwIiwiY29udmVydCIsIiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXSxbInAiLCJ0aHVtYiIsIjU4MHg1ODAjIl1d/PeanutsandCoke_SamOBrien.jpg";

		/*el.style.height = letterHeight*0.1;
		el.style.width = letterWidth;

		imEl.style.height = letterHeight*0.9;
		imEl.style.width = letterWidth;*/

		el.setAttribute("style", `display:block;height:${letterHeight*0.1};width:${letterWidth};`);
		imEl.setAttribute("style", `display:block;height:${letterHeight*0.9};width:${letterWidth};`);

		console.log(imEl.style.width);

		letterElements.push(el);
		letterImgElements.push(imEl);
	}

	console.log(letterElements);

	if (scrambled) shuffle(letterImgElements);

	for (let i = 0 ; i < word.length ; i++){
		letterListElement.appendChild(letterImgElements[i]);
		letterListElement.appendChild(letterElements[i]);
	}

}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


function dragSign(ev){

}

function dropSign(ev){

}