const randomWords = require('./words.json').words;
var letterElements = [], letterImgElements = [];

function generateWord(scrambled = false){
	let i = Math.floor(Math.random()*randomWords.length);
	let word = randomWords[i];
	let letters = [];

	let letterListElement = document.getElementById(scrambled ? "skills-letter-list" : "letter-list");

	for (ch of word){
		letters.push({letter: ch, img: getSign(ch)});
	}

	for (letter of letters){
		let el = document.createElement("p");
		let imEl = document.createElement("img");

		el.id = letter;
		imEl.id = letter + "im";
		imEl.src=getSign(letter);

		let letterWidth = letterListElement.style.width.replace("px","") / letters.length;
		let letterHeight = 1.313 * letterWidth;

		el.style.height = (letterHeight*0.1) + "px";
		el.style.width = letterWidth + "px";

		imEl.style.height = (letterHeight*0.9) + "px";
		imEl.style.width = letterWidth + "px";

		letterElements.push(el);
		letterImgElements.push(imEl);
	}

	if (scrambled) shuffle(letterImgElements);

	for (let i = 0 ; i < letters.length ; i++){
		letterListElement.appendChild(letterImgElements[i]);
		letterListElement.appendChild(letterElements[i]);
	}

}

function shuffle(arr){
	// shuffle array
	return arr;
}


function dragSign(ev){

}

function dropSign(ev){

}

generateWord();