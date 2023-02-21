/* eslint-disable no-undef */
const player = require("../src/player");
const gameboard = require("../src/gameboard");

test("Player begins game with an empty map", () => {
  const p1 = player(false);

  p1.map.forEach((row) => {
    row.forEach((square) => {
      expect(square).toBeFalsy();
    });
  });
});

test("Attacking another player's empty space updates the map", () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [0, 0], [0, 2]);

  const p1 = player(false);

  p1.attack(p2Board, [1, 1]);

  expect(p1.map[1][1]).toBe("miss");
});

test("Attacking another player's ship updates the map", () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);

  const p1 = player(false);

  p1.attack(p2Board, [1, 1]);

  expect(p1.map[1][1]).toBe("hit");
});

test('Sinking another player\'s ship updates map as "hit".', () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);

  const p1 = player(false);

  p1.attack(p2Board, [1, 0]);
  p1.attack(p2Board, [1, 2]);
  p1.attack(p2Board, [1, 1]);

  expect(p1.map[1][1]).toBe("hit");
});

test("AI attacks a square", () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);

  const p1 = player(true);

  p1.comMove(p2Board);

  let attacked = false;

  p2Board.board.forEach((row) => {
    row.forEach((square) => {
      if (square === "miss") {
        attacked = true;
      } else if (square && square.isHit === true) {
        attacked = true;
      }
    });
  });

  expect(attacked).toBe(true);
});

test("comMove updates map", () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);
  const p1 = player(true);

  p1.comMove(p2Board);

  let changed = false;

  p1.map.forEach((row) => {
    row.forEach((square) => {
      if (square === "miss") {
        changed = true;
      } else if (square && square.isHit === true) {
        changed = true;
      }
    });
  });

  expect(changed).toBe(true);
});

test('comMove returns "miss" after missing', () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);
  const p1 = player(true);

  let hitMsg = null;

  while (p1.map[0][0] === null) {
    hitMsg = p1.comMove(p2Board);
  }

  expect(hitMsg).toBe("Miss");
});

test('comMove returns "hit" after hitting', () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);
  const p1 = player(true);

  let hitMsg = null;

  while (
    p1.map[1][1] === null &&
    p1.map[1][2] === null &&
    p1.map[1][0] === null
  ) {
    hitMsg = p1.comMove(p2Board);
  }

  expect(hitMsg).toBe("Hit");
});

test("AI only makes legal moves", () => {
  const p2Board = gameboard();
  p2Board.placeShip(3, [1, 0], [1, 2]);
  const p1 = player(true);

  for (let i = 0; i < 100; i += 1) {
    expect(p1.comMove(p2Board)).not.toBe(
      "Invalid attack: square has already been attacked"
    );
  }
});
