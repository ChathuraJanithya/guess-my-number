"use strict";

/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";
console.log(
  (document.querySelector(".message").textContent = "Correct Number!")
);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23; */

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".guess").value);
  console.log(secretNumber);
  let score = 20;
  let highscore = 0;
  if (!number) {
    displayMessage("No number!");
  } else if (number === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (number > secretNumber) {
    if (score > 1) {
      displayMessage("Too high!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  } else if (number < secretNumber) {
    if (score > 1) {
      displayMessage("Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
