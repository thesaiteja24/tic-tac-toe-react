import React, { useEffect, useRef } from "react";

export default function Scoreboard({ scoreboard, resetScoreboard }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [scoreboard]);

  function emptyScoreboard(scoreboard) {
    if (scoreboard.length == 0) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div className="score-board flex-col items-center justify-start col-span-1 md:flex w-11/12 lg:mt-12">
        <h2 className="font-doto-bold text-xl mb-4 text-fontColor">
          Scoreboard
        </h2>
        <div
          ref={scrollRef}
          className="overflow-y-auto max-h-48 scrollbar-hide w-full"
        >
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-black z-10">
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
            <tbody className="max-h-48">
              {scoreboard.map((entry, index) => (
                <tr key={index}>
                  <td className="font-doto border px-4 py-2 text-center text-fontColor">
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
        {!emptyScoreboard(scoreboard) && (
          <div className="flex items-center justify-center m-4">
            <button
              onClick={resetScoreboard}
              className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            >
              Reset Scoreboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
