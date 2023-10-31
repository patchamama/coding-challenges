
export function transform(oldData: { [score: number]: string[] }): { [letter: string]: number } {
  const transformedData: { [letter: string]: number } = {};

  for (const score of Object.keys(oldData)) {
    const letters = oldData[parseInt(score, 10)];

    for (const letter of letters) {
      transformedData[letter.toLowerCase()] = parseInt(score, 10);
    }
  }

  return transformedData;
}