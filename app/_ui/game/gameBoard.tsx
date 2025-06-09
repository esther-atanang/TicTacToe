import Square from "./Square";

interface SquareBoard {
  board: (string | number)[];
  nextMove: string;
  playerMark: string;
  player2Mark: string;
  cpuMark: string;
  won: number[];
  setNextMove: React.Dispatch<React.SetStateAction<string>>;
  setBoardState: React.Dispatch<React.SetStateAction<(string | number)[]>>;
}

//Should i use context?
const SquareBoard = ({
  board,
  nextMove,
  setNextMove,
  playerMark,
  cpuMark,
  player2Mark,
  won,
  setBoardState,
}: SquareBoard) => {
  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-4 h-full w-full">
      {board.map((val: number | string, i: number) => {
        if (typeof val === "number") {
          return (
            <Square
              key={i}
              mark={""}
              boardState={board}
              setBoardState={setBoardState}
              position={i}
              nextMove={nextMove}
              playerMark={playerMark}
              cpuMark={cpuMark}
              player2Mark={player2Mark}
              setNextMove={setNextMove}
              won={won}
            />
          );
        } else {
          return (
            <Square
              key={i}
              mark={val}
              boardState={board}
              setBoardState={setBoardState}
              position={i}
              nextMove={nextMove}
              playerMark={playerMark}
              cpuMark={cpuMark}
              player2Mark={player2Mark}
              setNextMove={setNextMove}
              won={won}
            />
          );
        }
      })}
    </section>
  );
};

export default SquareBoard;
