/* eslint-disable no-use-before-define */
const map = document.querySelector(".map");
const ownBoard = document.querySelector(".own-board");
const info = document.querySelector(".info");
const turnText = document.querySelector(".turn-text");
const moveText = document.querySelector(".move-text");
const blind = document.querySelector(".blind");

const update = (() => {
  function _writeTurn(player, over) {
    if (over) {
      turnText.textContent = `Game over. ${player.playerName} wins.`;
    } else {
      turnText.textContent = `${player.playerName}'s turn`;
    }
  }

  function makePlaceable(
    player,
    board,
    length,
    boardDiv,
    direction,
    repeat = false
  ) {
    const squares = document.querySelectorAll("div.place-map>div.board-square");

    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        const coord = JSON.parse(square.getAttribute("data-board-coord"));

        // using direction parameter to determine which direction to show ships
        const secondary = direction;
        const rootIndex = Math.abs(direction - 1);

        const root = coord[rootIndex];
        const shadow = [];

        const extent = root + length;

        const rotateBtn = document.querySelector(".rotate");
        const startBtn = document.querySelector(".start-btn");

        rotateBtn.addEventListener("click", () => {
          boardDiv.textContent = "";
          _drawOwnBoard(board, boardDiv);

          makePlaceable(
            player,
            board,
            length,
            boardDiv,
            Math.abs(direction - 1),
            repeat
          );
          drawAllShips(board, boardDiv);
        });

        if (
          extent < 11 &&
          board.checkPathEmpty(root, coord[secondary], length, direction)
        ) {
          for (let i = root; i < root + length; i += 1) {
            let shadowed;

            if (direction === 1) {
              shadowed = document.querySelector(
                `[data-board-coord="[${i}, ${coord[1]}]"]`
              );
            } else {
              shadowed = document.querySelector(
                `[data-board-coord="[${coord[0]}, ${i}]"]`
              );
            }

            shadow.push(shadowed);
          }

          shadow.forEach((shadowed) => {
            shadowed.classList.add("selection-hover");
          });

          square.addEventListener("mouseleave", () => {
            shadow.forEach((shadowed) => {
              shadowed.classList.remove("selection-hover");
            });
          });

          square.addEventListener("click", () => {
            let end;

            if (direction === 1) {
              end = [coord[rootIndex] + (length - 1), coord[secondary]];
            } else {
              end = [coord[secondary], coord[rootIndex] + (length - 1)];
            }

            coord.reverse();
            end.reverse();

            board.placeShip(length, coord, end);

            boardDiv.textContent = "";
            _drawOwnBoard(board, boardDiv);
            drawAllShips(board, boardDiv);

            if (length === 5) {
              makePlaceable(player, board, 4, boardDiv, direction, false);
            } else if (length === 4) {
              makePlaceable(player, board, 3, boardDiv, direction, true);
            } else if (length === 3 && repeat) {
              makePlaceable(player, board, 3, boardDiv, direction, false);
            } else if (length === 3 && !repeat) {
              makePlaceable(player, board, 2, boardDiv, direction, true);
            } else if (length === 2 && repeat) {
              makePlaceable(player, board, 2, boardDiv, direction, false);
            } else if (length === 2 && !repeat) {
              startBtn.style.visibility = "visible";
            }
          });
        } else {
          for (let i = root; i < 10 && i < root + length - 1; i += 1) {
            let shadowed;

            if (direction === 1) {
              shadowed = document.querySelector(
                `[data-board-coord="[${i}, ${coord[1]}]"]`
              );
            } else {
              shadowed = document.querySelector(
                `[data-board-coord="[${coord[0]}, ${i}]"]`
              );
            }

            shadow.push(shadowed);
          }

          shadow.forEach((shadowed) => {
            shadowed.classList.add("selection-hover-bad");
          });

          square.addEventListener("mouseleave", () => {
            shadow.forEach((shadowed) => {
              shadowed.classList.remove("selection-hover-bad");
            });
          });
        }
      });
    });
  }

  function drawShipPlacer(player, gameboard, opp, oppBoard) {
    blind.textContent = "";
    blind.style.visibility = "visible";

    const placerBg = document.createElement("div");
    placerBg.classList.add("placer-bg");
    placerBg.style.visibility = "visible";
    blind.appendChild(placerBg);

    const placementText = document.createElement("p");
    placementText.classList.add("placement-text");
    placementText.textContent = `${player.playerName}: place your ships`;
    placerBg.appendChild(placementText);

    const placeMap = document.createElement("div");
    placeMap.classList.add("own-board");
    placeMap.classList.add("place-map");
    placerBg.appendChild(placeMap);

    const rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate");
    rotateBtn.textContent = "Rotate";

    placerBg.appendChild(rotateBtn);

    const startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.textContent = "Start Game";
    startBtn.style.visibility = "hidden";

    placerBg.appendChild(startBtn);

    startBtn.addEventListener("click", () => {
      blind.textContent = "";
      blind.style.visibility = "hidden";
      drawBoard(player.map, gameboard);
      makeClickable(player, gameboard, opp, oppBoard);
    });

    _drawOwnBoard(gameboard, placeMap);
    makePlaceable(player, gameboard, 5, placeMap, 1, false);

    drawAllShips(gameboard, placeMap);
  }

  function drawShip(start, end, length, boardDiv) {
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

    boardDiv.appendChild(ship);
  }

  function drawAllShips(board, boardDiv) {
    board.ships.forEach((ship) => {
      drawShip(ship.start, ship.end, ship.length, boardDiv);
    });
  }

  function _drawMap(playerMap) {
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
  }

  function _drawOwnBoard(playerBoard, boardDiv) {
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

          boardDiv.appendChild(boardSquare);
        });
      });
  }

  function drawBoard(playerMap, playerBoard) {
    map.textContent = "";
    ownBoard.textContent = "";

    _drawMap(playerMap);
    _drawOwnBoard(playerBoard, ownBoard);
    drawAllShips(playerBoard, ownBoard);
  }

  function _drawPassButton(player, playerBoard, opponent, opponentBoard) {
    const passButton = document.createElement("button");
    passButton.classList.add("pass-button");
    passButton.textContent = "Pass turn";

    info.appendChild(passButton);

    passButton.addEventListener("click", () => {
      if (!player.com) {
        _drawBlind(player, playerBoard, opponent, opponentBoard);
        passButton.remove();
      } else {
        passButton.remove();
        _writeTurn(player, false);
        setTimeout(() => {
          _passTurn(player, playerBoard, opponent, opponentBoard);
        }, 300);
      }
    });
  }

  function _drawBlind(player, playerBoard, opponent, opponentBoard) {
    blind.textContent = "";
    blind.style.visibility = "visible";

    const passText = document.createElement("p");
    passText.classList.add("pass-text");
    passText.textContent = `Pass the device to ${player.playerName}`;

    const turnButton = document.createElement("button");
    turnButton.textContent = "Begin Turn";

    blind.appendChild(passText);
    blind.appendChild(turnButton);

    turnButton.addEventListener("click", () => {
      _passTurn(player, playerBoard, opponent, opponentBoard);
      blind.style.visibility = "hidden";
    });
  }

  function _passTurn(player, playerBoard, opponent, opponentBoard) {
    if (player.com === false) {
      drawBoard(player.map, playerBoard);
      makeClickable(player, playerBoard, opponent, opponentBoard);
      _writeTurn(player, false);
    } else {
      const result = player.comMove(opponentBoard);
      drawBoard(opponent.map, opponentBoard);
      _writeTurn(opponent, false);

      if (result === "All ships have been sunk.") {
        _writeTurn(player, true);
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
          moveText.textContent = result;

          if (result === "All ships have been sunk.") {
            drawBoard(player.map, playerBoard);
            _writeTurn(player, true);
          } else if (player.com === false) {
            drawBoard(player.map, playerBoard);
            _drawPassButton(opponent, opponentBoard, player, playerBoard);
          } else {
            _passTurn(opponent, opponentBoard, player, playerBoard);
          }
        } else {
          moveText.textContent = `${result}. Try a different square.`;
        }
      });
    });
  }

  return {
    drawBoard,
    makeClickable,
    drawShip,
    drawShipPlacer,
  };
})();

module.exports = update;
