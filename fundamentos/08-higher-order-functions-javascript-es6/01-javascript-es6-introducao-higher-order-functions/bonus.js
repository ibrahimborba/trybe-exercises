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
// Requisito 1 - calcula o turno do warrior
const warriorTurnResults = (warrior, callback) => {
  const result = callback(warrior);
  dragon.healthPoints -= result;
  warrior.damage = result;
}

// Requisito 2 - calcula o turno do mage
const mageTurnResults = (mage, callback) => {
  const result = callback(mage);
  dragon.healthPoints -= result.damage;
  mage.damage = result.damage;
  mage.mana = result.mana;
}

// Requisito 3 - calcula o turno do dragon
const dragonTurnResults = (dragon, callback) => {
  const result = callback(dragon);
  warrior.healthPoints -= result;
  mage.healthPoints -= result;
  dragon.damage = result;
}

// Requisito 4 - mostra o resultado final do turno
const finalResults = (warrior, mage, dragon) => {
  const battleMembers = {
    warrior: warrior,
    mage: mage,
    dragon: dragon
  }
  return battleMembers;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: warriorTurnResults,
  mageTurn: mageTurnResults,
  dragonTurn: dragonTurnResults,
  turnResults: finalResults,
};

console.log(finalResults(warrior, mage, dragon));