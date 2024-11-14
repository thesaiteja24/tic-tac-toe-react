import React from "react";

export default function AnnounceWinner({ result }) {
  function displayResult(result) {
    if (result == "Draw") {
      return "The game is Draw";
    } else if (result == "X" || result == "O") {
      return `Game won by ${result}`;
    } else {
      return;
    }
  }

  return (
    <>
      <div>
        <h1 className="result font-doto-regular m-4 text-3xl text-fontColor">
          {displayResult(result)}
        </h1>
      </div>
    </>
  );
}
