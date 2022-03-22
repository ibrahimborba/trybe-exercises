const data = require('../data/zoo_data');

const { species, employees } = data;

const returnEmployee = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: species.filter((specie) => employee.responsibleFor
    .find((animalId) => specie.id === animalId)).map((specie) => specie.name),
  locations: species.filter((specie) => employee.responsibleFor
    .find((animalId) => specie.id === animalId)).map((specie) => specie.location),
});

const returnAllEmployees = () => employees.map(returnEmployee);

const findEmployee = (object) => {
  const employeeInfo = Object.values(object)[0];
  return employees.find((elem) => elem.firstName === employeeInfo
  || elem.lastName === employeeInfo
  || elem.id === employeeInfo);
};

function getEmployeesCoverage(object) {
  // seu código aqui
  if (object === undefined) return returnAllEmployees();

  const employeeFound = findEmployee(object);
  if (employeeFound === undefined) throw new Error('Informações inválidas');
  return returnEmployee(employeeFound);
}

module.exports = getEmployeesCoverage;
