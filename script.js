"use strict";

/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";
console.log(
  (document.querySelector(".message").textContent = "Correct Number!")
);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23; */

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const number = document.querySelector(".guess").value;
  console.log(secretNumber);

  let score = 20;

  if (!number) {
    document.querySelector(".message").textContent = "Not number!";
  } else {
    if (number == secretNumber) {
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    } else if (number > secretNumber) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
    } else if (number < secretNumber) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
    }
  }
  document.querySelector(".highscore").textContent = score;
});
