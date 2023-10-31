const rnaEquiv: { [base: string]: string } = {
  'A': 'U',
  'T': 'A',
  'C': 'G',
  'G': 'C',
}

export function toRna(base: string): string {
  let result: string = ''
  for (let b of base) {
    if (!(b in rnaEquiv)) throw new Error('Invalid input DNA.') 
    result += rnaEquiv[b]
  }
  return result
}
