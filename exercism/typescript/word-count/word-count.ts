export function count(phrase: string) {
 return new Map(Object.entries((' '+phrase+' ').toLowerCase().replace(/[^a-z\d\']/g, ' ').replace('constructor','konstructor').replace(/ \'|\' /g, ' ').replace(/\s+/g, ' ').trim().split(' ').sort().reduce( (counter: { [key: string]: number }, word )  => {counter[word.replace('konstructor','constructor')] = (counter[word] || 0) + 1; return counter; }, {})))
}
