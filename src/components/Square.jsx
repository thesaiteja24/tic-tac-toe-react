import React from "react";

export default function Square({ index, player, onSquareClick }) {
  return (
    <div
      className="flex-1 aspect-square border-2 border-white flex items-center justify-center rounded-lg text-2xl sm:text-4xl m-0.5 "
      onClick={() => onSquareClick(index)}
    >
      <h1 className="text-white" >{player}</h1>
    </div>
  );
}
