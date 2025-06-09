import React from "react";

export interface score {
  you: number;
  ties: number;
  player2: number;
}
const ScoreBoard: React.FC<score> = ({ you, ties, player2 }: score) => {
  return (
    <div className="flex gap-6 *:rounded-lg *:flex-1 *:text-main *:uppercase *:flex *:items-center *:p-4  *:flex-col mt-8">
      <div className="bg-btn-blue">
        <p>x(you)</p>
        <p className="text-2xl font-bold">{you}</p>
      </div>
      <div className="bg-textColor">
        <p>Ties</p>
        <p className="text-2xl font-bold">{ties}</p>
      </div>
      <div className="bg-btn-yellow">
        <p>o(cpu)</p>
        <p className="text-2xl font-bold">{player2}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
