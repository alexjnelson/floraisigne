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
		letterElements.push(document.createElement("p"));
		letterImgElements.push(document.createElement("img"));
	}

	

}

function dragSign(ev){

}

function dropSign(ev){

}

function getSign(ch){

}

generateWord();