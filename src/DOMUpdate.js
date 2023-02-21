const board = document.querySelector(".board");
const map = document.querySelector(".map");
const ownBoard = document.querySelector(".own-board");

const update = () => {
  function drawBoard() {
    for (let i = 0; i < 100; i += 1) {
      const square = document.createElement("div");
      square.classList.add("map-square");

      const row = Math.floor(i / 10);
      const col = i % 10;

      square.setAttribute("data-mapcoord", `[${row}, ${col}]`);

      map.appendChild(square);
    }

    for (let i = 0; i < 100; i += 1) {
      const square = document.createElement("div");
      square.classList.add("board-square");

      const row = Math.floor(i / 10);
      const col = i % 10;

      square.setAttribute("data-boardcoord", `[${row}, ${col}]`);

      map.appendChild(square);
    }
  }

  return {
    drawBoard,
  };
};

module.exports = update;
