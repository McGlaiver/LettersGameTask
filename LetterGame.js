// JavaScript source code

var letters = [];
var letterID = 0;
var colors = ['red','yellow','green','blue','orange'];
var characters = ['a','s','d','f','g','h','j','k'];


var playerScore=0;
var x=0;


//Letter Class, added extra attributes for colors and speed to make it my own and more challenging to play and code
class letter{
	constructor (character, bgSize, bgColor, fontSize, speed, position){
		this.character = character;
		this.bgSize = bgSize;
		this.bgColor = bgColor;
		this.fontSize = fontSize;
		this.speed = speed;
		this.position = position;

		this.style.background = bgColor;
		this.style.width = bgSize + "px";
		this.style.height = bgSize + "px";
		this.style.font = fontSize +"px";
		this.style.left = position +"px";
		this.style.top = "0px";
	}

	//Move letters down one slot
	function move() {
	this.style.top = parseInt(this.style.top,3) + this.speed; 
	if (parseInt(this.style.top, 3) > 500) {
		countScore(-1);
		delete this;
	}
}

}

// Creates random attributes for each new letter
function randomize() {

	var characterPos = Math.floor((Math.random() * characters.length) + 1);
	var character = characters.indexOf(characterPos);

	var bgSize = Math.floor((Math.random() * 80) + 25);

	var color = Math.floor((Math.random() * colors.length) + 1);
	var bgColor = colors.indexOf(color);

	var fontSize = Math.floor((Math.random() * 15) + 10);

	var speed = Math.floor((Math.random() * 50) + 10);

	var position = Math.floor((Math.random() * 480) + 10);

	letters[letterID] = new letter(character, bgSize, bgColor, fontSize, speed, position);
	letterID++;

	
}
//Creates random amount of letters
function spawn(){
	var amntOfSpawns = Math.floor((Math.random() * 8) + 1);
	for (var e = 0; e < amntOfSpawns; e++){
		randomize();

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
	setInterval(spawn(), 500);
}


//Stops the game
function stopGame() {
	alert("Your Score is: " + playerScore);
	letters = [];
	letterID = 0;
}



//Counts score
function countScore(x){
	playerScore+= x;
}


