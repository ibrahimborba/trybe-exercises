// REQUISITO 1 - retorna pessoa contratada e seu email conforme o nome
const createEmail = (nome) => {
  const email = nome.toLowerCase().replace(/ /g,'_');
  return { nome, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createEmail));

// REQUISITO 2 - retorna resultado de um sorteio
const gameNumber = () => {
  return Math.floor(Math.random() * 5) + 1;
}

const gameResult = (bet, callback) => (
  bet === callback() ? 'Parabéns você ganhou' : 'Tente novamente'
);
console.log(gameResult(5, gameNumber));
