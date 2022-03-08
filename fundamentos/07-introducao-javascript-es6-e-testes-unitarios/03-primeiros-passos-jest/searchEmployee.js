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

// Verifica se o ID passado existe no quadro de funcionários
const verifyID = (id) => {
  const arrayID = [];
  for (let i in professionalBoard) {
    arrayID.push(professionalBoard[i].id);
  }
  if (arrayID.includes(id) === false) {
    throw new Error('ID não identificada');
  }
};

// Verifica se o detail passado existe no quadro de funcionários
const verifyDetail = (detail) => {
  const arrayDetail = Object.keys(professionalBoard[0]);
  if (arrayDetail.includes(detail) === false) {
    throw new Error('Informação indisponível');
  }
};

// Pesquisa pelo funcionário conforme o ID
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  verifyID(id);
  verifyDetail(detail);
  for (let i in professionalBoard) {
    if (professionalBoard[i]['id'] === id) {
      return professionalBoard[i][detail];
    }
  }
};

// Mostra o detalhe solicitado conforme o ID passado e retorna uma mensagem de erro se um dos parâmetros não está disponível no quadro de funcionários
const showDetails = (id, detail) => {
  try {
    const detailInfo = searchEmployee(id, detail);
    return `O ${detail} desse funcionário é: ${detailInfo}`;
  } catch(error) {
    return error.message;
  }
};

console.log(showDetails('9852-2-2', 'firstName'));

module.exports = searchEmployee;
