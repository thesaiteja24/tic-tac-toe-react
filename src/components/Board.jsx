import React, { useState, useEffect } from "react";
import Square from "./Square";
import GameInfo from "./GameInfo";
import Scoreboard from "./Scoreboard";

export default function Board() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [result, setResult] = useState(null);
  const [scoreX, setScoreX] = useState(0);
  const [scoreY, setScoreY] = useState(0);
  const [round, setRound] = useState(1);
  const [scoreboard, setScoreboard] = useState([]);

  function handleSquareClick(index) {
    if (squares[index] || result) return;
    const newSquares = squares.slice();
    newSquares[index] = player;
    setSquares(newSquares);
    setPlayer(player === "X" ? "O" : "X");
  }

  useEffect(() => {
    // Only proceed if there's no result yet
    if (!result) {
      const hasWinner =
        checkRow(squares) || checkCol(squares) || checkDiagonal(squares);

      // Only check for a draw if there's no result after the win checks
      if (!hasWinner) {
        checkDraw(squares);
      }
    }
  }, [squares, result]);

  // Check if there's a result in any row
  function checkRow(S) {
    for (let i = 0; i < S.length; i += 3) {
      const row = [S[i], S[i + 1], S[i + 2]];
      if (row.every((cell) => cell === "X")) {
        updateScore("X");
        setResult("X");
        return true;
      } else if (row.every((cell) => cell === "O")) {
        updateScore("O");
        setResult("O");
        return true;
      }
    }
    return false;
  }

  // Check if there's a result in any column
  function checkCol(S) {
    for (let i = 0; i < 3; i++) {
      const col = [S[i], S[i + 3], S[i + 6]];
      if (col.every((cell) => cell === "X")) {
        updateScore("X");
        setResult("X");
        return true;
      } else if (col.every((cell) => cell === "O")) {
        updateScore("O");
        setResult("O");
        return true;
      }
    }
    return false;
  }

  // Check if there's a result in any diagonal
  function checkDiagonal(S) {
    const diagonals = [
      [S[0], S[4], S[8]],
      [S[2], S[4], S[6]],
    ];
    for (const diag of diagonals) {
      if (diag.every((cell) => cell === "X")) {
        updateScore("X");
        setResult("X");
        return true;
      } else if (diag.every((cell) => cell === "O")) {
        updateScore("O");
        setResult("O");
        return true;
      }
    }
    return false;
  }

  // Check if all squares are filled and there's no result
  function checkDraw(S) {
    if (S.every((cell) => cell != null)) {
      setResult("Draw");
    }
  }

  // Update the score of the result
  function updateScore(result) {
    result === "X" ? setScoreX(scoreX + 1) : setScoreY(scoreY + 1);
  }

  // to reset the game without changing score or round number if the game is ongoing
  function reset() {
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setResult(null);
  }

  // start new game and update the scoreboard
  function newGame() {
    // Add the current round score to the scoreboard
    const newEntry = { round, scoreX, scoreY };
    setScoreboard([...scoreboard, newEntry]);

    // Start a new round and reset the game state
    setRound(round + 1);
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setResult(null);
    setScoreX(0);
    setScoreY(0);
  }

  function resetScoreboard() {
    setScoreboard([]);
    setRound(1);
  }

  // reset the game without changing score or round number if a player won or game is draw
  function playAgain() {
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setResult(null);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-screen p-4 bg-black">
      {/* Game info */}
      <GameInfo
        player={player}
        scoreX={scoreX}
        scoreY={scoreY}
        result={result}
      />

      {/* Board Section */}
      <div className="board flex flex-col items-center mx-auto my-0 col-span-1 w-4/5 lg:max-w-full lg:mt-12">
        <div className="board w-full flex justify-center items-center flex-col">
          {[0, 1, 2].map((row) => (
            <div key={row} className="board-row flex w-full">
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col;
                return (
                  <Square
                    key={index}
                    index={index}
                    player={squares[index]}
                    onSquareClick={handleSquareClick}
                    className="square flex-1 aspect-square border-2 border-black flex items-center justify-center rounded-lg text-xl md:text-2xl lg:text-4xl m-0.5"
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <button
            type="button"
            className="disabled:opacity-80 disabled:hover:bg-green-700 disabled:cursor-not-allowed text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            onClick={newGame}
            disabled={scoreX == 0 && scoreY == 0}
          >
            New Game
          </button>
          {result === null ? (
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={reset}
            >
              Reset
            </button>
          ) : (
            <button
              type="button"
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
              onClick={playAgain}
            >
              Play Again
            </button>
          )}
        </div>
      </div>

      {/* Score board section */}
      <Scoreboard scoreboard={scoreboard} resetScoreboard={resetScoreboard} />
    </div>
  );
}
