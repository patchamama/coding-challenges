
export const isPaired = (st: string): boolean => {
  const stack: string[] = [];
  const matchingBrackets: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' };

  for (let char of st) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else if (')}]'.includes(char)) {
      const last = stack.pop();
      if (last !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};