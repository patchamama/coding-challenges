//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {
  let result = []
  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      result.push(i)
      number = number / i
    } 
  }
  return result
};
