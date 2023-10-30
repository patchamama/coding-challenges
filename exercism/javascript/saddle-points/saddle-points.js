//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const major = (row) => {
  return Math.max(...row)
}

const checkColumns = (points, col, valcomp) => {
  for (let c = 0; c < points.length; c++) {
     if (valcomp > points[c][col]) {
         return false
     }  
  }
  return true
}

export const saddlePoints = (points) => {
  let result = []
  let greater = 0
  let prow, pcol, ngrid
  
  prow = 0
  for (let row of points) {
    greater = major(row)
    pcol = 0
    for (let col of row) {
      ngrid = points[prow][pcol]
      if (ngrid === greater) {
         if (checkColumns(points, pcol, ngrid)) {
           console.log(ngrid)
           result.push({ row: prow + 1, column : pcol + 1})
         }
      }
      pcol++
    }
    prow++
  }
  console.log(result)
  return result
};
