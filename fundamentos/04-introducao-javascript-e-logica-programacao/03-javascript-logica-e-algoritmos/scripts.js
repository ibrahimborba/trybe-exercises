// Retorna fatorial de 10
let factorial = 1;
for (let counter = 1; counter <= 10; counter += 1){
  factorial *= counter;
}
console.log(factorial);

// Inverte uma palavra
let word = 'banana';
let wordInverse = '';
for (let i = word.length-1; i >= 0; i -= 1) {
  wordInverse += word[i];
}
console.log('O inverso da palavra ' + word + " é " + wordInverse);

// Retorna maior e menor palavras dentro do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let arrayCount = [];
for (let i = 0; i < array.length; i += 1){
  let charCounter = 0;
  for (let j = 0; j < array[i].length; j += 1) {
    charCounter += 1;
  }
  arrayCount.push(charCounter);
}

let largest = 0;
let smallest = 100;
for (let i = 0; i < arrayCount.length; i += 1){
  if(arrayCount[i] > largest){
    largest = arrayCount[i];
  }else if(arrayCount[i] < smallest){
    smallest = arrayCount[i];
  }
}

console.log('A maior palavra é ' + array[arrayCount.indexOf(largest)] + ' e a menor palavra é ' + array[arrayCount.indexOf(smallest)]);

//Retorna o maior número primo entre 1 e 50
// Source: https://medium.com/swlh/an-algorithm-a-day-how-to-check-for-a-prime-number-in-javascript-7052630fb4ef
let isPrime = 0;
for (let number = 1; number <= 50; number += 1) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0){
      break;
    }else{
      isPrime = number;
    }
  }
}
console.log(isPrime);

// Imprime quadrado de lado n asteriscos
let n = 5;
for (let i = 0; i < n; i += 1){
  let asterisk = '';
  for (let j = 0; j < n; j += 1){
    asterisk += '*';
  }
  console.log(asterisk);
}

// Imprime triangulo de base n asteriscos
let n = 5;
let asterisk = '';
for (let i = 0; i < n; i += 1){
  asterisk += '*';
  console.log(asterisk);
}

