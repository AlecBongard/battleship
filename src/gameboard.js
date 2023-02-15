const gameboard = () => {
  const board = [];

  (function _createBoard() {
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10).fill(null);
    }
  })();

  return {
    board,
  };
};

module.exports = gameboard;
