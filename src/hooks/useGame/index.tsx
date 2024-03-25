import { useEffect, useState } from "react";
import { generateGameBoard, runActionForNeighbors } from "./utils";

interface Props {
  boardSize: number;
}

export default function useGame({ boardSize = 10 }: Props) {
  const [gameBoard, setGameBoard] = useState<Field[]>([]);

  useEffect(() => {
    setGameBoard(generateGameBoard(boardSize, 15));
  }, [boardSize]);

  function handleClick(x: number, y: number) {
    const newGame = [...gameBoard];
    const field = newGame.find((f) => f.x === x && f.y === y);
    if (!field || field.isOpen) return;

    field.isOpen = true;

    if (!field.bombsAdjacentCount && !field.isBomb) {
      runActionForNeighbors(x, y, handleClick);
    }

    setGameBoard(newGame);
  }

  return { gameBoard, handleClick };
}
