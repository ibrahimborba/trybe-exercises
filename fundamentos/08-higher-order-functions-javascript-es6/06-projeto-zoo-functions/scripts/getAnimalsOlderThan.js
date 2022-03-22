const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((elem) => elem.name === animal).residents;
  return animals.every((elem) => elem.age >= age);
}

module.exports = getAnimalsOlderThan;
