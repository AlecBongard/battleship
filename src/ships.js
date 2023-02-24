const ship = (length) => {
  let _hits = 0;

  function isSunk() {
    if (_hits >= length) {
      return true;
    }

    return false;
  }

  function hit() {
    _hits += 1;

    if (isSunk()) {
      return "You sunk my battleship";
    }

    return "Hit";
  }

  return {
    hit,
    isSunk,
  };
};

module.exports = ship;
