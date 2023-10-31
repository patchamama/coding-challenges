
const soundex = (text: string): string => {
  let result: string = text;
  if ('aeiou'.includes(text[0]) || (['x', 'y'].includes(text[0]) && !'aeiouy'.includes(text[1]))) {
    result += 'ay';
  } else if (text.slice(1, 3) === 'qu') {
    const tmp1: string = text.slice(3);
    const tmp2: string = text.slice(0, 3);
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

export const translate = (text: string): string => {
  const words: string[] = text.split(' ');
  let result: string = '';
  if (words.length === 1) {
    result = soundex(words[0]);
  } else {
    let tmpResult: string = '';
    for (const word of words) {
      tmpResult = soundex(word);
      result += ' ' + tmpResult;
    }
  }
  return result.trim();
};