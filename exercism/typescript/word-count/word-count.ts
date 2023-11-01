export function count(phrase: string) {
 return new Map(Object.entries( [...(phrase.toLowerCase().replace('constructor','konstructor').match(/\b[\w']+\b/g) ?? [])].reduce( (counter: { [key: string]: number }, word )  => {counter[word.replace('konstructor','constructor')] = (counter[word] || 0) + 1; return counter; }, {})))
}
