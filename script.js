"use strict";

const balloons = document.querySelectorAll(".balloon");
const message = document.querySelector(".message");
const popped = document.querySelectorAll(".hidden");
// const balloon = balloons[i];
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
let pop = 0;
for (const balloon of balloons) {
  balloon.addEventListener("mouseover", function () {
    balloon.classList.add("hidden");
    balloon.textContent = "POP!";
    audio.play();
    balloon.classList.remove("balloon");
    pop++;
    console.log("count");
    console.log(pop);
  });
}

// browser doesn't allow sound before interacting with document? when i refresh the page, i get the error and sound will work after i click on a balloon

// show final message
if (popped.length >= balloons.length) {
  document.querySelector(".container").classList.add("hide");
  message.classList.remove("hide");
}
