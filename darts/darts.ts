export function score(x: number, y: number): number {
  const intersection = x ** 2 + y ** 2;

  if (intersection <= 1) {
    return 10;
  } else if (intersection <= 25) {
    return 5;
  } else if (intersection <= 100) {
    return 1;
  } else {
    return 0;
  }
}
