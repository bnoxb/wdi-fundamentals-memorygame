// Javascript File

// variable and initialization cosole.log
console.log("Up and Running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
// function to check if theres a match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else alert("Try again you suck...");
}

//Function to store all the steps that should happen when a user flips a card
var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipCard(0);
flipCard(2);