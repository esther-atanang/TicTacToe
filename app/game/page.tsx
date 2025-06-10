"use client";
import SquareBoard from "../_ui/game/gameBoard";
import DescriptionBoard from "../_ui/game/descriptionBoard";
import ScoreBoard, { score } from "../_ui/game/scoreBoard";
import PopUpMenu from "../_ui/game/popUpMenu";
import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { CPUDecision as _CPUDecision, playerWon as _playerWon } from "../lib/action";
import useCheckIfPlayerWon from "../hooks/useCheckIfPlayerWon";
import useAiPlayer from "../hooks/useAiPlayer";

type TgameStates = number[] | null | "tie";

const Game = () => {
  const [nextMove, setNextMove] = useState("x");
  const [takesNextLead, setTakesNextLead] = useState("x");
  const [score, setScore] = useState<score>({ you: 0, ties: 0, player2: 0 });
  const [won, setWon] = useState<TgameStates>([]);
  const [boardState, setBoardState] = useState<(number | string)[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
    const CPUDecision = useCallback(_CPUDecision,[]);
    const playerWon = useCallback(_playerWon,[]);

  //This is just a test run
  const searchParams = useSearchParams();
  const playWith = searchParams.get("play");
  const huPlayer = searchParams.get("playermark") as string; //I have to change this then
  const playerOne = searchParams.get("playermark");
  let aiPlayer = null;
  let player2Mark = null;
  const victoryPlayer = won
    ? typeof won === "object"
      ? boardState[won[0]]
      : won
    : null;
  const didPlayerWin =
    victoryPlayer == playerOne || victoryPlayer == huPlayer
      ? true
      : victoryPlayer === "tie"
      ? "tie"
      : false;

  //Determine the mark for ai
  if (playWith === "cpu") {
    aiPlayer = huPlayer === "x" ? "o" : "x";
  }
  if (playWith === "player") {
    player2Mark = playerOne === "x" ? "o" : "x";
  }

  //Event handlers
  const handleReload = () => {
    setBoardState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  };

  const handleNextRound = () => {
    setBoardState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setNextMove(takesNextLead);
    setWon([]);
  };

  //The Ai player when you are playing with the CPU
  useAiPlayer({
    boardState,
    nextMove,
    aiPlayer,
    huPlayer,
    CPUDecision,
    setBoardState,
    setNextMove,
  });
  //check if player won
  useCheckIfPlayerWon({
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
  });

  return (
    <div
      className={`h-[90vh] p-8  flex flex-col md:mt-12 md:mb-12 max-w-[500px] m-auto ${
        victoryPlayer &&
        "after:left-0 after:right-0 after:top-0 after:bottom-0 after:absolute after:bg-overlay after:bg-opacity-50"
      }`}
    >
      <DescriptionBoard nextMove={nextMove} onReload={handleReload} />
      <SquareBoard
        board={boardState}
        nextMove={nextMove}
        playerMark={huPlayer}
        player2Mark={player2Mark as string}
        cpuMark={aiPlayer as string}
        setBoardState={setBoardState}
        setNextMove={setNextMove}
        won={won as number[]}
      />
      <ScoreBoard {...score} />
      {(won?.length === 3 || won === "tie") && (
        <PopUpMenu
          playerWon={didPlayerWin}
          takesNextRound={takesNextLead}
          onNextRound={handleNextRound}
        />
      )}
    </div>
  );
};

export default Game;
