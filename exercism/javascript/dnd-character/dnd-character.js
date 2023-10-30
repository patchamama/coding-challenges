//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (val) => {
  if (val < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (val > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((val - 10) / 2)
};

// Define a function to generate a random number between 3 and 18
function getRandomNumber() {
  return Math.floor(Math.random() * (18 - 3 + 1) + 3);
}

export class Character {
   constructor() {
    this.rollAbilityVal = getRandomNumber();
    this.strengthVal = getRandomNumber();
    this.dexterityVal = getRandomNumber();
    this.constitutionVal = getRandomNumber();
    this.intelligenceVal = getRandomNumber();
    this.wisdomVal = getRandomNumber();
    this.charismaVal = getRandomNumber();
  }
  
  static rollAbility() {
    return getRandomNumber();
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
