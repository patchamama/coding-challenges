//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, words) => {
  let result = []
  word = word.toLowerCase()
  for (let w of words) {
    let newWord = w;
    w = w.toLowerCase()
    if ((w.length !== word.length) || (word === w)) {
      //return []
    } else {
      for (let i = 0; i < word.length; i++) {
        if (w.indexOf(word[i]) >= 0) {
          w = w.replace(word[i], '')
        } else {
          //return []
        }   
      }
    }
    console.log(newWord, w)
    if (w.length === 0) {
      result.push(newWord)
    }
  }
  return result
};
