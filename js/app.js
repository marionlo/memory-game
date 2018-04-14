// Global variables
let icons = ["fa-anchor", "fa-anchor", "fa-bicycle", "fa-bicycle", "fa-bolt", "fa-bolt", "fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bomb", "fa-bomb"];
let openCards = [];
let moves = 0;
let matchedCards = 0;
let timer = 0;
let clock;



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
for (let i = 0; i < cards.length; i++) {
$( '.deck' ).append($('<li class="card"><i class="fa ' + cards[i] + '"></i></li>'))
}
   cardsListener();

};

startTimer ()


// Listen to cards clicks
function cardsListener() {

console.log(openCards.length)
 $(".card").click(function() {
   if (openCards.length < 2) {
       $(this).addClass('open show');
        openCards.push(this);

         console.log(openCards)
      if(openCards[0].innerHTML === openCards[1].innerHTML){

           match()
       } else {

          notMatch()
       }
       // Increment the number of moves and append it on the html
       moves++;
       $( '.moves' ).html(moves);
       console.log(moves);
   }

   // Append the stars according to the number of moves
   if (moves > 20) {
               document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li>';
           } else if (moves > 14) {
               document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
           } else {
               document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
           }

   // If all of the cards are matching you win the game
   endGame()

 }

    )};

// If the cards are matching, remove class open and show and add class match
function match () {
  openCards[0].classList.add("match");
   openCards[1].classList.add("match");
   openCards[0].classList.remove("show", "open");
   openCards[1].classList.remove("show", "open");
   openCards = [];
   matchedCards++
}

// If the cards are not matching, return to the initial state after a small delay => setTimeout function
function notMatch () {
 setTimeout(function(){
       openCards[0].classList.remove("show", "open");
       openCards[1].classList.remove("show", "open");
       openCards = [];
   },600);
}

// If all the cards are matching, end the game
function endGame () {
  if (matchedCards >= 8) {
    console.log(matchedCards);
    alert("Wow it took you only " + moves +" moves in " + timer + " s to win this game! You've got a score of "+ score + " Congrats! Do you want to play again?");
stopTimer()
  }
  else {
  console.log(matchedCards);
  }

  if (moves > 20 && moves < 15) {
    let score = "3";
          } else if (moves > 14 && moves < 5) {
              score = "2"
          } else {
            score = "1"

          }
          console.log(score);
}


// Start timer on first click
function startTimer () {
 $(".deck").one("click", function () {
     clock = setInterval(function(){
       timer++;
        $( '.timer' ).html(timer); }, 1000);
        });

}

function stopTimer() {
	clearInterval(clock);
};


newGame();
