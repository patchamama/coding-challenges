//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (r) => {
  let result = []
  let lastrow = []
  for (let i = 1; i <= r; i++) {
    let acrow = []
    for (let c = 1; c <= i; c++) {
      if ((c > (lastrow.length)) || (c === 1) ) {
        acrow.push(1)
      } else {
        let val = lastrow[c-2] + lastrow[c-1]
        acrow.push(val)
      }     
    }
    lastrow = acrow
    console.log(lastrow)
    result.push(acrow)
  }
  return result
};
