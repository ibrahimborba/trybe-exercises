// Desafio 1
function compareTrue(valueOne, valueTwo) {
  // seu código aqui
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayStrings = string.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointCounter = 0;
  for (let i = 1; i <= wins; i += 1) {
    pointCounter += 3;
  }
  for (let i = 1; i <= ties; i += 1) {
    pointCounter += 1;
  }
  return pointCounter;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let counter = 0;
  // Source: https://www.w3schools.com/jsref/jsref_sort.asp
  array.sort(function (a, b) { return a - b; });
  let biggest = array[array.length - 1];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === biggest) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let i in arrayNumbers) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 !== 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayNumbers[i] % 3 !== 0 && arrayNumbers[i] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayNumbers[i] % 3 !== 0 && arrayNumbers[i] % 5 !== 0) {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  // Source: https://www.w3schools.com/js/js_regexp.asp
  let encoded = str.replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/o/gi, 4)
    .replace(/u/gi, 5);
  return encoded;
}

function decode(str) {
  // seu código aqui
  // Source: https://www.w3schools.com/js/js_regexp.asp
  let encoded = str.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return encoded;
}

// Desafio 10
function techList(arrayTechs, name) {
  // seu código aqui
  arrayTechs.sort();
  let arrayObjects = [];
  if (arrayTechs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayTechs.length; i += 1) {
    let object = { tech: '', name };
    object.tech = arrayTechs[i];
    arrayObjects.push(object);
  }

  return arrayObjects;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
