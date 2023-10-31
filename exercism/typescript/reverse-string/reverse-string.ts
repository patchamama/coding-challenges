
export const reverse = (text: string): string => {
  let result: string = '';

  for (let i: number = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
};