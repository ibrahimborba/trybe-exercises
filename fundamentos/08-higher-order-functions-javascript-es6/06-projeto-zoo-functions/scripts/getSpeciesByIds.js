const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui:
  return ids.reduce((acc, elem) => acc.concat(species.find((specie) => specie.id === elem)), []);
}

module.exports = getSpeciesByIds;
