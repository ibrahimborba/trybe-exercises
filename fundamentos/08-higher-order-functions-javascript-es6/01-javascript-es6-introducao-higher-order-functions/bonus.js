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

// PARTE 1
// Requisito 1 - retorna dano do dragão
const dragonDamage = (stats) => {
  return Math.floor(Math.random() * (stats.strength - 14)) + 15;
}

// Requisito 2 - retorna dano do warrior
const warriorDamage = (stats) => {
  return Math.floor(Math.random() * (stats.strength * stats.weaponDmg - stats.strength + 1)) + stats.strength;
}

// Requisito 3 - retorna dano do warrior
const mageDamage = (stats) => {
  let newMana = stats.mana;
  if (newMana < 15) {
    newMana;
    return 'Não possui mana suficiente';
  } else {
    newMana -= 15;
  }
  const damageAndMana = {};
  damageAndMana.damage = Math.floor(Math.random() * (stats.intelligence * 2 - stats.intelligence + 1)) + stats.intelligence;
  damageAndMana.mana = newMana;
  return damageAndMana;
}

// PARTE 2
const warriorTurn = (warrior, callback) => {
  const damage = callback(warrior);
  dragon.healthPoints -= damage;
  warrior.damage = damage;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: warriorTurn,
};

console.log(dragon, warrior);