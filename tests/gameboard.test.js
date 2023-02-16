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

test("Ships appear on board when placed", () => {
  const newBoard = gameboard();

  newBoard.placeShip(3, [0, 0], [0, 2]);

  for (let i = 0; i < 3; i += 1) {
    expect(JSON.stringify(newBoard.board[0][i])).toBe(
      JSON.stringify({
        ship: ship(3),
        isHit: false,
      })
    );
  }
});

test("Do not allow placement outside of game board", () => {
  const newBoard = gameboard();

  expect(newBoard.placeShip(3, [-1, 0], [1, 0])).toBe("Invalid ship placement");

  expect(newBoard.placeShip(3, [9, 2], [11, 2])).toBe("Invalid ship placement");

  expect(newBoard.placeShip(3, [2, -1], [2, 1])).toBe("Invalid ship placement");

  expect(newBoard.placeShip(3, [2, 9], [2, 11])).toBe("Invalid ship placement");
});

test('Missed attack returns "miss"', () => {
  const newBoard = gameboard();

  expect(newBoard.receiveAttack([0, 0])).toBe("Miss");
});

test("Missed attack is reflected on board", () => {
  const newBoard = gameboard();

  newBoard.receiveAttack([0, 0]);

  expect(newBoard.board[0][0]).toBe("miss");
});

test('return "Hit" when attacks hit does not sink', () => {
  const newBoard = gameboard();

  newBoard.placeShip(3, [0, 0], [0, 2]);

  expect(newBoard.receiveAttack([0, 1])).toBe("Hit");
});

test("Hits are reflected on board", () => {
  const newBoard = gameboard();
  newBoard.placeShip(3, [0, 0], [0, 2]);
  newBoard.receiveAttack([0, 1]);

  expect(newBoard.board[0][1].isHit).toBe(true);
});

test("A ship sinks when hit enough times", () => {
  const newBoard = gameboard();
  newBoard.placeShip(3, [0, 0], [0, 2]);
  newBoard.receiveAttack([0, 1]);
  newBoard.receiveAttack([0, 2]);

  expect(newBoard.receiveAttack([0, 0])).toBe("You sunk my battleship");
});

test("Attacking the same empty square twice returns an invalid attack message", () => {
  const newBoard = gameboard();

  newBoard.receiveAttack([1, 1]);

  expect(newBoard.receiveAttack([1, 1])).toBe(
    "Invalid attack: square has already been attacked"
  );
});

test("Attacking the same ship square twice returns an invalid attack message", () => {
  const newBoard = gameboard();
  newBoard.placeShip(3, [0, 0], [0, 2]);
  newBoard.receiveAttack([0, 0]);

  expect(newBoard.receiveAttack([0, 0])).toBe(
    "Invalid attack: square has already been attacked"
  );
});
