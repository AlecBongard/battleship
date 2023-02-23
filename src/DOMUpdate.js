const map = document.querySelector(".map");
const ownBoard = document.querySelector(".own-board");

const update = () => {
  function drawBoard(playerMap, playerBoard) {
    playerMap
      .slice()
      .reverse()
      .forEach((row, index) => {
        const rowIndex = 9 - index;

        row.forEach((square, squareIndex) => {
          const colIndex = squareIndex % 10;

          const mapSquare = document.createElement("div");
          mapSquare.classList.add("map-square");

          mapSquare.setAttribute(
            "data-map-coord",
            `[${colIndex}, ${rowIndex}]`
          );

          if (square) {
            if (square === "hit") {
              mapSquare.classList.add("map-hit");
            } else if (square === "miss") {
              mapSquare.classList.add("map-miss");
            }
          }

          map.appendChild(mapSquare);
        });
      });

    playerBoard
      .slice()
      .reverse()
      .forEach((row, index) => {
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

  function makeClickable(player, playerBoard, opponentBoard) {
    const mapSquares = document.querySelectorAll(".map-square");

    mapSquares.forEach((square) => {
      const coord = JSON.parse(square.getAttribute("data-map-coord")).reverse();

      square.addEventListener("click", () => {
        const result = player.attack(opponentBoard, coord);

        // redraw map in order to remove listeners
        map.textContent = "";
        ownBoard.textContent = "";
        drawBoard(player.map, playerBoard.board);
      });
    });
  }

  return {
    drawBoard,
    makeClickable,
  };
};

module.exports = update;