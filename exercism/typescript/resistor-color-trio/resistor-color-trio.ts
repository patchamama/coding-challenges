
const colorMap: { [key: string]: number } = {
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

export function decodedResistorValue([first, second, third]: string[]): string {
  let units: number = (colorMap[first]*10 + colorMap[second]) * (10 ** (colorMap[third]) )
  return (units > (10**9)) ? `${units / (10**9)} gigaohms` : (units > (10**6)) ? `${units / (10**6)} megaohms` : (units > (10**3)) ? `${units/ (10**3)} kiloohms` : `${units} ohms`;
}