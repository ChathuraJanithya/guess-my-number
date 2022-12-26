"use strict";

/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";
console.log(
  (document.querySelector(".message").textContent = "Correct Number!")
);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23; */

//handling click events
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//generating random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
//setting initial score
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    displayMessage("No number!");
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //getting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess > secretNumber) {
    //when score is greater than 1
    if (score > 1) {
      displayMessage("Too high!");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //when score is less than 1
    else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is wrong
  else if (guess < secretNumber) {
    //when score is greater than 1
    if (score > 1) {
      displayMessage("Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //when score is less than 1
    else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
