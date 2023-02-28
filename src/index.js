import "./style.css";

const gameboard = require("./gameboard");
const player = require("./player");
const update = require("./DOMUpdate");

const turnText = document.querySelector(".turn-text");
const menu = document.querySelector(".menu");
const p1Name = document.querySelector("#p1-name");
const p2Name = document.querySelector("#p2-name");
const AIcheck = document.querySelector("#p2-com");
const startBtn = document.querySelector("#start-button");

AIcheck.addEventListener("click", () => {
  if (p2Name.classList.contains("name-disabled")) {
    p2Name.removeAttribute("disabled");
    p2Name.classList.remove("name-disabled");
    p2Name.setAttribute("placeholder", "Player 2");
  } else {
    p2Name.classList.add("name-disabled");
    p2Name.setAttribute("disabled", null);
    p2Name.setAttribute("placeholder", "Computer");
  }
});

startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menu.style.visibility = "hidden";

  let p1;
  let p2;

  const p1Board = gameboard();
  const p2Board = gameboard();

  if (!p1Name.value) {
    p1 = player(false, "Player 1");
  } else {
    p1 = player(false, p1Name.value);
  }

  if (AIcheck.checked) {
    p2 = player(true);
  } else if (!p2Name.value) {
    p2 = player(false, "Player 2");
  } else {
    p2 = player(false, p2Name.value);
  }

  p1Board.placeRandom();
  p2Board.placeRandom();

  update.drawBoard(p1.map, p1Board);

  update.makeClickable(p1, p1Board, p2, p2Board);

  turnText.textContent = `${p1.playerName}'s Turn`;
});
