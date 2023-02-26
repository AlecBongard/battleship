/* eslint-disable no-use-before-define */
const map = document.querySelector(".map");
const ownBoard = document.querySelector(".own-board");

const update = (() => {
  function drawShip(start, end, length) {
    const ship = document.createElement("div");
    ship.classList.add("ship");

    const squareSize = 100 / 30;
    let height = 1;
    let width = 1;

    if (end[0] - start[0] > 0) {
      height = length * squareSize;
      width = squareSize;
    } else {
      width = length * squareSize;
      height = squareSize;
    }

    ship.style.height = `${height}vw`;
    ship.style.width = `${width}vw`;

    ship.style.bottom = `${squareSize * start[0]}vw`;
    ship.style.left = `${squareSize * start[1]}vw`;

    ownBoard.appendChild(ship);
  }

  function drawAllShips(board) {
    board.ships.forEach((ship) => {
      drawShip(ship.start, ship.end, ship.length);
    });
  }

  function drawBoard(playerMap, playerBoard) {
    map.textContent = "";
    ownBoard.textContent = "";

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
            } else if (square === "sunk") {
              mapSquare.classList.add("map-sunk");
            }
          }

          map.appendChild(mapSquare);
        });
      });

    playerBoard.board
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
                if (square.ship.isSunk()) {
                  boardSquare.classList.add("ship-sunk");
                } else {
                  boardSquare.classList.add("ship-hit");
                }
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

    drawAllShips(playerBoard);
  }

  function _passTurn(player, playerBoard, opponent, opponentBoard) {
    if (player.com === false) {
      drawBoard(player.map, playerBoard.board);
      makeClickable(player, playerBoard, opponent, opponentBoard);
    } else {
      const result = player.comMove(opponentBoard);

      drawBoard(opponent.map, opponentBoard);

      if (result === "All ships have been sunk.") {
        console.log("game over");
      } else {
        makeClickable(opponent, opponentBoard, player, playerBoard);
      }
    }
  }

  function makeClickable(player, playerBoard, opponent, opponentBoard) {
    const mapSquares = document.querySelectorAll(".map-square");

    mapSquares.forEach((square) => {
      const coord = JSON.parse(square.getAttribute("data-map-coord")).reverse();

      square.addEventListener("click", () => {
        const result = player.attack(opponentBoard, coord);

        // redraw map in order to remove listeners
        if (result !== "Invalid attack: square has already been attacked") {
          if (result === "All ships have been sunk.") {
            drawBoard(player.map, playerBoard);
            console.log("game over");
          } else {
            _passTurn(opponent, opponentBoard, player, playerBoard);
          }
        }
      });
    });
  }

  return {
    drawBoard,
    makeClickable,
    drawShip,
  };
})();

module.exports = update;
