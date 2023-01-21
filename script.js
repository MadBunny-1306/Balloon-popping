"use strict";

const balloons = document.querySelectorAll(".balloon");
const message = document.querySelector(".message");
const popped = document.querySelector(".hidden");
// document.getElementById("popSound").muted = true;

let audio = document.getElementById("popSound");
// let popSound = new Audio("plopp.mp3");

// pop balloons - way 1
// for (let i = 0; i < balloons.length; i++)
//   balloons[i].addEventListener("mouseover", function () {
//     balloons[i].classList.add("hidden");
//     audio.play();
//   // document.querySelector(".pop").classList.remove("hide");
//   });

// pop balloons - way 2

for (const balloon of balloons) {
  balloon.addEventListener("mouseover", function () {
    balloon.classList.add("hidden");
    audio.play();
  });
}
// had to change event to click bc sound would'n play on mouseover, bc browser doesn't allow sound before interacting with document?

// show final message
// if (popped == 20) {
//   document.querySelector(".container").classList.add("hide");
//   message.classList.remove("hide");
// }
