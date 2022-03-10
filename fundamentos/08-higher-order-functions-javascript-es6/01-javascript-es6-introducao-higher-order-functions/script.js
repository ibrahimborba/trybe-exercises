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
};

const gameResult = (bet, callback) => (
  bet === callback() ? 'Parabéns você ganhou' : 'Tente novamente'
);
console.log(gameResult(5, gameNumber));

// REQUISITO 3 - retorna resultado de um sorteio
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerChecker = (rightAnswer, studentAnswer) => {
  if (studentAnswer === rightAnswer) {
    return 'Certo';
  } else if (studentAnswer === 'N.A') {
    return 'Nulo';
  } else {
    return 'Errado';
  }
}

const answersCounter = (rightAnswers, studentAnswers, callback) => {
  let answerCount = 0;
  for (let i in studentAnswers) {
    if (callback(rightAnswers[i], studentAnswers[i]) === 'Certo') {
      answerCount += 1;
    } else if (callback(rightAnswers[i], studentAnswers[i]) === 'Nulo') {
      answerCount;
    } else {
      answerCount -= 0.5;
    }
  }
  return answerCount;
}

console.log(answersCounter(RIGHT_ANSWERS, STUDENT_ANSWERS, answerChecker));
