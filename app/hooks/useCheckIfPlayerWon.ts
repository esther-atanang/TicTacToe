import { useEffect } from "react";

interface Score {
  you: number;
  ties: number;
  player2: number;
}

type Mark = "x" | "o";
type WinnerResult = string[]; // whatever shape playerWon returns

interface Props {
  nextMove: Mark;
  boardState: Array<string | null>;
  playerWon: (board: Array<string | null>, mark: Mark) => WinnerResult;
  aiPlayer: Mark;
  player2Mark: Mark;
  playerOne: Mark;
  huPlayer: Mark;
  score: Score;
  takesNextLead: Mark | "";
  setScore: (updater: Score | ((prev: Score) => Score)) => void;
  setWon: (w: WinnerResult | "tie") => void;
  setTakesNextLead: (updater: Mark | "" | ((prev: Mark | "") => Mark | "")) => void;
}

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
    const prevMove: Mark = nextMove === "x" ? "o" : "x";
    const winners = playerWon(boardState, prevMove);
    const isTie = boardState.every((val:string) => typeof val === "string");

    // Determine new score object (or null if no change)
    let newScore = null;
    if (winners.length > 0) {
      // someone won
      if ([aiPlayer, player2Mark].includes(prevMove)) {
        newScore = (prev:{player2:number}) => ({
          ...prev,
          player2: prev.player2 + 10,
        });
      } else if ([huPlayer, playerOne].includes(prevMove)) {
        newScore = (prev:any) => ({
          ...prev,
          you: prev.you + 10,
        });
      }
    } else if (isTie) {
      newScore = (prev:any) => ({
        ...prev,
        ties: prev.ties + 1,
      });
    }

    // If there is an update to apply, do it
    if (newScore) {
      setScore(newScore);

      if (winners.length > 0) {
        setWon(winners);
      } else {
        setWon("tie");
      }

      // flip lead for next round
      setTakesNextLead((prevLead:string) =>
        prevLead === "x" ? "o" : prevLead === "o" ? "x" : ""
      );
    }},[
          boardState,
    nextMove,
    playerWon,
    aiPlayer,
    player2Mark,
    huPlayer,
    playerOne,
    setScore,
    setWon,
    setTakesNextLead,
    ])
};

export default useCheckIfPlayerWon;
