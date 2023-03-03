import "./style.css";

const gameboard = require("./gameboard");
const player = require("./player");
const update = require("./DOMUpdate");

const menu = document.querySelector(".menu");
const p1Name = document.querySelector("#p1-name");
const p2Name = document.querySelector("#p2-name");
const AIcheck = document.querySelector("#p2-com");
const startBtn = document.querySelector("#start-button");

AIcheck.addEventListener("click", () => {
  if (p2Name.classList.contains("name-disabled")) {
    p2Name.removeAttribute("disabled");
    p2Name.classList.remove("name-disabled");
    p2Name.setAttribute("placeholder", "Player Two");
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
    p1 = player(false, "Player One");
  } else {
    p1 = player(false, p1Name.value);
  }

  if (AIcheck.checked) {
    p2 = player(true);
  } else if (!p2Name.value) {
    p2 = player(false, "Player Two");
  } else {
    p2 = player(false, p2Name.value);
  }

  update.drawShipPlacer(p1, p1Board, p2, p2Board);
});
