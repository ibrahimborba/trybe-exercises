import Character from './Character';

export default class LongRangeCharacter extends Character {
  talk(): void {
    console.log('It\'s me a Long Range!');
  }

  specialMove(): void {
    console.log('A long special move');
  }
}