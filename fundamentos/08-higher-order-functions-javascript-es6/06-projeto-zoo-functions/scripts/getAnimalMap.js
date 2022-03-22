const { species } = require('../data/zoo_data');

const animalMap = {};

const getAnimalsByLocation = () => {
  species.forEach((elem) => {
    animalMap[elem.location] = species.filter((specie) => specie.location === elem.location)
      .map((specie) => specie.name);
  });
  return animalMap;
};

const animalsByName = () => {
  species.forEach((elem) => {
    animalMap[elem.location] = species.filter((specie) => specie.location === elem.location)
      .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) }));
  });
  return animalMap;
};

const animalsBySex = (options) => {
  species.forEach((elem) => {
    animalMap[elem.location] = species.filter((specie) => specie.location === elem.location)
      .map((specie) => ({ [specie.name]: specie.residents
        .filter((resident) => resident.sex === options.sex).map((resident) => resident.name),
      }));
  });
  return animalMap;
};

const animalsSorted = () => {
  species.forEach((elem) => {
    animalMap[elem.location] = species.filter((specie) => specie.location === elem.location)
      .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name).sort(),
      }));
  });
  return animalMap;
};

const animalsBySexAndSorted = (options) => {
  species.forEach((elem) => {
    animalMap[elem.location] = species.filter((specie) => specie.location === elem.location)
      .map((specie) => ({ [specie.name]: specie.residents
        .filter((resident) => resident.sex === options.sex).map((resident) => resident.name).sort(),
      }));
  });
  return animalMap;
};

const checkSexAndOrSorted = (options) => {
  const optionsKeys = Object.keys(options);
  if (optionsKeys.includes('sex') === true && optionsKeys.includes('sorted') === false) {
    return animalsBySex(options);
  }
  if (optionsKeys.includes('sex') === false && optionsKeys.includes('sorted') === true) {
    return animalsSorted();
  }
  return animalsBySexAndSorted(options);
};

function getAnimalMap(options) {
  // seu código aqui
  if (arguments.length < 1 || options.includeNames !== true) return getAnimalsByLocation();

  const { sex, sorted } = options;
  if (sex !== undefined || sorted !== undefined) return checkSexAndOrSorted(options);
  return animalsByName();
}

module.exports = getAnimalMap;
