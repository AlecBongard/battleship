const ship = (length) => {
  let _hits = 0;

  function _isSunk() {
    if (_hits >= length) {
      return true;
    }

    return false;
  }

  function hit() {
    _hits += 1;

    if (_isSunk()) {
      return "You sunk my battleship";
    }

    return null;
  }

  return {
    hit,
  };
};

module.exports = ship;
