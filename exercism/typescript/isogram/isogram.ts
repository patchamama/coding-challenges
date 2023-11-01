export function isIsogram(word: string): boolean {
  let isIso: boolean = true;
  word.replace(/[\s\-]/g, '').toLowerCase().split('').sort().reduce( (a, b) => {isIso = !(a === b) && isIso; return b;}, '')
  return isIso
}
