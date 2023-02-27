import "./style.css";

const gameboard = require("./gameboard");
const player = require("./player");
const update = require("./DOMUpdate");

const info = document.querySelector(".info");
const menu = document.querySelector(".menu");
const playerForm = document.querySelector(".player-form");
const p1Name = document.querySelector("#p1-name");
const p2Name = document.querySelector("#p2-name");
const AIcheck = document.querySelector("#p2-com");
const startBtn = document.querySelector("#start-button");

AIcheck.addEventListener("click", () => {
  if (p2Name.classList.contains("name-disabled")) {
    p2Name.removeAttribute("disabled");
    p2Name.classList.remove("name-disabled");
  } else {
    p2Name.classList.add("name-disabled");
    p2Name.setAttribute("disabled", null);
  }
});

startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menu.style.visibility = "hidden";

  const p1 = player(false, p1Name.value);
  const p1Board = gameboard();

  let p2;
  let p2Board;

  if (AIcheck.checked) {
    p2 = player(true);
    p2Board = gameboard();
  } else {
    p2 = player(false, p2Name.value);
    p2Board = gameboard();
  }

  p1Board.placeRandom();
  p2Board.placeRandom();

  update.drawBoard(p1.map, p1Board);

  update.makeClickable(p1, p1Board, p2, p2Board);
});

/*
const p1 = player(false, "p1");
const p1Board = gameboard();
const p2 = player(true);
const p2Board = gameboard();

p1Board.placeRandom();
p2Board.placeRandom();

update.drawBoard(p1.map, p1Board);

update.makeClickable(p1, p1Board, p2, p2Board);
*/
