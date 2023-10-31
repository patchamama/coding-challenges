export class Triangle {
  rowNum: number;

  constructor(r: number) {
    this.rowNum = r;
  }

  get rows(): number[][] {
    let rowNum: number = this.rowNum;

    const arr: number[][] = rowNum ? [[1]] : [];

    for (let row = 1; row < rowNum; row++) {
      const currentRow: number[] = [1];

      for (let col = 1; col < row; col++) {
        currentRow.push(arr[row - 1][col - 1] + arr[row - 1][col]);
      }

      currentRow.push(1);
      arr.push(currentRow);
    }

    return arr;
  }

  get lastRow(): number[] | undefined {
    const triangle = this.rows;
    return triangle[this.rowNum - 1];
  }
}