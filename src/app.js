/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/joker.png";
import { each, get } from "jquery";

const suitSigns = ["♥", "♠", "♦", "♣"];
const cardNumber = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "JOKER"
];

let randomCard = { cardSign: "", cardNumber: "" };

function randomCardGenerator() {
  randomCard.cardSign = suitSigns[Math.floor(Math.random() * suitSigns.length)];
  randomCard.cardNumber =
    cardNumber[Math.floor(Math.random() * cardNumber.length)];
}

window.onload = function() {
  //write your code here
  randomCardGenerator();
  let randomNumber = document.querySelectorAll(".number");
  if (randomCard.cardNumber === "JOKER") {
    document.getElementsByClassName(
      "number"
    )[0].innerHTML = `<span class="black vertical-text small">${randomCard.cardNumber}</span>`;
    document.getElementsByClassName(
      "number"
    )[1].innerHTML = `<span class="black vertical-text small">${randomCard.cardNumber}</span>`;
  } else {
    randomNumber.forEach(element => {
      randomCard.cardSign === "♥" || randomCard.cardSign === "♦"
        ? (element.innerHTML = `<span class="red">${randomCard.cardNumber}</span>`)
        : (element.innerHTML = `<span class="black">${randomCard.cardNumber}</span>`);
    });
  }

  let randomSign = document.querySelectorAll(".sign");
  if (randomCard.cardNumber === "JOKER") {
    document.getElementsByClassName("middle-sign")[0].innerHTML = `<img
    class="card-img-top joker"
    src="./joker.png"
    alt="playing card sign"
  />`;
    document.getElementsByClassName("sign")[0].innerHTML = "";
    document.getElementsByClassName("sign")[2].innerHTML = "";
  } else {
    randomSign.forEach(element => {
      randomCard.cardSign === "♥" || randomCard.cardSign === "♦"
        ? (element.innerHTML = `<span class="red">${randomCard.cardSign}</span>`)
        : (element.innerHTML = `<span class="black">${randomCard.cardSign}</span>`);
    });
  }
};
