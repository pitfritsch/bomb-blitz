interface Field {
  x: number;
  y: number;
  bombsAdjacentCount: number;
  icon?: JSX.Element;
  isBomb?: boolean;
  isOpen?: boolean;
}
