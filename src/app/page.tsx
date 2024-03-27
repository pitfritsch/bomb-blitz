"use client";
import useGame from "@/hooks/useGame";
import { ActionIcon, Button, SimpleGrid } from "@mantine/core";
import { IconBombFilled } from "@tabler/icons-react";
import React, { useEffect } from "react";

const boardSize = 20;

export default function Home() {
  const { gameBoard, handleClick } = useGame({ boardSize });

  return (
    <SimpleGrid cols={boardSize} spacing={0}>
      {gameBoard.map((field) => {
        return (
          <ActionIcon
            key={`${field.x}-${field.y}`}
            color={
              field.x % 2
                ? field.y % 2
                  ? field.isOpen
                    ? "#9b7653"
                    : "#268B07"
                  : field.isOpen
                  ? "#765f48"
                  : "#41980a"
                : field.y % 2
                ? field.isOpen
                  ? "#765f48"
                  : "#41980a"
                : field.isOpen
                ? "#9b7653"
                : "#268B07"
            }
            radius={0}
            w={"20px"}
            h={"20px"}
            onClick={() => handleClick(field.x, field.y)}
          >
            {field.isOpen && field.icon}
          </ActionIcon>
        );
      })}
    </SimpleGrid>
  );
}
