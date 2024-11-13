import React from "react";

export default function AnnounceWinner({ winner }) {
  return (
    <>
      <div>
        <h1 className="winner font-doto-regular m-4 text-3xl">
          {winner == null ? `` : `Winner is ${winner}`}
        </h1>
      </div>
    </>
  );
}
