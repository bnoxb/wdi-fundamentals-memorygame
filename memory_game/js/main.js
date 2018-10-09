// Javascript File

// variable and initialization cosole.log
console.log("Up and Running!");
var cards = [{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
// function to check if theres a match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else alert("Try again you suck...");
}

//Function to store all the steps that should happen when a user flips a card
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(2);
