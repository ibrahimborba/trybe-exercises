// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const verifyId = (id, object) => {
  if (Object.keys(object).includes(id) === false) {
    throw new Error('ID não identificada');
  }
};

const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  for (let i in professionalBoard) {
    if (professionalBoard[i]['id'] === id) {
      return professionalBoard[i][detail];
    }
  }
};


console.log(searchEmployee('0000-0', 'firstName'));

module.exports = searchEmployee;
