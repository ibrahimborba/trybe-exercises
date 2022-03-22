const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species, employees } = data;
  const firstSpecie = employees.find((elem) => elem.id === id).responsibleFor[0];
  const oldest = species.find((elem) => elem.id === firstSpecie).residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
