import {
  IconBombFilled,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
  IconNumber7,
  IconNumber8,
} from "@tabler/icons-react";
import React from "react";

export function runActionForNeighbors(
  x: number,
  y: number,
  action: (x: number, y: number) => void
) {
  for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
    for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
      action(neighborX, neighborY);
    }
  }
}

export function generateGameBoard(
  boardSize: number = 10,
  bombsPercentage: number = 10
) {
  const game: Field[] = [];
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      game.push({
        x,
        y,
        isBomb: Math.random() < bombsPercentage / 100,
        bombsAdjacentCount: 0,
      });
    }
  }

  game.forEach((field) => {
    if (field.isBomb) {
      field.icon = IconBombFilled;
      return;
    }
    runActionForNeighbors(field.x, field.y, (x, y) => {
      const neighbor = game.find((f) => f.x === x && f.y === y);
      if (neighbor?.isBomb) field.bombsAdjacentCount++;
      switch (field.bombsAdjacentCount) {
        case 1:
          field.icon = IconNumber1;
          break;
        case 2:
          field.icon = IconNumber2;
          break;
        case 3:
          field.icon = IconNumber3;
          break;
        case 4:
          field.icon = IconNumber4;
          break;
        case 5:
          field.icon = IconNumber5;
          break;
        case 6:
          field.icon = IconNumber6;
          break;
        case 7:
          field.icon = IconNumber7;
          break;
        case 8:
          field.icon = IconNumber8;
          break;
        default:
          field.icon = React.Fragment;
          break;
      }
    });
  });

  return game;
}
