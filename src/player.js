const player = (com, name = "Player 1") => {
  const map = [];
  let playerName = name;

  if (com) {
    playerName = "Computer";
  }

  (function _createMap() {
    for (let i = 0; i < 10; i += 1) {
      map[i] = new Array(10).fill(null);
    }
  })();

  function _checkSunk(targetBoard, coord) {
    const targetSquare = targetBoard[coord[0]][coord[1]];

    if (targetSquare && typeof targetSquare === "object") {
      if (targetSquare.ship.isSunk()) {
        return true;
      }
    }

    return false;
  }

  function _updateSunken(targetBoard) {
    map.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (_checkSunk(targetBoard, [rowIndex, colIndex])) {
          map[rowIndex][colIndex] = "sunk";
        }
      });
    });
  }

  function attack(targetBoard, targetSquare) {
    const attackMsg = targetBoard.receiveAttack(targetSquare);

    if (attackMsg === "Miss") {
      map[targetSquare[0]][targetSquare[1]] = attackMsg.toLowerCase();
    } else if (attackMsg === "Hit") {
      map[targetSquare[0]][targetSquare[1]] = "hit";
    } else if (
      attackMsg === "You sunk my battleship" ||
      attackMsg === "All ships have been sunk."
    ) {
      map[targetSquare[0]][targetSquare[1]] = "sunk";
    }

    _updateSunken(targetBoard.board);

    return attackMsg;
  }

  // list of legal moves which is updated every time comMove is called
  const _legalMoves = (() => {
    const moveList = [];
    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        moveList.push([row, col]);
      }
    }

    return moveList;
  })();

  function comMove(targetBoard) {
    // choose row and column of attacked square randomly

    const moveIndex = Math.floor(Math.random() * _legalMoves.length);
    const attackSquare = _legalMoves[moveIndex];
    _legalMoves.splice(moveIndex, 1);

    const result = attack(targetBoard, attackSquare);
    return result;
  }

  return {
    map,
    attack,
    comMove,
    com,
    playerName,
  };
};

module.exports = player;
