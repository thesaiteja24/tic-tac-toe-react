import React from "react";

export default function Scoreboard({scoreboard}) {
  return (
    <div>
      <div className="score-board flex-col items-center justify-start col-span-1 md:flex w-full lg:mt-12">
        <h2 className="font-doto-bold text-xl mb-4 text-fontColor">
          Scoreboard
        </h2>
        <div className="overflow-y-auto max-h-48 scrollbar-hide">
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
      </div>
    </div>
  );
}
