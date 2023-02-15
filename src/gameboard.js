const ship = require('./ships');

const gameboard = () => {
  const board = [];

  (function _createBoard() {
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10).fill(null);
    }
  })();

  // start = [left, bottom], end = [right, top]
  function placeShip(length, start, end){

    const squares = [...start, ...end]
    for(let i = 0; i<squares.length; i+=1){
        if(squares[i] > 10 || squares[i] < 0){
            return "Invalid ship placement";
        }
    }

    const newShip = ship(length);

    for(let row = start[0]; end[0] - row >= 0; row+=1){
        for(let col = start[1]; end[1] - col >= 0; col+=1){

            // The object containing information about the square must have a
            // shallow copy of the ship in order to track whether the ship has been sunk
            board[row][col] = {
                ship: newShip,
                isHit: false,
            }
        }
    }

    return "Ship placed"

  }

  return {
    board,
    placeShip,
  };
};

module.exports = gameboard;
