// console.log("JS file is connected to HTML! Woo!")

// ===== UNIT 8 ASSIGNMENT =====

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// console.log(cardOne == cardTwo);
// console.log(cardTwo == cardThree);


// ===== UNIT 9 ASSIGNMENT =====

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


// ===== UNIT 10 ASSIGNMENT =====

// 8 ) Create a function called createCards in your JavaScript file. This function will contain the code you just wrote to generate your cards.
var createCards = function() {

	// Get an element with the id of game-board and set it to a variable.
	var gameBoard = document.getElementById('game-board');
	var newDiv = document.createElement('div');

	// 6 ) Assuming your memory card game consists of four cards, create a for loop that makes an HTML element for each card. Each HTML element should be a div as well as have the class card (this will help when you add CSS).
	for (var i = 0; i < 4; i++) {
		// console.log("hello");

		// 7 ) Append each newly created card to the div that has the id game-board.
		newDiv.className = 'card';
		gameBoard.appendChild(newDiv);
	}
};

// 9 ) Be sure to execute/fire your createCards function so it runs!
createCards();


// ===== UNIT 11 ASSIGNMENT =====

// 1) Declare a variable, cards, and set it equal to an array of four String elements: queen, queen, king, king.
var cards = ["queen", "queen", "king", "king"];

// 2) Declare a variable, cardsInPlay, whose value is an empty array.
var cardsInPlay = [];

// 3) You will now need to set up each card during the createBoard() function. To do this, loop through your cards array and give each element an attribute that equals the card value (e.g. "queen"). See the example below.
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);

		// 4) Add a click event listener to each card element that runs a function, isTwoCards. 
		// cardElement.addEventListener.('click', isTwoCards); <-- Error??
	}
};

// 5) Create a function called isMatch to test if two cards in play are a match. Hint: We can then configure our previous game logic code to access the cards!

var isMatch = function(){
	for (var i = 0; i < cards.length; i++) {

	}

};


// 6) Create a function called isTwoCards to check if two cards are in play.
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}

};

// 8) In your cardElement's click event listener, set the cardElement's innerHTML to an image of either a King of Queen. You will need to get the data-card attribute to decide which image to display. You can then use that 'data-card' value to decide which image to use using an if statement.


// 9) When isMatch() is ran, you should remove all innerHTML of every card to reset the game board.
