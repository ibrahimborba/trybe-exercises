const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.reduce((acc, elem) => {
    const { firstName, lastName } = elem;
    if (firstName === employeeName || lastName === employeeName) Object.assign(acc, elem);
    return acc;
  }, {});
}

module.exports = getEmployeeByName;
