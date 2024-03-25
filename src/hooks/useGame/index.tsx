import { useEffect, useState } from "react";
import { generateGameBoard } from "./utils";

interface Props {
  boardSize: number;
}

export default function useGame({ boardSize = 10 }: Props) {
  const [gameBoard, setGameBoard] = useState<Field[]>([]);

  useEffect(() => {
    setGameBoard(generateGameBoard(boardSize));
  }, [boardSize]);

  function handleClick(x: number, y: number) {
    setGameBoard((currentGame) => {
      const newGame = [...currentGame];
      const field = newGame.find((f) => f.x === x && f.y === y);
      if (!field) return currentGame;
      field.isOpen = true;
      return newGame;
    });
  }

  return { gameBoard, handleClick };
}
