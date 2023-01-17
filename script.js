"use strict";

const balloon = document.querySelectorAll(".balloon");
const message = document.querySelector(".message");
const popped = document.querySelector(".hidden");
// const popSound = new Audio("pop-sound.wav");
// console.log(popSound);
// console.log(popped);
// const pop = function () {
//   balloon[i].classList.add("hidden");
// };

// $(function () {
//   $("balloon[i]").mouseover(function () {
//     $("balloon[i]").hide();
//     $("#popSound").play();
//   });
// });

// pop balloons
for (let i = 0; i < balloon.length; i++)
  balloon[i].addEventListener("mouseover", function () {
    balloon[i].classList.add("hidden");
    // Audio.play();

    // document.querySelector(".pop").classList.remove("hide");

    // show final message
    // if (popped == 20) {
    //   document.querySelector(".container").classList.add("hide");
    //   message.classList.remove("hide");
    // }
  });
// document.querySelector(".text").style.textShadow = "0 0 10px blue";

//<audio id="audio" src="http://music.mp3"></audio>
//let myAudio = document.querySelector('#audio')
// myAudio.play()
