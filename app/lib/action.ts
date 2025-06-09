export const playerWon = (boardState: any, playerMark: any) => {
  if (
    boardState[0] === playerMark &&
    boardState[1] === playerMark &&
    boardState[2] === playerMark
  ) {
    return [0, 1, 2];
  } else if (
    boardState[3] === playerMark &&
    boardState[4] === playerMark &&
    boardState[5] === playerMark
  ) {
    return [3, 4, 5];
  } else if (
    boardState[6] === playerMark &&
    boardState[7] === playerMark &&
    boardState[8] === playerMark
  ) {
    return [6, 7, 8];
  } else if (
    boardState[0] === playerMark &&
    boardState[3] === playerMark &&
    boardState[6] === playerMark
  ) {
    return [0, 3, 6];
  } else if (
    boardState[1] === playerMark &&
    boardState[4] === playerMark &&
    boardState[7] === playerMark
  ) {
    return [1, 4, 7];
  } else if (
    boardState[2] === playerMark &&
    boardState[5] === playerMark &&
    boardState[8] === playerMark
  ) {
    return [2, 5, 8];
  } else if (
    boardState[0] === playerMark &&
    boardState[4] === playerMark &&
    boardState[8] === playerMark
  ) {
    return [0, 4, 8];
  } else if (
    boardState[2] === playerMark &&
    boardState[4] === playerMark &&
    boardState[6] === playerMark
  ) {
    return [2, 4, 6];
  } else {
    return [];
  }
};

export interface move {
  score: null | number;
  index: null | number;
}

export const CPUDecision = (
  BoardState: (string | number)[],
  maxPlayer: string,
  minPlayer: string,
  isMax: boolean
) => {
  const emptyBoardState = BoardState.filter(
    (value: number | string) => typeof value === "number"
  );
  let move: move = { score: null, index: null };
  emptyBoardState.forEach((cell: number) => {
    let newBoard = [...BoardState];
    move = minimax(
      newBoard,
      emptyBoardState,
      isMax,
      maxPlayer,
      minPlayer,
      cell
    );
  });
  return move.index;
};

const minimax = (
  boardState: (string | number)[],
  emptyCells: number[],
  isMax: boolean,
  maxPlayer: string,
  minPlayer: string,
  pos: number
) => {
  if (playerWon(boardState, maxPlayer).length) return { score: 10, index: pos };
  else if (playerWon(boardState, minPlayer).length)
    return { score: -10, index: pos };
  else if (emptyCells.length === 0) return { score: 0, index: pos };

  if (isMax) {
    let maxScore = { score: -Infinity, index: 0 };
    emptyCells.forEach((cell: number) => {
      let newBoard = [...boardState];
      let emptyBoardCells = emptyCells.filter(
        (value: number) => value !== cell
      );
      newBoard[cell] = maxPlayer;
      let result = minimax(
        newBoard,
        emptyBoardCells,
        false,
        maxPlayer,
        minPlayer,
        cell
      );
      if (result.score > maxScore.score) {
        maxScore = { score: result?.score, index: cell };
      }
    });
    return maxScore;
  } else {
    let minScore = { score: Infinity, index: 0 };
    emptyCells.forEach((cell: number) => {
      let newBoard = [...boardState];
      let emptyBoardCells = emptyCells.filter(
        (value: number) => value !== cell
      );
      newBoard[cell] = minPlayer;
      let result = minimax(
        newBoard,
        emptyBoardCells,
        true,
        maxPlayer,
        minPlayer,
        cell
      );
      if (result.score < minScore.score) {
        minScore = { score: result?.score, index: cell };
      }
    });
    return minScore;
  }
};
