export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export function decodedValue(colors: string[]): number {
  let decoded: string;
  decoded = COLORS.indexOf(colors[0]).toString() + COLORS.indexOf(colors[1]).toString();
  return Number(decoded)
}
