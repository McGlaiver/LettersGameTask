// JavaScript source code

let letters = [];
let spawnInterval = 10;
let i;
let gametime;
let gameboard;
let colors = ['red','yellow','green','blue','orange'];
let characters = ['a','s','d','f','g','h','j','k'];
let spawnCounter = 0;
let playerScore = 0;
let x = 0;
document.addEventListener('DOMContentLoaded', (event) => {
	gameboard = document.getElementById("gameboard");
  })


//Letter Class, added extra attributes for colors and speed to make it my own and more challenging to play and code
class Letter{
	constructor (character, bgSize, bgColor, fontSize, speed, position){
		this.character = character;
		this.bgSize = bgSize;
		this.bgColor = bgColor;
		this.fontSize = fontSize;
		this.speed = speed;
		this.position = position;
		this.element = document.createElement("div");
		this.element.className = "letter";
		this.element.textContent = character;
	
		
		let style = this.element.style;
		style.background = bgColor;
		style.width = bgSize + "px";
		style.height = bgSize + "px";
		style.lineHeight = bgSize + "px";
		style.left = position +"px";
		style.top = "0px";
		// Better than let + "xx";
		style.fontSize = `${fontSize}px`;

		gameboard.appendChild(this.element);
	}

	//Move letters down one slot
	move() {
		let style = this.element.style;
		style.top = this.element.offsetTop + this.speed + "px"; 
		if (this.element.offsetTop > 500) {
			setScore(playerScore-1);
			delete letters[letters.indexOf(this)];
			gameboard.removeChild(this.element);
		}
	}

	destroy() {
			delete letters[letters.indexOf(this)];
			gameboard.removeChild(this.element);
	}
}

// Creates random attributes for each new letter
function randomize() {

	let characterPos = Math.floor((Math.random() * characters.length));
	let character = characters[characterPos];

	let bgSize = Math.floor((Math.random() * 25) + 25);

	let color = Math.floor((Math.random() * colors.length));
	let bgColor = colors[color];

	let fontSize = Math.floor((Math.random() * 15) + 10);

	let speed = Math.floor((Math.random() * 5) + 2);

	let position = Math.floor((Math.random() * 440) + 10);

	letters.push(new Letter(character, bgSize, bgColor, fontSize, speed, position));


	
}
//Checks for corresponding letters
// Double check functionality tomorrow
function checkLetter(event){
	let howMany = 0;
	for (var u=0; u < letters.length; u++){
		if(letters[u] == undefined) u++;
 		else if(letters[u].character === event.key){howMany++;}
		if (howMany > 1) break;
		
	}
	if (howMany < 2){setScore(playerScore-2);}
	else
	{
	letters.forEach((letter)=>{if (letter.character === event.key) {
		setScore(playerScore+1);
		letter.destroy();
	}});
	howMany = 0;
	}
	}

//Creates random amount of letters
function spawn(){
	letters.forEach((letter)=>{letter.move();});
	spawnCounter++;
/*	for (const letter of letters){
		letter.move();
	}*/
	if (spawnCounter === spawnInterval){
		let amntOfSpawns = Math.floor((Math.random() * 5) + 1);
		for (let e = 0; e < amntOfSpawns; e++){
			randomize();
		}
		spawnCounter = 0;
	}

}
//Start and Stop button
function startButton() {
	if (letters.length == 0){
		runGame();
		
	}
	else{
		stopGame();
	}
}
//Starts the game
function runGame() {

	gametime = setInterval(spawn, 100);
	document.addEventListener("keydown", checkLetter);	
}


//Stops the game
function stopGame() {
	alert("Your Score is: " + playerScore);
	setScore(0);
	letters.forEach((letter)=>{letter.destroy();});
	letters = [];
	clearInterval(gametime);
	
}



//Counts score
function setScore(x){
	playerScore = x;
	document.getElementById("scoreTab").value = playerScore;
}
//document.getElementById("strt").addEventListener("click", startButton);

