//const randomWords = require('words.json').words;

const randomWords = ["ant", "fish","pie","bat","frog","seal","bear","goat","ship","bus",
		"gold","sky","car","hat","star","cat","lake","stop","cow","leaf","sun","day","night",
		"lion","dog","map","tree","duck","nest","truck"];
var letterElements = [], letterImgElements = [];

function generateWord(scrambled = false, word = ""){
	let i = Math.floor(Math.random()*randomWords.length);

	if (word === "") {
		word = randomWords[i];
	}
	else{

	}


	console.log(word);

	let letterListElement = document.getElementById(scrambled ? "skills-letter-list" : "letter-list");
	let letterImgListElement = document.getElementById(scrambled ? "skills-letter-img-list" : "letter-img-list");

	//let letterWidth = parseInt(letterListElement.style.width) / word.length;
	let letterWidth = (window.innerWidth*0.8) / word.length;
	let letterHeight = 1.313 * letterWidth;

	console.log(letterWidth);

	while(letterElements.length !== 0){
		letterElements.shift().remove();
		letterImgElements.shift().remove();
	}

	for (letter of word){
		let el = document.createElement("p");
		let imEl = document.createElement("img");

		el.id = letter;
		el.innerHTML = letter;
		imEl.id = letter + "im";
		imEl.src = getSign(letter);


		el.setAttribute("style", `left:${letterWidth/2 + (letterWidth*word.indexOf(letter))};display:inline-flex;height:${letterHeight*0.1};width:${letterWidth};fontSize:75px`);
		imEl.setAttribute("style", `display:inline-flex;height:${letterHeight*0.9};width:${letterWidth};`);

		el.style.height = letterHeight*0.1;
		el.style.width = letterWidth;
		el.style.fontSize = "75px";

		el.style.left = letterWidth/2 + (letterWidth*word.indexOf(letter));
	
		imEl.style.height = letterHeight*0.9;
		imEl.style.width = letterWidth;

		console.log(imEl);

		letterElements.push(el);
		letterImgElements.push(imEl);
	}

	console.log(letterElements);

	if (scrambled) shuffle(letterImgElements);

	for (let i = 0 ; i < word.length ; i++){
		letterElements[i]
		letterListElement.appendChild(letterElements[i]);
		letterImgListElement.appendChild(letterImgElements[i]);
	}

}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


function dragSign(ev){

}

function dropSign(ev){

}