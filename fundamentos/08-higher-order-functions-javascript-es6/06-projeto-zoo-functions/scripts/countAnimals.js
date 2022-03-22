const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal !== 'object') {
    const allAnimals = {};
    species.forEach((elem) => (Object.assign(allAnimals, { [elem.name]: elem.residents.length })));
    return allAnimals;
  }
  const { specie, sex } = animal;
  if (typeof sex === 'undefined') {
    return species.find((elem) => elem.name === specie).residents.length;
  }
  return species.find((elem) => elem.name === specie).residents
    .reduce((acc, elem) => (elem.sex === sex ? acc + 1 : acc), 0);
}

module.exports = countAnimals;
