export function getRandomHexColor() {
  // Generate random values for red, green, and blue components
  const red = 100 + Math.floor(Math.random() * 156);
  const green = 100 + Math.floor(Math.random() * 156);
  const blue = 100 + Math.floor(Math.random() * 156);

  // Convert decimal to hexadecimal
  const redHex = red.toString(16).padStart(2, "0");
  const greenHex = green.toString(16).padStart(2, "0");
  const blueHex = blue.toString(16).padStart(2, "0");

  // Concatenate and return the hexadecimal color code
  return `#${redHex}${greenHex}${blueHex}`;
}
