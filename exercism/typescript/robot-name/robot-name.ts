export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string = '';

  constructor() {
    this.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    //this.releaseName();
    this.generateUniqueName();
  }

  private releaseName(): void {
    if (this._name) {
      Robot.usedNames.delete(this._name);
    }
  }

  private generateUniqueName(): void {
    do {
      this._name = this.generateRandomName();
    } while (Robot.usedNames.has(this._name));

    Robot.usedNames.add(this._name); 
  }

  private generateRandomName(): string {
    const randomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random uppercase letter
    const randomDigit = () => Math.floor(Math.random() * 10).toString(); // Random digit

    return randomLetter() + randomLetter() + randomDigit() + randomDigit() + randomDigit();
  }

  public static releaseNames(): void { 
    Robot.usedNames.clear();  
  }
}
