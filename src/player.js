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

  function comMove(targetBoard) {
    // choose row and column of attacked square randomly
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    const attackSquare = [row, col];

    return attack(targetBoard, attackSquare);
  }

  return {
    map,
    attack,
    comMove,
  };
};

module.exports = player;
