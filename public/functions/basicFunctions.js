//const randomWords = require('words.json').words;

const randomWords = ["ant", "fish","pie","bat","frog","seal","bear","goat","ship","bus",
		"gold","sky","car","hat","star","cat","lake","stop","cow","leaf","sun","day","night",
		"lion","dog","map","tree","duck","nest","truck"];
var letterElements = [], letterImgElements = [], letterDivs = [];

function generateWord(scrambled = false, word = ""){
	let i = Math.floor(Math.random()*randomWords.length);
	word = randomWords[i];

	if (word === "") {
		word = randomWords[i];
	}

	console.log(word);

	let wordImgDiv = document.getElementById("image");
	let imgURL = JSON.parse(search(word)).items[0].link;

	console.log(imgURL);
	wordImgDiv.style.backGroundImage=imgURL;


	let oldLetters = document.getElementsByClassName("letter");
	for (let i = 0 ; i < oldLetters.length ; i++){
		oldLetters[i].remove();
	}

	let padding = (100-word.length)/(word.length+1) + "px";
	let asl = document.getElementById("ASL");

	for (let i = 0 ; i < word.length ; i++){
		let letterDiv = document.createElement("div");
		letterDiv.id = "letter" + i;
		letterDiv.class = "letter";
		letterDiv.style.marginLeft = padding;

		let signDiv = document.createElement("div");
		signDiv.id = "sign" + i;
		signDiv.class = "sign";
		signDiv.style.backGroundImage(getSign(word.charAt(i)));

		let letter = document.createElement("p");
		p.innerHTML = word.charAt(i);

		asl.appendChild(letterDiv);
		letterDiv.appendChild(signDiv);
		letterDiv.appendChild(letter);
	} 

}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


function dragSign(ev){

}

function dropSign(ev){

}

function search(word)
{	
	var key = "AIzaSyDJfvKrb8ui7Bu5KhpMDyTfalLv6POs614"
	var id = "005443348412993502233:cklwqdwacj7"
	theUrl = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${word}&searchType=image&fileType=jpg&imgSize=small&alt=json`

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}