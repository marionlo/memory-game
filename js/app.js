 let icons = ["fa-anchor", "fa-anchor", "fa-bicycle", "fa-bicycle", "fa-bolt", "fa-bolt", "fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bomb", "fa-bomb"];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Create the deck and shuffle the cards
function newGame() {
let cards = shuffle(icons);
console.log(cards);
for (let i = 0; i < cards.length; i++) {
$( '.deck' ).append($('<li class="card"><i class="fa ' + cards[i] + '"></i></li>'))
}
};

newGame();
