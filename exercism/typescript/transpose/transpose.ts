export const transpose = (inputs: string[]): string[] => {
  const result: string[] = [];

  if (inputs.length === 0) {
    return [];
  } else if (inputs.length === 1) {
    for (const a of inputs[0]) {
      result.push(a);
    }
  } else {
    // multi input arrays (>2)
    const maxArrLength: number = inputs.reduce((max, arr) => Math.max(max, arr.length), 0);

    for (let pos = 0; pos < maxArrLength; pos++) {
      let temp = '';

      for (const arr of inputs) {
        temp += arr.length > pos ? arr[pos].replace(" ", "#") : " ";
      }

      temp = temp.trimEnd();

      while (temp.includes("#")) {
        temp = temp.replace("#", " ");
      }

      result.push(temp);
    }
  }

  return result;
};