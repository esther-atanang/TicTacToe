import Image from "next/image";
import { useState } from "react";
import {
  o_shape,
  x_shape,
  active_o,
  active_x,
  hover_o,
  hover_x,
} from "@/app/utils";

interface ISquare {
  mark: string;
  boardState: (number | string)[];
  setBoardState: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  position: number;
  nextMove: string;
  playerMark: string;
  player2Mark: string;
  cpuMark: string;
  won: number[];
  setNextMove: React.Dispatch<React.SetStateAction<string>>;
}

const Square: React.FC<ISquare> = ({
  mark,
  boardState,
  setBoardState,
  position,
  playerMark,
  player2Mark,
  cpuMark,
  nextMove,
  won,
  setNextMove,
}) => {
  const [hoverMark, setHoverMark] = useState(false);
 
  const handleClick = (position: number) => {
    let currentMove = nextMove;
    if (currentMove === playerMark || player2Mark) {
      const currentBoardState = [...boardState];
      if (typeof currentBoardState[position] === "number") {
        if (cpuMark) {
          currentBoardState[position] = playerMark;
          setBoardState(currentBoardState);
          setNextMove(cpuMark);
        } else {
          currentBoardState[position] = nextMove;
          setBoardState(currentBoardState);
          setNextMove(nextMove === "x" ? "o" : "x");
        }
      }
    }
  };

  let style;
  if (won.includes(position) && mark === "o") {
    style = {
      backgroundColor: "#F2B137",
      borderColor: "#CC8B13",
    };
  } else if (won.includes(position) && mark === "x") {
    style = {
      backgroundColor: "#31C3BD",
      borderColor: "#118C87",
    };
  }

  return (
    <button
      style={style}
      onClick={() => handleClick(position)}
      onMouseEnter={() => {
        setHoverMark(true);
      }}
      onMouseLeave={() => {
        setHoverMark(false);
      }}
      className="bg-boardColor flex items-center h-full justify-center rounded-[1.1rem] border-b-8 border-borderColor cursor-pointer "
      disabled={(won.length > 0 || cpuMark && (cpuMark === nextMove)) ? true : false}
    >
      {mark && !won.includes(position) && (
        <Image
          src={mark == "x" ? x_shape : mark === "o" ? o_shape : ""}
          alt="player mark"
        />
      )}
      {hoverMark && !mark && (
        <Image src={nextMove === "x" ? hover_x : hover_o} alt="hover" />
      )}
      {won.includes(position) && mark && (
        <Image
          className="w-[4.2rem]"
          src={mark === "x" ? active_x : active_o}
          alt="active"
        />
      )}
    </button>
  );
};

export default Square;
