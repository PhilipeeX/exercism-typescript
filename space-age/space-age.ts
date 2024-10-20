const orbitalPeriods: { [key: string]: number } = {
      mercury: 0.2408467,
      venus: 0.161519726,
      earth: 1,
      mars: 3,
      jupiter: 4,
      saturn: 5,
      uranus: 6,
      neptune: 7,
};

export function age(planet: string, seconds: number): number {
  let inEarth = 31557600;
  let earth = seconds / inEarth;
  let result: number = 0;
  result = earth / orbitalPeriods[planet];

  return Number(result.toFixed(2));
};
