// console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// console.log(cardOne == cardTwo);
// console.log(cardTwo == cardThree);

// if (cardTwo === cardFour) {
// 	alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again.")
// }

// if (cardTwo === cardThree) {
// 	alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again.")
// }

// if (cardTwo === cardOne) {
// 	alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again.")
// }

// if (cardOne === cardFour) {
// 	alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again.")
// }

// if (cardOne === cardThree) {
// 	alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again.")
// }

// if (cardThree === cardFour) {
// 	alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again.")
// }

// Get an element with the id of game-board and set it to a variable.

var gameBoard = document.getElementById('game-board');
var newDiv = document.createElement('div');

// 6 ) Assuming your memory card game consists of four cards, create a for loop that makes an HTML element for each card. Each HTML element should be a div as well as have the class card (this will help when you add CSS).

// for (var i = 0; i <= 3; i++){

// 7 ) Append each newly created card to the div that has the id game-board.

// 	gameBoard.appendChild(newDiv);
// }

// 8 ) Create a function called createCards in your JavaScript file. This function will contain the code you just wrote to generate your cards.

var createCards = function(){
	
	var x = 4;

	for (var i = 0; i < 4; i++) {
		// console.log("hello");
		newDiv.className = "card";
		gameBoard.appendChild(newDiv).className = 'card';
	}
};

// 9 ) Be sure to execute/fire your createCards function so it runs!
createCards();



