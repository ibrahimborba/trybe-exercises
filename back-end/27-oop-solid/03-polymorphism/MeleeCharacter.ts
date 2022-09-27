import Character from './Character';

export default class MeleeCharacter extends Character {
  talk(): void {
    console.log('It\'s me a Melee!');
  }

  specialMove(): void {
    console.log('A melee special move');
  }
}