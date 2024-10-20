const orbitalPeriods: { [key: string]: number } = {
      mercury: 0.2408467,
      venus: 0.61519726,
      earth: 1,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132,
};

export function age(planet: string, seconds: number): number {
  let result: number = 0;
  result = Number((calculatesAgeOnEarth(seconds) / orbitalPeriods[planet]).toFixed(2));

  return result;
};

export function calculatesAgeOnEarth(seconds: number): number {
  let ageOnEarth: number = 31557600;
  ageOnEarth = seconds / ageOnEarth;
  return ageOnEarth;
};

