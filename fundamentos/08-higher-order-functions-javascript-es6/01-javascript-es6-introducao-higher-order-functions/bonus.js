// PARTE 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Requisito 1 - retorna dano do dragão
const dragonDamage = (strength) => {
  Math.floor(Math.random() * (strength - 14)) + 15;
}

// Requisito 2 - retorna dano do warrior
const dragonDamage = (strength) => {
  Math.floor(Math.random() * (strength * weaponDmg - strength + 1)) + strength;
}
