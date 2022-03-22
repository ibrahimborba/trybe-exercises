const data = require('../data/zoo_data');

const { species, hours } = data;
const animalsNames = species.map((elem) => elem.name);
const weekDays = Object.keys(hours);

const createFullSchedule = () => {
  const fullSchedule = {};
  weekDays.forEach((elem) => {
    fullSchedule[elem] = {
      officeHour: `Open from ${hours[elem].open}am until ${hours[elem].close}pm`,
      exhibition: species.filter((specie) => specie.availability
        .some((avaiable) => avaiable === elem)).map((specie) => specie.name),
    };
  });
  fullSchedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return fullSchedule;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const fullSchedule = createFullSchedule();
  if (weekDays.some((day) => day === scheduleTarget) === true) {
    return { [scheduleTarget]: fullSchedule[scheduleTarget] };
  }
  if (animalsNames.some((name) => name === scheduleTarget) === true) {
    return species.find((elem) => elem.name === scheduleTarget).availability;
  }
  return fullSchedule;
}

module.exports = getSchedule;
