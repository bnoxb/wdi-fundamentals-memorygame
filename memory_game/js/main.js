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
var score = 0;
var cardsInPlay = [];
// function to check if theres a match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
		var scoreText = score += 1;
		document.getElementsByClassName('scoreBoard')[0].innerHTML = "Games Won: " + scoreText;
		cardsInPlay = [];
		return;
	} else alert("Try again.");
	cardsInPlay = [];
	return;
}

//Function to store all the steps that should happen when a user flips a card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.getElementsByTagName('img')[0];
		cardElement.parentNode.removeChild(cardElement);
	}
	createBoard();
}
document.getElementsByTagName('button')[0].addEventListener('click', resetBoard);
createBoard();
