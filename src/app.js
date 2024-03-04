/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let first = ["the", "all", "best", "mind"];
  let second = ["setter", "broker", "gamer", "goat"];
  let third = ["player", "beter", "camper"];
  let dot = [".com", ".net", ".mx", "es"];
  for (let i = 0; i <= 10; i++) {
    let randomFirst = first[Math.floor(Math.random() * first.length)];
    let randomSecond = second[Math.floor(Math.random() * second.length)];
    let randomThird = third[Math.floor(Math.random() * third.length)];
    let randomDot = dot[Math.floor(Math.random() * dot.length)];

    let dominio = randomFirst + randomSecond + randomThird + randomDot;

    document.getElementById("domain").innerHTML = dominio;

    console.log(dominio);
  }

  console.log("Hello Rigo from the console!");
};
