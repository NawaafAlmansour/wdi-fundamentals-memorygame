console.log("Up and running!");

var cards = [
  {
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



//console.log("User flipped" + cards[cardId]) ;
var cardsInPlay = [];



 function flipCard(cardId) {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
  	checkForMatch();
  }
};

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
function createBoard() {
for (var i = 0; i < cards.length; i++) {
     var newListItem = document.createElement('img');
     newListItem.setAttribute('src', 'images/back.png');
     newListItem.setAttribute('attributeName', 'attributeValue');
     newListItem.setAttribute('data-id', i);
     newListItem.addEventListener('click', flipCard);
     document.getElementById('game-board').appendChild(newListItem);
}
};

createBoard();
