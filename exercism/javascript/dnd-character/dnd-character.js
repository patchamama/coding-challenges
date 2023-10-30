//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (val) => {
  if (val < 3) throw new Error('Ability scores must be at least 3')
  if (val > 18) throw new Error('Ability scores can be at most 18')
  return Math.floor((val - 10) / 2)
};

export class Character {
   constructor() {
    this.rollAbilityVal = Character.rollAbility();
    this.strengthVal = Character.rollAbility();
    this.dexterityVal = Character.rollAbility();
    this.constitutionVal = Character.rollAbility();
    this.intelligenceVal = Character.rollAbility();
    this.wisdomVal = Character.rollAbility();
    this.charismaVal = Character.rollAbility();
  }
  
  static rollAbility() {
    const rollDice = () => {
      return Math.floor(Math.random() * Math.floor(6)) + 1;
    };
    return Array(4)
      .fill(0)
      .map(rollDice)  // 4d6
      .sort()
      .slice(1, 4)    // keep top 3
      .reduce((a, v) => a + v, 0);
  } 

  get strength() {
    return this.strengthVal
  }

  get dexterity() {
    return this.dexterityVal
  }

  get constitution() {
    return this.constitutionVal
  }

  get intelligence() {
    return this.intelligenceVal
  }

  get wisdom() {
    return this.wisdomVal
  }

  get charisma() {
    return this.charismaVal
  }

  get hitpoints() {
    return (10 + abilityModifier(this.constitutionVal))
  }
}
