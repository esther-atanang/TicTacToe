import { useEffect } from "react";

const useAiPlayer = ({
  boardState,
  nextMove,
  aiPlayer,
  huPlayer,
  CPUDecision,
  setBoardState,
  setNextMove,
}: any) => {
  //Ai player
  useEffect(() => {
    let changed = false;
    if (!changed) {
      if (nextMove === aiPlayer) {
        let futureBoard = [...boardState];
        if (boardState.every((val) => typeof val === "number")) {
          futureBoard[Math.floor(Math.random() * futureBoard.length)] =
            aiPlayer;
        } else {
          let decision: number = -1;
          if (aiPlayer === "x") {
            decision = CPUDecision(
              boardState,
              aiPlayer,
              huPlayer,
              true
            ) as number;
          } else {
            decision = CPUDecision(
              boardState,
              huPlayer,
              aiPlayer,
              false
            ) as number;
          }
          futureBoard[decision] = aiPlayer;
        }
        //Artificial delay to make it seem that the ai is thinking
        setTimeout(() => {
          setBoardState(futureBoard);
          setNextMove(huPlayer as string);
        }, 2000);
      }
    }
    return () => {
      changed = true;
    };
  }, [boardState, nextMove]);
};

export default useAiPlayer;
