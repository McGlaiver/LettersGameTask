// JavaScript source code

var gameField[15];
var colors = ['red','yellow','green','blue','orange'];

var amntOfSpawns=0;
var playerScore=0;
var x=0;
var rndPosition=0;

//Letter Class
class letter{
	constructor (character, bgSize, bgColor, fontSize){
		this.character = character;
		this.bgSize = bgSize;
		this.bgColor = bgColor;
		this.fontSize = fontSize;
	}

}

//Start and Stop button
void startButton{
	if (gameField.length == 0){
		runGame();
	}
	else{
		stopGame();
	}
}
//Starts the game
void runGame(){
	for (var i = 0; i < gameField.length; i++) { 
    gameField[i] = new Array(15); 
	}
	setInterval(spawn, 1000);
}


//Stops the game
void stopGame(){
	alert("Your Score is: " + playerScore);
	gameField = [];
}

//Move letters down one slot
void move(){
	//gameField.indexOf(this)
}

//Create letters
void spawn(){
	gameField.forEach(move());
	amntOfSpawns = Math.floor((Math.random() * 8) + 1);
	for (var e = 0; e < amntOfSpawns; e++;){
		rndPosition = Math.floor((Math.random() * 15) + 1);
		gameField[rndPosition][0] = new letter();
	}
}

/*Counts score
void countScore(x){
	playerScore+= x;
}*/


