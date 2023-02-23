import "./style.css";

const gameboard = require("./gameboard");
const player = require("./player");
const DOMUpdate = require("./DOMUpdate");

const p1 = player(true);
const p1Board = gameboard();
p1Board.placeShip(3, [0, 0], [0, 2]);
p1Board.placeShip(5, [1, 5], [5, 5]);
p1.attack(p1Board, [0, 1]);
p1.attack(p1Board, [2, 2]);

const update = DOMUpdate();

update.drawBoard(p1.map, p1Board.board);
