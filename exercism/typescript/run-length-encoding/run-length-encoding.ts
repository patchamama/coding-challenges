
export function encode(str: string): string {
  let lastSt: string = ''
  let p: number = 0

  const charCounts: { [char: string]: number } = str.split('')
    .reduce((a: { [key: string]: number}, b) => {
    if (b !== lastSt) {
      lastSt = b;
      p++ 
    }
    a[b+p.toString()+'_'] = (a[b+p.toString()+'_'] || 0) + 1;
    return a;
  }, {})
 
  const result = Object.keys(charCounts).map(key => {
    const num = (charCounts[key] === 1) ? '' : charCounts[key]; 
    const ch = key.charAt(0);
    return `${num}${ch}`;
  }).join(''); 
  return result;
}

export function decode(str: string): string {
  return [...(str.match(/(\d+)?[\w ]/g) ?? [])].map( (e) => (e.replace(/\d+/g, '')).repeat(Number(e.replace(/[A-z ]/g, '') || 1))).join('')
}

 
