const ship = require("./ships");

const gameboard = () => {
  const board = [];

  (function _createBoard() {
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10).fill(null);
    }
  })();

  // start = [left, bottom], end = [right, top]
  function placeShip(length, start, end) {
    const squares = [...start, ...end];
    for (let i = 0; i < squares.length; i += 1) {
      if (squares[i] > 10 || squares[i] < 0) {
        return "Invalid ship placement";
      }
    }

    const newShip = ship(length);

    for (let row = start[0]; end[0] - row >= 0; row += 1) {
      for (let col = start[1]; end[1] - col >= 0; col += 1) {
        // The object containing information about the square must have a
        // shallow copy of the ship in order to track whether the ship has been sunk
        board[row][col] = {
          ship: newShip,
          isHit: false,
        };
      }
    }

    return "Ship placed";
  }

  function _allSunk() {
    let sunk = true;

    board.forEach((row) => {
      row.forEach((square) => {
        if (square && typeof square === "object") {
          if (square.isHit === false) {
            sunk = false;
          }
        }
      });
    });

    return sunk;
  }

  function receiveAttack(coord) {
    const attackSquare = board[coord[0]][coord[1]];

    if (!attackSquare) {
      board[coord[0]][coord[1]] = "miss";

      return "Miss";
    }
    if (attackSquare === "miss") {
      return "Invalid attack: square has already been attacked";
    }

    if (typeof attackSquare === "object" && attackSquare.isHit) {
      return "Invalid attack: square has already been attacked";
    }

    attackSquare.isHit = true;

    const hitMsg = attackSquare.ship.hit();

    if (_allSunk()) {
      return "All ships have been sunk.";
    }

    return hitMsg;
  }

  return {
    board,
    placeShip,
    receiveAttack,
  };
};

module.exports = gameboard;
