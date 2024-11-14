import React from "react";
import AnnounceWinner from "./AnnounceWinner";
export default function GameInfo({ player, scoreX, scoreY, result }) {
  return (
    <div className="game-info flex flex-col items-center col-span-1 w-full">
      <h1 className="font-doto-bold text-2xl md:text-3xl mb-4 text-fontColor">{`${player}'s Turn`}</h1>
      <div className="flex justify-between w-3/4 lg:w-full ">
        <h5 className="font-doto-regular text-base sm:text-2xl my-1 px-4 text-fontColor">{`X score: ${scoreX}`}</h5>
        <h5 className="font-doto-regular text-base sm:text-2xl my-1 px- text-fontColor">{`O score: ${scoreY}`}</h5>
      </div>
      <div className="mt-4">
        <AnnounceWinner result={result} />
      </div>
    </div>
  );
}
