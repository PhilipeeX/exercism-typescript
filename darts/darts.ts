let points: number = 0;

export function score(x: number, y: number): number {

  if (x ** 2 + y ** 2 <= 1) {
    points = 10;
  } else if (x ** 2 + y ** 2 <= 25) {
    points = 5;
  }else if (x ** 2 + y ** 2 <= 100) {
    points = 1;
  }else {
    points = 0;
  }
  return points;
}
