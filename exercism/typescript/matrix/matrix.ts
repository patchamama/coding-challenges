export class Matrix {
  private _m: number[][] = [];

  constructor(st: string) {
    let rows = st.split('\n');
    for (let i = 0; i < rows.length; i++) {
      this._m[i] = rows[i].split(' ').map( v => parseInt(v));
    }
    console.log(this._m);
  }


  get rows(): number[][] {
    return this._m
  }

  get columns(): number[][] {
    const numCols = this._m[0].length;
    const result: number[][] = [];

    for (let col = 0; col < numCols; col++) {
      result[col] = this._m.map(row => row[col]);
    }

    return result;
  }
}
