import { useEffect, useState } from "react";
import { generateGameBoard, runActionForNeighbors } from "./utils";
import { sleep } from "@/utils/utils";
import { shuffle } from "lodash";

interface Props {
  boardSize: number;
}

export default function useGame({ boardSize = 10 }: Props) {
  const [gameBoard, setGameBoard] = useState<Field[]>([]);

  async function handleBombClick() {
    const newGame = [...gameBoard]; // Create a shallow copy of the game board
    const fields = shuffle(newGame).filter((field) => field.isBomb); // Find all bomb fields

    async function updateFields(index: number) {
      if (index < fields.length) {
        const field = fields[index];
        field.isOpen = true; // Update isOpen property
        setGameBoard([...newGame]); // Update the game board

        await sleep(100); // Sleep for 100 milliseconds

        await updateFields(index + 1); // Recursively call updateFields for the next field
      }
    }

    await updateFields(0); // Start the recursion from index 0
  }

  async function handleClick(x: number, y: number) {
    const newGame = [...gameBoard];
    const field = newGame.find((f) => f.x === x && f.y === y);
    if (!field || field.isOpen) return;

    field.isOpen = true;
    setGameBoard(newGame);

    if (!field.bombsAdjacentCount && !field.isBomb) {
      await sleep(10);
      runActionForNeighbors(x, y, handleClick);
    }

    if (field.isBomb) handleBombClick();
  }

  useEffect(() => {
    const game = generateGameBoard(boardSize, 12);
    setGameBoard(game);
  }, [boardSize]);

  return { gameBoard, handleClick };
}
