import "./style.css";

const ship = require("./ships");
const gameboard = require("./gameboard");
const player = require("./player");
const DOMUpdate = require("./DOMUpdate.js");

const update = DOMUpdate();

update.drawBoard();
