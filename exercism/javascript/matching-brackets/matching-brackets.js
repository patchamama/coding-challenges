//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (st) => {
  let last = ''
  let temp = ''
  let parClose = { ')' : '(', 
                ']' : '[', 
                '}' : '{' }
  let parOpen = { '(' : ')',
                '{' : '}',
                '[' : ']'} 
  for (let w of st) {
    if (parOpen.hasOwnProperty(w)) {
      last +=  w
    } else if (parClose.hasOwnProperty(w)) {
      temp = last.length > 1 ? last[last.length-1] : last
      if (temp !== parClose[w]) {
        return false
      } else {
        console.log(".",last,".", last.slice(0, -1))
        last = last.slice(0, -1)
    }
  }  
  }

  for (let w of last) {
    if ( (parOpen.hasOwnProperty(w)) ||
        (parClose.hasOwnProperty(w)) ) {
      return false
    } 
  } 
  return true
}
