
export const calculatePrimeFactors = (number: number): number[] => {
  const result: number[] = [];
  let currentNumber: number = number;

  for (let i: number = 2; i <= currentNumber; i++) {
    while (currentNumber % i === 0) {
      result.push(i);
      currentNumber = currentNumber / i;
    }
  }

  return result;
};