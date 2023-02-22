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

        // check whether square is empty.
        // if not, add class to it
        if (square) {
          if (typeof square === "object") {
            if (square.isHit) {
              boardSquare.classList.add("ship-hit");
            } else {
              boardSquare.classList.add("ship-unhit");
            }
          } else if (square === "miss") {
            boardSquare.classList.add("board-miss");
          }
        }

        ownBoard.appendChild(boardSquare);
      });
    });
  }

  return {
    drawBoard,
  };
};

module.exports = update;
