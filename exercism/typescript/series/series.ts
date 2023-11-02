export class Series {
  series: string
  constructor(series: string) {
    this.series = series
  }

  slices(sliceLength: number): number[][] {
    if (this.series.length === 0) throw new Error('series cannot be empty');
    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length');
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    
    let result  = []
    let slice   = []

    for (let i = 0; i < this.series.length; i++) {
      if (this.series.length - (sliceLength + i) >= 0) {
        slice = []
        for (let b = 0; b < sliceLength; b++) {
          slice.push(Number(this.series[i+b]))
        }
        console.log(slice)
        result.push(slice)
      }
    }
    console.log(result)
    return result
  }
}
