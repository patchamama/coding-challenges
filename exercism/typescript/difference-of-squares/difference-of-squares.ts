export class Squares {
  num: number
  constructor(count: number) {
    this.num = count
  }

  get sumOfSquares(): number {
    let sum = 0
    for (let i = 0; i < this.num; i++) {
      sum += (i+1)**2
    }
    return sum
  }

  get squareOfSum(): number {
    let sum = 0
    for (let i = 0; i < this.num; i++) {
      sum += i+1
    }
    return sum**2
  }

  get difference(): number {
    return (this.squareOfSum - this.sumOfSquares )
  }
}
