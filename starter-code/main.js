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


// ===== UNIT 10 & 11 ASSIGNMENT =====

// Get an element with the id of game-board and set it to a variable.
var board = document.getElementById('game-board');
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// 8 ) Create a function called createCards in your JavaScript file. This function will contain the code you just wrote to generate your cards.
function createBoard() {
	
	// 6 ) Assuming your memory card game consists of four cards, create a for loop that makes an HTML element for each card. Each HTML element should be a div as well as have the class card (this will help when you add CSS).
	for (var i = 0; i < cards.length; i++) {
		// console.log("hello");

		// 7 ) Append each newly created card to the div that has the id game-board.
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		// cardElement.addEventListener.("click", isTwoCards);
			// ^ Error??
		board.appendChild(cardElement);
	}
};

// 6) Create a function called isTwoCards to check if two cards are in play.
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = "<img src='king-diamond.png'>";
	} else {
		this.innerHTML = "<img src='queen-heart.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

// 5) Create a function called isMatch to test if two cards in play are a match. Hint: We can then configure our previous game logic code to access the cards!
function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

// 9 ) Be sure to execute/fire your createCards function so it runs!
createBoard();

// 9) When isMatch() is ran, you should remove all innerHTML of every card to reset the game board.
