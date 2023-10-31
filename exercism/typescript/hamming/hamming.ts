export function compute(left: string, right: string): number {
  if (left.length !== right.length) throw new Error('DNA strands must be of equal length.')
  let result = 0;
  left.split("").map( (e, i) => {
    if (e !== right[i]) result++
  })
  return result
}
