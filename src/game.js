const game = (() => {
  function placeShips(board) {
    board.placeShip(6, [4, 0], [9, 0]);
    board.placeShip(2, [0, 2], [1, 2]);
    board.placeShip(3, [9, 2], [9, 4]);
    board.placeShip(2, [5, 3], [5, 4]);
    board.placeShip(4, [0, 4], [0, 7]);
    board.placeShip(2, [0, 9], [1, 9]);
    board.placeShip(2, [9, 6], [9, 7]);
    board.placeShip(3, [5, 7], [7, 7]);
    board.placeShip(3, [3, 7], [3, 9]);
    board.placeShip(4, [6, 9], [9, 9]);
  }

  return {
    placeShips,
  };
})();

module.exports = game;
