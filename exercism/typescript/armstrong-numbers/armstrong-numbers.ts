export const isArmstrongNumber = (input: number | bigint): boolean => {
  const numString = String(input);
  const power = numString.length;
  let sum: bigint = 0n;


  for (let i = 0; i < power; i++) {
    sum += BigInt(numString[i]) ** BigInt(power);
  }

  return sum === BigInt(input);
};