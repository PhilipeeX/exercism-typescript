export function decodedResistorValue(colors: Array<string>): string {
    const numbersColors: { [key: string]: number } = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    };


  let result: string = '';
  let zeros: string = "";
  let index = 0;
  for (const color of colors) {
    if (index == colors.length - 1) {
        if (color === 'black') {
            continue;
        }
     zeros = "0".repeat(numbersColors[color]);
     result += zeros;
     continue;
    }
    if (color === "black" && result === "0") {
        continue;
    }
    result += numbersColors[color];
    index ++;
  }
  if (result.slice(-9) === "000000000") {
    return result.slice(0,-9) + ' gigaohms'
  }
  if (result.slice(-3) === "000" && result.slice(-6) !== "000000") {
      return result.slice(0,-3) + ' kiloohms'
  }else if (result.slice(-6) === "000000") {
      return result.slice(0,-6) + ' megaohms'
  }
  return result + ' ohms';
}

