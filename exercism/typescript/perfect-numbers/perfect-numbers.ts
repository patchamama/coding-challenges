export const classify = (number: number): string => {
  if (number < 1) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let lo = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      lo += i;
    }
  }

  if (lo === number) {
    return "perfect";
  } else if (lo > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};