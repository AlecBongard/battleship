import "./style.css";

const gameboard = require("./gameboard");
const player = require("./player");
const update = require("./DOMUpdate");
const game = require("./game");

const p1 = player(false);
const p1Board = gameboard();
const p2 = player(true);
const p2Board = gameboard();

game.placeShips(p1Board);
game.placeShips(p2Board);

update.drawBoard(p1.map, p1Board);

update.makeClickable(p1, p1Board, p2, p2Board);
