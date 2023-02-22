import "./style.css";

const gameboard = require("./gameboard");
const player = require("./player");
const DOMUpdate = require("./DOMUpdate");

const p1 = player(true);
const p1Board = gameboard();
const update = DOMUpdate();

update.drawBoard(p1.map, p1Board.board);
