let icons = ["fa-anchor", "fa-anchor", "fa-bicycle", "fa-bicycle", "fa-bolt", "fa-bolt", "fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bomb", "fa-bomb"];
 let openCards = [];
 let moves = 0;
 let matchedCards = 0;
 let timer = 0;
 let clock;
 let score = "0";




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
  $( '.deck' ).empty();
  timer = 0;
   $( '.moves' ).text("0");
  $( '.timer' ).text("0");
  stopTimer()
  startTimer ()
  openCards = [];
  moves = 0;
  matchedCards = 0;

for (let i = 0; i < cards.length; i++) {
$( '.deck' ).append($('<li class="card"><i class="fa ' + cards[i] + '"></i></li>'))
}
cardsListener()
  };




newGame()






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

function endGame () {
  if (matchedCards === 8) {
    $('#winnerModal').modal('show');
    $('#gameStats').text(`It took you ${timer} seconds, you did ${moves} moves! Your score is ${score}. Woohooo congrats!`);
stopTimer();
  }


  if (moves < 12) {
          score = "3";
  } if (moves < 24 && moves > 12) {
              score = "2"
          } else if (moves > 24) {
            score = "1"

          }
          console.log(score);
}

// Start timer on first click
function startTimer () {
     clock = setInterval(function(){
       timer++;
        $( '.timer' ).html(timer); }, 1000);

}

function stopTimer() {
	clearInterval(clock);
};


// Listen to cards clicks
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
  if (moves > 24) {
              document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li>';
          } else if (moves > 12) {
              document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
          } else {
              document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
          }

  // If all of the cards are matching you win the game
  endGame()

}

   )};


// Restart button
 document.querySelector('.restart').addEventListener('click', newGame);
