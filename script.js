"use strict";

const balloon = document.querySelectorAll(".balloon");
const message = document.querySelector(".message");
const popped = document.querySelector(".hidden");
// document.getElementById("popSound").muted = true;
// const pop = function () {
//   balloon[i].classList.add("hidden");
// };

// $(function () {
//   $("balloon[i]").mouseover(function () {
//     $("balloon[i]").hide();
//     $("#popSound").play();
//   });
// });

let audio = document.getElementById("popSound");
// let popSound = new Audio("plopp.mp3");

// pop balloons
for (let i = 0; i < balloon.length; i++)
  balloon[i].addEventListener("mouseover", function () {
    balloon[i].classList.add("hidden");
    // let audio = document.getElementById("popSound");
    audio.play();
    // if (balloon[i].classList.add("hidden")) {
    //   audio.muted;
    // }
    // // document.querySelector(".pop").classList.remove("hide");
  });
// show final message
// if (popped == 20) {
//   document.querySelector(".container").classList.add("hide");
//   message.classList.remove("hide");
// }

// document.querySelector(".text").style.textShadow = "0 0 10px blue";
