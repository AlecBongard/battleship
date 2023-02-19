const player = (com, board) => {
  const map = [];
  const ownBoard = board;

  (function _createMap() {
    for (let i = 0; i < 10; i += 1) {
      map[i] = new Array(10).fill(null);
    }
  })();

  function attack(targetBoard, targetSquare) {
    const attackMsg = targetBoard.receiveAttack(targetSquare);

    if (attackMsg === "Hit" || attackMsg === "Miss") {
      map[targetSquare[0]][targetSquare[1]] = attackMsg.toLowerCase();
    }

    return attackMsg;
  }

  return {
    map,
    attack,
  };
};

module.exports = player;
