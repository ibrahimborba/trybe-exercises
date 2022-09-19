import Character from './Character';
import MeleeCharacter from './MeleeCharacter';
import LongRangeCharacter from './LongRangeCharacter';

const melee = new MeleeCharacter('Character Melee');
const longRange = new LongRangeCharacter('Character Long Range');

const characterInfo = (character: Character) => {
  character.talk();
  character.specialMove();
};

characterInfo(melee);
characterInfo(longRange);