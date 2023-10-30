//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const soundex = (text) => {
  let result = text;

  if ('aeiou'.includes(text[0]) || (['x', 'y'].includes(text[0]) && !'aeiouy'.includes(text[1]))) {
    result += 'ay';
  } else if (text.slice(1, 3) === 'qu') {
    const tmp1 = text.slice(3);
    const tmp2 = text.slice(0, 3);
    result = tmp1 + tmp2 + 'ay';
  } else if (text[1] === 'y' && text.trim().length === 2) {
    result = 'y' + text[0] + 'ay';
  } else if (text.slice(0, 3) === 'thr' || text.slice(0, 3) === 'sch') {
    result = text.slice(3) + text.slice(0, 3) + 'ay';
  } else {
    if (['ch', 'st', 'qu', 'th', 'rh'].includes(text.slice(0, 2))) {
      result = text.slice(2) + text.slice(0, 2) + 'ay';
    } else {
      result = text.slice(1) + text[0] + 'ay';
    }
  }

  return result;
};

export const translate = (text) => {
  const words = text.split(' ');
  let result = '';

  if (words.length === 1) {
    result = soundex(words[0]);
  } else {
    let tmpResult = '';
    for (const word of words) {
      tmpResult = soundex(word);
      result += ' ' + tmpResult;
    }
  }

  return result.trim();
};


