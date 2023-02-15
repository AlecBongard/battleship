/* eslint-disable no-undef */
const gameboard = require("../src/gameboard");
const ship = require("../src/ships");

test("Board array is created when gameboard function called", () => {
  const newBoard = gameboard();

  expect(newBoard.board).toBeTruthy();
});

test("Board array is proper size", () => {
  const newBoard = gameboard();

  expect(newBoard.board.length).toBe(10);

  newBoard.board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});

test("Ships appear on board when placed", ()=>{
    const newBoard = gameboard();

    newBoard.placeShip(3, [0,0], [0, 2]);

    for(let i=0; i<3; i+=1){
        expect(JSON.stringify(newBoard.board[0][i]))
        .toBe(JSON.stringify({
            ship: ship(3),
            isHit: false,
        }));
    }
})

test("Do not allow placement outside of game board", ()=>{
    const newBoard = gameboard();

    expect(newBoard.placeShip(3, [-1, 0], [1, 0]))
    .toBe("Invalid ship placement");

    expect(newBoard.placeShip(3, [9, 2], [11, 2]))
    .toBe("Invalid ship placement");

    expect(newBoard.placeShip(3, [2, -1], [2, 1]))
    .toBe("Invalid ship placement");

    expect(newBoard.placeShip(3, [2, 9], [2, 11]))
    .toBe("Invalid ship placement");
})
