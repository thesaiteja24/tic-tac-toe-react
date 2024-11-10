import React, { useState, useEffect } from "react";
import Square from "./Square";
import AnnounceWinner from "./AnnounceWinner";

export default function Board() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  function handleSquareClick(index) {
    // If square already has a value, ignore click
    if (squares[index] || winner) return;

    //Copying the squares into newSquares
    const newSquares = squares.slice();
    newSquares[index] = player;

    //Updating the value of squares
    setSquares(newSquares);
    setPlayer(player === "X" ? "O" : "X");
  }

  // Checking the winner after the squares are updated
  useEffect(() => {
    checkRow(squares);
    checkCol(squares);
    checkDiagonal(squares);
  }, [squares]);

  // Checking row win condition
  function checkRow(S) {
    for (let i = 0; i < S.length; i += 3) {
      const row = [S[i], S[i + 1], S[i + 2]];

      if (row.every((cell) => cell === "X")) {
        setWinner("X");
        return;
      } else if (row.every((cell) => cell === "O")) {
        setWinner("O");
        return;
      }
    }
  }

  // Checking Column win condition
  function checkCol(S) {
    for (let i = 0; i < S.length; i += 1) {
      const row = [S[i], S[i + 3], S[i + 6]];

      if (row.every((cell) => cell === "X")) {
        setWinner("X");
        return;
      } else if (row.every((cell) => cell === "O")) {
        setWinner("O");
        return;
      }
    }
  }

  function checkDiagonal(S) {
    // created diagonals array for two diagonals as sub arrays
    const diagonals = [
      [S[0], S[4], S[8]],
      [S[2], S[4], S[6]],
    ];

    // for each diagonal checking if every element is the current players symbol
    diagonals.forEach((element) => {
      if (element.every((cell) => cell === "X")) {
        setWinner("X");
        return;
      } else if (element.every((cell) => cell === "O")) {
        setWinner("O");
        return;
      }
    });
  }

  function reset() {
    const reset = Array(9).fill("");
    setSquares(reset);
    setPlayer("X");
    setWinner(null);
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h1 className="font-bold text-2xl">{`Current player: ${player}`}</h1>
      </div>
      <div className="board-row-1 flex">
        <Square
          index={0}
          player={squares[0]}
          onSquareClick={handleSquareClick}
        />
        <Square
          index={1}
          player={squares[1]}
          onSquareClick={handleSquareClick}
        />
        <Square
          index={2}
          player={squares[2]}
          onSquareClick={handleSquareClick}
        />
      </div>
      <div className="board-row-2 flex">
        <Square
          index={3}
          player={squares[3]}
          onSquareClick={handleSquareClick}
        />
        <Square
          index={4}
          player={squares[4]}
          onSquareClick={handleSquareClick}
        />
        <Square
          index={5}
          player={squares[5]}
          onSquareClick={handleSquareClick}
        />
      </div>
      <div className="board-row-3 flex">
        <Square
          index={6}
          player={squares[6]}
          onSquareClick={handleSquareClick}
        />
        <Square
          index={7}
          player={squares[7]}
          onSquareClick={handleSquareClick}
        />
        <Square
          index={8}
          player={squares[8]}
          onSquareClick={handleSquareClick}
        />
      </div>
      <div className="flex flex-col items-center">
        <button
          type="button"
          class="m-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={reset}
        >
          Reset
        </button>

        <AnnounceWinner winner={winner} />
      </div>
    </div>
  );
}
