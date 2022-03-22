const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.map((employee) => employee.managers.some((elem) => elem === id))
    .some((verify) => verify === true);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers
    .some((elem) => elem === managerId))
    .map((elem) => `${elem.firstName} ${elem.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
