
export const saddlePoints = (points: number[][]): { row: number; column: number }[] => {
  const result: { row: number; column: number }[] = [];

  const major = (row: number[]): number => {
    return Math.max(...row);
  };

  const checkColumns = (col: number, valcomp: number): boolean => {
    for (let c = 0; c < points.length; c++) {
      if (valcomp > points[c][col]) {
        return false;
      }
    }
    return true;
  };

  for (let prow = 0; prow < points.length; prow++) {
    for (let pcol = 0; pcol < points[prow].length; pcol++) {
      const ngrid = points[prow][pcol];
      const greater = major(points[prow]);

      if (ngrid === greater && checkColumns(pcol, ngrid)) {
        result.push({ row: prow + 1, column: pcol + 1 });
      }
    }
  }

  console.log(result);
  return result;
};
