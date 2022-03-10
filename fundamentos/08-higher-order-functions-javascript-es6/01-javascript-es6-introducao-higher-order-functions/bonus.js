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
  return Math.floor(Math.random() * (strength - 14)) + 15;
}

// Requisito 2 - retorna dano do warrior
const warriorDamage = (strength) => {
  return Math.floor(Math.random() * (strength * weaponDmg - strength + 1)) + strength;
}

// Requisito 3 - retorna dano do warrior
const mageDamage = (intelligence, mana) => {
  let newMana = mana;
  if (newMana < 15) {
    newMana;
    return 'Não possui mana suficiente';
  } else {
    newMana -= 15;
  }
  const damageAndMana = {};
  damageAndMana.damage = Math.floor(Math.random() * (intelligence * 2 - intelligence + 1)) + intelligence;
  damageAndMana.mana = newMana;
  return damageAndMana;
}
