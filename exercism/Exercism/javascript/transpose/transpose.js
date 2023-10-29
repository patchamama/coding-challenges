//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (inputs) => {
  let result = []
  if (inputs.length === 0) {
    return []
  } else if (inputs.length === 1) {
    for (let a of inputs[0]) {
      result.push(a)
    }
  } else {
    // multi input arrays (>2)
    let input = []
    let maxarr = 0
    for (let arr of inputs) {
      maxarr = arr.length > maxarr ? arr.length : maxarr
    }
    let pos = 0
    let temp = ''
    while (pos < maxarr) {
      temp = ''
      for (let arr of inputs) {
        temp += arr.length > pos ? arr[pos].replace(" ", "#") : " "
      }
      temp = temp.trimEnd()
      while (temp.includes("#")) {
        temp = temp.replace("#", " ")
      }
      result.push(temp)
      pos++
    } 
  }
  
  return result
};
