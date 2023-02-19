/* eslint-disable no-undef */
const player = require("../src/player");
const gameboard = require("../src/gameboard");

test("Player begins game with an empty map", () => {
  const p1Board = gameboard();
  const p1 = player(false, p1Board);

  p1.map.forEach((row) => {
    row.forEach((square) => {
      expect(square).toBeFalsy();
    });
  });
});

test("Attacking another player's empty space updates the map", () => {
  const p1Board = gameboard();
  const p2Board = gameboard();
  p2Board.placeShip(3, [0, 0], [0, 2]);

  const p1 = player(false, p1Board);

  p1.attack(p2Board, [1, 1]);

  expect(p1.map[1][1]).toBe("miss");
});
