export class DnDCharacter {
  rollAbility: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.rollAbility = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints =  10 + DnDCharacter.getModifierFor(this.constitution);
  }
  
  public static generateAbilityScore(): number {
    const rollDice = () => {
      return Math.floor(Math.random() * 6) + 1;
    };

    return Array(4)
      .fill(0)
      .map(rollDice)   
      .sort()
      .slice(1, 4)     
      .reduce((a, v) => a + v, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    if (abilityValue < 3) throw new Error('Ability scores must be at least 3');
    if (abilityValue > 18) throw new Error('Ability scores can be at most 18');
    return Math.floor((abilityValue - 10) / 2);
  }
}


