//const randomWords = require('words.json').words;

const randomWords = ["ant", "fish","pie","bat","frog","seal","bear","goat","ship","bus",
		"gold","sky","car","hat","star","cat","lake","stop","cow","leaf","sun","day","night",
		"lion","dog","map","tree","duck","nest","truck"];
var letterElements = [], letterImgElements = [], letterDivs = [];

var signDivs;

var newP;

var held;

function generateWord(word){
	let oldWordImg = document.getElementById("wordImg");
	signDivs = [];

	if (oldWordImg !== null){
		oldWordImg.remove();
	}

	if (word === undefined) {
		let i = Math.floor(Math.random()*randomWords.length);
		word = randomWords[i];
	}

	console.log(word);

	let wordImg = document.createElement("img");
	let wordImgDiv = document.getElementById("image");
	//let imgURL = JSON.parse(search(word)).items[0].link;
	let imgURL = "https://img.cinemablend.com/filter:scale/quill/e/5/c/2/4/9/e5c2494b7fec13181defbc8afe66a7a3bee5bae0.jpg?fw=1200";

	console.log(imgURL);
	wordImg.src=imgURL;

	wordImg.style.height = "100%";
	wordImg.style.width= "100%";
	wordImg.style.borderRadius="20px";
	wordImg.id = "wordImg";

	wordImgDiv.appendChild(wordImg);	


	let asl = document.getElementById("ASL");
	while (asl.firstChild) {
    	asl.removeChild(asl.firstChild);
  	}

  	let letterWidth=(90/word.length);
	let padding = (95-word.length*letterWidth)/(word.length+1);
	letterWidth+="%";
	console.log(padding);

	for (let i = 0 ; i < word.length ; i++){
		let letterDiv = document.createElement("div");
		letterDiv.id = "letter" + i;
		letterDiv.style.marginLeft = i === 0 ? (padding*2.5) +"%" : padding + "%";
		letterDiv.style.width=letterWidth;
		letterDiv.style.height="65%";
		letterDiv.style.display="inline-flex";
		letterDiv.style.marginTop="4%";

		let signDiv = document.createElement("div");
		signDiv.id = "sign" + i;
		signDiv.style.width="100%";
		signDiv.style.height="80%";
		signDiv.style.position="relative";

		let signImg = document.createElement("img");
		signImg.src=getSign(word.charAt(i));
		signImg.style.height="100%";
		signImg.style.width="100%";

		let letter = document.createElement("div");
		letter.innerHTML = word.charAt(i);
		letter.style.position="absolute";
		letter.style.width=letterWidth;
		letter.style.top="67%";
		letter.style.textAlign="center";
		letter.style.fontSize="30px";


		asl.appendChild(letterDiv);
		letterDiv.appendChild(signDiv);
		signDiv.appendChild(signImg);
		letterDiv.appendChild(letter);
	} 

}


function search(word)
{	
	// main account keys
	//var key = "AIzaSyDJfvKrb8ui7Bu5KhpMDyTfalLv6POs614"
	//var id = "005443348412993502233:cklwqdwacj7"

	// jack the hedgehog keys
	var key = "AIzaSyB-V6W2o8C0WHg-BoePAwHl4aBROitnQN8"
	var id = "009188198972347847553:yn8cif7d73p";
	theUrl = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&q=${word}&searchType=image&fileType=jpg&imgSize=small&alt=json`

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}




function generateScrambledWord(word){
	let oldWordImg = document.getElementById("wordImg");
	signDivs = [];

	if (oldWordImg !== null){
		oldWordImg.remove();
	}

	if (word === undefined) {
		let i = Math.floor(Math.random()*randomWords.length);
		word = randomWords[i];
	}

	console.log(word);

	let wordImg = document.createElement("img");
	let wordImgDiv = document.getElementById("image");
	//let imgURL = JSON.parse(search(word)).items[0].link;
	let imgURL = "https://img.cinemablend.com/filter:scale/quill/e/5/c/2/4/9/e5c2494b7fec13181defbc8afe66a7a3bee5bae0.jpg?fw=1200";

	console.log(imgURL);
	wordImg.src=imgURL;

	wordImg.style.height = "100%";
	wordImg.style.width= "100%";
	wordImg.style.borderRadius="20px";
	wordImg.id = "wordImg";

	wordImgDiv.appendChild(wordImg);	


	let asl = document.getElementById("ASL");
	while (asl.firstChild) {
    	asl.removeChild(asl.firstChild);
  	}

  	let signbank = document.getElementById("signbank");
  	while(signbank.firstChild){
  		signbank.removeChild(signbank.firstChild);
  	}

  	let letterWidth=(90/word.length);
	let padding = (95-word.length*letterWidth)/(word.length+1);
	letterWidth+="%";
	console.log(padding);

	let handSigns = [];

	for (let i = 0 ; i < word.length ; i++){
		let letterDiv = document.createElement("div");
		letterDiv.id = "letter" + i;
		letterDiv.style.marginLeft = i === 0 ? (padding*2.5) +"%" : padding + "%";
		letterDiv.style.width=letterWidth;
		letterDiv.style.height="65%";
		letterDiv.style.display="inline-flex";
		letterDiv.style.marginTop="4%";

		let signDiv = document.createElement("div");
		signDiv.id = "sign" + i + word.charAt(i);
		signDiv.style.width="100%";
		signDiv.style.height="80%";
		signDiv.style.position="relative";
		signDivs.push(signDiv);

		signDiv.addEventListener("drop", dragdrop);
		signDiv.addEventListener("dragover", dragover);

		let bankDiv = document.createElement("div");
		bankDiv.style.marginLeft = i === 0 ? (padding*2.5) +"%" : padding + "%";
		bankDiv.style.width=letterWidth;
		bankDiv.style.height="65%";
		bankDiv.style.display="inline-flex";
		bankDiv.style.marginTop="4%";

		let signImg = document.createElement("img");
		signImg.id = "image" + i + word.charAt(i);
		signImg.src=getSign(word.charAt(i));
		signImg.style.height="100%";
		signImg.style.width="100%";

		signImg.draggable="true";
		signImg.addEventListener("dragstart", dragstart);
		signImg.addEventListener("dragend", dragend);

		let letter = document.createElement("div");
		letter.innerHTML = word.charAt(i);
		letter.style.position="absolute";
		letter.style.width=letterWidth;
		letter.style.top="67%";
		letter.style.textAlign="center";
		letter.style.fontSize="30px";

		asl.appendChild(letterDiv);
		letterDiv.appendChild(signDiv);
		signbank.appendChild(bankDiv);
		handSigns.push(signImg);
		letterDiv.appendChild(letter);
	} 

	shuffle(handSigns);

	let nodes = signbank.childNodes;
	for (let i = 0 ; i < nodes.length ; i++){
		nodes[i].appendChild(handSigns[i]);
	}

	newP = document.createElement("p");
	signbank.appendChild(newP);

}


function dragstart(){
	console.log("start");
	held = this;
	console.log(held);
}

function dragdrop(){
	console.log("dropped");

	if (this.firstChild){
		held.parentNode.appendChild(this.firstChild);
		this.appendChild(held);
	}
	else{
		this.appendChild(held);
	}

	let c = 0;
	for (let signDiv of signDivs){
		if (signDiv.id.charAt(5) !== signDiv.firstChild.id.charAt(6)){
			c++;
		}
	}

	if (c===0){
		newP.innerHTML="Correct! Way to go!";
		for (signDiv of signDivs){
			signDiv.firstChild.draggable="false";
		}
	}
	else {
		newP.innerHTML= c + " signs are still incorrect!";
	}

}

function dragend(){
	console.log("end");

	held = null;
}

function dragover(e){
	e.preventDefault();
}



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
