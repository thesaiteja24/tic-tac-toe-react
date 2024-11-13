import React, { useState, useEffect } from "react";
import Square from "./Square";
import AnnounceWinner from "./AnnounceWinner";

export default function Board() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [scoreX, setScoreX] = useState(0);
  const [scoreY, setScoreY] = useState(0);
  const [round, setRound] = useState(1);
  const [scoreboard, setScoreboard] = useState([]);
  console.log(squares);

  function handleSquareClick(index) {
    if (squares[index] || winner) return;
    const newSquares = squares.slice();
    newSquares[index] = player;
    setSquares(newSquares);
    setPlayer(player === "X" ? "O" : "X");
  }

  useEffect(() => {
    // Only proceed if there's no winner yet
    if (!winner) {
      const hasWinner =
        checkRow(squares) || checkCol(squares) || checkDiagonal(squares);

      // Only check for a draw if there's no winner after the win checks
      if (!hasWinner) {
        checkDraw(squares);
      }
    }
  }, [squares, winner]);

  // Check if there's a winner in any row
  function checkRow(S) {
    for (let i = 0; i < S.length; i += 3) {
      const row = [S[i], S[i + 1], S[i + 2]];
      if (row.every((cell) => cell === "X")) {
        updateScore("X");
        setWinner("X");
        return true;
      } else if (row.every((cell) => cell === "O")) {
        updateScore("O");
        setWinner("O");
        return true;
      }
    }
    return false;
  }

  // Check if there's a winner in any column
  function checkCol(S) {
    for (let i = 0; i < 3; i++) {
      const col = [S[i], S[i + 3], S[i + 6]];
      if (col.every((cell) => cell === "X")) {
        updateScore("X");
        setWinner("X");
        return true;
      } else if (col.every((cell) => cell === "O")) {
        updateScore("O");
        setWinner("O");
        return true;
      }
    }
    return false;
  }

  // Check if there's a winner in any diagonal
  function checkDiagonal(S) {
    const diagonals = [
      [S[0], S[4], S[8]],
      [S[2], S[4], S[6]],
    ];
    for (const diag of diagonals) {
      if (diag.every((cell) => cell === "X")) {
        updateScore("X");
        setWinner("X");
        return true;
      } else if (diag.every((cell) => cell === "O")) {
        updateScore("O");
        setWinner("O");
        return true;
      }
    }
    return false;
  }

  // Check if all squares are filled and there's no winner
  function checkDraw(S) {
    if (S.every((cell) => cell != null)) {
      setWinner("Draw");
    }
  }

  // Update the score of the winner
  function updateScore(winner) {
    winner === "X" ? setScoreX(scoreX + 1) : setScoreY(scoreY + 1);
  }

  // to reset the game without changing score or round number if the game is ongoing
  function reset() {
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
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
    setWinner(null);
    setScoreX(0);
    setScoreY(0);
  }

  // reset the game without changing score or round number if a player won or game is draw
  function playAgain() {
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-screen p-4 bg-black">
      {/* Game info section */}
      <div className="game-info flex flex-col items-center col-span-1 w-full lg:mt-12">
        <h1 className="font-doto-bold text-2xl md:text-3xl mb-4 text-fontColor">{`${player}'s Turn`}</h1>
        <div className="flex justify-between w-3/4 lg:w-full ">
          <h5 className="font-doto-regular text-base sm:text-2xl my-1 px-4 text-fontColor">{`X score: ${scoreX}`}</h5>
          <h5 className="font-doto-regular text-base sm:text-2xl my-1 px- text-fontColor">{`O score: ${scoreY}`}</h5>
        </div>
      </div>

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
                    // Apply conditional sizing for squares
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
            className="disabled:opacity-80 disabled:hover:bg-green-700 disabled:cursor-not-allowed focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={newGame}
            disabled={scoreX == 0 && scoreY == 0}
          >
            New Game
          </button>
          {winner === null ? (
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={reset}
            >
              Reset
            </button>
          ) : (
            <button
              type="button"
              className="focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={playAgain}
            >
              Play Again
            </button>
          )}
        </div>
        <div className="mt-4">
          <AnnounceWinner winner={winner} />
        </div>
      </div>

      {/* Score board section */}
      <div className="score-board flex-col items-center justify-start col-span-1 md:flex w-full lg:mt-12">
        <h2 className="font-doto-bold text-xl mb-4 text-fontColor">
          Scoreboard
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="font-doto border px-4 py-2 text-fontColor">
                Round
              </th>
              <th className="font-doto border px-4 py-2 text-fontColor">
                X Score
              </th>
              <th className="font-doto border px-4 py-2 text-fontColor">
                O Score
              </th>
            </tr>
          </thead>
          <tbody>
            {scoreboard.map((entry, index) => (
              <tr key={index}>
                <td className="font-doto border px-4 py-2 text-center  text-fontColor">
                  <span>{entry.round}</span>
                </td>
                <td className="font-doto border px-4 py-2 text-center text-fontColor">
                  <span>{entry.scoreX}</span>
                </td>
                <td className="font-doto border px-4 py-2 text-center text-fontColor">
                  <span>{entry.scoreY}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
