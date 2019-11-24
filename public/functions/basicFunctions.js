//const randomWords = require('words.json').words;

const randomWords = ["ant", "fish","pie","bat","frog","seal","bear","goat","ship","bus",
		"gold","sky","car","hat","star","cat","lake","stop","cow","leaf","sun","day","night",
		"lion","dog","map","tree","duck","nest","truck"];
var letterElements = [], letterImgElements = [];

function generateWord(scrambled = false){
	let i = Math.floor(Math.random()*randomWords.length);
<<<<<<< Updated upstream
	let word = randomWords[i];
=======

	if (word === "") {
		word = randomWords[i];
	}

	console.log(word);

<<<<<<< Updated upstream
	wordImg = document.getElementById(scrambled ? "skills-word-img" : "word-img");
>>>>>>> Stashed changes
=======
	let wordImgDiv = document.getElementById("image");
	let imgURL = JSON.parse(search(word)).items[0].link;
>>>>>>> Stashed changes

<<<<<<< Updated upstream
	wordImg.src = JSON.parse(search(word)).items[0].link;
=======
	console.log(imgURL);
	wordImgDiv.style.backGroundImage=imgURL;


<<<<<<< Updated upstream
	console.log(wordImg);
>>>>>>> Stashed changes

	let letterListElement = document.getElementById(scrambled ? "skills-letter-list" : "letter-list");
	let letterImgListElement = document.getElementById(scrambled ? "skills-letter-img-list" : "letter-img-list");

	let letterWidth = (window.innerWidth*0.8) / word.length;
	let letterHeight = 1.313 * letterWidth;

	console.log(letterWidth);

	while(letterElements.length !== 0){
		letterElements.shift().remove();
		/*letterImgElements.shift().remove();*/
	}

	for (letter of word){
		let el = document.createElement("div");
		let img = getSign(letter);
		el.id = letter;

		el.setAttribute("style", `display:inline-flex;height:${letterHeight*0.9};width:${letterWidth};`);
		el.setAttribute("style", `background-image:url("${img}")`);

		letterElements.push(el);

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

	console.log(letterElements);

	if (scrambled) shuffle(letterImgElements);

	for (let i = 0 ; i < word.length ; i++){
		letterListElement.appendChild(letterElements[i]);
		//letterImgListElement.appendChild(letterImgElements[i]);
	}
=======
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
>>>>>>> Stashed changes

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