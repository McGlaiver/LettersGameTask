// JavaScript source code

var letters = [];
var spawnInterval = 10;
var i;
var gametime;
var gameboard;
var colors = ['red','yellow','green','blue','orange'];
var characters = ['a','s','d','f','g','h','j','k'];
var spawnCounter = 0;
var playerScore = 0;
var x = 0;
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
		// Better than var + "xx";
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

	var characterPos = Math.floor((Math.random() * characters.length));
	var character = characters[characterPos];

	var bgSize = Math.floor((Math.random() * 25) + 25);

	var color = Math.floor((Math.random() * colors.length));
	var bgColor = colors[color];

	var fontSize = Math.floor((Math.random() * 15) + 10);

	var speed = Math.floor((Math.random() * 5) + 2);

	var position = Math.floor((Math.random() * 440) + 10);

	letters.push(new Letter(character, bgSize, bgColor, fontSize, speed, position));


	
}
//Checks for corresponding letters
function checkLetter(event){
	letters.forEach((letter)=>{if (letter.character === event.key) {
		setScore(playerScore+1);
		letter.destroy();
	}});
		
	}

//Creates random amount of letters
function spawn(){
	letters.forEach((letter)=>{letter.move();});
	spawnCounter++;
/*	for (const letter of letters){
		letter.move();
	}*/
	if (spawnCounter === spawnInterval){
		var amntOfSpawns = Math.floor((Math.random() * 5) + 1);
		for (var e = 0; e < amntOfSpawns; e++){
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

