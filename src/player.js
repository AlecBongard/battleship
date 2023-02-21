const player = (com) => {
  const map = [];

  (function _createMap() {
    for (let i = 0; i < 10; i += 1) {
      map[i] = new Array(10).fill(null);
    }
  })();

  function attack(targetBoard, targetSquare) {
    const attackMsg = targetBoard.receiveAttack(targetSquare);

    if (attackMsg === "Miss") {
      map[targetSquare[0]][targetSquare[1]] = attackMsg.toLowerCase();
    } else {
      map[targetSquare[0]][targetSquare[1]] = "hit";
    }

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

    return attack(targetBoard, attackSquare);
  }

  return {
    map,
    attack,
    comMove,
  };
};

module.exports = player;
