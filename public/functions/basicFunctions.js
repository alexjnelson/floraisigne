const randomWords = require('./words.json').words;
var letterElements = [], letterImgElements = [];

function generateWord(scrambled = false){
	let i = Math.floor(Math.random()*randomWords.length);
	let word = randomWords[i];
	let letters = [];

	for (ch of word){
		letters.push({letter: ch, img: getSign(ch)});
	}

	for (letter of letters){
		let el = document.createElement("p");
		let imEl = document.createElement("img");

		el.id = letter;
		imEl.id = letter + "im";
		imEl.src=getSign(letter);

		letterElements.push(el);
		letterImgElements.push(imEl);


	}

	

}

function dragSign(ev){

}

function dropSign(ev){

}

generateWord();