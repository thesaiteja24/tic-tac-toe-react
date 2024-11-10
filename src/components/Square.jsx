import React from "react";

export default function Square({ index, player, onSquareClick }) {
  return (
    <div
      className="h-36 w-36 border-2 border-black flex items-center justify-center"
      onClick={() => onSquareClick(index)}
    >
      {player}
    </div>
  );
}
