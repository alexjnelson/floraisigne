//const randomWords = require('words.json').words;

const randomWords = ["ant", "fish","pie","bat","frog","seal","bear","goat","ship","bus",
		"gold","sky","car","hat","star","cat","lake","stop","cow","leaf","sun","day","night",
		"lion","dog","map","tree","duck","nest","truck"];
var letterElements = [], letterImgElements = [], letterDivs = [];

function generateWord(scrambled = false, word = ""){
	let i = Math.floor(Math.random()*randomWords.length);
	let word = randomWords[i];

	if (word === "") {
		word = randomWords[i];
	}

	console.log(word);

	let wordImg = document.getElementById(scrambled ? "skills-word-img" : "word-img");
	let imgURL = JSON.parse(search(word)).items[0].link;

	console.log(imgURL);

	wordImg.setAttribute("src", imgURL);
	wordImg.src = JSON.parse(search(word)).items[0].link;

	wordImg.setAttribute("src", imgURL);
	wordImg.src=imgURL;

	console.log(wordImg);

	let letterListElement = document.getElementById(scrambled ? "skills-letter-list" : "letter-list");
	let letterImgListElement = document.getElementById(scrambled ? "skills-letter-img-list" : "letter-img-list");

	let letterWidth = (window.innerWidth*0.8) / word.length;
	let letterHeight = 1.313 * letterWidth;

	console.log(letterWidth);

	while(letterDivs.length !== 0){
		letterDivs.shift().remove();
		/*letterImgElements.shift().remove();*/
	}

	for (letter of word){
		let div = document.createElement("div");
		let img = getSign(letter);
		div.id = letter;

		div.setAttribute("style", `display:inline-flex;height:${letterHeight*0.9};width:${letterWidth};`);
		div.setAttribute("style", `background-image:url("${img}")`);

		letterDivs.push(div);

/*		let el = document.createElement("p");
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
		letterImgElements.push(imEl);*/
	}

	console.log(letterDivs);

	if (scrambled) shuffle(letterImgElements);

	for (let i = 0 ; i < word.length ; i++){
		letterListElement.appendChild(letterDivs[i]);
		//letterImgListElement.appendChild(letterImgElements[i]);
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