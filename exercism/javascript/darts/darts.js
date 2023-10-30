//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  var result = 0;
  var rad = Math.sqrt(x ** 2 + y ** 2);

  if (rad > 5 && rad <= 10) {
    result = 1;
  } else if (rad > 1 && rad <= 5) {
    result = 5;
  } else if (rad >= 0 && rad <= 1) {
    result = 10;
  }

  return result;
}

