import { useEffect } from "react";

const useCheckIfPlayerWon = ({
  nextMove,
  boardState,
  playerWon,
  aiPlayer,
  player2Mark,
  playerOne,
  huPlayer,
  score,
  takesNextLead,
  setScore,
  setWon,
  setTakesNextLead,
}: any) => {
  useEffect(() => {
    let checked = false;
    let prevMove = nextMove === "x" ? "o" : "x";
    let someOneWon = playerWon(boardState, prevMove);
    let tie = boardState.every((val: unknown) => typeof val === "string");
    let newScore;

    if (someOneWon.length > 0) {
      if (aiPlayer === prevMove || player2Mark === prevMove) {
        newScore = {
          you: score.you,
          ties: score.ties,
          player2: score.player2 + 10,
        };
      } else if (huPlayer === prevMove || playerOne === prevMove) {
        newScore = {
          you: score.you + 10,
          ties: score.ties,
          player2: score.player2,
        };
      }
    } else {
      if (tie) {
        newScore = {
          you: score.you,
          ties: score.ties + 1,
          player2: score.player2,
        };
      }
    }

    if (!checked && newScore && (tie || someOneWon)) {
      let newLead =
        takesNextLead === "x" ? "o" : takesNextLead === "o" ? "x" : "";
      setScore(newScore);
      if (someOneWon) setWon(someOneWon);
      if (tie) setWon("tie"); //Old state is flashing
      setTakesNextLead(newLead);
    }
    return () => {
      checked = true;
    };
  }, [boardState, nextMove, aiPlayer,huPlayer,player2Mark, playerOne, playerWon, score.player2,score.ties,score.you]);
};

export default useCheckIfPlayerWon;
