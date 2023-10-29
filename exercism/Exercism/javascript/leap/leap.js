//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let result;
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      result = true
    } else {
      if (year % 400 === 0) {
        result = true
      } else {
        result = false
      }
    }
  } else {
    result = false
  }
  return result
};
