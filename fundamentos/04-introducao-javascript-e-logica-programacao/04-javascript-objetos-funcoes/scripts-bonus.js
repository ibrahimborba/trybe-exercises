//Retorna os números pares do 'vector' dentro de um novo 'array'
function arrayOfNumbers(vector) {
  let areEven = [];
  for (let i = 0; i < vector.length; i += 1){
    for (let j = 0; j < vector[i].length; j += 1){
      if(vector[i][j] % 2 === 0){
        areEven.push(vector[i][j]);
      }
    }
  }
  return areEven;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

// Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log('O morador do bloco 2 de nome ' + moradores['blocoDois'][1]['nome'] + ' ' +  moradores['blocoDois'][1]['sobrenome'] + ' mora no ' + moradores['blocoDois'][1]['andar'] + '° andar, apartamento ' +  moradores['blocoDois'][1]['apartamento']);

// Imprime o nome completo de todos os moradores do bloco 1 e do bloco 2
for(let i in moradores){
  for(let j = 0; j < moradores[i].length; j += 1){
      console.log(moradores[i][j]['nome'] + ' ' + moradores[i][j]['sobrenome']);
  }
}

//Retorna a fruta e a quantidade de vezes que ela aparece na cesta
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
let fruitsQuantity = {};
for (let i in basket){
  let key = basket[i];
  if (fruitsQuantity[key] === undefined){
    fruitsQuantity[key] = 1;
  } else {
    fruitsQuantity[key] = fruitsQuantity[key] + 1;
  }
}
console.log(fruitsQuantity);

// Converte algarismos romanos em números
function romanToNumber(roman) {
  const romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let array = roman.split('');
  for (let i in array){
    for (let j in romanNumeral){
      if (array[i] === j) {
        array[i] = romanNumeral[j];
      }    
    }
  }

  let number = array[0];
  let subSum = 0;
  for (let i = 1; i < array.length; i += 1){
    if(array[i] <= array[i - 1]){
      number += array[i];
    } else if (array[i] > array[i - 1]) {
      number += array[i] - 2 * array[i - 1];
    }
  }
  return number
}

let roman = 'MCMXCIX';
console.log(romanToNumber(roman));
