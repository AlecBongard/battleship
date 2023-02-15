/* eslint-disable no-undef */
const gameboard = require("../src/gameboard");

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
