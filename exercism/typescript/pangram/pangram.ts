export const isPangram = (sentence: string): boolean => {
  const alphabet: Set<string> = new Set("abcdefghijklmnopqrstuvwxyz");

  for (let letter of sentence.toLowerCase()) {
    alphabet.delete(letter);
  }

  return alphabet.size === 0;
};