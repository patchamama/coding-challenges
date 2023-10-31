const GIGASECONDS = 1e9 * 1000;

export class Gigasecond {
  startDateMs: Date;

  constructor(gs: Date) {
    this.startDateMs = gs; 
  };
  
  public date(/* Parameters go here */): Date {
    return new Date(this.startDateMs.getTime() + GIGASECONDS);
  }
}



