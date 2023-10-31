export const square = (number: bigint): bigint => {
  if (BigInt(1) <= number && number <= BigInt(64)) {
    let count: bigint = BigInt(0);
    for (let a: bigint = BigInt(0); a < number; a++) {
      const c: bigint = a + BigInt(1);
      if (c === BigInt(1)) {
        count = BigInt(1);
      } else if (c === BigInt(2)) {
        count = BigInt(2);
      } else {
        count = count * BigInt(2);
      }
    }
    return count;
  } else {
    // when the square value is not in the acceptable range
    throw new Error("square must be between 1 and 64");
  }
}

export const total = (): bigint => {
   let count: bigint = BigInt(0);
  for (let a: bigint = BigInt(0); a < BigInt(64); a++) {
    count += square(a + BigInt(1));
  }
  return count;
}


