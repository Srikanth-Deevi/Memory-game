/*
 * Create a list that holds all of your cards
 */
// we declare variables here
var cards = [...document.querySelectorAll(".card")];
console.log(cards);
let deck = document.querySelector(".deck");
var i = 0;
var movecount = 0;
var matchcount = 0;
var starttime = 0;
var opencards = new Array();
var sec = 0;
var min = 0;
var x;
var restart = document.querySelector(".restart");
// create a loop adding addEventListeners
while (i < cards.length) {
  cards[i].addEventListener("click", click);
  i++;
}
restart.addEventListener("click", () => {
  window.location.reload(true);
});
//we call a function that works like starttime on click
function click() {
  if (starttime == 0) {
    timer();
    starttime++;
  }
  this.classList.add("open", "show", "counter");
  opencards.push(this);
  if (opencards.length == 2) {
    setTimeout(compare, 600);
    starRating();
  }

}
// call a function to rating it
function starRating() {
  if (movecount >= 15 && movecount <= 20) {
    document.querySelector(".stars").children[2].children[0].className = "fa fa-star-o";
  }
  if (movecount > 20) {
    document.querySelector(".stars").children[1].children[0].className = "fa fa-star-o";
  }
}
//call a function to display timming
function timer() {
  var stop = setInterval(() => {
    time = min + "min" + sec + "sec";
    document.querySelector(".time").innerHTML = time;
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (matchcount == 8) {
      clearInterval(stop);
    }
  }, 1000);
}
//we use compare function only two cards are open and show if two are same then it is matched
function compare() {
  console.log(opencards[0].children[0].className);
  if (opencards[0].children[0].className == opencards[1].children[0].className) {
    opencards[0].classList.remove("open", "show");
    opencards[1].classList.remove("open", "show")
    opencards[0].classList.add("match");
    opencards[1].classList.add("match");
    matchcount++;
    stopTimer();
  } else {
    opencards[0].classList.remove("open", "show", "counter");
    opencards[1].classList.remove("open", "show", "counter");

  }
  opencards.length = 0;
  movecount++;
  document.querySelector(".moves").innerHTML = movecount;
}
//To disply the rating of in pop up
function displayRating() {
  if (movecount >= 15 && movecount <= 20) {
    x = "⭐⭐";
  } else
  if (movecount > 20) {
    x = "⭐";
  } else {
    x = "⭐⭐⭐";
  }
  return x;
}
//we stop the time after completion of game
function stopTimer() {
  if (matchcount == 8) {
    clearInterval(stop);
    //we use sweetalert to disply the pop up
    swal({
        title: "😊congratulations successfully 👍completion of Game😁👌\n👏👏",
        type: "success",
        text: "Rating" + displayRating() + "\n moves :" + movecount + "\n time:" + min + "minutes" + sec + "seconds",
        confirmButtonText: "play agin"
      },
      //we reload the game after game completion wee use reload function
      function reload() {
        window.location.reload();

      }
    )
  }
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
//shuffle the cards evey new game
shuffle(cards).forEach(() => {
  [].forEach.call(cards, list => {
    deck.appendChild(list);
  });
})
