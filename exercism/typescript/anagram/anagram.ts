export class Anagram {
    private word: string;

    constructor(word: string) {
        this.word = word;
    }

  public matches(...words: string[]): string[] {
    const word: string = this.word.toLowerCase();
    return words
      .filter( (w) => w.toLowerCase() !== word.toLowerCase() )
      .filter( (w) => w.toLowerCase().split('').sort().join('') ===
      word.split('').sort().join('') );
  }
}

