const map = document.querySelector(".map");
const ownBoard = document.querySelector(".own-board");

const update = () => {
  function drawBoard(playerMap, playerBoard) {
    playerMap.forEach((row, index) => {
      const rowIndex = 9 - index;

      row.forEach((square, squareIndex) => {
        const colIndex = squareIndex % 10;

        const mapSquare = document.createElement("div");
        mapSquare.classList.add("map-square");

        mapSquare.setAttribute("data-map-coord", `[${colIndex}, ${rowIndex}]`);

        map.appendChild(mapSquare);
      });
    });

    playerBoard.forEach((row, index) => {
      const rowIndex = 9 - index;

      row.forEach((square, squareIndex) => {
        const colIndex = squareIndex % 10;

        const boardSquare = document.createElement("div");
        boardSquare.classList.add("board-square");

        boardSquare.setAttribute(
          "data-board-coord",
          `[${colIndex}, ${rowIndex}]`
        );

        ownBoard.appendChild(boardSquare);
      });
    });
  }

  return {
    drawBoard,
  };
};

module.exports = update;
