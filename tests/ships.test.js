/* eslint-disable no-undef */
const ship = require("../src/ships");

test("Ship returns a specific message when it is sunk", () => {
  const newShip = ship(3);
  newShip.hit();
  newShip.hit();

  expect(newShip.hit()).toBe("You sunk my battleship");
});
