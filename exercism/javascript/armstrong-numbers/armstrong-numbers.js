//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numberStr = number.toString();
  const power = numberStr.length;
  const sum = [...numberStr].reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
  return sum === number;
}
