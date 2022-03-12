// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in arrayNumbers) {
    let counter = 0;
    for (let j in arrayNumbers) {
      if (arrayNumbers[i] === arrayNumbers[j]) {
        counter += 1;
      }
    }
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9 || counter > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  arrayNumbers.unshift('(');
  arrayNumbers.splice(3, 0, ') ');
  arrayNumbers.splice(9, 0, '-');

  let phoneNumber = arrayNumbers.join('');
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // Soma de elementos dentro do array. Source: https://www.geeksforgeeks.org/how-to-find-the-sum-of-all-elements-of-a-given-array-in-javascript/
  // Remover um elemento do array sem alterar o original. Source: https://www.sitepoint.com/immutable-array-methods-javascript/
  let lines = [lineA, lineB, lineC];
  let evaluator = true;
  for (let i = 0; i < lines.length; i += 1) {
    let edge = lines[i];
    let otherEdges = lines.slice(0, i).concat(lines.slice(i + 1));
    if (edge > otherEdges.reduce((a, b) => a + b)
    || edge < Math.abs(otherEdges.reduce((a, b) => a - b))) {
      evaluator = false;
    }
  }
  return evaluator;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  // Source: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  let stringNumbers = string.match(/\d+/g);
  let glassCount = 0;
  let drinkWater = '';
  for (let i = 0; i < stringNumbers.length; i += 1) {
    glassCount += parseInt(stringNumbers[i], 10);
  }

  if (glassCount === 1) {
    drinkWater = `${glassCount} copo de água`;
  } else {
    drinkWater = `${glassCount} copos de água`;
  }

  console.log(drinkWater);
  return drinkWater;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
