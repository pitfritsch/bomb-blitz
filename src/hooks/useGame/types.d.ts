interface Field {
  x: number;
  y: number;
  bombsAdjacentCount: number;
  icon?: React.JSX;
  isBomb?: boolean;
  isOpen?: boolean;
}
