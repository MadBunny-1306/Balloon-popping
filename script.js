"use strict";

const balloons = document.querySelectorAll(".balloon");
const message = document.querySelector(".message");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const startBtn = document.querySelector(".btnStart");

let audio = document.getElementById("popSound");

startBtn.addEventListener("click", function () {
  document.querySelector(".start-div").classList.add("hide");
  header.classList.remove("hide");
  container.classList.remove("hide");
});

// startBtn.addEventListener("click", function () {
//   document.getElementById("#start-div").classList.add("hide");
//   header.classList.remove("hide");
//   container.classList.remove("hide");
// });

// pop balloons

for (const balloon of balloons) {
  balloon.addEventListener("mouseover", function () {
    balloon.classList.add("hidden");
    balloon.textContent = "POP!";
    audio.play();
    balloon.classList.remove("balloon");

    let popped = document.querySelectorAll(".hidden");

    // show final message
    if (popped.length >= 20) {
      container.classList.add("hide");
      header.classList.add("hide");
      message.classList.remove("hide");
    }
  });
}

// browser doesn't allow sound before interacting with document? when i refresh the page, i get the error and sound will work after i click on a balloon
