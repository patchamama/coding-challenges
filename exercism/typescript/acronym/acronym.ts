export const parse = (phrase: string): string =>  [...(phrase.replace(/([a-z])([A-Z])/g, '$1 $2').match(/\b([\w])/g) ?? [])].join('').toUpperCase()
